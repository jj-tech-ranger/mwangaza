export default function SteppingStonesIllustration() {
  return (
    <svg width="310" height="240" viewBox="0 0 310 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashed path connecting circles (only 4 circles now) */}
      <path
        d="M 50 190 Q 90 150, 100 130 T 155 100 T 210 60"
        stroke="#D4A017"
        strokeWidth="3"
        strokeDasharray="8 6"
        opacity="0.5"
        fill="none"
      />

      {/* Circle 1 - bottom left */}
      <circle cx="50" cy="190" r="20" fill="#D4A017" />
      <path
        d="M 42 190 L 48 198 L 62 180"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Circle 2 */}
      <circle cx="100" cy="140" r="20" fill="#D4A017" />
      <path
        d="M 92 140 L 98 148 L 112 130"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Circle 3 - center */}
      <circle cx="155" cy="100" r="20" fill="#D4A017" />
      <path
        d="M 147 100 L 153 108 L 167 90"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Circle 4 */}
      <circle cx="210" cy="60" r="20" fill="#D4A017" />
      <path
        d="M 202 60 L 208 68 L 222 50"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sun icon at top-right (no 5th circle) */}
      <g transform="translate(260, 30)">
        <circle cx="0" cy="0" r="10" fill="#D4A017" />
        {/* Sun rays */}
        <line x1="0" y1="-14" x2="0" y2="-17" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="-10" x2="12" y2="-12" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="0" x2="17" y2="0" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="10" x2="12" y2="12" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="14" x2="0" y2="17" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="-10" y1="10" x2="-12" y2="12" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="-14" y1="0" x2="-17" y2="0" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
        <line x1="-10" y1="-10" x2="-12" y2="-12" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
