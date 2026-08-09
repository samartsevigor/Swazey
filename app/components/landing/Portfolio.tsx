"use client";

import { FadeIn } from "@/app/components/landing/FadeIn";
import { PORTFOLIO } from "@/app/lib/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Portfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real roofing jobs across New Brunswick — quality you can see from
            the street.
          </p>
        </FadeIn>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PORTFOLIO.map((item, i) => (
            <FadeIn key={item.src.src} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100 shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
