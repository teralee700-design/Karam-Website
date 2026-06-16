import Link from "next/link";

type WordmarkProps = {
  /** Font size of the wordmark in px. */
  size?: number;
  /** When true, render as a link back to home. */
  asLink?: boolean;
  color?: string;
  className?: string;
};

/**
 * The KARAM wordmark. The original design shipped an ink-brush PNG
 * (assets/karam-ink-trim.png) that is not present in the repo, so this
 * recreates the mark as crisp, scalable type in the brand serif.
 */
export function Wordmark({
  size = 40,
  asLink = false,
  color = "var(--ink-strong)",
  className,
}: WordmarkProps) {
  const content = (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "0.18em",
        color,
        display: "inline-block",
        paddingLeft: "0.18em",
      }}
    >
      KARAM
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="Karam 홈" style={{ display: "inline-block" }}>
        {content}
      </Link>
    );
  }
  return content;
}
