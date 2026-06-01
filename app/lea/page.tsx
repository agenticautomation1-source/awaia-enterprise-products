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




      <section className="py-40 overflow-hidden">

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

<div className="relative h-[800px] flex items-center justify-center">

<motion.div
className="absolute w-[520px] h-[520px] rounded-full border border-[#3F5E8C]/20"
animate={{ rotate: 360 }}
transition={{
duration: 80,
repeat: Infinity,
ease: "linear"
}}
/>

<motion.div
className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-[#3F5E8C]/20"
animate={{ rotate: -360 }}
transition={{
duration: 120,
repeat: Infinity,
ease: "linear"
}}
/>

<motion.div
animate={{
scale:[1,1.05,1]
}}
transition={{
duration:4,
repeat:Infinity
}}
className="
w-72
h-72
rounded-full
bg-[#3F5E8C]
text-white
flex
items-center
justify-center
text-4xl
font-light
shadow-2xl
z-20
"
>
LEA
</motion.div>

{[
{label:"CBS",x:"-420px",y:"-180px"},
{label:"CRM",x:"420px",y:"-180px"},
{label:"ERP",x:"-420px",y:"180px"},
{label:"DMS",x:"420px",y:"180px"},
{label:"AML",x:"0px",y:"-320px"},
{label:"Fraud",x:"0px",y:"320px"},
].map((node)=>(
<motion.div
key={node.label}
animate={{
y:[-8,8,-8]
}}
transition={{
duration:4,
repeat:Infinity
}}
style={{
transform:`translate(${node.x},${node.y})`
}}
className="
absolute
bg-white
border
rounded-full
px-8
py-4
shadow-sm
z-10
"
>
{node.label}
</motion.div>
))}

</div>

</div>

</section>


     
{/* =======================================================
    RESPONSE READINESS JOURNEY
======================================================= */}

<section className="py-40 bg-[#F7F7F5] overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-28">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Operational Flow
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        The Response
        <br />
        Readiness Journey.
      </h2>

    </div>

    <div className="relative">

      <div className="absolute left-[31px] top-0 bottom-0 w-px bg-neutral-200" />

      {[
        {
          id: "01",
          title: "Agency Request Received",
          desc: "Agency requests enter through designated communication channels."
        },
        {
          id: "02",
          title: "Request Intake",
          desc: "LEA validates request source, authority and urgency."
        },
        {
          id: "03",
          title: "Request Understanding",
          desc: "Entities, accounts, customers and identifiers are extracted."
        },
        {
          id: "04",
          title: "Information Planning",
          desc: "Required systems and repositories are identified."
        },
        {
          id: "05",
          title: "Information Retrieval",
          desc: "Relevant records are collected from enterprise systems."
        },
        {
          id: "06",
          title: "Relationship Intelligence",
          desc: "Accounts, transactions and beneficiaries are connected."
        },
        {
          id: "07",
          title: "Cross-System Correlation",
          desc: "Data from multiple repositories is correlated."
        },
        {
          id: "08",
          title: "Regulatory Intelligence",
          desc: "Policies, circulars and internal controls are referenced."
        },
        {
          id: "09",
          title: "Decision Package Assembly",
          desc: "LEA builds a complete decision support package."
        },
        {
          id: "10",
          title: "Human Decision Desk",
          desc: "Final package is presented for review and action."
        },
        {
          id: "11",
          title: "Outcome Tracking",
          desc: "Case status and actions remain fully traceable."
        },
      ].map((step, index) => (

        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="relative flex gap-10 mb-16"
        >

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-white
            border
            border-neutral-200
            flex
            items-center
            justify-center
            text-sm
            tracking-wider
            z-10
            "
          >
            {step.id}
          </div>

          <div className="pt-2 border-b border-neutral-200 pb-10 flex-1">

            <h3 className="text-3xl font-light mb-4">
              {step.title}
            </h3>

            <p className="text-neutral-600 text-lg max-w-3xl leading-relaxed">
              {step.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>



{/* =======================================================
    CONNECTED ENTERPRISE ECOSYSTEM
======================================================= */}

<section className="py-40 overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mb-28">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
        Enterprise Ecosystem
      </p>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-[-0.04em]">
        Connecting enterprise
        <br />
        information across
        <br />
        banking systems.
      </h2>

    </div>

    <div className="relative h-[900px] flex items-center justify-center">

      {/* OUTER RING */}

      <motion.div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        border
        border-[#3F5E8C]/10
        "
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* INNER RING */}

      <motion.div
        className="
        absolute
        w-[550px]
        h-[550px]
        rounded-full
        border
        border-dashed
        border-[#3F5E8C]/15
        "
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
          duration: 5,
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
        z-20
        shadow-2xl
        "
      >
        <div>

          <div className="text-4xl font-light mb-3">
            LEA
          </div>

          <div className="text-sm tracking-[0.25em] uppercase opacity-70">
            Intelligence Core
          </div>

        </div>
      </motion.div>

      {[
        { label: "CBS", x: "-500px", y: "-220px" },
        { label: "CRM", x: "500px", y: "-220px" },
        { label: "ERP", x: "-500px", y: "220px" },
        { label: "DMS", x: "500px", y: "220px" },
        { label: "AML", x: "0px", y: "-360px" },
        { label: "Fraud Systems", x: "0px", y: "360px" },
        { label: "Email", x: "-300px", y: "-360px" },
        { label: "Contact Center", x: "300px", y: "-360px" },
      ].map((node) => (

        <motion.div
          key={node.label}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            transform: `translate(${node.x}, ${node.y})`,
          }}
          className="
          absolute
          bg-white
          border
          border-neutral-200
          rounded-full
          px-8
          py-4
          shadow-sm
          z-10
          "
        >
          {node.label}
        </motion.div>

      ))}

    </div>

    {/* OUTPUT */}

    <div className="max-w-5xl mx-auto text-center mt-10">

      <p className="text-xl text-neutral-600 leading-relaxed">
        LEA autonomously retrieves, correlates and organizes
        records, transactions, communications, documents and
        technical artefacts from enterprise systems into a
        unified decision support package.
      </p>

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
