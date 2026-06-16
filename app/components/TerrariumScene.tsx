type SceneProps = {
  /** "cover" fills the box (hero); "contain" fits inside (brand image). */
  fit?: "cover" | "contain";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * A hand-drawn SVG bell-jar terrarium. Stands in for the original
 * assets/hero-terrarium.png (not included in the source repo) and keeps
 * the site fully self-contained. Swap for a real photograph anytime by
 * dropping it into /public and replacing this component.
 */
export function TerrariumScene({ fit = "cover", className, style }: SceneProps) {
  const preserve = fit === "cover" ? "xMidYMid slice" : "xMidYMid meet";
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio={preserve}
      role="img"
      aria-label="유리 돔 안에 이끼와 고사리가 담긴 작은 테라리움"
      className={className}
      style={{ width: "100%", height: "100%", display: "block", ...style }}
    >
      <defs>
        <radialGradient id="amb" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#fbf9f3" />
          <stop offset="55%" stopColor="#eee9dd" />
          <stop offset="100%" stopColor="#e3ddcf" />
        </radialGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#cfd6c8" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3d2f" />
          <stop offset="100%" stopColor="#332a20" />
        </linearGradient>
        <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b59a78" />
          <stop offset="100%" stopColor="#8f7458" />
        </linearGradient>
        <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#211c17" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#211c17" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient ground */}
      <rect x="0" y="0" width="1000" height="1000" fill="url(#amb)" />

      {/* soft cast shadow under the jar */}
      <ellipse cx="500" cy="812" rx="250" ry="40" fill="url(#floorShadow)" />

      {/* ---- the bell jar ---- */}
      {/* glass body: rounded dome over straight walls */}
      <path
        d="M312 250
           a188 188 0 0 1 376 0
           V742
           a26 26 0 0 1 -26 26
           H338
           a26 26 0 0 1 -26 -26
           Z"
        fill="url(#glass)"
        stroke="#9aa088"
        strokeWidth="2.5"
        strokeOpacity="0.5"
      />

      {/* inner scene clipped to the jar */}
      <clipPath id="jarClip">
        <path d="M316 252 a184 184 0 0 1 368 0 V740 a22 22 0 0 1 -22 22 H338 a22 22 0 0 1 -22 -22 Z" />
      </clipPath>
      <g clipPath="url(#jarClip)">
        {/* soil mound */}
        <path
          d="M316 640 C400 596 600 596 684 640 L684 762 L316 762 Z"
          fill="url(#soil)"
        />
        {/* layered moss hills */}
        <path d="M316 648 C392 612 470 628 512 648 C470 690 360 700 316 690 Z" fill="#6f7d4e" />
        <path d="M470 646 C540 614 628 622 684 650 C636 694 540 700 470 678 Z" fill="#5f6b43" />
        <path d="M392 636 C452 612 540 614 596 638 C548 672 452 676 392 660 Z" fill="#869264" />

        {/* moss speckle highlights */}
        <g fill="#9aa674" opacity="0.85">
          <circle cx="404" cy="648" r="5" />
          <circle cx="430" cy="662" r="3.5" />
          <circle cx="560" cy="650" r="5" />
          <circle cx="600" cy="662" r="3.5" />
          <circle cx="492" cy="666" r="4" />
        </g>

        {/* stones */}
        <ellipse cx="372" cy="690" rx="34" ry="22" fill="#b3a892" />
        <ellipse cx="372" cy="684" rx="34" ry="18" fill="#c4baa6" />
        <ellipse cx="628" cy="700" rx="26" ry="17" fill="#a89e88" />
        <ellipse cx="628" cy="695" rx="26" ry="13" fill="#bcb29c" />

        {/* fern — central, slow-growing fronds */}
        <g stroke="#4f5d38" strokeWidth="3.2" strokeLinecap="round" fill="none">
          <path d="M508 636 C504 560 498 512 470 470" />
          <path d="M508 636 C512 566 520 520 552 476" />
          <path d="M508 636 C508 580 508 540 508 486" />
        </g>
        {/* frond leaflets */}
        <g stroke="#6c7d49" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.95">
          <path d="M486 540 q-20 -6 -30 -20" />
          <path d="M492 512 q-18 -6 -27 -19" />
          <path d="M498 486 q-15 -6 -22 -17" />
          <path d="M530 540 q20 -8 30 -22" />
          <path d="M524 512 q18 -8 27 -21" />
          <path d="M518 486 q15 -8 22 -18" />
          <path d="M508 520 q0 -16 0 -28" />
        </g>

        {/* a tiny sprout to the right */}
        <g stroke="#7c8a55" strokeWidth="2.4" strokeLinecap="round" fill="none">
          <path d="M612 678 C610 650 606 636 596 622" />
          <path d="M596 622 q-14 -2 -22 -12" />
          <path d="M606 636 q12 -4 18 -14" />
        </g>

        {/* condensation highlights on the glass */}
        <path
          d="M372 300 C336 360 332 470 360 560"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M392 286 C366 332 360 410 376 470"
          stroke="#ffffff"
          strokeOpacity="0.3"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* glass rim + walls outline drawn again on top for crispness */}
      <path
        d="M312 250 a188 188 0 0 1 376 0 V742 a26 26 0 0 1 -26 26 H338 a26 26 0 0 1 -26 -26 Z"
        fill="none"
        stroke="#8d937b"
        strokeWidth="2.5"
        strokeOpacity="0.55"
      />
      {/* finial knob on top */}
      <circle cx="500" cy="74" r="11" fill="#211c17" />
      <line x1="500" y1="85" x2="500" y2="116" stroke="#211c17" strokeWidth="3" />

      {/* wooden base plate */}
      <rect x="296" y="762" width="408" height="30" rx="12" fill="url(#base)" />
      <rect x="296" y="762" width="408" height="9" rx="4" fill="#c7ad8a" opacity="0.7" />
    </svg>
  );
}
