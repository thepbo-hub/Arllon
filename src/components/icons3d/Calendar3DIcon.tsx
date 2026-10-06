export interface Icon3DProps {
  className?: string;
  size?: number;
}

export function Calendar3DIcon({ className = '', size = 52 }: Icon3DProps) {
  const uid = 'cal3d';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_8px_16px_rgba(30,79,163,0.45)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft ground shadow */}
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#040C1A" floodOpacity="0.6" />
        </filter>

        {/* Calendar body gradient */}
        <linearGradient id={`${uid}-body`} x1="32" y1="12" x2="32" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#EEF2F8" />
          <stop offset="100%" stopColor="#CFD7E6" />
        </linearGradient>

        {/* Bevel rim */}
        <linearGradient id={`${uid}-rim`} x1="10" y1="12" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#9DB0CF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1E4FA3" stopOpacity="0.4" />
        </linearGradient>

        {/* Royal Blue Header plate */}
        <linearGradient id={`${uid}-header`} x1="32" y1="12" x2="32" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B7AEB" />
          <stop offset="35%" stopColor="#1E4FA3" />
          <stop offset="100%" stopColor="#0F2E68" />
        </linearGradient>

        {/* Binder rings metallic gradient */}
        <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#C9CED6" />
          <stop offset="70%" stopColor="#6C7A90" />
          <stop offset="100%" stopColor="#E2E7EF" />
        </linearGradient>

        {/* Check badge gradient */}
        <linearGradient id={`${uid}-badge`} x1="44" y1="36" x2="44" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#1E4FA3" />
          <stop offset="100%" stopColor="#0B234C" />
        </linearGradient>

        {/* Checkmark bevel */}
        <filter id={`${uid}-emboss`}>
          <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#020914" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* 3D Base Calendar Plate */}
      <rect
        x="10"
        y="14"
        width="44"
        height="44"
        rx="10"
        fill={`url(#${uid}-body)`}
        stroke={`url(#${uid}-rim)`}
        strokeWidth="1.5"
        filter={`url(#${uid}-shadow)`}
      />

      {/* Inner page shadow line */}
      <rect x="11.5" y="15" width="41" height="42" rx="8.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1" />

      {/* Top Header Plate (Navy/Royal) */}
      <path
        d="M10 24C10 18.4772 14.4772 14 20 14H44C49.5228 14 54 18.4772 54 24V27H10V24Z"
        fill={`url(#${uid}-header)`}
      />

      {/* Header Gloss highlight */}
      <path
        d="M11 15C11 15 22 17 43 15C49 14.5 53 18 53 20H11V15Z"
        fill="#FFFFFF"
        fillOpacity="0.25"
      />

      {/* Divider line under header */}
      <line x1="10" y1="27.5" x2="54" y2="27.5" stroke="#0A1F44" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="10" y1="28.5" x2="54" y2="28.5" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.8" />

      {/* 3D Metallic Binder Rings */}
      {/* Ring 1 */}
      <g filter={`url(#${uid}-emboss)`}>
        <rect x="19" y="8" width="6" height="11" rx="3" fill={`url(#${uid}-ring)`} stroke="#4F5D73" strokeWidth="0.6" />
        <ellipse cx="22" cy="10" rx="1.5" ry="1.2" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="20" y="16" width="4" height="3" rx="1" fill="#0A1F44" fillOpacity="0.25" />
      </g>

      {/* Ring 2 */}
      <g filter={`url(#${uid}-emboss)`}>
        <rect x="39" y="8" width="6" height="11" rx="3" fill={`url(#${uid}-ring)`} stroke="#4F5D73" strokeWidth="0.6" />
        <ellipse cx="42" cy="10" rx="1.5" ry="1.2" fill="#FFFFFF" fillOpacity="0.8" />
        <rect x="40" y="16" width="4" height="3" rx="1" fill="#0A1F44" fillOpacity="0.25" />
      </g>

      {/* Calendar Grid Date Dots */}
      <g fill="#1E4FA3" fillOpacity="0.35">
        <circle cx="20" cy="34" r="2" />
        <circle cx="28" cy="34" r="2" />
        <circle cx="36" cy="34" r="2" />
        <circle cx="20" cy="42" r="2" />
        <circle cx="28" cy="42" r="2" />
        <circle cx="20" cy="50" r="2" />
      </g>

      {/* 3D Verified Check Badge (Embossed & Glowing) */}
      <g filter={`url(#${uid}-shadow)`}>
        <circle cx="42" cy="44" r="11" fill={`url(#${uid}-badge)`} stroke="#E2E7EF" strokeWidth="1.2" />
        <ellipse cx="42" cy="36" rx="6" ry="2.5" fill="#FFFFFF" fillOpacity="0.35" />
        {/* Embossed checkmark */}
        <path
          d="M37 43.8L40.4 47.2L47.5 40"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${uid}-emboss)`}
        />
      </g>
    </svg>
  );
}
