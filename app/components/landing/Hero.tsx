"use client";

import { FadeIn } from "@/app/components/landing/FadeIn";
import { LogoMark } from "@/app/components/landing/Logo";
import { COMPANY, HIGHLIGHTS } from "@/app/lib/constants";
import { ArrowRight, Phone, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white pt-[4.5rem] pb-16 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-sm">
            <Star className="h-4 w-4 fill-brand-orange text-brand-orange" />
            <span className="font-medium">
              {COMPANY.rating}.0 rating
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
            {COMPANY.name}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-orange" />
            <p className="text-xl font-bold uppercase tracking-[0.2em] text-neutral-700 sm:text-2xl">
              {COMPANY.tagline}
            </p>
            <span className="h-px w-10 bg-brand-orange" />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Professional asphalt and metal roofing across{" "}
            {COMPANY.serviceAreas.slice(0, 2).join(" & ")}. B.P. certified
            craftsmanship, extended warranties, and free estimates on every
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/25 transition hover:bg-brand-orange-dark"
            >
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black px-7 py-3.5 text-base font-semibold text-black transition hover:bg-black hover:text-white"
            >
              View Our Work
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative hidden lg:block">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            <div className="rounded-3xl border border-black/5 bg-neutral-50 p-10 shadow-2xl shadow-black/10">
              <LogoMark className="mx-auto h-28 w-auto" />
              <p className="mt-6 text-center text-2xl font-extrabold uppercase tracking-wide text-black">
                {COMPANY.name}
              </p>
              <p className="mt-2 text-center text-sm font-bold uppercase tracking-[0.3em] text-neutral-600">
                {COMPANY.tagline}
              </p>

              <div className="my-6 h-px bg-black" />

              <p className="text-center text-sm italic text-neutral-600">
                {COMPANY.certifications.join(" · ")}
              </p>

              <div className="mt-8 rounded-2xl bg-brand-orange px-6 py-8 text-center text-white">
                <p className="text-sm font-bold uppercase tracking-wider">
                  {COMPANY.serviceAreas.slice(0, 2).join(" & ")}
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-2 block text-3xl font-extrabold tracking-tight hover:underline"
                >
                  {COMPANY.phone}
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="mt-2 block text-sm text-white/90 hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
