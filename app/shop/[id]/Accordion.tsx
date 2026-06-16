"use client";

import { useState } from "react";
import styles from "./detail.module.css";

export function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.acc}>
      <button
        type="button"
        className={styles.accHead}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={styles.accIcon} data-open={open}>
          ↓
        </span>
      </button>
      <div className={styles.accBody} data-open={open}>
        <div className={styles.accInner}>{children}</div>
      </div>
    </div>
  );
}
