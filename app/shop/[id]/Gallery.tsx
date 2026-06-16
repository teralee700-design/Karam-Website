"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./detail.module.css";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbs}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.thumb}
            data-active={src === active}
            onClick={() => setActive(src)}
            aria-label={`${alt} 이미지 ${i + 1}`}
          >
            <Image src={src} alt="" fill sizes="80px" />
          </button>
        ))}
      </div>
      <div className={styles.main}>
        <Image
          key={active}
          src={active}
          alt={alt}
          fill
          priority
          sizes="(max-width: 880px) 100vw, 50vw"
          className={styles.mainImg}
        />
      </div>
    </div>
  );
}
