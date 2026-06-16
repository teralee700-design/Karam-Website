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
  image?: string;
  qty: number;
};

type CartState = Record<string, CartLine>;

type AddItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty?: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (item: AddItem) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "karam-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>({});
  const [isOpen, setIsOpen] = useState(false);

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

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const add = useCallback<CartContextValue["add"]>((item) => {
    const addQty = item.qty ?? 1;
    setState((s) => {
      const existing = s[item.id];
      return {
        ...s,
        [item.id]: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image ?? existing?.image,
          qty: existing ? existing.qty + addQty : addQty,
        },
      };
    });
  }, []);

  const increment = useCallback<CartContextValue["increment"]>((id) => {
    setState((s) =>
      s[id] ? { ...s, [id]: { ...s[id], qty: s[id].qty + 1 } } : s
    );
  }, []);

  const decrement = useCallback<CartContextValue["decrement"]>((id) => {
    setState((s) => {
      const line = s[id];
      if (!line) return s;
      if (line.qty <= 1) {
        const next = { ...s };
        delete next[id];
        return next;
      }
      return { ...s, [id]: { ...line, qty: line.qty - 1 } };
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
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.values(state);
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.price, 0),
      add,
      increment,
      decrement,
      remove,
      clear,
      isOpen,
      openCart,
      closeCart,
    };
  }, [state, add, increment, decrement, remove, clear, isOpen, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
