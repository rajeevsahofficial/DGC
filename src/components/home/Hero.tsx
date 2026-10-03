"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


const stats = [
  { number: "25+", title: "YEARS OF", subtitle: "EXCELLENCE" },
  { number: "10+", title: "ACADEMIC", subtitle: "PROGRAMS" },
  { number: "5K+", title: "STUDENTS &", subtitle: "ALUMNI" },
];


const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream text-forest-dark">

      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-right blob — visible on all sizes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-10 top-24 h-36 w-52 rounded-[48%_52%_48%_52%] bg-gold-light
                     sm:-right-6 sm:h-44 sm:w-64
                     lg:right-[9%] lg:h-48 lg:w-72
                     xl:right-[10%] xl:h-56 xl:w-80"
        />

        {/* Circle behind image — desktop only */}
        <div className="absolute right-[19%] top-[18%] hidden h-[440px] w-[440px] rounded-full bg-soft-gray
                        lg:block xl:h-[510px] xl:w-[510px]" />

        {/* Ring — xl only */}
        <div className="absolute right-[16%] top-[15%] hidden h-[470px] w-[470px] rounded-full border border-border
                        xl:block" />

        {/* Bottom-left glow */}
        <div className="absolute -bottom-44 -left-36 h-96 w-96 rounded-full bg-gold-light/10 blur-3xl" />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-14">
        <div className="grid min-h-[calc(100vh-92px)] items-center gap-10 pb-16 pt-10
                        lg:grid-cols-2 lg:gap-8 lg:pb-10 lg:pt-0">

          {/* ── LEFT: copy ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-20"
          >

            {/* Eyebrow */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-8">

              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold sm:text-[11px]">
                Education · Innovation · Opportunity
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-medium leading-[0.92] tracking-[-0.05em]
                         text-[clamp(2.6rem,7vw,3.75rem)]
                         lg:text-[4.25rem] xl:text-[4.875rem] 2xl:text-[5.375rem]"
            >
              Shape your future<br />
              {" "}through{" "}
              <span className="relative inline-block italic text-gold-warm">
                education
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-[2px] w-[82%] origin-left bg-gold-warm sm:-bottom-2"
                />
              </span>
              <span className="text-gold-warm">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-[500px] text-[14px] leading-[1.85] text-doon-text/65
                         sm:text-[15px] lg:text-[15.5px] xl:text-[16.5px]"
            >
              A learning environment where knowledge, innovation and opportunity
              come together to transform ambition into achievement.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {["NAAC Accredited", "25+ Years", "5,000+ Alumni"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[14px] font-medium text-doon-text/50">
                  <span className="h-[5px] w-[5px] rounded-full bg-gold-warm" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/admissions"
                className="group inline-flex h-12 items-center gap-3 bg-forest px-7
                           text-[13px] font-semibold text-white
                           transition-all duration-300 hover:bg-forest-dark
                           sm:h-[52px] lg:h-[54px]"
              >
                Apply Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full
                                 bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold
                           text-forest/70 transition-colors duration-200 hover:text-forest"
              >
                <span className="relative after:absolute after:-bottom-px after:left-0 after:h-px
                                 after:w-0 after:bg-forest after:transition-all after:duration-300
                                 group-hover:after:w-full">
                  Explore Courses
                </span>
                <ArrowRight size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </motion.div>

          {/* ── RIGHT: image + desktop stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Floating blob behind image */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[4%] top-[2%] h-36 w-48 rounded-[48%_52%_52%_48%] bg-gold-light
                         sm:h-44 sm:w-60
                         lg:right-[10%] lg:h-48 lg:w-64
                         xl:h-56 xl:w-72"
            />

            {/* Portrait image */}
            <div className="relative z-10 overflow-hidden md:rounded-t-[150px] rounded-b-[8px]
                            h-[460px] w-full
                            md:h-[500px] md:w-[380px]
                            lg:h-[440px] lg:w-[350px]
                            xl:h-[510px] xl:w-[415px]
                            2xl:h-[540px] 2xl:w-[440px]">
              <Image
                src="/hero.jpg"
                alt="Students at Doon Group of Colleges campus"
                fill
                priority
                className="object-cover object-top transition-transform duration-[1600ms] hover:scale-[1.035]"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px,
                       (max-width: 1024px) 380px, (max-width: 1280px) 350px, 440px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-black/20" />
            </div>

            {/* Bottom circle decorations — sm+ only */}
            <div className="absolute -bottom-6 left-[4%] z-0 hidden h-24 w-24 rounded-full
                            border border-[#ec8d70] sm:block sm:left-[2%] sm:h-28 sm:w-28
                            lg:-bottom-8 lg:left-[7%]" />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 left-[7%] z-0 hidden h-24 w-24 rounded-full
                         bg-[#f4a27e]/55 sm:block sm:left-[5%] sm:h-28 sm:w-28
                         lg:-bottom-11 lg:left-[10%]"
            />

            {/* Desktop stats sidebar — xl only */}
            <div className="relative z-20 ml-7 hidden w-[110px] shrink-0 flex-col
                            justify-center gap-10 xl:flex">
              {stats.map((stat, i) => (
                <div key={stat.number}>
                  <p className="font-serif text-[38px] font-medium leading-none
                                tracking-[-0.04em] text-forest-dark xl:text-[42px]">
                    {stat.number}
                  </p>
                  <p className="mt-3 text-[10px] font-medium uppercase leading-[1.7]
                                tracking-[0.22em] text-doon-text/75">
                    {stat.title}<br />{stat.subtitle}
                  </p>
                  {i !== stats.length - 1 && (
                    <div className="mt-6 h-px w-6 bg-gold-warm" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── MOBILE / TABLET STATS BAR ── */}
      <div className="relative z-30 pb-14 sm:px-8 xl:hidden">
        <div className="mx-auto flex max-w-[620px] justify-between px-5 backdrop-blur-xl sm:px-8">
          {stats.map((stat, i) => (
            <div key={stat.number}
              className={`flex-1 ${i !== 0 ? "border-l border-forest/10 pl-4 sm:pl-8" : ""}`}>
              <p className="font-serif text-[26px] font-medium tracking-[-0.04em]
                            text-forest-dark sm:text-[32px]">
                {stat.number}
              </p>
              <p className="mt-2 text-[10px] font-medium uppercase leading-[1.6]
                            tracking-[0.18em] text-doon-text/60 sm:text-[11px]">
                {stat.title}<br />{stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
