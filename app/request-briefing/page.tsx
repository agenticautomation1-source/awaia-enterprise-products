
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function RequestBriefingPage() {

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
          "Content-Type":
            "application/json",
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

      <main className="relative min-h-screen overflow-hidden">

        {/* Background Image */}

<div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/images/request-briefing-v1.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
/>

<div className="absolute inset-0 bg-black/30" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
 <section
  className="
    relative
    z-10
    min-h-screen
    flex
    items-center
    pt-28
    pb-20
  "
>

          <div className="max-w-7xl mx-auto px-8 w-full">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT PANEL */}

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
                  text-[3rem]
                  md:text-[4.5rem]
                  leading-[0.90]
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
                  text-white/85
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

                <div className="mt-10 space-y-4">

                  <div className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    <span>AI Governance & Risk Management</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    <span>ISO/IEC 42001 Readiness</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    <span>Enterprise AI Transformation</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    <span>Responsible AI Adoption</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    <span>Executive Strategy Consultation</span>
                  </div>

                </div>

              </div>

              {/* FORM PANEL */}

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-[32px]
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                "
              >

                <h2
                  className="
                  text-white
                  text-3xl
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
    className="
      w-full
      h-12
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      text-white
      placeholder:text-white/60
      outline-none
    "
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
    className="
      w-full
      h-12
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      text-white
      placeholder:text-white/60
      outline-none
    "
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
    className="
      w-full
      h-12
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      text-white
      placeholder:text-white/60
      outline-none
    "
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
    className="
      w-full
      h-12
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      text-white
      placeholder:text-white/60
      outline-none
    "
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
    className="
      w-full
      h-12
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      text-white
      placeholder:text-white/60
      outline-none
    "
  />

  <textarea
    rows={4}
    placeholder="Topics you would like to discuss..."
    value={formData.topics}
    onChange={(e) =>
      setFormData({
        ...formData,
        topics: e.target.value,
      })
    }
    className="
      w-full
      rounded-xl
      bg-white/10
      border
      border-white/20
      px-5
      py-4
      text-white
      placeholder:text-white/60
      outline-none
      resize-none
    "
  />

  <button
    type="submit"
    disabled={loading}
    className="
      w-full
      h-12
      bg-white
      text-black
      rounded-full
      font-medium
      tracking-[0.01em]
      hover:scale-[1.02]
      transition-all
      duration-300
      disabled:opacity-60
      disabled:cursor-not-allowed
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


        {/* ENTERPRISE SOLUTIONS */}

<section className="relative z-10 bg-[#f7f9fc] py-24">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <div className="uppercase tracking-[0.25em] text-xs font-semibold text-[#3F5E8C] mb-4">
        AWAIA Enterprise Portfolio
      </div>

      <h2 className="text-5xl font-light tracking-[-0.04em] text-neutral-900">
        Solutions, Governance & Capability Development
      </h2>

      <p className="mt-6 text-neutral-600 max-w-3xl mx-auto text-lg">
        Discover the platforms, frameworks and transformation
        services discussed during your executive briefing.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      <div className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-lg">
        <h3 className="text-3xl font-light mb-4">MEERA</h3>
        <p className="text-neutral-600 leading-relaxed">
          Enterprise voice intelligence platform delivering
          secure, multilingual and compliant AI-powered
          customer engagement.
        </p>
      </div>

      <div className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-lg">
        <h3 className="text-3xl font-light mb-4">LEA</h3>
        <p className="text-neutral-600 leading-relaxed">
          Legal Enforcement Assistant supporting regulatory,
          investigation and enterprise intelligence workflows.
        </p>
      </div>

      <div className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-lg">
        <h3 className="text-3xl font-light mb-4">Digital Workforce</h3>
        <p className="text-neutral-600 leading-relaxed">
          AI-powered digital workers that automate repetitive
          enterprise processes and improve operational efficiency.
        </p>
      </div>

      <div className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-lg">
        <h3 className="text-3xl font-light mb-4">ISO/IEC 42001:2023</h3>
        <p className="text-neutral-600 leading-relaxed">
          AI Management System readiness, governance,
          compliance and responsible AI implementation.
        </p>
      </div>

      <div className="rounded-[32px] bg-white/70 backdrop-blur-xl border border-white p-8 shadow-lg lg:col-span-2">
        <h3 className="text-3xl font-light mb-4">
          Enterprise AI Capability Development
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          Build internal AI capability through executive
          enablement, workforce transformation, governance
          workshops and enterprise-scale adoption programs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-neutral-700">
          <div>✓ Executive AI Leadership Programs</div>
          <div>✓ Workforce AI Enablement</div>
          <div>✓ AI Governance Workshops</div>
          <div>✓ Enterprise Transformation Support</div>
          <div>✓ Internal AI Capability Building</div>
          <div>✓ Change Management Programs</div>
        </div>
      </div>

    </div>

  </div>

</section>

      </main>
    </>
  );
}