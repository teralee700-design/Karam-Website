import type { Metadata } from "next";
import Image from "next/image";
import { ProductGrid } from "./ProductGrid";
import { products } from "../data/products";
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
        <div>
          <span className="kicker">제품 — 2026</span>
          <h1 className={styles.title}>살아 있는 작은 풍경</h1>
        </div>
        <p className={styles.lede}>
          맑은 선과 차분한 재료로 빚은 여섯 점의 테라리움. 일상의 공간에 잔잔한
          균형을 더합니다.
        </p>
      </div>

      {/* feature banner */}
      <div className={styles.feature}>
        <Image
          src="/hero.png"
          alt="유리 큐브 안에 담긴 카람의 테라리움"
          fill
          priority
          sizes="100vw"
          className={styles.featureImg}
        />
        <div className={styles.featureCaption}>
          <div className={styles.featureKicker}>Karam · Terrarium</div>
          <div className={styles.featureLine}>유리 안에 머무는 고요한 풍경</div>
        </div>
      </div>

      {/* product grid */}
      <div className={styles.gridHead}>
        <span className={styles.gridHeadTitle}>전체 제품</span>
        <span className={styles.gridHeadCount}>{products.length}점</span>
      </div>
      <ProductGrid />
    </section>
  );
}
