"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      fixed
      z-50
      transition-all
      duration-500
      ease-out

      ${
        scrolled
          ? `
            top-4
            left-1/2
            -translate-x-1/2
            w-[96%]
            max-w-[1500px]
            rounded-2xl
            bg-white/92
            backdrop-blur-xl
            shadow-[0_12px_50px_rgba(0,0,0,0.10)]
            border
            border-neutral-200
          `
          : `
            top-0
            left-0
            right-0
            bg-white/55
            backdrop-blur-xl
            border-b
            border-white/20
          `
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

        <Link
          href="https://automatewithaiagent.com"
          className="
          text-[20px]
          tracking-[0.18em]
          font-medium
          "
        >
          AWAIA
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[15px]">

          <a href="https://automatewithaiagent.com">
            Home
          </a>

          <a href="https://automatewithaiagent.com/capabilities">
            Capabilities
          </a>

          <a href="https://automatewithaiagent.com/enterprise-solutions">
            Enterprise Solutions
          </a>

          <a href="https://automatewithaiagent.com/iso-iec-42001-2023">
            ISO/IEC 42001:2023
          </a>

          <a href="https://automatewithaiagent.com/insights">
            Insights
          </a>

          <a href="https://automatewithaiagent.com/digital-workforce">
            Digital Workforce
          </a>

          <a href="https://automatewithaiagent.com/company">
            Company
          </a>

        </nav>

        <a
          href="https://automatewithaiagent.com/contact"
          className="
          px-8
          py-4
          rounded-full
          bg-black
          text-white
          text-sm
          font-medium
          transition-all
          duration-300
          hover:scale-105
          "
        >
          Request Briefing
        </a>

      </div>
    </header>
  );
}