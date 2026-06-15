"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [showSolutions, setShowSolutions] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 80);
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
z-50
transition-all
duration-500
ease-out

```
    ${
      scrolled
        ? `
          top-5
          left-1/2
          -translate-x-1/2

          w-[89%]
          max-w-[1640px]

          rounded-[22px]

          bg-white/94
          backdrop-blur-[20px]

          border
          border-neutral-100

          shadow-[0_8px_30px_rgba(15,23,42,0.06)]
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
      px-10
      h-[68px]
      flex
      items-center
      justify-between
    "
  >
    <Link
      href="https://automatewithaiagent.com"
      className="
        text-[22px]
        tracking-[0.14em]
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
        gap-8
        text-[15px]
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
            cursor-pointer
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
              mt-4

              min-w-[220px]

              rounded-2xl
              bg-white

              border
              border-neutral-200

              shadow-[0_20px_60px_rgba(0,0,0,0.08)]

              overflow-hidden
            "
          >
            <Link
              href="/meera"
              className="
                block
                px-6
                py-4
                hover:bg-neutral-50
                transition-colors
              "
            >
              MEERA
            </Link>

            <Link
              href="/lea"
              className="
                block
                px-6
                py-4
                hover:bg-neutral-50
                transition-colors
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

        px-6
        py-3

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
