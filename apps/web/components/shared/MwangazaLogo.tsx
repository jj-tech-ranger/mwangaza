export default function MwangazaLogo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="60" cy="60" r="58" fill="#D4A017" stroke="#A67C00" strokeWidth="2" />

      {/* Sun rays */}
      <g stroke="#FEF5D4" strokeWidth="3" strokeLinecap="round">
        <line x1="60" y1="12" x2="60" y2="22" />
        <line x1="85.4" y1="20.6" x2="79.2" y2="27.8" />
        <line x1="99.4" y1="34.6" x2="92.2" y2="40.8" />
        <line x1="107.4" y1="60" x2="97.4" y2="60" />
        <line x1="99.4" y1="85.4" x2="92.2" y2="79.2" />
        <line x1="85.4" y1="99.4" x2="79.2" y2="92.2" />
        <line x1="60" y1="107.4" x2="60" y2="97.4" />
        <line x1="34.6" y1="99.4" x2="40.8" y2="92.2" />
        <line x1="20.6" y1="85.4" x2="27.8" y2="79.2" />
        <line x1="12.6" y1="60" x2="22.6" y2="60" />
        <line x1="20.6" y1="34.6" x2="27.8" y2="40.8" />
        <line x1="34.6" y1="20.6" x2="40.8" y2="27.8" />
      </g>

      {/* Sun face */}
      <circle cx="60" cy="60" r="35" fill="#FDF0C2" />

      {/* Eyes */}
      <circle cx="50" cy="55" r="4" fill="#A67C00" />
      <circle cx="70" cy="55" r="4" fill="#A67C00" />

      {/* Smile */}
      <path
        d="M 45 68 Q 60 78 75 68"
        stroke="#A67C00"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* MWANGAZA text curved along bottom */}
      <path
        id="textPath"
        d="M 25 85 Q 60 95 95 85"
        fill="none"
      />
      <text
        fill="#FFFFFF"
        fontSize="11"
        fontWeight="900"
        fontFamily="Nunito, sans-serif"
        letterSpacing="1.2"
      >
        <textPath href="#textPath" startOffset="50%" textAnchor="middle">
          MWANGAZA
        </textPath>
      </text>
    </svg>
  );
}
