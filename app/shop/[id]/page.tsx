import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, formatPrice } from "../../data/products";
import { Gallery } from "./Gallery";
import { AddToCart } from "./AddToCart";
import { Accordion } from "./Accordion";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) return { title: "제품을 찾을 수 없습니다" };
  return { title: p.name, description: p.blurb };
}

const SCENES = ["/scene-wood.png", "/scene-black.png", "/hero.png"];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  // Build a gallery: the product image first, then complementary scenes.
  const images = [product.image, ...SCENES.filter((s) => s !== product.image)];

  return (
    <section className={styles.page}>
      <Link href="/shop" className={styles.back}>
        ← 제품으로 돌아가기
      </Link>

      <div className={styles.layout}>
        <Gallery images={images} alt={product.name} />

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>
              {product.num} — {product.name}
            </h1>
            <span className={styles.price}>{formatPrice(product.price)}</span>
          </div>

          <p className={styles.blurb}>{product.blurb}</p>

          <AddToCart
            id={product.id}
            name={product.name}
            price={product.price}
          />

          <div className={styles.accGroup}>
            <Accordion title="제품 설명" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="구성 및 크기">
              <ul className={styles.specList}>
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="관리 방법">
              <ul className={styles.specList}>
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
