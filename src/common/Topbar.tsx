import { FiMail, FiPhone, FiShield } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="bg-[#102C29] text-white">
      <div className="mx-auto flex h-[34px] max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-14">

        {/* Affiliation */}
        <div className="flex min-w-0 items-center gap-2">
          <FiShield
            size={14}
            className="shrink-0 text-[#D1841C]"
          />

          <p className="truncate text-[11px] font-medium tracking-wide sm:text-xs">
            Affiliated to H.N.B. Garhwal Central University &amp; Sri Dev
            Suman Uttarakhand University
          </p>
        </div>

        {/* Contact */}
        <div className="hidden shrink-0 items-center divide-x divide-white/20 sm:flex">

          {/* Phone */}
          <a
            href="tel:+919548001418"
            className="flex items-center gap-2 px-4 text-xs font-medium transition-opacity hover:opacity-80"
          >
            <FiPhone
              size={13}
              className="text-[#D1841C]"
            />
            <span>+91 95480 01418</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@dpmc.in"
            className="flex items-center gap-2 pl-4 text-xs font-medium transition-opacity hover:opacity-80"
          >
            <FiMail
              size={13}
              className="text-[#D1841C]"
            />
            <span>info@dpmc.in</span>
          </a>

        </div>
      </div>
    </div>
  );
}
