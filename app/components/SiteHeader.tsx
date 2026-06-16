"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { KaramMark } from "./KaramMark";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/about", label: "브랜드 소개" },
  { href: "/shop", label: "제품" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header} data-scrolled={scrolled}>
        <div className={styles.nav}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="메뉴 열기"
        >
          {menuOpen ? "닫기" : "메뉴"}
        </button>

        <div className={styles.center}>
          <Link href="/" aria-label="Karam 홈">
            <KaramMark size={34} />
          </Link>
        </div>

        <div className={styles.util}>
          <span className={`${styles.muted} ${styles.hideSmall}`}>KOR | ₩</span>
          <Link href="/shop" className={`${styles.link} ${styles.hideSmall}`}>
            검색
          </Link>
          <Link href="/shop" className={`${styles.link} ${styles.hideSmall}`}>
            계정
          </Link>
          <Link href="/shop" className={`${styles.link} ${styles.cart}`}>
            장바구니 ({count})
          </Link>
        </div>
      </header>

      {/* mobile slide-down menu */}
      <div className={styles.panel} data-open={menuOpen}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className={styles.panelLink}>
            {item.label}
          </Link>
        ))}
        <Link href="/shop" className={styles.panelLink}>
          장바구니 ({count})
        </Link>
        <div className={styles.panelRow}>
          <span>KOR | ₩</span>
          <span>검색</span>
          <span>계정</span>
        </div>
      </div>
    </>
  );
}
