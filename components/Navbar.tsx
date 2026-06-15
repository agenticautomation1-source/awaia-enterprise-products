"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
        z-[100]
        transition-all
        duration-500
        ease-out

        ${
          scrolled
            ? `
              top-5
              left-1/2
              -translate-x-1/2

              w-[82%]
              max-w-[1400px]

              rounded-[28px]

              bg-white/82
              backdrop-blur-xl

              border
              border-white/50

              shadow-[0_8px_30px_rgba(15,23,42,0.08)]
            `
            : `
              top-0
              left-0
              right-0

              bg-transparent

              border-transparent

              shadow-none

              backdrop-blur-0
            `
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-14
          flex
          items-center
          justify-between
        "
      >
  <Link
  href="https://automatewithaiagent.com"
  className="
    flex
    items-center
    shrink-0
  "
>
  <Image
    src="/images/awaia-logo-desktop.webp"
    alt="AWAIA"
    width={1200}
    height={380}
    priority
className="
  w-[118px]
  h-auto
  object-contain
"
  />
</Link>

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-6
            text-[14px]
            text-neutral-700
          "
        >
          <a href="https://automatewithaiagent.com">
            Home
          </a>

          <a href="https://automatewithaiagent.com/capabilities">
            Capabilities
          </a>

          <div
            className="relative"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <button
              className="
                flex
                items-center
                gap-2
              "
            >
              Enterprise Solutions

              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showSolutions && (
              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-3

                  min-w-[220px]

                  rounded-xl

                  bg-white

                  border
                  border-neutral-200

                  shadow-[0_16px_40px_rgba(0,0,0,0.08)]

                  overflow-hidden
                "
              >
                <Link
                  href="/meera"
                  className="
                    block
                    px-5
                    py-3
                    hover:bg-neutral-50
                  "
                >
                  MEERA
                </Link>

                <Link
                  href="/lea"
                  className="
                    block
                    px-5
                    py-3
                    hover:bg-neutral-50
                  "
                >
                  LEA
                </Link>
              </div>
            )}
          </div>

          <a href="/iso-iec-42001-2023">
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

      

        <button
          className="
            lg:hidden
            text-sm
            font-medium
          "
        >
          Menu
        </button>
      </div>
    </header>
  );
}