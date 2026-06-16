import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";
import styles from "./shop.module.css";

/** Numbered product row (ÉRRA-style). Each card links to its detail page. */
export function ProductGrid() {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <Link key={p.id} href={`/shop/${p.id}`} className={styles.card}>
          <div className={styles.cardTop}>
            <span>{p.num}</span>
            <span className={styles.dash}>—</span>
          </div>

          <div className={styles.thumb} style={{ background: p.tint }}>
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(max-width: 560px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className={styles.thumbImg}
            />
            <div className={styles.overlay}>
              <span className={styles.overlayCta}>자세히 보기</span>
              <span className={styles.overlayPrice}>{formatPrice(p.price)}</span>
            </div>
          </div>

          <div className={styles.meta}>
            <span className={styles.name}>{p.name}</span>
            <span className={styles.price}>{formatPrice(p.price)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
