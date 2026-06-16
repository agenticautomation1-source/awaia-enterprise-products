"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function RequestBriefingTestPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    topics: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.topics
    ) {
      alert("Please complete all fields.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid business email.");
      return;
    }

    if (formData.phone.trim().length < 8) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/request-briefing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Thank you. Your briefing request has been submitted."
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          topics: "",
        });
      } else {
        alert(
          data.error ||
            "Something went wrong."
        );
      }
    } catch {
      alert("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}

        <section className="relative min-h-screen overflow-hidden">

          <Image
            src="/images/request-briefing-v1.png"
            alt="Executive Briefing"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[850px]">

              {/* LEFT */}

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    px-5
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    backdrop-blur-md
                    text-white
                    text-xs
                    tracking-[0.25em]
                    uppercase
                    font-semibold
                    mb-8
                  "
                >
                  Executive Engagement
                </div>

                <h1
                  className="
                    text-white
                    text-[4rem]
                    md:text-[5.5rem]
                    leading-[0.9]
                    tracking-[-0.05em]
                    font-light
                  "
                >
                  Request An
                  <br />
                  Executive
                  <br />
                  Briefing
                </h1>

                <p
                  className="
                    mt-8
                    text-white/90
                    text-lg
                    leading-relaxed
                    max-w-xl
                  "
                >
                  Schedule a confidential executive discussion
                  with AWAIA leadership to explore AI
                  transformation, ISO/IEC 42001 readiness,
                  enterprise automation, governance,
                  risk management and responsible AI adoption.
                </p>

                <div className="mt-10 space-y-4 text-white">

                  <div>✓ AI Governance & Risk Management</div>

                  <div>✓ ISO/IEC 42001 Readiness</div>

                  <div>✓ Enterprise AI Transformation</div>

                  <div>✓ Responsible AI Adoption</div>

                  <div>✓ Executive Strategy Consultation</div>

                </div>

              </div>

              {/* FORM */}

              <div
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[36px]
                  p-10
                  shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                "
              >
                <h2
                  className="
                    text-white
                    text-4xl
                    font-light
                    mb-8
                  "
                >
                  Executive Briefing Request
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60"
                  />

                  <input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60"
                  />

                  <textarea
                    rows={5}
                    placeholder="Topics you would like to discuss..."
                    value={formData.topics}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        topics: e.target.value,
                      })
                    }
                    className="w-full rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-white/60 resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      h-14
                      rounded-full
                      bg-white
                      text-black
                      font-medium
                      hover:scale-[1.02]
                      transition-all
                    "
                  >
                    {loading
                      ? "Submitting..."
                      : "Request Executive Briefing"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

        {/* SOLUTIONS SECTION */}

        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-8">

            <div className="text-center mb-16">

              <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold">
                AWAIA Enterprise Portfolio
              </div>

              <h2 className="mt-6 text-5xl font-light text-neutral-900">
                Solutions, Governance &
                Capability Development
              </h2>

              <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
                Discover the platforms,
                frameworks and transformation
                services discussed during your
                executive briefing.
              </p>

            </div>

<section className="mt-20 space-y-8">

  {/* MEERA + LEA */}

  <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">

    {/* MEERA */}

    <div
      className="
        bg-white
        rounded-[40px]
        p-14
        border
        border-neutral-200
        shadow-[0_30px_80px_rgba(15,23,42,0.08)]
        hover:-translate-y-1
        transition-all
        duration-500
      "
    >
      <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold mb-4">
        Enterprise Voice Intelligence Platform
      </div>

      <h3 className="text-5xl font-light mb-6">
        MEERA
      </h3>

      <p className="text-lg text-neutral-600 leading-relaxed mb-10">
        Enterprise conversational AI platform delivering secure,
        multilingual, human-like voice interactions for customer
        service, collections, onboarding, authentication and
        enterprise automation.
      </p>

      <div className="grid md:grid-cols-2 gap-y-5 gap-x-12 text-neutral-700">

        <div>✓ No waiting in IVR queues</div>
        <div>✓ 24×7×365 customer availability</div>

        <div>✓ Human-like multilingual conversations</div>
        <div>✓ Real-time speech-to-speech interaction</div>

        <div>✓ Authenticate before execution</div>
        <div>✓ OTP & Multi-step Verification</div>

        <div>✓ Context-aware conversations</div>
        <div>✓ Dynamic Workflow Execution</div>

        <div>✓ Live Human Escalation Support</div>
        <div>✓ Complete Transcript Transfer</div>

        <div>✓ Customer Sentiment Analytics</div>
        <div>✓ Executive MIS Dashboards</div>

        <div>✓ Audit Trail & Compliance Logging</div>
        <div>✓ RBI-ready Governance Controls</div>

        <div>✓ On-Premise Deployment</div>
        <div>✓ No Customer Data Leaves Your Environment</div>

      </div>
    </div>

    {/* LEA */}

    <div
      className="
        bg-gradient-to-br
        from-white
        via-[#fafbfd]
        to-[#f3f7fb]
        rounded-[40px]
        p-12
        border
        border-neutral-200
        shadow-[0_30px_80px_rgba(15,23,42,0.08)]
        hover:-translate-y-1
        transition-all
        duration-500
      "
    >
      <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold mb-4">
        Investigation Intelligence Platform
      </div>

      <h3 className="text-4xl font-light mb-6">
        LEA
      </h3>

      <p className="text-lg text-neutral-600 leading-relaxed mb-8">
        Legal Enforcement Assistant supporting fraud
        investigations, AML operations, regulatory response
        management and law-enforcement coordination workflows.
      </p>

      <div className="space-y-4 text-neutral-700">

        <div>✓ Law Enforcement Coordination Workflows</div>

        <div>✓ EOW, ED, CBI, SFIO & FIU Request Tracking</div>

        <div>✓ Fraud Investigation Management</div>

        <div>✓ AML & Suspicious Transaction Analysis</div>

        <div>✓ Banking Evidence Collection & Preservation</div>

        <div>✓ Audit Trail Generation & Evidence Traceability</div>

        <div>✓ KYC, Transaction & Device Intelligence Retrieval</div>

        <div>✓ Regulatory Response Management</div>

        <div>✓ Investigation Timeline Monitoring</div>

        <div>✓ Secure On-Premise Deployment</div>

      </div>
    </div>

  </div>

  {/* DIGITAL WORKFORCE */}

  <div
    className="
      bg-white
      rounded-[40px]
      p-12
      border
      border-neutral-200
      shadow-[0_25px_70px_rgba(15,23,42,0.08)]
      hover:-translate-y-1
      transition-all
      duration-500
    "
  >
    <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold mb-4">
      Enterprise Automation
    </div>

    <h3 className="text-4xl font-light mb-5">
      Digital Workforce
    </h3>

    <p className="text-lg text-neutral-600 leading-relaxed">
      AI-powered digital workers automating repetitive enterprise
      processes, back-office operations, workflow execution and
      knowledge-intensive tasks at scale.
    </p>
  </div>

  {/* ISO + CAPABILITY DEVELOPMENT */}

  <div className="grid lg:grid-cols-[0.9fr_2.1fr] gap-8">

    <div
      className="
        bg-white
        rounded-[40px]
        p-12
        border
        border-neutral-200
        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
      "
    >
      <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold mb-4">
        Governance Framework
      </div>

      <h3 className="text-4xl font-light mb-5">
        ISO/IEC 42001:2023
      </h3>

      <p className="text-lg text-neutral-600 leading-relaxed">
        AI Management System readiness, governance,
        compliance and responsible AI implementation.
      </p>
    </div>

    <div
      className="
        rounded-[40px]
        p-14
        bg-gradient-to-br
        from-white
        via-[#fafbfd]
        to-[#f3f7fb]
        border
        border-neutral-200
        shadow-[0_35px_100px_rgba(15,23,42,0.10)]
      "
    >
      <div className="text-xs tracking-[0.25em] uppercase text-[#1F3D7A] font-semibold mb-4">
        Capability Development
      </div>

      <h3 className="text-5xl font-light mb-6">
        Enterprise AI Capability Development
      </h3>

      <p className="text-xl text-neutral-600 leading-relaxed mb-10">
        Build internal AI capability through executive enablement,
        workforce transformation, governance workshops and
        enterprise-scale adoption programs.
      </p>

      <div className="grid md:grid-cols-2 gap-y-6 gap-x-14 text-lg">

        <div>✓ Executive AI Leadership Programs</div>
        <div>✓ Workforce AI Enablement</div>

        <div>✓ AI Governance Workshops</div>
        <div>✓ Enterprise Transformation Support</div>

        <div>✓ Internal AI Capability Building</div>
        <div>✓ Change Management Programs</div>

        <div>✓ AI Leadership Certification Tracks</div>
        <div>✓ AI Center of Excellence Enablement</div>

        <div>✓ AI Governance Practitioner Programs</div>
        <div>✓ Enterprise AI Operating Model Design</div>

      </div>
    </div>

  </div>

</section>

          </div>

        </section>

      </main>
    </>
  );
}