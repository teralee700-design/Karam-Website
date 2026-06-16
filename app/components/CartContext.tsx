"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type CartState = Record<string, CartLine>;

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (item: { id: string; name: string; price: number }) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "karam-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>({});

  // Hydrate from localStorage on mount (client only).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw) as CartState);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Persist on change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be unavailable (private mode) */
    }
  }, [state]);

  const add = useCallback<CartContextValue["add"]>((item) => {
    setState((s) => {
      const existing = s[item.id];
      return {
        ...s,
        [item.id]: {
          id: item.id,
          name: item.name,
          price: item.price,
          qty: existing ? existing.qty + 1 : 1,
        },
      };
    });
  }, []);

  const remove = useCallback<CartContextValue["remove"]>((id) => {
    setState((s) => {
      const next = { ...s };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => setState({}), []);

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.values(state);
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.price, 0),
      add,
      remove,
      clear,
    };
  }, [state, add, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
