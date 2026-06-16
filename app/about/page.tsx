import type { Metadata } from "next";
import { TerrariumScene } from "../components/TerrariumScene";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "브랜드 소개",
  description:
    "카람은 빠르게 흘러가는 일상 속에서 잠시 멈추어 숨 쉴 수 있는 작은 자연을 만듭니다.",
};

const FEATURES = ["자생 이끼 · 천연 소재", "자급형 생태 순환", "소량 핸드메이드"];

export default function AboutPage() {
  return (
    <section className={styles.page} aria-label="브랜드 소개">
      <div className={`${styles.grid} rise`}>
        <div className={styles.copy}>
          <span className="kicker">브랜드 소개</span>
          <h1 className={styles.title}>
            고요한 자연을
            <br />
            작은 유리 안에
          </h1>
          <p className={`${styles.para} ${styles.firstPara}`}>
            카람은 빠르게 흘러가는 일상 속에서 잠시 멈추어 숨 쉴 수 있는 작은
            자연을 만듭니다. 이끼와 돌, 천천히 자라는 고사리를 유리 안에 담아
            하나의 풍경으로 완성합니다.
          </p>
          <p className={styles.para}>
            절제된 선과 차분한 재료, 그리고 시간. 카람의 테라리움은 손이 많이
            가지 않아도 스스로 균형을 이루며, 머무는 자리마다 고요를 더합니다.
          </p>

          <div className={styles.features}>
            {FEATURES.map((f) => (
              <div key={f} className={styles.feature}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.figure}>
          <TerrariumScene fit="cover" />
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footMuted}>
          살아 있는 풍경&nbsp;&nbsp;/&nbsp;&nbsp;테라리움 &amp;
          오브제&nbsp;&nbsp;/&nbsp;&nbsp;2026
        </span>
        <span className={styles.footMuted}>KARAM STUDIO</span>
      </footer>
    </section>
  );
}
