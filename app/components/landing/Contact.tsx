import { FadeIn } from "@/app/components/landing/FadeIn";
import { COMPANY } from "@/app/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Free Estimates — Call Today
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Ready to start your roofing project? Reach out for a no-obligation
            quote. We respond fast and work on your schedule.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a
              href={COMPANY.phoneHref}
              className="group flex items-center gap-4 rounded-2xl bg-black p-6 text-white transition hover:bg-neutral-900"
            >
              <div className="rounded-xl bg-brand-orange p-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Call us</p>
                <p className="text-xl font-bold">{COMPANY.phone}</p>
              </div>
            </a>

            <a
              href={COMPANY.emailHref}
              className="group flex items-center gap-4 rounded-2xl bg-black p-6 text-white transition hover:bg-neutral-900"
            >
              <div className="rounded-xl bg-brand-orange p-3">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email us</p>
                <p className="text-lg font-bold break-all">{COMPANY.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-black/80 p-6 text-white sm:col-span-2">
              <div className="rounded-xl bg-brand-orange p-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-400">
                  {COMPANY.serviceAreas.slice(0, 2).join(" & ")}
                </p>
                <p className="text-lg font-semibold">{COMPANY.address}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-10 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-bold uppercase tracking-wider text-white">
            {COMPANY.name}
          </p>
          <p className="mt-1 text-sm">{COMPANY.tagline}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={COMPANY.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-brand-orange"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={COMPANY.phoneHref}
            className="text-sm transition hover:text-white"
          >
            {COMPANY.phone}
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
