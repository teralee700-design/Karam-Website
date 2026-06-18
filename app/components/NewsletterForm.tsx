"use client";

import { useState } from "react";
import styles from "./SiteFooter.module.css";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className={styles.thanks}>
        구독해 주셔서 감사합니다. 가람의 새로운 풍경을 가장 먼저 전해드릴게요.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="email"
        required
        placeholder="이메일 주소"
        aria-label="이메일 주소"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className={styles.submit}>
        구독하기
      </button>
    </form>
  );
}
