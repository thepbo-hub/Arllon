import { Icon3DProps } from './Calendar3DIcon.tsx';

export function Instagram3DIcon({ className = '', size = 50 }: Icon3DProps) {
  const uid = 'ig3d';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_8px_16px_rgba(225,48,108,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft ground shadow */}
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1F0410" floodOpacity="0.55" />
        </filter>

        {/* Authentic vibrant Instagram gradient */}
        <radialGradient id={`${uid}-body`} cx="25%" cy="95%" r="100%" fx="20%" fy="95%">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="15%" stopColor="#F15245" />
          <stop offset="50%" stopColor="#D92E7F" />
          <stop offset="80%" stopColor="#9B36B7" />
          <stop offset="100%" stopColor="#515ECF" />
        </radialGradient>

        {/* 3D bevel rim */}
        <linearGradient id={`${uid}-rim`} x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E1306C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4C0054" stopOpacity="0.8" />
        </linearGradient>

        {/* Specular gloss sheen */}
        <linearGradient id={`${uid}-gloss`} x1="32" y1="10" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* 3D Emboss filter */}
        <filter id={`${uid}-emboss`}>
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#3D002B" floodOpacity="0.6" />
        </filter>

        {/* Inner lens gradient */}
        <radialGradient id={`${uid}-lens`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      {/* 3D Squircle Base Plate */}
      <rect
        x="10"
        y="10"
        width="44"
        height="44"
        rx="13"
        fill={`url(#${uid}-body)`}
        stroke={`url(#${uid}-rim)`}
        strokeWidth="1.5"
        filter={`url(#${uid}-shadow)`}
      />

      {/* Gloss Arch Reflection */}
      <path
        d="M10 22C10 15.3726 15.3726 10 22 10H42C48.6274 10 54 15.3726 54 22V27C44 23 20 23 10 32V22Z"
        fill={`url(#${uid}-gloss)`}
      />

      {/* Inner Rim Light */}
      <rect x="11.5" y="11.5" width="41" height="41" rx="11.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />

      {/* Embossed Camera Outline */}
      <rect
        x="19"
        y="19"
        width="26"
        height="26"
        rx="7.5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        filter={`url(#${uid}-emboss)`}
        fill="none"
      />

      {/* Central 3D Lens Ring & Glass reflection */}
      <circle
        cx="32"
        cy="32"
        r="7.5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        fill={`url(#${uid}-lens)`}
        filter={`url(#${uid}-emboss)`}
      />
      {/* Specular Glint on Lens */}
      <ellipse cx="30" cy="30" rx="1.5" ry="0.9" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 30 30)" />

      {/* Camera Flash Dot */}
      <circle
        cx="40"
        cy="24"
        r="1.8"
        fill="#FFFFFF"
        filter={`url(#${uid}-emboss)`}
      />
    </svg>
  );
}
