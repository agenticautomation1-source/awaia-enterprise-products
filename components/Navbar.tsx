"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    z-[9999]
    transition-all
    duration-500
    ease-out

    ${
      scrolled
        ? `
          top-3
          left-1/2
          -translate-x-1/2

          w-[94%]
          lg:w-[82%]

          max-w-[1400px]

          rounded-[18px]
          lg:rounded-[28px]

          bg-white/92
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
        `
    }
  `}
>
      <div
  className="
    max-w-7xl
    mx-auto
    px-4
    md:px-6
    h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          href="https://automatewithaiagent.com"
          className="
            flex
            items-center
            shrink-0
          "
        >
          <Image
            src={
              scrolled
                ? "/images/awaia-logo-dark.png"
                : "/images/awaia-logo-white.png"
            }
            alt="AWAIA"
            width={1200}
            height={380}
            priority
            className="
  w-[105px]
  md:w-[118px]
  h-auto
  object-contain
"
          />
        </Link>

        {/* Navigation */}

        <nav
  className={`
    hidden
    lg:flex
    items-center
    gap-6
    text-[14px]
    font-medium
    transition-colors
    duration-300

    ${
      scrolled
        ? "text-neutral-700"
        : "text-white"
    }
  `}
>
          <a
            href="https://automatewithaiagent.com"
            className="hover:opacity-70 transition"
          >
            Home
          </a>

          {/* Solutions Dropdown */}

          <div
            className="relative"
            onMouseEnter={() => setShowSolutions(true)}
/*            onMouseLeave={() => setShowSolutions(false)} */
          >
            <button
              className="
                flex
                items-center
                gap-2
                hover:opacity-70
                transition
              "
            >
              Solutions

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
    onMouseLeave={() => setShowSolutions(false)}
    className="
      absolute
      top-full
      left-0
      pt-2
      min-w-[280px]
      rounded-xl
      bg-white
      border
      border-neutral-200
      shadow-[0_16px_40px_rgba(0,0,0,0.08)]
      overflow-hidden
      text-neutral-900
      z-[99999]
    "
  >
         		 
				<Link
  href="/meera"
  className="
    block
    px-5
    py-4
    text-neutral-900
    hover:bg-neutral-50
  "
>
  <div className="font-medium">
    MEERA™
  </div>

  <div className="mt-1 text-xs text-neutral-500">
    Enterprise Voice Intelligence Platform
  </div>
</Link>

<Link
  href="/lea"
  className="
    block
    px-5
    py-4
    text-neutral-900
    hover:bg-neutral-50
  "
>
  <div className="font-medium">
    LEA™
  </div>

  <div className="mt-1 text-xs text-neutral-500">
    Legal Enforcement Assistant
  </div>
</Link>

<a
  href="https://products.automatewithaiagent.com/digital-workforce"
  className="
    block
    px-5
    py-4
    text-neutral-900
    hover:bg-neutral-50
  "
>
  <div className="font-medium">
    Digital Workforce
  </div>

  <div className="mt-1 text-xs text-neutral-500">
    AI Powered Digital Workers
  </div>
</a>
				
				
              </div>
            )}
          </div>

          <a
            href="https://automatewithaiagent.com/iso-iec-42001-2023/"
            className="hover:opacity-70 transition"
          >
            ISO/IEC 42001:2023
          </a>

          <Link
            href="/request-briefing"
            className="hover:opacity-70 transition"
          >
            Executive Briefing
          </Link>

          <a
            href="https://automatewithaiagent.com/insights"
            className="hover:opacity-70 transition"
          >
            Insights
          </a>

          <a
           href="https://company.automatewithaiagent.com"
            className="hover:opacity-70 transition"
          >
            Company
          </a>
        </nav>

        
        {/* MOBILE MENU BUTTON */}

{/* MOBILE MENU BUTTON */}

<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="
    lg:hidden
    fixed
    top-4
    right-4

    w-11
    h-11

    rounded-full

    bg-black
    text-white

    flex
    items-center
    justify-center

    z-[99999]
  "
>
  {mobileMenuOpen ? (
    <X
      size={20}
      strokeWidth={2.5}
      color="#ffffff"
    />
  ) : (
    <Menu
      size={20}
      strokeWidth={2.5}
      color="#ffffff"
    />
  )}
</button>


</div>

{mobileMenuOpen && (
  <div
    onClick={() => setMobileMenuOpen(false)}
className="
  lg:hidden
  fixed

  top-0
  right-0

  h-screen
  w-[88%]
  max-w-[380px]

bg-black/96
backdrop-blur-xl

  border-l
  border-white/10

  z-[100000]

  flex
  flex-col

  shadow-[-30px_0_80px_rgba(0,0,0,0.6)]
"
>

    {/* TOP BAR */}

    <div
      className="
        flex
        items-center
        justify-between

        px-6
        pt-6
        pb-8
      "
    >
      <Image
        src="/images/awaia-logo-white.png"
        alt="AWAIA"
        width={140}
        height={40}
        className="w-[120px] h-auto"
      />

      <button
        onClick={() => setMobileMenuOpen(false)}
        className="
          w-11
          h-11
          rounded-full

          border
          border-white/15

          flex
          items-center
          justify-center

          text-white
        "
      >
        <X className="w-5 h-5" />
      </button>
    </div>

    {/* MENU */}

<div
  className="
    flex-1
    px-6
    overflow-y-auto
    text-white
    opacity-100
  "
>

  <div className="space-y-10">

    <a
      href="https://automatewithaiagent.com"
      onClick={() => setMobileMenuOpen(false)}
      className="
        block
        text-[24px]
leading-[1]
font-light
tracking-[-0.03em]
        text-white
      "
    >
      Home
    </a>

    <div>
      <div
        className="
          text-[11px]
          uppercase
          tracking-[0.3em]
          text-neutral-500
          mb-5
        "
      >
        Solutions
      </div>

      <div className="space-y-5">

        <Link
          href="/meera"
          onClick={() => setMobileMenuOpen(false)}
          className="
            block
            text-[28px]
            text-white
            font-light
          "
        >
          MEERA
        </Link>

        <Link
          href="/lea"
          onClick={() => setMobileMenuOpen(false)}
          className="
            block
            text-[28px]
            text-white
            font-light
          "
        >
          LEA
        </Link>

        <a
          href="https://automatewithaiagent.com/digital-workforce"
          onClick={() => setMobileMenuOpen(false)}
          className="
            block
            text-[28px]
            text-white
            font-light
          "
        >
          Digital Workforce
        </a>

      </div>
    </div>

    <a
      href="https://automatewithaiagent.com/iso-iec-42001-2023/"
      onClick={() => setMobileMenuOpen(false)}
      className="
        block
        text-[24px]
leading-[1]
font-light
tracking-[-0.03em]
        text-white
      "
    >
      ISO/IEC 42001
    </a>

    <a
      href="https://automatewithaiagent.com/insights"
      onClick={() => setMobileMenuOpen(false)}
      className="
        block
        text-[24px]
leading-[1]
font-light
tracking-[-0.03em]
        text-white
      "
    >
      Insights
    </a>

    <a
      href="https://company.automatewithaiagent.com"
      onClick={() => setMobileMenuOpen(false)}
      className="
        block
        text-[24px]
leading-[1]
font-light
tracking-[-0.03em]
        text-white
      "
    >
      Company
    </a>

  </div>

</div>

    {/* CTA */}

    <div
      className="
        px-6
        pb-8
        pt-6
        border-t
        border-white/10
      "
    >
<Link
  href="/request-briefing"
  onClick={() => setMobileMenuOpen(false)}
className="
  flex
  items-center
  justify-between

  rounded-full

  bg-white

  px-6
  h-[60px]

  font-medium
  text-[16px]

  text-[#111111]

"
>
        <span className="text-black !text-black opacity-100">
  Request Executive Briefing
</span>

       <span className="text-black !text-black opacity-100">
  →
</span>

      </Link>
    </div>

  </div>
)}
</header>
  );
}