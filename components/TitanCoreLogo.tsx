import { cn } from "@/lib/utils";

type TitanCoreLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function TitanCoreLogo({
  className,
  markClassName,
  showWordmark = true,
  compact = false,
  tone = "dark",
}: TitanCoreLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", compact ? "gap-2" : "gap-4", className)}>
      <svg
        viewBox="0 0 88 96"
        aria-label="TitanCore emblem"
        className={cn("h-14 w-14 shrink-0", compact ? "h-12 w-11" : "h-16 w-14", markClassName)}
        fill="none"
      >
        <defs>
          <linearGradient id="shield-fill" x1="13" x2="73" y1="12" y2="88">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="0.5" stopColor="#071120" />
            <stop offset="1" stopColor="#030712" />
          </linearGradient>
          <linearGradient id="shield-stroke" x1="14" x2="76" y1="8" y2="92">
            <stop offset="0" stopColor="#f8fafc" />
            <stop offset="0.28" stopColor="#94a3b8" />
            <stop offset="0.62" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#cbd5f5" />
          </linearGradient>
          <linearGradient id="core-blue" x1="19" x2="69" y1="18" y2="60">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="0.4" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="metal" x1="27" x2="60" y1="21" y2="72">
            <stop offset="0" stopColor="#f8fafc" />
            <stop offset="0.45" stopColor="#94a3b8" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <path
          d="M44 4 80 18v28c0 24.9-14.5 40-36 49C22.4 86 8 70.9 8 46V18L44 4Z"
          fill="url(#shield-fill)"
          stroke="url(#shield-stroke)"
          strokeWidth="2.5"
        />
        <path
          d="M20 21.5 44 12l24 9.5-7 15.5H27L20 21.5Z"
          fill="url(#core-blue)"
          opacity="0.95"
        />
        <path
          d="M44 17.5 65.5 26v19.2c0 16.1-8 26-21.5 33.1C30.5 71.2 22.5 61.3 22.5 45.2V26L44 17.5Z"
          fill="url(#shield-fill)"
          opacity="0.72"
        />
        <path
          d="M25 24h38l-4.8 10.5H48.5v30H39V34.5H29.8L25 24Z"
          fill="url(#metal)"
        />
        <path
          d="M44 4 80 18v28c0 24.9-14.5 40-36 49"
          stroke="#7dd3fc"
          strokeLinecap="round"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <circle cx="44" cy="15.5" r="3.6" fill="#ffffff" opacity="0.78" />
        <circle cx="44" cy="15.5" r="8.5" fill="#ffffff" opacity="0.1" />
      </svg>
    </div>
  );
}
