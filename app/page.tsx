import Image from "next/image";
import Link from "next/link";
import { KaramMark } from "./components/KaramMark";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className={styles.hero} aria-label="Karam">
        <Image
          src="/hero.png"
          alt="유리 큐브 안에 담긴 이끼와 고사리 테라리움"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroScrim} />

        <div className={styles.heroTagline}>
          자연을 들여오는 창
          <br />
          작은 유리 안에 담은 풍경
        </div>

        {/* desktop: giant wordmark; mobile: centered emblem */}
        <div className={styles.giant}>KARAM</div>
        <div className={styles.heroMark}>
          <KaramMark size={104} withWordmark color="#f4f1ea" />
        </div>
      </section>

      {/* ---------------- BRAND / CATALOG ---------------- */}
      <section className={styles.brand} aria-label="브랜드">
        <div className={styles.catalog}>
          <Link href="/shop" aria-label="카탈로그 보기">
            <div className={styles.catalogImgs}>
              <div className={styles.catalogImg}>
                <Image
                  src="/scene-wood.png"
                  alt="원목 장식장 위의 테라리움"
                  fill
                  sizes="(max-width: 760px) 50vw, 25vw"
                />
              </div>
              <div className={styles.catalogImg}>
                <Image
                  src="/scene-black.png"
                  alt="검정 장식장 위의 테라리움"
                  fill
                  sizes="(max-width: 760px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className={styles.catalogLink}>
              <span>카탈로그</span>
              <span className={styles.arrow}>→</span>
            </div>
          </Link>

          <div className={styles.monogram}>
            <KaramMark size={92} withWordmark />
          </div>
        </div>

        <div className={styles.story}>
          <p className={styles.storyText}>
            카람은 절제와 의도로 빚은 작은 자연을 만듭니다. 빠르게 변하는 일상
            속에서, 카람은 잠시 멈추어 숨 쉴 수 있는 고요한 자리로 상상되었습니다.
            이끼와 돌, 천천히 자라는 고사리를 유리 안에 담아 하나의 풍경으로
            완성합니다.
          </p>
          <div className={styles.storyImgs}>
            <div className={styles.storyImg}>
              <Image
                src="/hero.png"
                alt="테라리움 클로즈업"
                fill
                sizes="(max-width: 760px) 50vw, 25vw"
              />
            </div>
            <div className={styles.storyImg}>
              <Image
                src="/scene-black.png"
                alt="공간 속의 테라리움"
                fill
                sizes="(max-width: 760px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.foot}>
        <span>살아 있는 풍경&nbsp;&nbsp;/&nbsp;&nbsp;테라리움 &amp; 오브제&nbsp;&nbsp;/&nbsp;&nbsp;2026</span>
        <span>KARAM STUDIO</span>
      </div>
    </>
  );
}
