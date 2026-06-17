import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
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

      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
            Digital Workforce
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-[0.95] max-w-6xl">
            Designing Human + AI Operating Models
            <br />
            For The Agentic Enterprise.
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl mt-10 leading-relaxed">
            AWAIA helps organizations design, govern and
            operationalize Digital Workforces that combine
            AI agents, enterprise systems and human expertise.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              href="/request-briefing"
              className="px-8 py-4 bg-black text-white rounded-full"
            >
              Request Executive Briefing
            </Link>

            <a
              href="#architectures"
              className="px-8 py-4 border border-neutral-300 rounded-full"
            >
              Explore Architectures
            </a>
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
                Human teams operating through manual workflows and traditional enterprise systems.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-2xl mb-4">
                Digital Workforce
              </h3>

              <p className="text-neutral-600">
                AI-driven operational capabilities augmenting business execution.
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 hover-lift">
              <h3 className="text-2xl mb-4">
                Hybrid Workforce
              </h3>

              <p className="text-neutral-600">
                Humans, AI agents and enterprise systems working together as one operating model.
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
            Reference Architectures
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
            Ready To Design Your
            <br />
            Digital Workforce?
          </h2>

          <Link
            href="/request-briefing"
            className="
              inline-flex
              items-center
              px-10
              py-5
              bg-black
              text-white
              rounded-full
            "
          >
            Request Executive Briefing

            <ArrowRight className="w-4 h-4 ml-3" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}