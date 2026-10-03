"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUp,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAMPUS_LINKS = [
  { label: "About Doon Group",   href: "/about-doon-group" },
  { label: "Chairman's Message", href: "/from-the-chairmans-desk" },
  { label: "Director's Message", href: "/from-the-directors-desk" },
  { label: "Affiliation",        href: "/affiliation" },
  { label: "Infrastructure",     href: "/infrastructure-facilities" },
];

const USEFUL_LINKS = [
  { label: "Admission 2026", href: "/admission" },
  { label: "Courses",        href: "/courses" },
  { label: "Hostel",         href: "/hostel" },
  { label: "Photo Gallery",  href: "/photo-gallery" },
  { label: "Downloads",      href: "/downloads" },
];

// ─── Primitives ───────────────────────────────────────────────────────────────

function ColHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D1841C]">
        {eyebrow}
      </span>
      <h3 className="font-serif text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[24px]">
        {children}
      </h3>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-[2px] w-8 bg-[#D1841C]" />
        <span className="h-[2px] w-2 bg-[#D1841C]/40" />
      </div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2.5 text-[14px] text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute h-px w-0 bg-[#D1841C] transition-all duration-300 group-hover:w-3" />
          <span className="h-1 w-1 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-[#D1841C]" />
        </span>
        {label}
      </Link>
    </li>
  );
}

// ─── Columns ──────────────────────────────────────────────────────────────────

function BrandColumn() {
  return (
    <div className="lg:pr-8">
      <Link href="/" aria-label="Doon Group of Colleges home" className="group inline-flex">
        <Image
          src="/logo.png"
          alt="Doon Group of Colleges"
          width={220}
          height={100}
          priority
          className="h-[72px] w-auto object-contain transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-90 sm:h-[82px]"
        />
      </Link>

      <p className="mt-7 max-w-[390px] text-[14px] leading-7 text-white/50">
        Empowering students through quality education, innovation and meaningful
        learning experiences for a better tomorrow.
      </p>

      {/* CTA card */}
      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D1841C]">
              Have Questions?
            </p>
            <p className="mt-1.5 text-[13px] leading-5 text-white/55">
              Speak with our admission team.
            </p>
          </div>
          <a
            href="tel:+919548001418"
            aria-label="Call admission team"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#102C29] transition-all duration-300 hover:scale-105 hover:bg-[#D1841C] hover:text-white"
          >
            <FiPhone size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

function CampusColumn() {
  return (
    <div>
      <ColHeading eyebrow="Explore">Our Campuses</ColHeading>
      <ul className="space-y-4">
        {CAMPUS_LINKS.map((l) => <NavLink key={l.label} {...l} />)}
      </ul>
    </div>
  );
}

function UsefulLinksColumn() {
  return (
    <div>
      <ColHeading eyebrow="Navigate">Useful Links</ColHeading>
      <ul className="space-y-4">
        {USEFUL_LINKS.map((l) => <NavLink key={l.label} {...l} />)}
      </ul>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div>
      <ColHeading eyebrow="Get in touch">Get in touch</ColHeading>

      <div className="space-y-5">
        <p className="max-w-[320px] text-[14px] leading-7 text-white/50">
          28 - Chakrata Road, Dehradun - 248 001 (Uttarakhand)
        </p>

        {[
          { label: "Need Help?",  title: "Talk to an expert",  value: "+91-9548001418", href: "tel:+919548001418" },
          { label: "Mail Us",     title: "info@dpmc.in",       value: null,              href: "mailto:info@dpmc.in" },
        ].map(({ label, title, value, href }) => (
          <div key={label}>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              {label}
            </p>
            <a href={href} className="group block">
              <span className="block text-[14px] font-semibold text-white transition-colors duration-300 group-hover:text-[#D1841C]">
                {title}
              </span>
              {value && (
                <span className="mt-1 block text-[13px] text-white/50 transition-colors duration-300 group-hover:text-white/80">
                  {value}
                </span>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="mt-14 border-t border-white/[0.08] pt-6 sm:mt-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} Doon Group of Colleges.
          </p>
          <p className="mt-1 text-[11px] text-white/20">All Rights Reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy",     href: "/privacy-policy" },
          ].map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-6">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/15" />}
              <Link href={href} className="text-[12px] text-white/35 transition-colors duration-300 hover:text-white">
                {label}
              </Link>
            </span>
          ))}
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span className="text-[12px] text-white/20">Dehradun, Uttarakhand</span>
        </div>
      </div>
    </div>
  );
}


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#102C29] text-white">
      {/* Top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#D1841C]/40 via-[#D1841C] to-[#D1841C]/40" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-10 xl:px-14 pb-8 pt-14 sm:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1fr] lg:gap-10 xl:gap-16">
          <BrandColumn />
          <CampusColumn />
          <UsefulLinksColumn />
          <ConnectColumn />
        </div>
        <BottomBar />
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#102C29]/90 text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D1841C] hover:bg-[#D1841C] sm:bottom-7 sm:right-7"
      >
        <FiArrowUp size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </footer>
  );
}
