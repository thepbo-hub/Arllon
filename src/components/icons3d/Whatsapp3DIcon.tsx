import { Icon3DProps } from './Calendar3DIcon.tsx';

export function Whatsapp3DIcon({ className = '', size = 50 }: Icon3DProps) {
  const uid = 'wa3d';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_8px_16px_rgba(37,211,102,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft realistic drop shadow */}
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#02140A" floodOpacity="0.55" />
        </filter>

        {/* Outer 3D green sphere/bubble gradient */}
        <radialGradient id={`${uid}-body`} cx="30%" cy="25%" r="75%" fx="28%" fy="20%">
          <stop offset="0%" stopColor="#4FF087" />
          <stop offset="35%" stopColor="#25D366" />
          <stop offset="75%" stopColor="#128C7E" />
          <stop offset="100%" stopColor="#075E54" />
        </radialGradient>

        {/* Beveled edge border */}
        <linearGradient id={`${uid}-rim`} x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7FCD0" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#25D366" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#05443C" stopOpacity="0.8" />
        </linearGradient>

        {/* Specular gloss arc */}
        <linearGradient id={`${uid}-gloss`} x1="32" y1="12" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Embossed handset shadow */}
        <filter id={`${uid}-emboss`}>
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#042C18" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* 3D Chat Bubble Body */}
      <path
        d="M32 10C19.85 10 10 19.85 10 32C10 36.3 11.23 40.32 13.37 43.72L11 53L20.65 50.49C23.95 52.34 27.84 53.4 32 53.4C44.15 53.4 54 43.55 54 32C54 19.85 44.15 10 32 10Z"
        fill={`url(#${uid}-body)`}
        stroke={`url(#${uid}-rim)`}
        strokeWidth="1.5"
        filter={`url(#${uid}-shadow)`}
      />

      {/* Top Gloss Reflection Arc */}
      <path
        d="M32 12C21.5 12 13 20.5 13 31C13 33.5 13.5 35.8 14.5 38C17 24 25 15 38 14C36.1 12.7 34.1 12 32 12Z"
        fill={`url(#${uid}-gloss)`}
      />

      {/* Inner Rim Light */}
      <circle cx="32" cy="31" r="18.5" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1" fill="none" />

      {/* 3D Embossed WhatsApp Handset */}
      <g filter={`url(#${uid}-emboss)`}>
        <path
          d="M43.1 37.1C42.5 36.5 38.6 34.6 37.7 34.3C36.8 34 36.1 33.9 35.5 34.8C34.9 35.7 33.2 37.8 32.7 38.4C32.2 39 31.7 39.1 30.8 38.7C29.9 38.3 27 37.3 23.6 34.2C20.9 31.8 19.1 28.8 18.7 28C18.3 27.1 18.6 26.6 19.1 26.2C19.5 25.8 20 25.2 20.5 24.6C21 24 21.2 23.5 21.5 22.9C21.8 22.3 21.7 21.7 21.4 21.1C21.1 20.5 18.8 14.8 17.8 12.6C16.9 10.5 15.9 10.7 15.2 10.7C14.6 10.7 13.9 10.7 13.2 10.7C12.5 10.7 11.4 11 10.5 12C9.6 13 7 15.5 7 20.6C7 25.7 10.7 30.6 11.2 31.3C11.7 32 18.5 42.4 28.8 46.8C31.2 47.9 33.1 48.5 34.6 49C37.1 49.8 39.4 49.7 41.2 49.4C43.2 49.1 47.4 46.9 48.3 44.4C49.2 41.9 49.2 39.7 48.9 39.2C48.6 38.7 47.9 38.4 47 37.9"
          transform="translate(11, 4) scale(0.65)"
          fill="#FFFFFF"
        />
        {/* Subtle metallic phone receiver highlight */}
        <ellipse cx="26" cy="27" rx="2" ry="1.2" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-30 26 27)" />
      </g>
    </svg>
  );
}
