"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [showSolutions, setShowSolutions] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 60);
};

```
window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};
```

}, []);

return (
<header
className={`
fixed
z-[100]
transition-all
duration-500
ease-out

```
    ${
      scrolled
        ? `
          top-3
          left-1/2
          -translate-x-1/2

          w-[84%]
          max-w-[1520px]

          rounded-[18px]

          bg-white/96
          backdrop-blur-xl

          border
          border-neutral-100

          shadow-[0_6px_24px_rgba(15,23,42,0.05)]
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
  <div
    className="
      max-w-7xl
      mx-auto

      px-8

      h-[58px]

      flex
      items-center
      justify-between
    "
  >
    <Link
      href="https://automatewithaiagent.com"
      className="
        text-[18px]
        tracking-[0.12em]
        font-medium
        text-neutral-900
      "
    >
      AWAIA
    </Link>

    <nav
      className="
        hidden
        lg:flex
        items-center

        gap-7

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

    <a
      href="https://automatewithaiagent.com/contact"
      className="
        hidden
        md:inline-flex

        items-center
        justify-center

        px-5
        py-2.5

        rounded-full

        bg-black
        text-white

        text-[13px]
        font-medium

        transition-all
        duration-300

        hover:scale-105
      "
    >
      Request Briefing
    </a>

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
```

);
}
