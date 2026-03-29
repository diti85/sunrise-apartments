export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sun icon */}
      <circle cx="22" cy="25" r="8" fill="url(#sunGradient)" />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={22 + 11 * Math.cos((angle * Math.PI) / 180)}
          y1={25 + 11 * Math.sin((angle * Math.PI) / 180)}
          x2={22 + 15 * Math.cos((angle * Math.PI) / 180)}
          y2={25 + 15 * Math.sin((angle * Math.PI) / 180)}
          stroke="url(#sunGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {/* Horizon line */}
      <line
        x1="6"
        y1="38"
        x2="38"
        y2="38"
        stroke="url(#sunGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* SUNRISE text */}
      <text
        x="50"
        y="23"
        fill="currentColor"
        fontSize="16"
        fontWeight="300"
        letterSpacing="6"
        fontFamily="var(--font-sans)"
      >
        SUNRISE
      </text>
      {/* APARTMENTS text */}
      <text
        x="50"
        y="40"
        fill="currentColor"
        fontSize="10"
        fontWeight="300"
        letterSpacing="8"
        fontFamily="var(--font-sans)"
        opacity="0.7"
      >
        APARTMENTS
      </text>
      <defs>
        <linearGradient
          id="sunGradient"
          x1="10"
          y1="10"
          x2="35"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="oklch(0.88 0.15 70)" />
          <stop offset="1" stopColor="oklch(0.75 0.12 50)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="22" cy="20" r="8" fill="url(#sunGradientIcon)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={22 + 11 * Math.cos((angle * Math.PI) / 180)}
          y1={20 + 11 * Math.sin((angle * Math.PI) / 180)}
          x2={22 + 15 * Math.cos((angle * Math.PI) / 180)}
          y2={20 + 15 * Math.sin((angle * Math.PI) / 180)}
          stroke="url(#sunGradientIcon)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      <line
        x1="6"
        y1="34"
        x2="38"
        y2="34"
        stroke="url(#sunGradientIcon)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="sunGradientIcon"
          x1="10"
          y1="8"
          x2="35"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="oklch(0.88 0.15 70)" />
          <stop offset="1" stopColor="oklch(0.75 0.12 50)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
