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

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Built For Response Readiness.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Manual Coordination", "Distributed Records", "Deadline Pressure", "Audit Challenges", "Cross-Team Follow-Ups", "Response Delays"].map((item)=>(
              <div key={item} className="border rounded-3xl p-8">
                <h3 className="text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Response Readiness Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((step, idx) => (
              <div key={step} className="bg-white rounded-3xl p-6 border">
                <div className="text-sm text-[#3F5E8C] mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-xl">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Information Aggregation Layer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Customer Records", FileText],
              ["Banking Records", Building2],
              ["Communication Records", Mail],
              ["Technical Records", Globe],
              ["Audit Records", Shield],
              ["Supporting Documents", Database],
            ].map(([title, Icon]: any) => (
              <div key={title} className="border rounded-3xl p-8">
                <Icon className="w-10 h-10 mb-6 text-[#3F5E8C]" />
                <h3 className="text-2xl">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Enterprise Integrations
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["CBS","CRM","DMS","ERP","Email","Contact Center","Digital Banking","Compliance Systems"].map((s)=>(
              <div key={s} className="bg-white border rounded-3xl p-8 text-center">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Cross-System Correlation
          </h2>

          <div className="border rounded-[40px] p-12 text-center">
            Customer → Accounts → Transactions → Communications → Devices → Response Package
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <Lock className="w-12 h-12 mb-6" />
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            No Data Leaves The Institution.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl">
            On-Premise. Private Cloud. Air-Gapped Deployment. Bank Controlled.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-light mb-16">
            Enterprise Outcomes
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Faster Response Readiness","Reduced Manual Coordination","Complete Traceability","Improved Audit Readiness"].map((m)=>(
              <div key={m} className="border rounded-3xl p-8">
                <div className="text-2xl">{m}</div>
              </div>
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
