import { Award, Clock, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "B.P. Certified Roofer" },
  { icon: ShieldCheck, label: "Extended Warranties" },
  { icon: Sparkles, label: "Free Estimates" },
  { icon: Clock, label: "Available 24/7" },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-black py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 lg:px-8">
        {ITEMS.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3 text-white">
            <item.icon className="h-5 w-5 shrink-0 text-brand-orange" />
            <span className="text-sm font-medium italic sm:text-base">
              {item.label}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="ml-5 hidden text-brand-orange md:inline">•</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
