"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { Wordmark } from "./Wordmark";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/about", label: "브랜드 소개" },
  { href: "/shop", label: "제품" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <nav className={styles.nav}>
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
      </nav>

      <div className={styles.center}>
        <Wordmark asLink size={26} />
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
  );
}
