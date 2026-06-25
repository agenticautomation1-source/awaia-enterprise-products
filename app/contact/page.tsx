"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

import {
  Headset,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
	
	const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  organization: "",
  message: "",
});

const [loading, setLoading] =
  useState(false);

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          formData
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed"
      );
    }

    alert(
      "Consultation request submitted successfully."
    );

    setFormData({
      fullName: "",
      email: "",
      organization: "",
      message: "",
    });
  } catch (error) {
    alert(
      "Unable to submit request."
    );
  } finally {
    setLoading(false);
  }
};

	
	
	return (
	
    <>
   
<Navbar />

     {/* HERO */}
<section className="relative h-screen overflow-hidden">

  {/* VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      scale-[1.12]
      origin-center
    "
  >
    <source
      src="/videos/contact-hero.mp4"
      type="video/mp4"
    />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/35" />

  {/* CONTENT */}
  <div className="relative z-20 flex h-full items-center">

    <div
  className="
    mx-auto
    w-full
    max-w-[1440px]
    px-10
    xl:px-12
    text-white
  "
>

      <p
  className="
    mb-8
    text-[14px]
    uppercase
    tracking-[0.45em]
    text-white/90
    font-medium
  "
>
  CONTACT
</p>

      <h1
        className="
          mb-8
          text-6xl
          md:text-[110px]
          font-light
          leading-[0.92]
          tracking-[-0.05em]
        "
      >
        Start The
        <br />
        Conversation
      </h1>

      <p
        className="
          max-w-3xl
          text-xl
          text-white/85
          leading-relaxed
        "
      >
        Discuss enterprise AI systems,
        AI governance,
        digital workforce strategy,
        and responsible AI adoption.
      </p>

      <button
        className="
          mt-10
          rounded-full
          bg-white
          px-8
          py-4
          text-black
          text-lg
          font-medium
          transition
          hover:bg-white/90
        "
      >
        Schedule Discovery Call →
      </button>

    </div>

  </div>

  {/* PREMIUM GLASS CONTACT CARD */}
  <div
    className="
      absolute
      bottom-2
      right-8
      z-30
      hidden
      xl:block
    "
  >

    <div
      className="
        relative
        w-[420px]
        rounded-[32px]
        border
        border-white/20
        bg-white/[0.08]
        backdrop-blur-[28px]
        overflow-hidden
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
      "
    >

      {/* GOLD AMBIENT GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#d8a44d]/15
          via-transparent
          to-white/5
          pointer-events-none
        "
      />

      <div className="relative p-7">

        {/* TOP */}
        <div className="flex items-start gap-5">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#d8a44d]/30
              bg-[#d8a44d]/10
              text-[#d8a44d]
              text-xl
            "
          >
            
			<Headset
  size={28}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
			
			
          </div>

          <div className="flex-1">

            <h3
  className="
    text-[24px]
    leading-[1.2]
    font-light
    text-white
    text-left
  "
>
  Ready to discuss your
  <br />
  AI transformation journey?
</h3>

     <button
  className="
    mt-4
    text-[#d8a44d]
    text-[18px]
    font-light
    text-left
  "
>
  Talk to an AWAIA Expert →
</button>

          </div>

        </div>

        <div className="my-6 h-px bg-white/15" />

        {/* PHONE */}
        <div className="flex items-center gap-4 py-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-[#d8a44d]
            "
          >
            <Phone
  size={22}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
          </div>

          <div>
            <div className="text-xs text-white/60">
              Phone
            </div>

            <div className="text-lg text-white">
              +91 7700 915294
            </div>
          </div>

        </div>

        <div className="h-px bg-white/10" />

        {/* EMAIL */}
        <div className="flex items-center gap-4 py-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-[#d8a44d]
            "
          >
            <Mail
  size={22}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
          </div>

          <div>
            <div className="text-xs text-white/60">
              Email
            </div>

            <div className="text-lg text-white">
              contact@automatewithaiagent.com
            </div>
          </div>

        </div>

        <div className="h-px bg-white/10" />

        {/* LOCATION */}
        <div className="flex items-center gap-4 py-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-[#d8a44d]
            "
          >
            <MapPin
  size={22}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
          </div>

          <div>
            <div className="text-xs text-white/60">
              Headquarters
            </div>

            <div className="text-lg text-white">
              Bengaluru, India
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* CONTACT SECTION */}
      <section className="bg-[#f9f9f8] py-28">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>

              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Get In Touch
              </p>

              <h2 className="mb-8 text-6xl font-light leading-[0.95]">
                Let's Design Your
                <br />
                AI Operating Model
              </h2>

              <p className="text-xl leading-relaxed text-neutral-600">
                Whether you're exploring enterprise AI,
                AI governance,
                ISO 42001 readiness,
                digital workforce initiatives,
                or custom AI solutions,
                our team is ready to help.
              </p>

            </div>

            <form
  onSubmit={handleSubmit}
  className="space-y-5"
>

  <input
    type="text"
    placeholder="Full Name"
    value={formData.fullName}
    onChange={(e) =>
      setFormData({
        ...formData,
        fullName: e.target.value,
      })
    }
    className="h-16 w-full rounded-2xl border border-neutral-200 px-6"
  />

  <input
    type="email"
    placeholder="Work Email"
    value={formData.email}
    onChange={(e) =>
      setFormData({
        ...formData,
        email: e.target.value,
      })
    }
    className="h-16 w-full rounded-2xl border border-neutral-200 px-6"
  />

  <input
    type="text"
    placeholder="Organization"
    value={formData.organization}
    onChange={(e) =>
      setFormData({
        ...formData,
        organization: e.target.value,
      })
    }
    className="h-16 w-full rounded-2xl border border-neutral-200 px-6"
  />

  <textarea
    rows={8}
    placeholder="How can we help?"
    value={formData.message}
    onChange={(e) =>
      setFormData({
        ...formData,
        message: e.target.value,
      })
    }
    className="w-full rounded-2xl border border-neutral-200 p-6"
  />

  <button
    type="submit"
    disabled={loading}
    className="rounded-full bg-black px-8 py-4 text-white"
  >
    {loading
      ? "Submitting..."
      : "Request Consultation"}
  </button>

</form>

          </div>

        </div>

      </section>

    </>
  );
}