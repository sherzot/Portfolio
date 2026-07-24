type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect
        x="5"
        y="5"
        width="54"
        height="54"
        rx="15"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.16"
      />
      <path
        d="M17 45V20L32 34.5L47 20V45"
        stroke="currentColor"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 20.5H25.5C19.7 20.5 16 23.4 16 27.4S19.7 34.2 25.5 34.2H38.5C44.3 34.2 48 37.1 48 41.1S44.3 47.5 38.5 47.5H19.5"
        stroke="#3B82F6"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
