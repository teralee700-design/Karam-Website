type KaramMarkProps = {
  /** Height of the square emblem in px. */
  size?: number;
  /** Show the "KARAM" wordmark beneath the emblem. */
  withWordmark?: boolean;
  /** Stroke/fill color — defaults to currentColor so it adapts to context. */
  color?: string;
  className?: string;
  title?: string;
};

/**
 * The Karam brand emblem, recreated as scalable SVG from the supplied logo:
 * a square frame holding a sun (outline circle) and a hill (arc) with a seed
 * (filled dot) at its crest. Uses currentColor so it works in ink on cream
 * and in cream/white over photography.
 */
export function KaramMark({
  size = 36,
  withWordmark = false,
  color = "currentColor",
  className,
  title = "KARAM",
}: KaramMarkProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.22,
        color,
        lineHeight: 1,
      }}
      role="img"
      aria-label={title}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        style={{ display: "block" }}
      >
        <rect
          x="13"
          y="13"
          width="74"
          height="74"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="35" cy="35" r="11" strokeWidth="3" />
        <path
          d="M14 86 Q66 16 86 86"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="58" cy="50" r="7.5" fill="currentColor" stroke="none" />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: size * 0.3,
            letterSpacing: "0.34em",
            paddingLeft: "0.34em",
          }}
        >
          KARAM
        </span>
      )}
    </span>
  );
}
