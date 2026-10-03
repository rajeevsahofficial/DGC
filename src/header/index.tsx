
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

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
  { label: "About Us", href: "/about" },
  { label: "Colleges", href: "/colleges", dropdown: colleges },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placement", href: "/placement" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [mobileCollegesOpen, setMobileCollegesOpen] = useState(false);

  /*
   * Lock body scroll while mobile navigation is open.
   */
  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [mobileOpen]);

  /*
   * ESC closes mobile navigation.
   */
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  /*
   * Close mobile menu when viewport reaches desktop.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setMobileCollegesOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileCollegesOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#123F38]/10 bg-white backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-10 xl:px-14">
          {/* =====================================================
              LOGO
          ===================================================== */}
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
              DESKTOP NAVIGATION — UNCHANGED
          ===================================================== */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {navigation.map((item) => {
                const hasDropdown = !!item.dropdown;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasDropdown) setCollegeOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) setCollegeOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex h-[82px] items-center gap-1.5 px-3.5 text-[13px] font-semibold tracking-[-0.01em] text-[#102C29] transition hover:text-[#D1841C]"
                    >
                      {item.label}

                      {hasDropdown && (
                        <FiChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${collegeOpen ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </Link>

                    {/* =================================================
                        DESKTOP MEGA MENU
                    ================================================= */}
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

                              <FiArrowRight
                                size={13}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {colleges.map((college, index) => (
                              <Link
                                key={college.title}
                                href={college.href}
                                className={`group rounded-[15px] border border-[#123F38]/8 p-4 transition-all duration-300 hover:border-[#D1841C]/30 hover:bg-white ${index === colleges.length - 1
                                    ? "col-span-2"
                                    : ""
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
                                    <FiArrowRight
                                      size={13}
                                      className="transition-transform group-hover:translate-x-0.5"
                                    />
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
                                  Discover an institution built around
                                  education, opportunity and growth.
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
              DESKTOP ACTIONS — UNCHANGED
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

                <p className="mt-1 text-[11px] font-bold">
                  +91 95480 01418
                </p>
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
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setCollegeOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8E9E6] text-[#102C29] transition-all duration-300 hover:bg-[#123F38] hover:text-white lg:hidden"
          >
            {mobileOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </header>

      {/* MOBILE  */}

      <div
        aria-hidden={!mobileOpen}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[60] bg-[#102C29]/35 backdrop-blur-[3px] transition-opacity duration-500 lg:hidden ${mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      />

      {/* DRAWER */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={`fixed right-0 top-0 z-[70] flex h-[100dvh] w-full flex-col bg-[#F7F0E5] shadow-[-30px_0_80px_rgba(16,44,41,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-[440px] lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* =====================================================
            DRAWER HEADER
        ===================================================== */}
        <div className="flex shrink-0 items-center justify-between bg-white border-b border-[#123F38]/10 px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Doon Group of Colleges"
              width={180}
              height={60}
              className="h-[52px] w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123F38] text-white transition-transform duration-300 hover:rotate-90"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* =====================================================
            DRAWER CONTENT
        ===================================================== */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
            <div className="space-y-1">
              {/* ABOUT */}
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="group flex min-h-[58px] items-center justify-between border-b border-[#123F38]/10 text-[15px] font-semibold text-[#102C29]"
              >
                <span>About Us</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full text-[#D1841C] transition-all duration-300 group-hover:bg-[#123F38] group-hover:text-white">
                  <FiArrowRight size={15} />
                </span>
              </Link>

              {/* =================================================
                  COLLEGES ACCORDION
              ================================================= */}
              <div className="border-b border-[#123F38]/10">
                <button
                  type="button"
                  aria-expanded={mobileCollegesOpen}
                  onClick={() =>
                    setMobileCollegesOpen((prev) => !prev)
                  }
                  className="flex min-h-[58px] w-full items-center justify-between text-left text-[15px] font-semibold text-[#102C29]"
                >
                  <span>Colleges</span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${mobileCollegesOpen
                        ? "bg-[#123F38] text-white"
                        : "text-[#D1841C]"
                      }`}
                  >
                    <FiChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${mobileCollegesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </span>
                </button>

                {/* COLLEGE LIST */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${mobileCollegesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 pb-4">
                      {/* ALL COLLEGES */}
                      <Link
                        href="/colleges"
                        onClick={closeMobileMenu}
                        className="group flex min-h-[50px] items-center justify-between rounded-[14px] bg-[#123F38] px-4 text-[12px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#102C29]"
                      >
                        <span>Explore All Colleges</span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D1841C]">
                          <FiArrowRight size={13} />
                        </span>
                      </Link>

                      {/* COLLEGES */}
                      {colleges.map((college, index) => (
                        <Link
                          key={college.title}
                          href={college.href}
                          onClick={closeMobileMenu}
                          className="group flex gap-3 rounded-[14px] px-3 py-3 transition-colors duration-200 hover:bg-white"
                        >
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8E9E6] text-[9px] font-bold text-[#123F38]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="text-[12px] font-semibold leading-5 text-[#102C29] transition-colors group-hover:text-[#D1841C]">
                              {college.title}
                            </p>

                            <p className="mt-0.5 text-[10px] leading-4 text-[#102C29]/50">
                              {college.description}
                            </p>
                          </div>

                          <FiArrowRight
                            size={14}
                            className="mt-2 shrink-0 text-[#D1841C] transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* OTHER NAVIGATION */}
              {navigation
                .filter(
                  (item) =>
                    item.label !== "About Us" &&
                    item.label !== "Colleges"
                )
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex min-h-[58px] items-center justify-between border-b border-[#123F38]/10 text-[15px] font-semibold text-[#102C29]"
                  >
                    <span>{item.label}</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-[#D1841C] transition-all duration-300 group-hover:bg-[#123F38] group-hover:text-white">
                      <FiArrowRight size={15} />
                    </span>
                  </Link>
                ))}
            </div>
          </nav>

          {/* =====================================================
              MOBILE FOOTER / CTA
          ===================================================== */}
          <div className="shrink-0 border-t border-[#123F38]/10 py-4">
            {/* ADMISSIONS CONTACT */}
            <a
              href="tel:+919548001418"
              className="mb-3 flex items-center gap-3 p-3.5 transition hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8E9E6] text-[#D1841C]">
                <FiPhone size={15} />
              </span>

              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#102C29]/45">
                  Admissions Enquiry
                </p>

                <p className="mt-1 text-[13px] font-bold text-[#102C29]">
                  +91 95480 01418
                </p>
              </div>

              <FiArrowRight
                size={15}
                className="ml-auto shrink-0 text-[#D1841C]"
              />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}