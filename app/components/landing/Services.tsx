import { FadeIn } from "@/app/components/landing/FadeIn";
import { SERVICES } from "@/app/lib/constants";
import { Home, Shield, Wrench } from "lucide-react";

const ICONS = {
  home: Home,
  shield: Shield,
  wrench: Wrench,
} as const;

export function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Roofing Built to Last
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            From new installations to emergency repairs — we handle asphalt and
            metal roofing with the same attention to detail on every job.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                  <div className="mb-5 inline-flex rounded-xl bg-brand-orange/10 p-3 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
