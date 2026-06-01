"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Building2,
  Mail,
  Phone,
  Globe,
  FileText,
  Network,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
    <main className="bg-white text-neutral-900">
            <section className="min-h-[700px] flex items-start pt-30 pb-24">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.35fr_0.65fr] gap-20 items-start">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm mb-8 text-neutral-500">
              LEA™ • Legal Enforcement Assistant
            </p>

<h1
  className="
  text-6xl
  md:text-[5.4rem]
  font-light
  leading-[0.92]
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

            <p className="mt-10 text-xl text-neutral-600 max-w-2xl">
              LEA autonomously discovers, collects, correlates and organizes
              enterprise records across banking systems to accelerate response
              readiness for regulatory and law-enforcement requests.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-8 py-4 bg-black text-white rounded-full">
                Request Executive Briefing
              </button>
              <button className="px-8 py-4 border rounded-full">
                Explore Architecture
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border rounded-3xl p-8 shadow-sm"
          >
            <div className="text-sm text-neutral-500 mb-6">
              RESPONSE READINESS BOARD
            </div>

            {[
              "Request Received",
              "Customer Records Retrieved",
              "KYC Retrieved",
              "Statements Retrieved",
              "Communications Retrieved",
              "Device Logs Retrieved",
              "Response Package Ready",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b">
                <CheckCircle2 className="w-5 h-5 text-[#3F5E8C]" />
                <span>{i}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



{/* =======================================================
    FROM MANUAL COORDINATION TO RESPONSE READINESS
======================================================= */}

<section className="py-40 border-t border-neutral-200">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-24">

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

      <div className="p-12 md:p-16 bg-[#3F5E8C] text-white">

        <div className="mb-12">

          <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-4">
            LEA Workflow
          </p>

          <h3 className="text-3xl font-light">
            Decision Support Platform
          </h3>

        </div>

        <div className="space-y-8">

          {[
            "Request understood automatically",
            "Relevant systems identified",
            "Information retrieved autonomously",
            "Relationships correlated",
            "Decision package assembled",
            "Response readiness achieved",
            "Human desk review enabled",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-white" />

              <span className="text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>




 <section className="py-40 overflow-visible">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-24">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        LEA Intelligence Core
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Connecting fragmented
        <br />
        enterprise systems into
        <br />
        decision-ready intelligence.
      </h2>

    </div>

    <div className="relative h-[1000px] flex items-center justify-center overflow-visible">

      {/* OUTER ORBIT */}

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-[#3F5E8C]/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* INNER ORBIT */}

      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full border border-dashed border-[#3F5E8C]/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* LEA CORE */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          w-80
          h-80
          rounded-full
          bg-[#3F5E8C]
          text-white
          flex
          items-center
          justify-center
          text-center
          shadow-2xl
          z-20
        "
      >
        <div>
          <div className="text-5xl font-light mb-3">
            LEA
          </div>

          <div className="uppercase tracking-[0.3em] text-xs opacity-70">
            Intelligence Core
          </div>
        </div>
      </motion.div>

      {[
        { label: "CBS", left: "18%", top: "35%" },
        { label: "CRM", left: "75%", top: "35%" },

        { label: "ERP", left: "18%", top: "65%" },
        { label: "DMS", left: "75%", top: "65%" },

        { label: "AML", left: "50%", top: "12%" },
        { label: "Fraud Systems", left: "50%", top: "88%" },

        { label: "Email", left: "30%", top: "18%" },
        { label: "Contact Center", left: "70%", top: "18%" },
      ].map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
          }}
          className="
            absolute
            bg-white
            border
            border-neutral-200
            rounded-full
            px-8
            py-4
            shadow-xl
            z-30
            text-sm
            font-medium
          "
          style={{
            left: node.left,
            top: node.top,
            transform: "translate(-50%, -50%)",
          }}
        >
          {node.label}
        </motion.div>
      ))}

    </div>

  </div>

</section>


     
{/* =======================================================
    LEA OPERATIONAL JOURNEY
======================================================= */}

<section className="py-40 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-32">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Operational Journey
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
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
        left-1/2
        top-0
        bottom-0
        w-px
        bg-neutral-200
        hidden lg:block
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
            items-center
            gap-12
            mb-24

            ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }
          `}
        >

          {/* CONTENT */}

          <div className="flex-1">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
              bg-white
              border
              border-neutral-200
              rounded-[28px]
              p-10
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

              <h3 className="text-3xl font-light mb-4">
                {step.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>

          </div>

          {/* SIGNAL NODE */}

          <div
            className="
            relative
            hidden
            lg:flex
            items-center
            justify-center
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
              w-16
              h-16
              rounded-full
              bg-[#111111]
              text-white
              flex
              items-center
              justify-center
              text-sm
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

          {/* SPACER */}

          <div className="flex-1 hidden lg:block" />

        </motion.div>

      ))}

    </div>

    <div className="mt-40 text-center max-w-3xl mx-auto">

      <div className="w-px h-24 bg-neutral-200 mx-auto mb-10" />

      <h3 className="text-4xl font-light mb-6">
        Built For Institutional Readiness.
      </h3>

      <p className="text-neutral-600 text-lg leading-relaxed">
        LEA transforms fragmented information retrieval into
        structured decision support, enabling faster and more
        traceable response readiness across BFSI institutions.
      </p>

    </div>

  </div>

</section>



{/* =======================================================
    CROSS-SYSTEM CORRELATION ENGINE
======================================================= */}

<section className="py-40 bg-neutral-50 overflow-visible">

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
          accounts, transactions, communications, devices,
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
            title: "Devices",
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
    DATA SOVEREIGNTY & SECURITY
======================================================= */}

<section className="py-40 bg-[#111111] text-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-28">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Security & Sovereignty
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        No data leaves
        <br />
        the institution.
      </h2>

    </div>

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mb-16">
          LEA operates entirely within the institution's
          controlled environment. All information retrieval,
          correlation and package assembly occurs inside
          bank-owned infrastructure.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "On-Premise Deployment",
            "Private Cloud Deployment",
            "Air-Gapped Infrastructure",
            "Internal Encryption Control",
            "Immutable Audit Trails",
            "Role Based Access Control",
          ].map((item) => (

            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="
              border
              border-white/10
              rounded-[24px]
              p-8
              backdrop-blur-sm
              "
            >
              <div className="text-lg font-light">
                {item}
              </div>
            </motion.div>

          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="relative h-[600px] flex items-center justify-center">

        <motion.div
          className="
          absolute
          w-[450px]
          h-[450px]
          rounded-full
          border
          border-white/10
          "
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="
          absolute
          w-[320px]
          h-[320px]
          rounded-full
          border
          border-dashed
          border-white/20
          "
          animate={{ rotate: -360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
          w-56
          h-56
          rounded-full
          bg-[#3F5E8C]
          flex
          items-center
          justify-center
          text-center
          shadow-2xl
          "
        >
          <div>

            <Lock className="w-10 h-10 mx-auto mb-4" />

            <div className="text-sm uppercase tracking-[0.3em]">
              Secure
            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </div>

</section>


{/* =======================================================
    EXECUTIVE OUTCOMES
======================================================= */}

<section className="py-40 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-28">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Executive Outcomes
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Designed for response
        <br />
        readiness at enterprise
        <br />
        scale.
      </h2>

    </div>

    <div className="space-y-0 border-t border-neutral-200">

      {[
        {
          metric: "01",
          title: "Faster Response Readiness",
          text: "Reduce time spent locating records, coordinating teams and assembling information."
        },
        {
          metric: "02",
          title: "Reduced Operational Coordination",
          text: "Minimize dependency on manual follow-ups across branches and departments."
        },
        {
          metric: "03",
          title: "Improved Audit Readiness",
          text: "Maintain complete traceability across information retrieval and package preparation."
        },
        {
          metric: "04",
          title: "Centralized Decision Support",
          text: "Provide designated review teams with structured and decision-ready packages."
        },
      ].map((item) => (

        <motion.div
          key={item.metric}
          whileHover={{ x: 8 }}
          className="
          grid
          lg:grid-cols-[180px_1fr_1fr]
          gap-8
          py-12
          border-b
          border-neutral-200
          "
        >

          <div className="text-5xl font-light text-neutral-300">
            {item.metric}
          </div>

          <div className="text-3xl font-light">
            {item.title}
          </div>

          <div className="text-neutral-600 text-lg leading-relaxed">
            {item.text}
          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>



      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-light leading-[0.95] mb-8">
            Transform Agency Requests Into Decision-Ready Response Packages.
          </h2>

          <button className="px-8 py-4 bg-black text-white rounded-full">
            Request Executive Briefing <ArrowRight className="inline w-4 h-4 ml-2"/>
          </button>
        </div>
      </section>
    </main>
  );
}
