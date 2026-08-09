"use client";

import { LogoMark } from "@/app/components/landing/Logo";
import { COMPANY, NAV_LINKS } from "@/app/lib/constants";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[4.5rem] lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-2 text-black sm:gap-3">
          <LogoMark className="h-9 w-auto shrink-0" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[11px] font-bold uppercase tracking-wider sm:text-sm">
              Roy Swazey&apos;s
            </p>
            <p className="truncate text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px] sm:tracking-[0.25em]">
              Roofing
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-brand-orange-dark sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex rounded-lg p-2 text-black md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-neutral-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
