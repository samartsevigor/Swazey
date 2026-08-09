import { FadeIn } from "@/app/components/landing/FadeIn";
import { COMPANY } from "@/app/lib/constants";
import { MapPin, Star } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <FadeIn>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Trusted Local Roofers
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            Roy Swazey&apos;s Roofing is a B.P. certified roofing contractor
            serving homeowners and businesses across Fredericton, Saint John, and
            the greater Rothesay area. We specialize in asphalt and metal
            systems with extended warranty options on every install.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            Whether you need a full replacement, a repair after storm damage, or
            a free estimate before you commit — we&apos;re available around the
            clock to help protect your home.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">
                {COMPANY.rating}.0 Google rating
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-neutral-300">
                    {COMPANY.serviceAreas.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-neutral-300">{COMPANY.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {COMPANY.certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-sm font-medium text-brand-orange"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
