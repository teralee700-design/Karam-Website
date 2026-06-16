import Link from "next/link";
import { TerrariumScene } from "./components/TerrariumScene";
import { Wordmark } from "./components/Wordmark";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero} aria-label="홈">
      <div className={styles.bg}>
        <TerrariumScene fit="cover" />
      </div>
      <div className={styles.scrim} />

      <div className={styles.inner}>
        <div className={`${styles.content} rise`}>
          <Wordmark size={92} />

          <div className={styles.tagline}>
            <div className={styles.taglineRow}>
              <span className={styles.rule} />
              <span className={styles.taglineText}>자연을 들여오는 창</span>
            </div>
            <p className={styles.lede}>
              작은 유리 프레임 안에 자연을 담아 일상 속으로.
            </p>
            <Link href="/shop" className={styles.cta}>
              제품 보기 →
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.standfirst}>
        Karam · 테라리움 스튜디오 · 2026
      </div>
    </section>
  );
}
