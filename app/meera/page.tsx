import SignalBars from "@/components/ui/SignalBars";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import InstitutionalReach from "@/components/sections/InstitutionalReach";
import Architecture from "@/components/sections/Architecture";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";
import Footer from '@/components/layout/Footer';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MEERA™ Enterprise Voice Intelligence Platform",

  description:
    "MEERA™ is an enterprise voice intelligence platform delivering human-like multilingual conversations, authentication, workflow automation and secure customer engagement for banks, NBFCs, insurers and regulated enterprises.",

  keywords: [
    "MEERA",
    "Enterprise Voice Intelligence",
    "Conversational AI",
    "Voice AI Platform",
    "Banking AI",
    "Insurance AI",
    "NBFC AI",
    "AI Customer Service",
    "Enterprise AI",
    "Voice Automation",
    "AI Authentication",
    "BFSI AI",
    "AWAIA",
    "Automate With AI Agent"
  ],

  alternates: {
    canonical:
      "https://products.automatewithaiagent.com/meera",
  },

  openGraph: {
    title:
      "MEERA™ Enterprise Voice Intelligence Platform",

    description:
      "Human-like enterprise conversations with built-in authentication, compliance and workflow automation.",

    url:
      "https://products.automatewithaiagent.com/meera",

    siteName:
      "AWAIA",

    images: [
      {
        url:
          "/images/meera-og.jpg",

        width: 1200,
        height: 630,

        alt:
          "MEERA Enterprise Voice Intelligence Platform",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MEERA™ Enterprise Voice Intelligence Platform",

    description:
      "Human-like enterprise conversations with authentication, compliance and workflow automation.",

    images: [
      "/images/meera-og.jpg",
    ],
  },
};

export default function MeeraPage() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "SoftwareApplication",

            name:
              "MEERA Enterprise Voice Intelligence Platform",

            applicationCategory:
              "BusinessApplication",

            operatingSystem:
              "Web",

            brand: {
              "@type": "Brand",
              name: "AWAIA",
            },

            creator: {
              "@type": "Organization",
              name: "AWAIA",
              url:
                "https://automatewithaiagent.com",
            },

            description:
              "Enterprise Voice Intelligence Platform enabling multilingual customer engagement, authentication workflows, enterprise integrations and customer operations automation.",

            url:
              "https://products.automatewithaiagent.com/meera",
          }),
        }}
      />

      <main>



  <Navbar />
  
      {/* HERO */}


<section
  className="
    relative
    min-h-[100svh]
    overflow-hidden
    -mt-14
  "
>

  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      object-center
    "
  >
    <source
      src="/videos/meera-hero.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/15" />

  <div className="relative z-10 h-full flex items-start">

    <div
  className="
    max-w-7xl
    mx-auto
    px-8
    w-full
    pt-20
  "
>

<div
className="
mt-18
md:mt-16
w-full
max-w-[640px]

bg-white/22
backdrop-blur-xl
border
border-white/20
rounded-[32px]
p-6 md:p-10
shadow-[0_20px_80px_rgba(0,0,0,0.15)]
"
>

<div
  className="
    relative
    -top-4

    inline-flex
    items-center
    justify-center

    rounded-full
    bg-white/95

    px-6
    md:px-5

    h-5
    md:h-6

    text-[8px]
    md:text-[11px]

    font-medium

    tracking-[0.08em]
    uppercase

    whitespace-nowrap
  "
>
  MEERA • ENTERPRISE VOICE INTELLIGENCE PLATFORM
</div>


<h1 className="leading-[0.95] font-light">

  <span className="block text-[52px] tracking-[-0.03em]">
    Enterprise
  </span>

  <span className="block text-[52px] tracking-[-0.03em]">
    Voice Intelligence For
  </span>

  <span className="block text-[52px] tracking-[-0.03em]">
    <span className="text-[#5D6B87]">
      Regulated
    </span>{" "}
    Enterprises.
  </span>

</h1>

        <p className="text-lg text-neutral-900 leading-relaxed max-w-xl mt-4 font-medium">
          MEERA transforms customer conversations into
          authenticated, compliant and action-oriented
          enterprise workflows across banking, insurance,
          NBFC and regulated industries.
        </p>

        <div className="mt-7">

          <div className="text-[#2F4E7A] text-sm uppercase font-semibold tracking-[0.25em] mb-3">
            Enterprise Outcomes
          </div>

          <div className="space-y-2 text-neutral-900 font-medium">

            <div>✓ No waiting in IVR queues</div>

            <div>✓ 24×7×365 customer availability</div>

            <div>✓ No customer data leaves your environment</div>

            <div>✓ Authenticate before execution</div>

            <div>✓ Human-like multilingual conversations</div>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-3 items-center">

  <div className="mt-8 flex flex-wrap gap-3 items-center">

  <button
    className="
      w-[170px]
      h-[52px]
      bg-black
      text-white
      rounded-full
      text-[15px]
      font-medium
      flex
      items-center
      justify-center
      hover:scale-[1.02]
      transition-all
      duration-300
    "
  >
    Request Briefing
  </button>

  <button
    className="
      w-[170px]
      h-[52px]
      border
      border-white/40
      rounded-full
      bg-white/80
      backdrop-blur-sm
      text-[15px]
      font-medium
      flex
      items-center
      justify-center
      hover:bg-white
      transition-all
      duration-300
    "
  >
    Explore Architecture
  </button>

</div>

</div>

      </div>

    </div>

  </div>

</section>


<Architecture />
<ArchitectureDiagram />

<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Voice Intelligence Capabilities
    </p>

    <h2 className="text-5xl font-light mb-16">
      Human-like enterprise conversations at scale.
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

  <div
    className="
    rounded-[28px]
    border
    border-neutral-200
    p-8
    bg-white
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Multilingual Interaction
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Hindi</li>
      <li>✓ English</li>
      <li>✓ Hinglish</li>
      <li>✓ Regional Languages</li>
    </ul>
  </div>

  <div
    className="
    rounded-[28px]
    border
    border-neutral-200
    p-8
    bg-white
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Conversation Intelligence
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Context Awareness</li>
      <li>✓ Interrupt Handling</li>
      <li>✓ Natural Dialogue</li>
      <li>✓ Dynamic Responses</li>
    </ul>
  </div>

  <div
    className="
    rounded-[28px]
    border
    border-neutral-200
    p-8
    bg-white
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Enterprise Controls
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Authentication Layer</li>
      <li>✓ Audit Logging</li>
      <li>✓ Human Escalation</li>
      <li>✓ Policy Validation</li>
    </ul>
  </div>

</div>

  </div>

</section>






<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Enterprise Use Cases
    </p>

    <h2 className="text-5xl font-light mb-16">
      Enterprise Customer Operations
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  <div
    className="
    rounded-[28px]
    bg-white
    border
    border-neutral-200
    p-8
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Customer Service
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Service Requests</li>
      <li>✓ Complaint Handling</li>
      <li>✓ Account Queries</li>
      <li>✓ Ticket Creation</li>
    </ul>
  </div>

  <div
    className="
    rounded-[28px]
    bg-white
    border
    border-neutral-200
    p-8
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Collections
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ EMI Reminders</li>
      <li>✓ Recovery Campaigns</li>
      <li>✓ Payment Follow Ups</li>
      <li>✓ Settlement Workflows</li>
    </ul>
  </div>

  <div
    className="
    rounded-[28px]
    bg-white
    border
    border-neutral-200
    p-8
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Banking
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Balance Enquiry</li>
      <li>✓ Card Services</li>
      <li>✓ Transaction History</li>
      <li>✓ Service Requests</li>
    </ul>
  </div>

  <div
    className="
    rounded-[28px]
    bg-white
    border
    border-neutral-200
    p-8
    hover-lift
    shadow-[0_15px_40px_rgba(15,23,42,0.04)]
    hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
    transition-all
    duration-500
    "
  >
    <h3 className="text-xl mb-4">
      Customer Onboarding
    </h3>

    <ul className="space-y-3 text-neutral-600">
      <li>✓ Customer Verification</li>
      <li>✓ KYC Assistance</li>
      <li>✓ Application Tracking</li>
      <li>✓ Status Updates</li>
    </ul>
  </div>

</div>
  </div>

</section>





<section className="py-32 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="
      uppercase
      tracking-[0.35em]
      text-[11px]
      text-[#3F5E8C]
      mb-8
    ">
      Enterprise Data & Security
    </p>

    <h2 className="
      text-5xl
      md:text-6xl
      font-light
      tracking-[-0.02em]
      leading-[1.05]
      mb-16
      max-w-5xl
    ">
      Built for environments where data matters.
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Customer Conversations
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Voice interactions across support,
          collections, servicing and engagement
          workflows.
        </p>
      </div>

      {/* CARD 2 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Personally Identifiable Information
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Secure handling of customer profile,
          identity and regulated personal data.
        </p>
      </div>

      {/* CARD 3 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Authentication Data
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          OTP validation, DTMF workflows,
          consent capture and identity verification.
        </p>
      </div>

      {/* CARD 4 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Financial Information
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Account servicing, transaction inquiries,
          claims, policies and banking workflows.
        </p>
      </div>

      {/* CARD 5 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Call Recordings & Transcripts
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Conversation history, transcripts,
          summaries, actions and audit records.
        </p>
      </div>

      {/* CARD 6 */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          border
          border-neutral-200
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
          hover:-translate-y-2
          hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-2xl font-light mb-5">
          Enterprise Integrations
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          CRM, Core Banking, ERP,
          Knowledge Bases and enterprise platforms.
        </p>
      </div>

    </div>

  </div>

</section>




<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Integration Ecosystem
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      MEERA orchestrates enterprise systems instead of replacing them.
    </h2>

    <div className="grid lg:grid-cols-3 gap-12 items-center">

      {/* LEFT */}

      <div className="space-y-5">

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          CRM Systems
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Core Banking Platforms
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Loan Origination Systems
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Policy Administration Systems
        </div>

      </div>

      {/* CENTER */}

      <div
  className="
  border
  border-[#3F5E8C]
  rounded-[36px]
  bg-white
  p-12
  text-center
  relative
  "
>

        <div className="text-xs tracking-[0.3em] uppercase text-[#3F5E8C] mb-4">
          MEERA CORE
        </div>

        <div className="space-y-4">

          <div>Speech Engine</div>

          <div>Conversation Engine</div>

          <div>Authentication Layer</div>

          <div>Policy Engine</div>

          <div>Workflow Engine</div>

          <div>Analytics Layer</div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="space-y-5">

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          ERP Platforms
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Identity & Access Systems
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Knowledge Repositories
        </div>

        <div className="border border-neutral-200 bg-white rounded-2xl p-5 hover-lift">
          Payment & Transaction Systems
        </div>

      </div>

    </div>

    <div className="mt-16 grid md:grid-cols-4 gap-8">

      <div>
        <div className="text-[#3F5E8C] mb-2">
          CRM
        </div>

        <div className="text-neutral-600 text-sm">
          Customer profile and interaction history.
        </div>
      </div>

      <div>
        <div className="text-[#3F5E8C] mb-2">
          Core Systems
        </div>

        <div className="text-neutral-600 text-sm">
          Banking, insurance and enterprise platforms.
        </div>
      </div>

      <div>
        <div className="text-[#3F5E8C] mb-2">
          Security
        </div>

        <div className="text-neutral-600 text-sm">
          Identity providers, SSO and access controls.
        </div>
      </div>

      <div>
        <div className="text-[#3F5E8C] mb-2">
          Knowledge
        </div>

        <div className="text-neutral-600 text-sm">
          Enterprise documents, FAQs and repositories.
        </div>
      </div>

    </div>

  </div>

</section>

<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Enterprise Readiness
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Built for regulated environments where security,
      governance and control are non-negotiable.
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">Private Cloud</h3>
        <p className="text-neutral-600">
          Deploy within enterprise-controlled cloud environments.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">On-Premise</h3>
        <p className="text-neutral-600">
          Run entirely inside organizational infrastructure.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">Customer-Owned Data</h3>
        <p className="text-neutral-600">
          Conversations, transcripts and records remain under enterprise control.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">Audit Traceability</h3>
        <p className="text-neutral-600">
          Every interaction is logged and reviewable.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">Human Escalation</h3>
        <p className="text-neutral-600">
          Seamlessly transfer conversations when required.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <h3 className="text-xl mb-3">Role-Based Access</h3>
        <p className="text-neutral-600">
          Enterprise-grade access control and permissions.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Real Enterprise Use Cases
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Move beyond conversations and execute real business workflows.
    </h2>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* BANKING */}

      <div className="border border-neutral-200 rounded-[28px] bg-white p-8 hover-lift">

        <div className="text-xs uppercase tracking-[0.25em] text-[#3F5E8C] mb-6">
          Banking
        </div>

        <div className="space-y-4">

          <div className="text-neutral-500 text-sm">
            Customer
          </div>

          <div>
            I want to increase my transaction limit before travelling.
          </div>

          <div className="border-t pt-4 space-y-3 text-neutral-600">

            <div>✓ Authenticate customer</div>

            <div>✓ Check account profile</div>

            <div>✓ Validate policy rules</div>

            <div>✓ Create service request</div>

            <div>✓ Confirm request status</div>

          </div>

        </div>

      </div>

      {/* INSURANCE */}

      <div className="border border-neutral-200 rounded-[28px] bg-white p-8 hover-lift">

        <div className="text-xs uppercase tracking-[0.25em] text-[#3F5E8C] mb-6">
          Insurance
        </div>

        <div className="space-y-4">

          <div className="text-neutral-500 text-sm">
            Customer
          </div>

          <div>
            What is the status of my claim?
          </div>

          <div className="border-t pt-4 space-y-3 text-neutral-600">

            <div>✓ Verify identity</div>

            <div>✓ Access claim platform</div>

            <div>✓ Explain claim status</div>

            <div>✓ Provide next steps</div>

            <div>✓ Schedule escalation if required</div>

          </div>

        </div>

      </div>

      {/* NBFC */}

      <div className="border border-neutral-200 rounded-[28px] bg-white p-8 hover-lift">

        <div className="text-xs uppercase tracking-[0.25em] text-[#3F5E8C] mb-6">
          NBFC
        </div>

        <div className="space-y-4">

          <div className="text-neutral-500 text-sm">
            Customer
          </div>

          <div>
            I missed my EMI payment.
          </div>

          <div className="border-t pt-4 space-y-3 text-neutral-600">

            <div>✓ Verify customer</div>

            <div>✓ Retrieve dues</div>

            <div>✓ Offer payment options</div>

            <div>✓ Execute workflow</div>

            <div>✓ Generate confirmation</div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>







<InstitutionalReach />

<section className="py-40 border-t">
  <div className="
max-w-6xl
mx-auto
px-8
text-center
relative
rounded-[40px]
border
border-neutral-200
bg-white
shadow-[0_20px_80px_rgba(0,0,0,0.06)]
py-24
overflow-hidden
">

  <div className="absolute inset-0 pointer-events-none">

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-200/20 blur-[120px]" />

</div>

    <p className="
uppercase
tracking-[0.35em]
text-[11px]
font-medium
text-[#3F5E8C]
">
      Executive Briefing
    </p>

    <h2 className="
text-5xl
md:text-7xl
leading-[0.95]
font-light
mb-8
max-w-4xl
mx-auto
">
      Explore MEERA Inside Your Enterprise.
    </h2>

    <p className="text-xl text-gray-600 mb-12">
      Discuss deployment models, security requirements,
      compliance controls, and implementation strategy.
    </p>

<div className="flex justify-center">
  
<Link
  href="/request-briefing"
  className="
  inline-flex
  items-center
  justify-center
  min-w-[360px]
  px-12
  py-5
  rounded-full
  bg-black
  text-white
  font-medium
  text-lg
  hover:scale-105
  transition-all
  duration-300
  shadow-[0_12px_40px_rgba(0,0,0,0.25)]
"
>
  <span className="text-white">
    Request Executive Briefing →
  </span>
</Link>


</div>
</div>
</section>

</main>

</>
);
}