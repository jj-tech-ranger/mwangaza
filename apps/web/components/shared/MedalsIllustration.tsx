export default function MedalsIllustration() {
  return (
    <svg width="310" height="240" viewBox="0 0 310 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sparkle stars in corners */}
      <g fill="#D4A017" opacity="0.5">
        {/* Top-left sparkle */}
        <polygon points="30,30 32,36 38,38 32,40 30,46 28,40 22,38 28,36" />
        {/* Top-right sparkle */}
        <polygon points="280,35 282,41 288,43 282,45 280,51 278,45 272,43 278,41" />
        {/* Bottom-left sparkle */}
        <polygon points="35,205 37,211 43,213 37,215 35,221 33,215 27,213 33,211" />
        {/* Bottom-right sparkle */}
        <polygon points="275,200 277,206 283,208 277,210 275,216 273,210 267,208 273,206" />
      </g>

      {/* Top medal - Bingwa (60px) */}
      <g transform="translate(155, 70)">
        <circle cx="0" cy="0" r="30" fill="#D4A017" />
        <circle cx="0" cy="0" r="24" fill="#FEF5D4" />
        {/* Star */}
        <polygon
          points="0,-12 3,-4 12,-4 5,2 8,10 0,5 -8,10 -5,2 -12,-4 -3,-4"
          fill="#D4A017"
        />
        {/* Label below */}
        <text
          x="0"
          y="48"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="13px"
          fill="#A67C00"
        >
          ⭐ Bingwa
        </text>
      </g>

      {/* Bottom-left medal - Msomi (44px) */}
      <g transform="translate(95, 160)">
        <circle cx="0" cy="0" r="22" fill="#D4A017" />
        <circle cx="0" cy="0" r="17" fill="#FEF5D4" />
        {/* Book icon simplified */}
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#D4A017" />
        <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#FEF5D4" strokeWidth="1.5" />
        <line x1="-8" y1="2" x2="8" y2="2" stroke="#FEF5D4" strokeWidth="1.5" />
        {/* Label below */}
        <text
          x="0"
          y="38"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="12px"
          fill="#A67C00"
        >
          🎓 Msomi
        </text>
      </g>

      {/* Bottom-right medal - Hodari (44px) */}
      <g transform="translate(215, 160)">
        <circle cx="0" cy="0" r="22" fill="#D4A017" />
        <circle cx="0" cy="0" r="17" fill="#FEF5D4" />
        {/* Lightbulb simplified */}
        <circle cx="0" cy="-3" r="6" fill="#D4A017" />
        <rect x="-3" y="3" width="6" height="5" rx="1" fill="#D4A017" />
        {/* Label below */}
        <text
          x="0"
          y="38"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="12px"
          fill="#A67C00"
        >
          💡 Hodari
        </text>
      </g>

      {/* Floating XP pills */}
      {/* +10 XP pill - top left area */}
      <g transform="translate(60, 45)">
        <rect x="-20" y="-8" width="40" height="16" rx="8" fill="#D4A017" />
        <text
          x="0"
          y="1"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="11px"
          fill="#FFFFFF"
          dominantBaseline="middle"
        >
          +10 XP
        </text>
      </g>

      {/* +25 XP pill - top right area */}
      <g transform="translate(245, 85)">
        <rect x="-22" y="-8" width="44" height="16" rx="8" fill="#D4A017" />
        <text
          x="0"
          y="1"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="11px"
          fill="#FFFFFF"
          dominantBaseline="middle"
        >
          +25 XP
        </text>
      </g>

      {/* +10 XP pill - bottom area */}
      <g transform="translate(155, 190)">
        <rect x="-20" y="-8" width="40" height="16" rx="8" fill="#D4A017" />
        <text
          x="0"
          y="1"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="11px"
          fill="#FFFFFF"
          dominantBaseline="middle"
        >
          +10 XP
        </text>
      </g>
    </svg>
  );
}
