"use client";

import { useState } from "react";
import { useCart } from "../../components/CartContext";
import styles from "./detail.module.css";

type Props = { id: string; name: string; price: number; image: string };

export function BuyBox({ id, name, price, image }: Props) {
  const { add, openCart } = useCart();
  const [qty, setQty] = useState(1);

  function addToCart() {
    add({ id, name, price, image, qty });
    openCart();
  }

  return (
    <div className={styles.buyBox}>
      <div className={styles.qtyRow}>
        <span className={styles.qtyLabel}>수량</span>
        <div className={styles.qtySelect}>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="수량 줄이기"
          >
            −
          </button>
          <span className={styles.qtyNum}>{qty}</span>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((q) => q + 1)}
            aria-label="수량 늘리기"
          >
            +
          </button>
        </div>
      </div>

      <button type="button" className={styles.buy} onClick={addToCart}>
        장바구니 담기
      </button>

      <div className={styles.note}>
        <span>소량 핸드메이드</span>
        <span>·</span>
        <span>영업일 기준 3–5일 내 발송</span>
      </div>
    </div>
  );
}
