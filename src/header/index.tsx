"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiChevronDown,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

// ─── Types & data ─────────────────────────────────────────────────────────────

type College = {
  title: string;
  description: string;
  href: string;
};

type NavigationItem = {
  label: string;
  href: string;
  dropdown?: College[];
};

const colleges: College[] = [
  {
    title: "Paramedical College & Hospital",
    description: "Healthcare, physiotherapy and medical sciences",
    href: "/colleges/paramedical",
  },
  {
    title: "Agriculture Science & Technology",
    description: "Agriculture, food technology and allied sciences",
    href: "/colleges/agriculture-science",
  },
  {
    title: "Agriculture & Allied Sciences",
    description: "Agriculture, horticulture, forestry and fisheries",
    href: "/colleges/agriculture-allied",
  },
  {
    title: "College of Education",
    description: "Professional education and teacher training",
    href: "/colleges/education",
  },
  {
    title: "College of Pharmacy",
    description: "Pharmaceutical education and sciences",
    href: "/colleges/pharmacy",
  },
];

const navigation: NavigationItem[] = [
  { label: "About Us",   href: "/about" },
  { label: "Colleges",   href: "/colleges", dropdown: colleges },
  { label: "Courses",    href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placement",  href: "/placement" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact",    href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen]               = useState(false);
  const [collegeOpen, setCollegeOpen]             = useState(false);
  const [mobileCollegesOpen, setMobileCollegesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#123F38]/10 bg-white backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-14">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setCollegeOpen(false)}
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt="Doon Group of Colleges"
              width={210}
              height={70}
              priority
              className="h-[62px] w-auto object-contain sm:h-[66px]"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {navigation.map((item) => {
                const hasDropdown = !!item.dropdown;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => { if (hasDropdown) setCollegeOpen(true); }}
                    onMouseLeave={() => { if (hasDropdown) setCollegeOpen(false); }}
                  >
                    <Link
                      href={item.href}
                      className="group flex h-[82px] items-center gap-1.5 px-3.5 text-[13px] font-semibold tracking-[-0.01em] text-[#102C29] transition hover:text-[#D1841C]"
                    >
                      {item.label}

                      {hasDropdown && (
                        <FiChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${collegeOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* COLLEGES MEGA MENU */}
                    {hasDropdown && collegeOpen && (
                      <div className="absolute left-1/2 top-[74px] w-[650px] -translate-x-1/2 pt-3">
                        <div className="overflow-hidden rounded-[22px] border border-[#123F38]/10 bg-[#F7F0E5] p-3 shadow-[0_24px_70px_rgba(18,63,56,0.18)]">

                          <div className="mb-2 flex items-center justify-between px-4 py-3">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D1841C]">
                                Our Institutions
                              </p>
                              <p className="mt-1 font-serif text-[21px] font-medium text-[#102C29]">
                                Explore our colleges
                              </p>
                            </div>

                            <Link
                              href="/colleges"
                              className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#102C29] transition hover:text-[#D1841C]"
                            >
                              View all
                              <FiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {colleges.map((college, index) => (
                              <Link
                                key={college.title}
                                href={college.href}
                                className={`group rounded-[15px] border border-[#123F38]/8 p-4 transition-all duration-300 hover:border-[#D1841C]/30 hover:bg-white ${
                                  index === colleges.length - 1 ? "col-span-2" : ""
                                }`}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <p className="text-[13px] font-bold leading-5 text-[#102C29] transition group-hover:text-[#D1841C]">
                                      {college.title}
                                    </p>
                                    <p className="mt-1.5 max-w-[260px] text-[11px] leading-5 text-[#102C29]/55">
                                      {college.description}
                                    </p>
                                  </div>

                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123F38] text-white transition group-hover:bg-[#D1841C]">
                                    <FiArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-2 rounded-[15px] bg-[#123F38] px-5 py-4">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                                  Doon Group of Colleges
                                </p>
                                <p className="mt-1 text-[12px] font-medium text-white">
                                  Discover an institution built around education, opportunity and growth.
                                </p>
                              </div>

                              <Link
                                href="/colleges"
                                className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-[#D1841C] px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#D88B22]"
                              >
                                Explore
                                <FiArrowRight size={13} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
          ===================================================== */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919548001418"
              className="group flex items-center gap-2.5 rounded-full px-3 py-2 text-[#102C29]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E9E6] text-[#D1841C] transition group-hover:bg-[#123F38] group-hover:text-white">
                <FiPhone size={13} />
              </span>

              <div className="leading-none">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#102C29]/40">
                  Admissions
                </p>
                <p className="mt-1 text-[11px] font-bold">+91 95480 01418</p>
              </div>
            </a>

            <Link
              href="/admissions"
              className="group flex h-[45px] items-center gap-3 rounded-full bg-[#123F38] pl-5 pr-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#102C29]"
            >
              Apply Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1841C] text-white transition-transform group-hover:rotate-[-8deg]">
                <FiArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setCollegeOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8E9E6] text-[#102C29] transition hover:bg-[#123F38] hover:text-white lg:hidden"
          >
            {mobileOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}
        {mobileOpen && (
          <div className="border-t border-[#123F38]/8 bg-[#F7F0E5] lg:hidden">
            <div className="max-h-[calc(100vh-82px)] overflow-y-auto px-5 pb-6 pt-4 sm:px-6">
              <div className="space-y-1">

                {/* ABOUT */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-12 items-center justify-between border-b border-[#123F38]/8 text-[14px] font-semibold text-[#102C29]"
                >
                  About Us
                  <FiArrowRight size={15} className="text-[#D1841C]" />
                </Link>

                {/* COLLEGES */}
                <div className="border-b border-[#123F38]/8">
                  <button
                    type="button"
                    onClick={() => setMobileCollegesOpen((prev) => !prev)}
                    className="flex h-12 w-full items-center justify-between text-[14px] font-semibold text-[#102C29]"
                  >
                    Colleges
                    <FiChevronDown
                      size={16}
                      className={`transition-transform ${mobileCollegesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileCollegesOpen && (
                    <div className="pb-3">
                      <Link
                        href="/colleges"
                        onClick={() => setMobileOpen(false)}
                        className="mb-2 flex items-center justify-between rounded-xl bg-[#123F38] px-4 py-3 text-[12px] font-bold text-white"
                      >
                        All Colleges
                        <FiArrowRight size={14} />
                      </Link>

                      <div className="space-y-1">
                        {colleges.map((college) => (
                          <Link
                            key={college.title}
                            href={college.href}
                            onClick={() => setMobileOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white"
                          >
                            <div className="pr-3">
                              <p className="text-[12px] font-semibold text-[#102C29] group-hover:text-[#D1841C]">
                                {college.title}
                              </p>
                              <p className="mt-1 text-[10px] leading-4 text-[#102C29]/45">
                                {college.description}
                              </p>
                            </div>
                            <FiArrowRight size={13} className="shrink-0 text-[#D1841C]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* OTHER LINKS */}
                {(
                  [
                    ["Courses",     "/courses"],
                    ["Admissions",  "/admissions"],
                    ["Placement",   "/placement"],
                    ["Facilities",  "/facilities"],
                    ["Contact",     "/contact"],
                  ] as [string, string][]
                ).map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex h-12 items-center justify-between border-b border-[#123F38]/8 text-[14px] font-semibold text-[#102C29]"
                  >
                    {label}
                    <FiArrowRight size={15} className="text-[#D1841C]" />
                  </Link>
                ))}
              </div>

              {/* MOBILE CONTACT CARD */}
              <div className="mt-5 rounded-[18px] bg-[#123F38] p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Admissions 2026–27
                </p>
                <p className="mt-2 font-serif text-[20px] leading-7 text-white">
                  Begin your journey with Doon.
                </p>

                <div className="mt-4 space-y-2">
                  <a href="tel:+919548001418" className="flex items-center gap-2 text-[11px] text-white/70">
                    <FiPhone size={13} />
                    +91 95480 01418
                  </a>
                  <a href="mailto:info@dpmc.in" className="flex items-center gap-2 text-[11px] text-white/70">
                    <FiMail size={13} />
                    info@dpmc.in
                  </a>
                </div>

                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="mt-5 flex h-11 items-center justify-center gap-2 rounded-full bg-[#D1841C] text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#D88B22]"
                >
                  Apply Now
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
