"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "../../components/CartContext";
import styles from "./detail.module.css";

type Props = { id: string; name: string; price: number };

export function AddToCart({ id, name, price }: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function handleClick() {
    add({ id, name, price });
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  }

  return (
    <button
      type="button"
      className={styles.buy}
      data-added={added}
      onClick={handleClick}
    >
      {added ? "장바구니에 담았습니다  ✓" : "장바구니 담기"}
    </button>
  );
}
