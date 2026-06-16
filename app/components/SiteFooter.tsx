import Link from "next/link";
import { KaramMark } from "./KaramMark";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./SiteFooter.module.css";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "제품",
    links: [
      { label: "테라리움", href: "/shop" },
      { label: "오브제", href: "/shop" },
      { label: "전체 보기", href: "/shop" },
    ],
  },
  {
    title: "고객 서비스",
    links: [
      { label: "배송 안내", href: "/shop" },
      { label: "관리 방법", href: "/shop" },
      { label: "자주 묻는 질문", href: "/shop" },
    ],
  },
  {
    title: "브랜드",
    links: [
      { label: "브랜드 소개", href: "/about" },
      { label: "스토리", href: "/about" },
      { label: "스튜디오", href: "/about" },
    ],
  },
  {
    title: "팔로우",
    links: [
      { label: "Instagram", href: "/shop" },
      { label: "Facebook", href: "/shop" },
      { label: "Pinterest", href: "/shop" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* newsletter */}
        <div className={styles.news}>
          <div>
            <h2 className={styles.newsHead}>
              자연을 들여오는 소식,
              <br />
              카람의 풍경을 가장 먼저.
            </h2>
            <p className={styles.newsSub}>
              새로운 테라리움과 작은 이야기, 그리고 한정 제작 소식을 이메일로
              전해드립니다.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* link columns */}
        <div className={styles.cols}>
          <div className={styles.brandCol}>
            <KaramMark size={56} withWordmark />
            <p className={styles.brandTag}>
              작은 유리 안에 담은 살아 있는 풍경.
              <br />
              테라리움 &amp; 오브제 스튜디오.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              <div className={styles.colList}>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className={styles.colLink}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className={styles.bar}>
          <span className={styles.copy}>
            © 2026 KARAM STUDIO. All rights reserved.
          </span>
          <div className={styles.barRight}>
            <Link href="/about">이용약관</Link>
            <Link href="/about">개인정보처리방침</Link>
            <span>KOR | ₩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
