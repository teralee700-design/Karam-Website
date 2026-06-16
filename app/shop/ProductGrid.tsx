"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "../components/CartContext";
import { products, formatPrice } from "../data/products";
import styles from "./shop.module.css";

/** The simple line-art jar glyph carried over from the original design. */
function JarGlyph() {
  return (
    <svg viewBox="0 0 120 150" fill="none" className={styles.glyph} aria-hidden>
      <circle cx="60" cy="16" r="3.4" fill="#211C17" />
      <path
        d="M30 120 L30 66 A30 30 0 0 1 90 66 L90 120"
        stroke="#211C17"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M37 120 Q60 96 83 120" stroke="#211C17" strokeWidth="1.6" />
      <circle cx="71" cy="101" r="6" fill="#211C17" />
      <circle cx="47" cy="83" r="7" stroke="#211C17" strokeWidth="1.6" />
      <line
        x1="22"
        y1="120"
        x2="98"
        y2="120"
        stroke="#211C17"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProductGrid() {
  const { add } = useCart();
  const [added, setAdded] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function handleAdd(p: (typeof products)[number]) {
    add({ id: p.id, name: p.name, price: p.price });
    setAdded(p.id);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(null), 1200);
  }

  return (
    <div className={styles.grid}>
      {products.map((p) => {
        const isAdded = added === p.id;
        return (
          <button
            key={p.id}
            type="button"
            className={styles.card}
            onClick={() => handleAdd(p)}
            aria-label={`${p.name} 장바구니에 담기, ${formatPrice(p.price)}`}
          >
            <div className={styles.cardTop}>
              <span>{p.num}</span>
              <span className={styles.dash}>—</span>
            </div>

            <div className={styles.thumb} style={{ background: p.tint }}>
              <JarGlyph />
              <div className={styles.overlay} data-added={isAdded}>
                <span className={styles.overlayCta}>
                  {isAdded ? "담았습니다  ✓" : "장바구니 담기  +"}
                </span>
                <span className={styles.overlayPrice}>
                  {formatPrice(p.price)}
                </span>
              </div>
            </div>

            <div className={styles.meta}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.price}>{formatPrice(p.price)}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
