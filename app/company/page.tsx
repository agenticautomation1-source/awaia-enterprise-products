import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Company | AWAIA - Enterprise AI Transformation, Governance & Digital Workforce",

  description:
    "AWAIA helps organizations design, govern and operationalize enterprise AI through Digital Workforce architectures, AI Governance frameworks, ISO/IEC 42001 readiness and capability development.",

  keywords: [
    "AWAIA",
    "Enterprise AI",
    "Digital Workforce",
    "AI Governance",
    "ISO 42001",
    "AI Transformation",
    "Responsible AI",
    "Agentic AI",
    "Capability Development",
    "Enterprise Automation",
    "AI Operating Model",
    "Human AI Collaboration",
  ],

  alternates: {
    canonical: "https://company.automatewithaiagent.com",
  },

  openGraph: {
    title:
      "AWAIA | Enterprise AI Transformation & Governance",

    description:
      "Designing Human + AI Operating Models for the Agentic Enterprise.",

    url: "https://company.automatewithaiagent.com",

    siteName: "AWAIA",

    type: "website",
  },
};

export default function CompanyPage() {
  return (
    <>
      <Navbar />

{/* HERO */}

<section className="relative h-screen min-h-[760px] overflow-hidden">

  <Image
    src="/images/company-hero-boardroom.webp"
    alt="AWAIA Enterprise AI Leadership"
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/25" />

  <div className="relative z-10 h-full">

    <div className="max-w-7xl mx-auto px-8 h-full">

      <div className="flex flex-col justify-center h-full pt-32 pb-22">

        <div
          className="
            inline-flex
            items-center
            w-fit
            px-5
            py-2
            rounded-full
            border
            border-white/25
            bg-white/10
            backdrop-blur-md
            text-white
            text-[11px]
            uppercase
            tracking-[0.3em]
            mb-10
          "
        >
          ABOUT AWAIA
        </div>

        <h1
          className="
            text-white
            font-light
            leading-[0.9]
            tracking-[-0.06em]
            max-w-5xl
            text-[4rem]
            md:text-[5.5rem]
            xl:text-[6rem]
          "
        >
          Designing Human + AI
<br />
Operating Models For
<br />
The Agentic Enterprise.
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            text-xl
            text-white/85
            leading-relaxed
          "
        >
          AWAIA helps organizations design, govern and operationalize
          enterprise AI through Digital Workforce architectures,
          AI Governance frameworks, ISO/IEC 42001 readiness,
          capability development and responsible AI adoption.
        </p>

 <Link
  href="/request-briefing"
  className="
    inline-flex
    items-center
    justify-center
    mt-10
    px-10
    h-16
    rounded-full
    bg-white
    text-black
    text-[15px]
    font-medium
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
  "
>
          Request Executive Briefing

          <ArrowRight className="w-4 h-4 ml-3" />
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* WHO WE ARE */}

      <section className="py-28 border-t bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl md:text-6xl font-light tracking-[-0.04em] max-w-4xl">
            Enterprise AI Transformation.
            <br />
            Built For Execution.
          </h2>

          <p className="mt-10 text-xl text-neutral-600 leading-relaxed max-w-4xl">
            AWAIA is an Enterprise AI advisory and implementation firm
            focused on helping organizations move beyond experimentation
            towards governed, scalable and measurable AI adoption.
          </p>

          <p className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-4xl">
            We work at the intersection of strategy, governance,
            architecture, Digital Workforce design and enterprise execution.
          </p>

        </div>
      </section>

      {/* WHAT WE DO */}

      <section className="py-28 border-t bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-16">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-5">
                Digital Workforce Design
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                Human + AI operating models built for enterprise execution.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-5">
                AI Governance
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                Governance frameworks, policies, controls and oversight mechanisms.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-5">
                ISO/IEC 42001
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                AI Management System readiness and implementation support.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-3xl mb-5">
                Enterprise Capability Development
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                Building internal AI competencies across leadership and technology teams.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OPERATING PRINCIPLES */}

      <section className="py-28 border-t bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-16">
            How We Approach Enterprise AI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="
rounded-[32px]
border
border-neutral-200
bg-white
p-10
transition-all
duration-300
hover:-translate-y-2
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:border-neutral-300
">
              <h3 className="text-3xl">
                Governed Before Automated
              </h3>
            </div>

            <div className="rounded-[32px] border border-neutral-200 p-10">
              <h3 className="text-3xl">
                Human Accountability First
              </h3>
            </div>

            <div className="rounded-[32px] border border-neutral-200 p-10">
              <h3 className="text-3xl">
                Enterprise Integration Over Experiments
              </h3>
            </div>

            <div className="rounded-[32px] border border-neutral-200 p-10">
              <h3 className="text-3xl">
                Long-Term Capability Over Short-Term Tools
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="py-28 border-t bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-16">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Banking & Financial Services",
              "Healthcare",
              "Manufacturing",
              "Retail & Commerce",
              "Logistics & Supply Chain",
              "Professional Services",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-[28px] border border-neutral-200 bg-white p-8"
              >
                <p className="text-xl">
                  {industry}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY AWAIA */}

      <section className="py-32 border-t bg-[#f9f9f8]">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-20">
            Why Organizations Engage AWAIA
          </h2>

          <div className="grid md:grid-cols-2 gap-y-10">

            <div className="text-4xl md:text-5xl font-light">
              Digital Workforce Design
            </div>

            <div className="text-4xl md:text-5xl font-light">
              AI Governance
            </div>

            <div className="text-4xl md:text-5xl font-light">
              ISO/IEC 42001 Readiness
            </div>

            <div className="text-4xl md:text-5xl font-light">
              Enterprise AI Architecture
            </div>

            <div className="text-4xl md:text-5xl font-light">
              Capability Development
            </div>

            <div className="text-4xl md:text-5xl font-light">
              Responsible AI Adoption
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-32 border-t bg-[#f9f9f8]">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.05em]">
            Let's Build Your
            <br />
            Enterprise AI Future.
          </h2>

          <Link
            href="/request-briefing"
            className="
inline-flex
items-center
justify-center
mt-12
px-10
py-5
rounded-full
bg-black
text-white
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
"
          >
            Request Executive Briefing

            <ArrowRight className="w-4 h-4 ml-3" />
          </Link>

        </div>
      </section>
    </>
  );
}