import { COMPANY } from "@/app/lib/constants";

export function DemoBanner() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-5"
      aria-live="polite"
    >
      <div className="w-full max-w-xl rounded-2xl bg-red-600 px-6 py-5 text-center text-white shadow-2xl sm:px-10 sm:py-7">
        <p className="text-sm font-bold leading-snug sm:text-base">
          Concept website demo. Not affiliated with or endorsed by{" "}
          {COMPANY.name}. For presentation purposes only.
        </p>
        <p className="mt-3 text-sm font-semibold leading-snug text-white/95 sm:text-base">
          This demo will be removed immediately upon request.
        </p>
      </div>
    </div>
  );
}
