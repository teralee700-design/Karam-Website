"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./CartContext";
import { formatPrice } from "../data/products";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    count,
    total,
    increment,
    decrement,
    remove,
  } = useCart();

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={styles.backdrop}
        data-open={isOpen}
        onClick={closeCart}
        aria-hidden
      />
      <aside
        className={styles.drawer}
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="장바구니"
        aria-hidden={!isOpen}
      >
        <div className={styles.head}>
          <span className={styles.title}>장바구니 ({count})</span>
          <button type="button" className={styles.close} onClick={closeCart}>
            닫기 ✕
          </button>
        </div>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>장바구니가 비어있습니다.</p>
            <Link href="/shop" className={styles.emptyCta} onClick={closeCart}>
              제품 둘러보기 →
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.lines}>
              {lines.map((l) => (
                <div key={l.id} className={styles.line}>
                  <Link
                    href={`/shop/${l.id}`}
                    className={styles.thumb}
                    onClick={closeCart}
                  >
                    {l.image && (
                      <Image src={l.image} alt={l.name} fill sizes="64px" />
                    )}
                  </Link>

                  <div className={styles.lineMid}>
                    <Link
                      href={`/shop/${l.id}`}
                      className={styles.lineName}
                      onClick={closeCart}
                    >
                      {l.name}
                    </Link>
                    <span className={styles.linePrice}>
                      {formatPrice(l.price)}
                    </span>
                    <div className={styles.qty}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => decrement(l.id)}
                        aria-label="수량 줄이기"
                      >
                        −
                      </button>
                      <span className={styles.qtyNum}>{l.qty}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => increment(l.id)}
                        aria-label="수량 늘리기"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.lineRight}>
                    <span className={styles.lineTotal}>
                      {formatPrice(l.price * l.qty)}
                    </span>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => remove(l.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.foot}>
              <div className={styles.subtotal}>
                <span className={styles.subLabel}>합계</span>
                <span className={styles.subValue}>{formatPrice(total)}</span>
              </div>
              <p className={styles.note}>배송비는 결제 단계에서 계산됩니다.</p>
              <Link href="/shop" className={styles.checkout} onClick={closeCart}>
                결제하기
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
