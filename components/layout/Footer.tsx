import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2b2f34]">

      {/* Frost / Metallic Texture */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 15%, rgba(255,255,255,0.08), transparent 35%),
            radial-gradient(circle at 85% 20%, rgba(255,255,255,0.06), transparent 30%),
            linear-gradient(
              180deg,
              rgba(255,255,255,0.03),
              rgba(255,255,255,0.01)
            )
          `,
        }}
      />

      {/* Ambient Glow */}

      <div
        className="absolute top-0 left-0 w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(190,200,215,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(190,200,215,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">

        {/* Logo */}

     <div className="mb-6 flex items-center gap-5">

  <img
    src="/images/awaia-logo-white.png"
    alt="AWAIA"
    className="h-12 w-auto"
  />

  <div className="w-px h-10 bg-white/40 mt-[5px]" />

<span
  className="
    text-white/90
    text-[18px]
    font-extralight
    tracking-[0.01em]
    whitespace-nowrap
    relative
    top-[5px]
  "
>
  Automate With AI Agent
</span>

</div>

        {/* Heading */}

        <div className="max-w-6xl mb-8">

  <h2
    className="
    text-[34px]
md:text-[42px]
leading-[1.18]
tracking-[0em]
font-extra  light
      text-white
    "
  >
            Designing Human + AI Operating Models
            <br />
            For The Agentic Enterprise.
          </h2>

        </div>

        {/* Capability Strip */}

        <div
  className="
    flex
    flex-wrap
    gap-x-8
    gap-y-3
    mb-6
    text-[11px]
    uppercase
    tracking-[0.22em]
    text-[#E2E8F0]
  "
>
  <span className="flex items-center gap-2">
    <span
  className="
    w-1.5
    h-1.5
    rounded-full
    bg-[#8FB8FF]
    shadow-[0_0_10px_rgba(143,184,255,0.8)]
  "
/>
    Enterprise AI Systems
  </span>

  <span className="flex items-center gap-2">
 <span
  className="
    w-1.5
    h-1.5
    rounded-full
    bg-[#8FB8FF]
    shadow-[0_0_10px_rgba(143,184,255,0.8)]
  "
/>
    AI Governance
  </span>

  <span className="flex items-center gap-2">
 <span
  className="
    w-1.5
    h-1.5
    rounded-full
    bg-[#8FB8FF]
    shadow-[0_0_10px_rgba(143,184,255,0.8)]
  "
/>
    Digital Workforce
  </span>

  <span className="flex items-center gap-2">
 <span
  className="
    w-1.5
    h-1.5
    rounded-full
    bg-[#8FB8FF]
    shadow-[0_0_10px_rgba(143,184,255,0.8)]
  "
/>
    Responsible Adoption
  </span>
</div>
        <div className="h-px bg-white/15 mb-6" />

{/* Columns */}

<div className="flex justify-between mb-6">

  {/* Solutions */}

  <div>

    <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
      Solutions
    </div>

    <ul className="space-y-2">

      <li>
        <Link
          href="/meera"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          MEERA™
        </Link>
      </li>

      <li>
        <Link
          href="/lea"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          LEA™
        </Link>
      </li>

      <li>
        <Link
          href="/digital-workforce"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Digital Workforce
        </Link>
      </li>

    </ul>

  </div>

  {/* Advisory */}

  <div>

    <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
      Advisory
    </div>

    <ul className="space-y-2">

      <li>
        <a
          href="https://automatewithaiagent.com/iso-42001/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          ISO/IEC 42001:2023
        </a>
      </li>

      <li>
        <Link
          href="/request-briefing"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Capability Enablement
        </Link>
      </li>

    </ul>

  </div>

  {/* Company */}

  <div>

    <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
      Company
    </div>

    <ul className="space-y-2">

      <li>
        <Link
          href="https://company.automatewithaiagent.com"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Company
        </Link>
      </li>

      <li>
        <a
          href="https://automatewithaiagent.com/contact/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Contact
        </a>
      </li>

      <li>
        <a
          href="https://automatewithaiagent.com/insights/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Insights
        </a>
      </li>

    </ul>

  </div>

  {/* Legal */}

  <div>

    <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
      Legal
    </div>

    <ul className="space-y-2">

      <li>
        <a
          href="https://automatewithaiagent.com/privacy-policy/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Privacy Policy
        </a>
      </li>

      <li>
        <a
          href="https://automatewithaiagent.com/cookie-policy/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Cookie Policy
        </a>
      </li>

      <li>
        <a
          href="https://automatewithaiagent.com/disclaimer/"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Disclaimer
        </a>
      </li>

    </ul>

  </div>

</div>
        <div className="h-px bg-white/15 mb-5" />

        {/* Bottom */}

        <div className="grid lg:grid-cols-3 gap-4 items-center">

          <div className="text-[13px] text-[#E2E8F0]">
            © 2026 AWAIA™ (Automate With AI Agent). All rights reserved.
          </div>

          <div className="text-center">
<a
  href="https://automatewithaiagent.com"
  className="
    text-[13px]
    tracking-[0.03em]
    !text-[#E2E8F0]
    hover:!text-white
    transition-colors
  "
>
  automatewithaiagent.com
</a>
          </div>

          <div
            className="
              text-right
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#D7DEE8]
            "
          >
            Enterprise AI • AI Governance • Digital Workforce
          </div>

        </div>

      </div>

    </footer>
  );
}