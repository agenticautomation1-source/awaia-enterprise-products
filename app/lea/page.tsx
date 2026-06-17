import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Database,
  Building2,
  Mail,
  Phone,
  Globe,
  FileText,
  Network,
  Package,
  Lock,
  ArrowRight,
  CheckCircle2,
  Folder,
  Users,
} from "lucide-react";


export const metadata: Metadata = {
  title:
    "LEA™ Legal Enforcement Assistant",

  description:
    "LEA™ is an Enterprise Investigation Intelligence and Decision Support Platform from AWAIA (Automate With AI Agent) that helps banks, NBFCs, insurers and regulated institutions accelerate response readiness for regulatory, investigative and law-enforcement requests.",

  keywords: [
    "LEA",
    "Legal Enforcement Assistant",
    "Investigation Intelligence",
    "Decision Support Platform",
    "Regulatory Intelligence",
    "Enterprise Investigation Platform",
    "Regulatory Response Management",
    "Law Enforcement Requests",
    "BFSI Compliance",
    "Financial Crime Investigation",
    "AML Investigation",
    "Case Intelligence",
    "Regulatory Technology",
    "Enterprise Intelligence Platform",
    "AWAIA",
    "Automate With AI Agent",
  ],

  alternates: {
    canonical:
      "https://products.automatewithaiagent.com/lea",
  },

  openGraph: {
    title:
      "LEA™ Legal Enforcement Assistant",

    description:
      "Enterprise Investigation Intelligence and Decision Support Platform for BFSI institutions.",

    url:
      "https://products.automatewithaiagent.com/lea",

    siteName:
      "AWAIA",

    type:
      "website",

    images: [
      {
        url:
          "/images/lea-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "LEA Legal Enforcement Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LEA™ Legal Enforcement Assistant",

    description:
      "Enterprise Investigation Intelligence Platform from AWAIA.",

    images: [
      "/images/lea-og.jpg",
    ],
  },
};


export default function LeaPage() {
  const journey = [
    "Request Intake",
    "Request Understanding",
    "Record Discovery",
    "Information Aggregation",
    "Cross-System Correlation",
    "Response Intelligence",
    "Package Assembly",
    "Human Decision Desk",
  ];

  
return (
<>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",

        "@type": "SoftwareApplication",

        name:
          "LEA Legal Enforcement Assistant",

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
          "Enterprise Investigation Intelligence and Decision Support Platform for regulatory, investigative and law-enforcement response readiness.",

        url:
          "https://products.automatewithaiagent.com/lea",
      }),
    }}
  />

  <Navbar />


    <Navbar />

    <main className="bg-white text-neutral-900 overflow-x-hidden">

<section className="relative h-screen overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/videos/lea-hero.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/10" />

  <div className="relative z-10 h-full flex items-center">

  <div className="max-w-7xl mx-auto px-4 lg:px-0 w-full">

    <div
  className="
  max-w-[630px]
  mt-12
bg-white/18
backdrop-blur-md
border
border-white/20
rounded-[32px]
p-12
lg:p-12
shadow-[0_20px_80px_rgba(0,0,0,0.15)]
  "
>


<p
  className="
  inline-flex
  items-center
  uppercase
  tracking-[0.25em]
  text-xs
  font-semibold
  text-neutral-800
  px-4
  py-2
  rounded-full
  bg-white/60
  backdrop-blur-sm
  border
  border-white/30
  mb-12
  "
>

          LEA • Legal Enforcement Assistant
        </p>

<h1
  className="
  text-[2rem]
  sm:text-[3.4rem]
  lg:text-[4.2rem]
          font-light
          leading-[0.88]
          lg:leading-[0.90]
          tracking-[-0.04em]
          "
        >
          Decision Support
          <br />
          Platform For
          <br />
          <span className="text-[#3F5E8C]">
            BFSI Regulatory
          </span>
          <br />
          & Legal Responses.
        </h1>

        <p className="mt-8 text-lg text-neutral-900 leading-relaxed max-w-2xl">
          LEA autonomously discovers, collects,
          correlates and organizes enterprise records
          across banking systems to accelerate response
          readiness for regulatory and law-enforcement requests.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

<Link
  href="/request-briefing"
  className="
    w-[240px]
    h-[64px]
    flex
    items-center
    justify-center
    bg-black
    text-white
    rounded-full
    text-[18px]
    font-normal
    tracking-[-0.01em]
    hover:scale-105
    transition
    duration-300
  "
>
  Request Briefing
</Link>

<button
  className="
    w-[240px]
    h-[64px]

    flex
    items-center
    justify-center

    border
    border-gray-300

    rounded-full

    bg-white/70
    backdrop-blur-sm

    text-[18px]
    font-normal
    tracking-[-0.01em]

    hover:bg-white

    transition-all
    duration-300
  "
>
  Explore Architecture
</button>

<div className="mt-8">

  <Link
    href="/meera"
    className="
      text-[#3F5E8C]
      hover:underline
      text-lg
      font-medium
    "
  >
    Explore MEERA™ Enterprise Voice Intelligence Platform →
  </Link>

</div>


        </div>

      </div>

    </div>

  </div>

</section>




{/* LEA VIDEO */}


{/* =======================================================
    FROM MANUAL COORDINATION TO RESPONSE READINESS
======================================================= */}

<section className="py-28 border-t border-neutral-200">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-16">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Why LEA Exists
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Transforming fragmented
        <br />
        coordination into structured
        <br />
        response readiness.
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-0 border border-neutral-200">

      {/* LEFT */}

      <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-neutral-200">

        <div className="mb-12">

          <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-4">
            Traditional Process
          </p>

          <h3 className="text-3xl font-light">
            Manual Coordination
          </h3>

        </div>

        <div className="space-y-8">

          {[
            "Agency email arrives",
            "Requests routed manually",
            "Branch follow-ups initiated",
            "Multiple teams involved",
            "Records collected through emails",
            "Spreadsheet-based tracking",
            "Response assembly delayed",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-neutral-300" />

              <span className="text-neutral-600 text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT */}

<div className="p-12 md:p-16 bg-[#F8F8F7]">

  <div className="mb-12">

    <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-4">
      LEA Workflow
    </p>

    <h3 className="text-3xl font-light">
      Structured Response Readiness
    </h3>

  </div>

  <div className="space-y-10">

    {[
      {
        step: "01",
        title: "Request Intake",
        desc: "Agency communication automatically registered.",
      },
      {
        step: "02",
        title: "Enterprise Discovery",
        desc: "Relevant records identified across systems.",
      },
      {
        step: "03",
        title: "Correlation Engine",
        desc: "Information consolidated and organized.",
      },
      {
        step: "04",
        title: "Review Package",
        desc: "Structured response package generated.",
      },
      {
        step: "05",
        title: "Audit Archive",
        desc: "Lifecycle retained for traceability.",
      },
    ].map((item) => (

      <div
        key={item.step}
        className="flex gap-6 items-start"
      >

        <div className="text-[#3F5E8C] text-2xl font-light min-w-[60px]">
          {item.step}
        </div>

        <div>

          <h4 className="text-lg mb-2">
            {item.title}
          </h4>

          <p className="text-neutral-500">
            {item.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>





      
    </div>

  </div>

</section>





{/* =======================================================
    LEA OPERATIONAL JOURNEY
======================================================= */}

<section className="py-24 lg:py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="max-w-4xl mb-20 lg:mb-32">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Operational Journey
      </p>

      <h2
        className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        lg:text-7xl
        font-light
        leading-[0.95]
        tracking-[-0.04em]
        "
      >
        From agency request
        <br />
        to decision-ready
        <br />
        response package.
      </h2>

    </div>

    <div className="relative">

      {/* CENTER SIGNAL LINE */}

      <div
        className="
        absolute
        left-6
        lg:left-1/2
        top-0
        bottom-0
        w-px
        bg-neutral-200
        "
      >
        <motion.div
          animate={{
            y: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          top-0
          left-0
          w-full
          h-40
          bg-gradient-to-b
          from-[#3F5E8C]
          to-transparent
          "
        />
      </div>

      {[
        {
          id: "01",
          phase: "REQUEST",
          title: "Agency Request Received",
          desc: "LEA continuously monitors authorized agency channels and registered intake sources."
        },
        {
          id: "02",
          phase: "INTAKE",
          title: "Request Intake",
          desc: "Authority, case references, identifiers and timelines are validated."
        },
        {
          id: "03",
          phase: "UNDERSTANDING",
          title: "Request Understanding",
          desc: "Accounts, customers, entities and required information are identified."
        },
        {
          id: "04",
          phase: "PLANNING",
          title: "Information Planning",
          desc: "Relevant systems, repositories and records are mapped."
        },
        {
          id: "05",
          phase: "RETRIEVAL",
          title: "Information Retrieval",
          desc: "Records are gathered from CBS, CRM, DMS and supporting platforms."
        },
        {
          id: "06",
          phase: "INTELLIGENCE",
          title: "Relationship Intelligence",
          desc: "Connections across customers, accounts and related entities are identified."
        },
        {
          id: "07",
          phase: "CORRELATION",
          title: "Cross-System Correlation",
          desc: "Information from multiple systems is organized into a unified context."
        },
        {
          id: "08",
          phase: "REGULATORY",
          title: "Regulatory Intelligence",
          desc: "Policies, circulars and procedural obligations are referenced."
        },
        {
          id: "09",
          phase: "ASSEMBLY",
          title: "Decision Package Assembly",
          desc: "A structured response package is prepared for review."
        },
        {
          id: "10",
          phase: "REVIEW",
          title: "Human Decision Desk",
          desc: "Designated teams review and determine the final action."
        },
        {
          id: "11",
          phase: "TRACKING",
          title: "Outcome Tracking",
          desc: "Complete traceability is maintained throughout the response lifecycle."
        },
      ].map((step, index) => (

        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.05,
          }}
          className={`
            relative
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            gap-6
            lg:gap-12
            mb-16
            lg:mb-24

            ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }
          `}
        >

          {/* SIGNAL NODE */}

          <div
            className="
            relative
            flex
            items-center
            justify-center
            ml-[6px]
            lg:ml-0
            lg:min-w-[120px]
            "
          >

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
              w-12
              h-12
              md:w-14
              md:h-14
              lg:w-16
              lg:h-16
              rounded-full
              bg-[#111111]
              text-white
              flex
              items-center
              justify-center
              text-xs
              md:text-sm
              tracking-wider
              z-20
              "
            >
              {step.id}
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
              absolute
              inset-0
              rounded-full
              bg-[#3F5E8C]/20
              "
            />

          </div>

          {/* CONTENT */}

          <div className="w-full lg:flex-1 lg:max-w-[520px]">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
              bg-white
              border
              border-neutral-200
              rounded-[28px]
              p-6
              md:p-8
              lg:p-10
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-500
              "
            >

              <p
                className="
                uppercase
                tracking-[0.25em]
                text-[10px]
                text-[#3F5E8C]
                mb-4
                "
              >
                {step.phase}
              </p>

              <h3 className="text-2xl lg:text-3xl font-light mb-4">
                {step.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>

          </div>

          {/* DESKTOP SPACER */}

          <div className="flex-1 hidden lg:block" />

        </motion.div>

      ))}

    </div>

    <div className="mt-24 text-center max-w-4xl mx-auto">

      <div className="w-px h-16 bg-neutral-200 mx-auto mb-8" />

      <h3
        className="
        text-3xl
        md:text-5xl
        font-light
        tracking-[-0.03em]
        leading-[1]
        mb-6
        "
      >
        Built For
        <span className="text-[#3F5E8C]">
          {" "}
          Institutional Readiness
        </span>
      </h3>

      <p
        className="
        text-neutral-600
        text-lg
        leading-relaxed
        max-w-2xl
        mx-auto
        "
      >
        LEA transforms fragmented information retrieval into structured
        decision support, enabling faster response readiness, complete
        traceability, and institution-wide coordination across BFSI
        operations.
      </p>

    </div>

  </div>

</section>


{/* =======================================================
    CROSS-SYSTEM CORRELATION ENGINE
======================================================= */}

<section className="py-28 bg-neutral-50 overflow-visible">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

      {/* LEFT */}

      <div>

        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
          Correlation Engine
        </p>

        <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em] mb-10">
          Correlating
          <br />
          relationships across
          <br />
          fragmented enterprise
          <br />
          information.
        </h2>

        <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
          LEA identifies relationships across customers,
          accounts, transactions, KYC records,
          documents and digital artefacts to assemble
          decision-ready response packages.
        </p>

      </div>

      {/* RIGHT */}

      <div className="relative h-[1150px]">

        {/* CUSTOMER */}

        {[
          {
            title: "Customer",
            top: "4%",
          },
          {
            title: "Accounts",
            top: "16%",
          },
          {
            title: "Transactions",
            top: "28%",
          },
          {
            title: "Beneficiaries",
            top: "40%",
          },
          {
            title: "Communications",
            top: "52%",
          },
          {
            title: "KYC Records",
            top: "64%",
          },
          {
            title: "Documents",
            top: "76%",
          },
        ].map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: item.top }}
          >

            <motion.div
              animate={{
                y: [-4, 4, -4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                w-[280px]
                bg-white
                border
                border-neutral-200
                rounded-full
                py-5
                text-center
                shadow-xl
              "
            >
              <span className="text-lg">
                {item.title}
              </span>
            </motion.div>

            {index < 6 && (
              <motion.div
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  w-px
                  h-20
                  bg-gradient-to-b
                  from-[#3F5E8C]
                  via-[#3F5E8C]/60
                  to-transparent
                  mx-auto
                "
              />
            )}

          </motion.div>

        ))}

        {/* DECISION PACKAGE */}

        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[90%]
            w-[360px]
            h-[140px]
            rounded-[32px]
            bg-[#3F5E8C]
            text-white
            flex
            items-center
            justify-center
            shadow-2xl
          "
        >

          <div className="text-center">

            <div className="text-3xl font-light mb-2">
              Decision Package
            </div>

            <div className="uppercase tracking-[0.3em] text-xs opacity-70">
              Human Review Ready
            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </div>

</section>







{/* =======================================================
    TRADITIONAL VS LEA
======================================================= */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-16">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Process Transformation
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        From fragmented
        <br />
        coordination to
        <br />
        structured response readiness.
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* TRADITIONAL */}

      <div className="border border-neutral-200 rounded-[32px] p-12">

        <div className="mb-10">

          <span className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Traditional Process
          </span>

          <h3 className="text-4xl font-light mt-4">
            Manual Coordination
          </h3>

        </div>

        <div className="space-y-8">

          {[
            "Agency emails distributed manually",
            "Multiple teams gather information independently",
            "Spreadsheet-based tracking",
            "Repeated follow-ups across departments",
            "Fragmented records and documents",
            "Manual package preparation",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-4 items-start"
            >

              <div className="w-2 h-2 rounded-full bg-neutral-400 mt-3" />

              <p className="text-neutral-600">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* LEA */}

      <div className="bg-[#3F5E8C] text-white rounded-[32px] p-12 relative overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
          className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-white
          -right-40
          -top-40
          "
        />

        <div className="mb-10 relative z-10">

          <span className="text-xs tracking-[0.25em] uppercase opacity-70">
            LEA Platform
          </span>

          <h3 className="text-4xl font-light mt-4">
            Orchestrated Response Readiness
          </h3>

        </div>

        <div className="space-y-8 relative z-10">

          {[
            "Structured intake and request understanding",
            "Automated retrieval from connected systems",
            "Cross-system information correlation",
            "Relationship intelligence generation",
            "Decision package assembly",
            "Human review and controlled response",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-4 items-start"
            >

              <div className="w-2 h-2 rounded-full bg-white mt-3" />

              <p>
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>







{/* =======================================================
    GOVERNANCE • SOVEREIGNTY • SECURITY
======================================================= */}

<section className="py-28 bg-[#0D1117] text-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-24">

      <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-6">
        Institutional Controls
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Built for governed,
        <br />
        auditable and sovereign
        <br />
        BFSI environments.
      </h2>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-10
        "
      >

        <div className="mb-8">

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-[#3F5E8C]/20
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            👤
          </div>

        </div>

        <h3 className="text-3xl font-light mb-6">
          Human-in-the-Loop Governance
        </h3>

        <p className="text-white/70 leading-relaxed">
          LEA prepares decision-ready response packages,
          while all approvals, submissions and final actions
          remain under designated human authority.
        </p>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-10
        "
      >

        <div className="mb-8">

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-[#3F5E8C]/20
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            🔒
          </div>

        </div>

        <h3 className="text-3xl font-light mb-6">
          Absolute Data Sovereignty
        </h3>

        <p className="text-white/70 leading-relaxed">
          Deploy on-premise, private cloud or controlled
          environments while maintaining institutional
          ownership of data and operational controls.
        </p>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-10
        "
      >

        <div className="mb-8">

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-[#3F5E8C]/20
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            🛡️
          </div>

        </div>

        <h3 className="text-3xl font-light mb-6">
          Multi-Layered Security
        </h3>

        <p className="text-white/70 leading-relaxed">
          Role-based access, audit trails, controlled
          retrieval, approval workflows and complete
          traceability across the response lifecycle.
        </p>

      </motion.div>

    </div>

    {/* LOWER BAR */}

    <div
      className="
      mt-24
      border-t
      border-white/10
      pt-12
      grid
      md:grid-cols-4
      gap-8
      "
    >

      {[
        "Immutable Audit Trails",
        "Role-Based Access Control",
        "Policy-Aware Responses",
        "Regulatory Alignment",
      ].map((item) => (

        <div key={item}>

          <div className="text-white/40 text-xs tracking-[0.25em] uppercase mb-3">
            Capability
          </div>

          <div className="text-lg">
            {item}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>





{/* =======================================================
    EXECUTIVE OUTCOMES
======================================================= */}

<section className="py-28 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-24">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Executive Outcomes
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Transforming response
        <br />
        readiness into a strategic
        <br />
        institutional capability.
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}

      <div className="space-y-8">

        {[
          {
            value: "10x",
            title: "Faster Information Discovery",
            desc: "Reduce manual coordination across departments and systems."
          },
          {
            value: "100%",
            title: "Response Traceability",
            desc: "Maintain complete auditability across the lifecycle."
          },
          {
            value: "24x7",
            title: "Request Monitoring",
            desc: "Continuously monitor registered agency intake channels."
          },
          {
            value: "Single",
            title: "Decision Package",
            desc: "Unified response package for designated review teams."
          }
        ].map((item) => (

          <motion.div
            key={item.title}
            whileHover={{ x: 8 }}
            className="
            border-b
            border-neutral-200
            pb-8
            "
          >

            <div className="flex gap-8 items-start">

              <div
                className="
                text-5xl
                md:text-6xl
                font-light
                text-[#3F5E8C]
                min-w-[120px]
                "
              >
                {item.value}
              </div>

              <div>

                <h3 className="text-2xl font-light mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-600">
                  {item.desc}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

{/* RIGHT SIDE */}

<div className="relative h-[650px] flex items-center justify-center">

  <div className="relative w-full max-w-[420px]">

    {[
      {
        icon: FileText,
        title: "Regulatory Notice Intake Engine",
      },
      {
        icon: Database,
        title: "Case Intelligence Engine",
      },
      {
        icon: Network,
        title: "Case Correlation & Routing Engine",
      },
      {
        icon: Package,
        title: "Regulatory Response Package",
      },
      {
        icon: CheckCircle2,
        title: "Response Submission & Closure",
      },
    ].map((step, i) => (
      <div key={step.title}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.15,
            duration: 0.5,
          }}
          className="
          relative
          bg-white
          border
          border-neutral-200
          rounded-[28px]
          px-6
          py-5
          shadow-xl
          flex
          items-center
          gap-4
          z-10
          "
        >

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-[#3F5E8C]/10
            flex
            items-center
            justify-center
            "
          >
            <step.icon
              size={22}
              className="text-[#3F5E8C]"
            />
          </div>

          <div>

            <div className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-1">
              Step {i + 1}
            </div>

            <div className="text-lg font-medium">
              {step.title}
            </div>

          </div>

        </motion.div>

        {i < 4 && (

          <div className="relative h-16 flex justify-center">

            <div
              className="
              absolute
              w-px
              h-full
              bg-neutral-200
              "
            />

            <motion.div
              animate={{
                y: [0, 50, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="
              absolute
              top-0
              w-3
              h-3
              rounded-full
              bg-[#3F5E8C]
              "
            />

          </div>

        )}

      </div>
    ))}

  </div>

</div>

</div>
</div>
</section>








      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2
  className="
    text-5xl
    md:text-7xl
    leading-[0.95]
    font-light
    mb-8
    max-w-6xl
    mx-auto
  "
>
  Transform Agency Requests Into
  <br />
  Decision-Ready Response Packages.
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
    Request Executive Briefing
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
    </main>
  </>
  );
}