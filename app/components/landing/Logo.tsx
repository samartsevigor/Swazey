import { COMPANY } from "@/app/lib/constants";

const BLACK = "#000000";
const ORANGE = "#E85B34";

type LogoProps = {
  className?: string;
  showName?: boolean;
};

export function Logo({ className = "", showName = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <LogoMark className="h-10 w-auto" />
      {showName && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-inherit">
          {COMPANY.name}
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 112 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <line
        x1="1.64697"
        y1="39.0929"
        x2="57.3472"
        y2="2.50749"
        stroke={BLACK}
        strokeWidth={6}
      />
      <line
        x1="54.964"
        y1="2.52274"
        x2="110.324"
        y2="39.6213"
        stroke={BLACK}
        strokeWidth={6}
      />
      <line
        x1="3.45694"
        y1="42.4822"
        x2="56.5667"
        y2="6.77013"
        stroke={ORANGE}
        strokeWidth={3}
      />
      <line
        x1="55.1451"
        y1="6.77977"
        x2="108.008"
        y2="43.2096"
        stroke={ORANGE}
        strokeWidth={3}
      />
      <line
        x1="22.7939"
        y1="12.0149"
        x2="22.7939"
        y2="24.0149"
        stroke={BLACK}
        strokeWidth={7}
      />
    </svg>
  );
}
