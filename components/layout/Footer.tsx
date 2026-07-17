import Link from "next/link";
import SocialSignature from "../shared/SocialSignature";

import {
  Globe,
  Building2,
  ShieldCheck,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

export default function Footer() {
  return (

    <>
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
{/*
  <div
   className="
    w-px
    h-10
    bg-white/40
    mt-[5px]
    shrink-0
  "

  /> 
*/}



<span
  className="
    text-white/90
    text-[16px]
    lg:text-[16px]
    md:text-[15px]
    text-[13px]
    leading-[1.3]
    font-extralight
    tracking-[0.01em]
    whitespace-nowrap
    md:whitespace-nowrap
    max-[768px]:whitespace-normal
    relative
    top-[4px]
  "
>
  {/* Automate With AI Agent */} 
</span>

</div>

        {/* Heading */}

        <div className="max-w-6xl mb-8">

<h2
  className="
    text-[30px]
    md:text-[38px]
    leading-[1.08]
    tracking-[-0.02em]
    font-light
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

<div
  className="
    mb-6
    grid
    gap-y-10

    lg:grid-cols-[minmax(260px,1.55fr)_repeat(3,minmax(160px,1fr))]
    lg:gap-x-12
    lg:items-start
  "
>

  {/* Solutions */}

 <div className="min-w-0">

<div className="relative mb-4">
  <Sparkles
    size={13}
    strokeWidth={1.6}
    className="absolute -left-7 top-[1px] text-[#8FB8FF]"
  />

  <div className="text-[11px] uppercase tracking-[0.25em] text-white/70">
    Solutions
  </div>
</div>

    <ul className="space-y-2">

      <li>
        <Link
          href="/meera"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          MEERA
        </Link>
      </li>

      <li>
        <Link
          href="/lea"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          LEA
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

 <div className="min-w-0">

<div className="relative mb-4">

  <BriefcaseBusiness
    size={13}
    strokeWidth={1.6}
    className="absolute -left-7 top-[1px] text-[#8FB8FF]"
  />

  <div
    className="
      text-[11px]
      uppercase
      tracking-[0.25em]
      text-white/70
    "
  >
    Advisory
  </div>

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

  <div className="min-w-0">

<div className="relative mb-4">

  <Building2
    size={13}
    strokeWidth={1.6}
    className="absolute -left-7 top-[1px] text-[#8FB8FF]"
  />

  <div
    className="
      text-[11px]
      uppercase
      tracking-[0.25em]
      text-white/70
    "
  >
    Company
  </div>

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
    href="https://company.automatewithaiagent.com/contact"
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

  <div className="min-w-0">

 <div className="relative mb-4">

  <ShieldCheck
    size={13}
    strokeWidth={1.6}
    className="absolute -left-7 top-[1px] text-[#8FB8FF]"
  />

  <div
    className="
      text-[11px]
      uppercase
      tracking-[0.25em]
      text-white/70
    "
  >
    Legal
  </div>

</div>

    <ul className="space-y-2">

      <li>
        <a
          href="https://company.automatewithaiagent.com/privacy-policy"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Privacy Policy
        </a>
      </li>

      <li>
        <a
          href="https://company.automatewithaiagent.com/cookie-policy"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Cookie Policy
        </a>
      </li>

      <li>
        <a
          href="https://company.automatewithaiagent.com/disclaimer"
          style={{ color: "rgba(255,255,255,0.90)" }}
          className="text-[15px] font-light tracking-[-0.01em] transition-colors duration-300 hover:text-white"
        >
          Disclaimer
        </a>
      </li>

    </ul>

  </div>

</div>
<SocialSignature />

<div
  className="mt-6 mb-6 h-px"
  style={{
    background:
      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.16) 20%, rgba(255,255,255,.32) 50%, rgba(255,255,255,.16) 80%, transparent 100%)",
  }}
/>

{/* Bottom */}

        <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-3
    gap-6
    items-center
    text-center
    lg:text-left
  "
>

          <div className="text-[13px] text-[#E2E8F0]">
            © 2026 AWAIA.  All rights reserved.
          </div>

          <div className="flex justify-center">

<a
  href="https://automatewithaiagent.com"
  className="
    inline-flex
    items-center
    gap-2
    text-[13px]
    tracking-[0.03em]
    !text-[#E2E8F0]
    hover:!text-white
    transition-colors
  "
>
  <Globe
    size={15}
    strokeWidth={1.5}
    className="text-[#8FB8FF]"
  />

  automatewithaiagent.com
</a>



          </div>

          <div
            className="
text-[10px]
uppercase
tracking-[0.22em]
text-[#D7DEE8]
text-center
lg:text-right
"
          >
             {/* Enterprise AI • AI Governance • Digital Workforce */} 
             
          </div>

        </div>


      </div>

    </footer>


  
  </>

  );
}