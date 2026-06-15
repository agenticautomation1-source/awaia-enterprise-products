"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [solutionsOpen, setSolutionsOpen] = useState(false);

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
          top-5
          left-1/2
          -translate-x-1/2

          w-[92%]
          max-w-[1380px]

          rounded-full

          bg-white/88
          backdrop-blur-[24px]

          border
          border-white/60

          shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        `
        : `
          top-0
          left-0
          right-0

          bg-white/45
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
      h-[72px]
      flex
      items-center
      justify-between
    "
  >
    <Link
      href="/"
      className="
        text-[20px]
        tracking-[0.18em]
        font-medium
        text-neutral-900
      "
    >
      AWAIA
    </Link>

    <nav
      className="
        hidden
        xl:flex
        items-center
        gap-8
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
        onMouseEnter={() => setSolutionsOpen(true)}
        onMouseLeave={() => setSolutionsOpen(false)}
      >
        <button
          className="
            flex
            items-center
            gap-2
          "
        >
          Enterprise Solutions

          <ChevronDown size={16} />
        </button>

        {solutionsOpen && (
          <div
            className="
              absolute
              top-full
              left-0
              mt-4
              w-[240px]

              bg-white
              rounded-2xl

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
        xl:hidden
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
