import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Workforce",

  description:
    "Designing Human + AI operating models for the Agentic Enterprise. Explore Digital Workforce architectures across Banking, Healthcare, Logistics and Retail.",

  alternates: {
    canonical:
      "https://products.automatewithaiagent.com/digital-workforce",
  },

  openGraph: {
    title: "Digital Workforce | AWAIA",

    description:
      "Designing Human + AI operating models for the Agentic Enterprise.",

    url:
      "https://products.automatewithaiagent.com/digital-workforce",

    siteName: "AWAIA",

    type: "website",
  },
};

export default function DigitalWorkforcePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      {/* HERO */}

<section className="relative min-h-screen overflow-hidden">

{/* Desktop Hero */}
<Image
  src="/images/digital-workforce-hero.png"
  alt="Digital Workforce"
  fill
  priority
  sizes="100vw"
  className="
    hidden
    md:block
    object-cover
    object-[70%_center]
  "
/>

{/* Mobile Hero */}
<Image
  src="/images/digital-workforce-hero-mobile.png"
  alt="Digital Workforce"
  fill
  priority
  sizes="100vw"
  className="
    block
    md:hidden
    object-cover
    object-center
  "
/>

  <>
  <div className="absolute inset-0 bg-black/50" />
  
</>

  <div className="relative z-10 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-8 w-full">

      <p
        className="
          uppercase
          tracking-[0.35em]
          text-[11px]
          text-white/80
          mb-8
        "
      >
        DIGITAL WORKFORCE
      </p>

      <h1
        className="
          text-white
          text-5xl
          md:text-7xl
          max-w-5xl
          font-light
          leading-[0.95]
          
        "
      >
        Designing Human + AI Operating Models
        <br />
        For The Agentic Enterprise.
      </h1>

      <p
        className="
          text-xl
          text-white/80
          max-w-2xl
          mt-10
          leading-relaxed
        "
      >
        AWAIA helps organizations design, govern and
        operationalize Digital Workforces that combine
        AI agents, enterprise systems and human expertise
        into a single operating model.
      </p>

      <div className="flex flex-wrap gap-4 mt-12">

        <Link
          href="/request-briefing"
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            bg-white
            text-black
            rounded-full
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Schedule Executive Workshop 

          <ArrowRight
            className="
              w-4
              h-4
              ml-3
            "
          />
        </Link>

<a
  href="#architectures"
  className="
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-full
    border
    border-white/70
    !text-white
    bg-white/10
    backdrop-blur-md
    font-light
    shadow-[0_8px_30px_rgba(255,255,255,0.08)]
    hover:bg-white/20
    hover:border-white
    transition-all
    duration-300
  "
>
  Explore Architectures
</a>
      </div>

    </div>
  </div>

</section>

      {/* WORKFORCE EVOLUTION */}

      <section className="py-28 border-t">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light mb-16">
            The Workforce Is Changing.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-2xl mb-4">
                Traditional Workforce
              </h3>

              <p className="text-neutral-600">
                Human teams operating through manual workflows and
                traditional enterprise systems.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-2xl mb-4">
                Digital Workforce
              </h3>

              <p className="text-neutral-600">
                AI-driven operational capabilities augmenting business
                execution and decision-making.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-2xl mb-4">
                Hybrid Workforce
              </h3>

              <p className="text-neutral-600">
                Humans, AI agents and enterprise systems working together
                as a unified operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY ARCHITECTURES */}

      <section
        id="architectures"
        className="py-28 border-t"
      >
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
            REFERENCE ARCHITECTURES
          </p>

          <h2 className="text-5xl font-light mb-16">
            Industry Workforce Patterns
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-6">
                Banking & Financial Services
              </h3>

              <ul className="space-y-3 text-neutral-600">
                <li>Customer Service</li>
                <li>Collections</li>
                <li>KYC & Onboarding</li>
                <li>Fraud Operations</li>
                <li>Regulatory Readiness</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-6">
                Healthcare
              </h3>

              <ul className="space-y-3 text-neutral-600">
                <li>Patient Engagement</li>
                <li>Claims Administration</li>
                <li>Care Coordination</li>
                <li>Clinical Documentation</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-6">
                Supply Chain & Logistics
              </h3>

              <ul className="space-y-3 text-neutral-600">
                <li>Shipment Visibility</li>
                <li>Vendor Coordination</li>
                <li>Exception Management</li>
                <li>Operations Control</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-6">
                Retail & Commerce
              </h3>

              <ul className="space-y-3 text-neutral-600">
                <li>Customer Engagement</li>
                <li>Order Support</li>
                <li>Inventory Coordination</li>
                <li>Returns Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8 leading-[0.95]">
            Build Your Enterprise
            <br />
            Digital Workforce.
          </h2>

          <Link
            href="/request-briefing"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-5
              bg-black
              !text-white
              rounded-full
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
            "
          >
            <span className="!text-white">
              Discuss Your Digital Workforce
            </span>

            <ArrowRight
              className="
                w-4
                h-4
                ml-3
                !text-white
                stroke-white
              "
            />
          </Link>
        </div>
      </section>
    </>
  );
}   