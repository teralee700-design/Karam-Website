import type { Metadata } from "next";
import { ProductGrid } from "./ProductGrid";
import styles from "./shop.module.css";

export const metadata: Metadata = {
  title: "제품",
  description:
    "맑은 선과 차분한 재료로 빚은 여섯 점의 테라리움. 일상의 공간에 잔잔한 균형을 더합니다.",
};

export default function ShopPage() {
  return (
    <section className={styles.page} aria-label="제품">
      <div className={`${styles.intro} rise`}>
        <span className="kicker">제품 — 2026</span>
        <h1 className={styles.title}>살아 있는 작은 풍경</h1>
        <p className={styles.lede}>
          맑은 선과 차분한 재료로 빚은 여섯 점의 테라리움. 일상의 공간에 잔잔한
          균형을 더합니다.
        </p>
      </div>

      <div className={styles.spacer} />

      <ProductGrid />

      <footer className={styles.footer}>
        <span className={styles.footMuted}>
          살아 있는 풍경&nbsp;&nbsp;/&nbsp;&nbsp;테라리움 &amp;
          오브제&nbsp;&nbsp;/&nbsp;&nbsp;2026
        </span>
        <span className={styles.footMuted}>06 — 제품</span>
      </footer>
    </section>
  );
}
