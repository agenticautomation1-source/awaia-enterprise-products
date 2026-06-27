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
  
  const [errors, setErrors] = useState({
  fullName: "",
  email: "",
  organization: "",
  message: "",
});




const [submitMessage, setSubmitMessage] = useState("");

const [submitSuccess, setSubmitSuccess] = useState(false);



const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  const newErrors = {
    fullName: "",
    email: "",
    organization: "",
    message: "",
  };

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Please enter your full name.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your work email.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.organization.trim()) {
    newErrors.organization = "Please enter your organization.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Please tell us how we can help.";
  } else if (formData.message.trim().length < 20) {
    newErrors.message =
      "Please provide a little more detail (minimum 20 characters).";
  }

  setErrors(newErrors);

  if (
    Object.values(newErrors).some(
      (error) => error !== ""
    )
  ) {
    return;
  }

  try {
  setLoading(true);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.error ||
      "Unable to submit your consultation request."
    );
  }

setSubmitSuccess(true);

setSubmitMessage(
  "Thank you for contacting AWAIA. A confirmation email has been sent to your registered email address. Our enterprise consulting team will respond within one business day."
);

  setFormData({
    fullName: "",
    email: "",
    organization: "",
    message: "",
  });

  setErrors({
    fullName: "",
    email: "",
    organization: "",
    message: "",
  });

} catch (error: any) {

setSubmitSuccess(false);

setSubmitMessage(
  error.message ||
  "Unable to submit your consultation request."
);

} finally {

  setLoading(false);

}
};
	
	
	return (
	
    <>
   
<Navbar />

     {/* HERO */}
<section
className="
relative

min-h-[1050px]
sm:min-h-[980px]

xl:h-screen

overflow-visible
"
>


  {/* VIDEO WRAPPER */}
<div
  className="
    absolute
    inset-0
    overflow-hidden
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
      h-full
      w-full
      object-cover
      scale-[1.12]
      origin-center
      [clip-path:inset(0_0_30px_0)]
    "
  >
    <source
      src="/videos/contact-hero.mp4"
      type="video/mp4"
    />
  </video>
</div>
  

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/35" />
  

  {/* CONTENT */}
<div
  className="
    relative
    z-20
    flex
    min-h-[1050px]
md:min-h-[980px]
xl:min-h-screen
    items-start

    pt-14

    md:pt-30

    xl:pt-36
overflow-hidden
  "
>

    <div
  className="
    mx-auto
    w-full
    max-w-[1440px]
    px-6
md:px-1
mt-15
xl:px-12
    text-white
  "
>

      <p
  className="
    mb-8
	md:mb-8
    text-[10px]
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
		  md:mb-12
text-[44px]
md:text-[100px]
          font-light
          leading-[0.88]
md:leading-[0.92]
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
          text-[13px]
		md:text-xl
          text-white/85
		  leading-6
		  -mt-2
          md:leading-relaxed
        "
      >
        Discuss enterprise AI systems,
        AI governance,
        digital workforce strategy,
        and responsible AI adoption.
      </p>

<button
  className="
    mt-8
    xl:mt-10

    w-[235px]
    md:w-auto

    rounded-full
    bg-white

    px-5
md:px-6

py-2
md:py-3

text-[14px]
md:text-lg

    font-medium
    text-black

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
    z-30

    left-1/2
-translate-x-1/2

top-[40%]

w-[84%]
max-w-[335px]

    xl:left-auto
    xl:right-[12px]
    xl:top-[30%]
    xl:-translate-y-[5%]
    xl:translate-x-0
    xl:bottom-auto

    xl:w-[421px]
    xl:max-w-none
  "
>

<div
  className="
        relative
        w-full
        rounded-[32px]

        border
        border-white/15

        bg-white/10

        backdrop-blur-3xl
        supports-[backdrop-filter]:bg-white/10
        supports-[backdrop-filter]:backdrop-blur-3xl

        overflow-hidden

        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/10
        before:to-transparent
        before:pointer-events-none
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

		<div
  className="
    relative
    px-5
    py-5
    xl:p-7
  "
>

        {/* TOP */}
        <div className="flex items-start gap-5 py-1 xl:py-1">

          <div
            className="
              flex
              h-10
w-10
xl:h-14
xl:w-14
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
  size={18}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
			
			
          </div>

          <div className="flex-1">

<h3
className="
text-[16px]
xl:text-[24px]
leading-[1.35]
font-light
tracking-[-0.02em]
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
text-[13px]
xl:text-[20px]
leading-normal
tracking-[0.01em]
    font-light
    text-left
  "
>
  Talk to an AWAIA Expert →
</button>

          </div>

        </div>

        <div className="my-2 h-px bg-white/15" />

        {/* PHONE */}
        <div className="flex items-center gap-4 py-2 xl:py-4">

          <div
            className="
              flex
              h-10
              w-10
xl:h-14
xl:w-14
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
            <div className="text-[9px]
xl:text-xs text-white/60">
              Enterprise Contact
            </div>

<div
  className="
    text-[11px]
    xl:text-lg
    text-white
    whitespace-pre
  "
>
  +91 7700 915294
</div>
          </div>

        </div>

        <div className="h-px bg-white/10" />

        {/* EMAIL */}
       <div className="flex items-center gap-4 py-2 xl:py-4">

          <div
            className="
              flex
h-10
w-10

xl:h-14
xl:w-14
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
  size={18}
  strokeWidth={1.5}
  className="text-[#d8a44d]"
/>
          </div>

          <div>
            <div className="text-[9px]
xl:text-xs text-white/60">
              Email
            </div>

            <div className="text-[11px]
xl:text-lg text-white">
              contact@automatewithaiagent.com
            </div>
          </div>

        </div>

        <div className="h-px bg-white/10" />

        {/* LOCATION */}
		
<div className="flex items-center gap-4 py-2 xl:py-4">

          <div
            className="
              flex
              h-10
              w-10
xl:h-14
xl:w-14
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
            <div className="text-[9px]
xl:text-xs text-white/60">
              Headquarters
            </div>

            <div className="text-[11px]
xl:text-lg text-white">
              Mumbai, India
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* CONTACT SECTION */}
      <section className="bg-[#f9f9f8] py-20">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>

              <p className="mb-5 text-[9px]
xl:text-xs uppercase tracking-[0.3em] text-neutral-500">
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


{submitMessage && (

  <div
    className={`
      mb-6
      rounded-3xl
      border
      px-6
      py-5
      transition-all

      ${
        submitSuccess
          ? "border-emerald-200 bg-emerald-50"
          : "border-red-200 bg-red-50"
      }
    `}
  >

    <h3
      className={`
        mb-2
        text-lg
        font-medium

        ${
          submitSuccess
            ? "text-emerald-700"
            : "text-red-700"
        }
      `}
    >
      {submitSuccess
        ? "✓ Consultation Request Submitted"
        : "Unable to Submit Request"}
    </h3>

    <p
      className={`
        text-sm
        leading-7

        ${
          submitSuccess
            ? "text-emerald-700"
            : "text-red-700"
        }
      `}
    >
      {submitMessage}
    </p>

  </div>

)}



  {/* FULL NAME */}

  <div>

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
      className={`
        h-16
        w-full
        rounded-2xl
        px-6
        transition
        outline-none

        ${
          errors.fullName
            ? "border border-red-500"
            : "border border-neutral-200 focus:border-black"
        }
      `}
    />

    {errors.fullName && (
      <p className="mt-2 text-sm text-red-600">
        {errors.fullName}
      </p>
    )}

  </div>


  {/* EMAIL */}

  <div>

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
      className={`
        h-16
        w-full
        rounded-2xl
        px-6
        transition
        outline-none

        ${
          errors.email
            ? "border border-red-500"
            : "border border-neutral-200 focus:border-black"
        }
      `}
    />

    {errors.email && (
      <p className="mt-2 text-sm text-red-600">
        {errors.email}
      </p>
    )}

  </div>


  {/* ORGANIZATION */}

  <div>

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
      className={`
        h-16
        w-full
        rounded-2xl
        px-6
        transition
        outline-none

        ${
          errors.organization
            ? "border border-red-500"
            : "border border-neutral-200 focus:border-black"
        }
      `}
    />

    {errors.organization && (
      <p className="mt-2 text-sm text-red-600">
        {errors.organization}
      </p>
    )}

  </div>


  {/* MESSAGE */}

  <div>

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
      className={`
        w-full
        rounded-2xl
        p-6
        transition
        outline-none

        ${
          errors.message
            ? "border border-red-500"
            : "border border-neutral-200 focus:border-black"
        }
      `}
    />

    {errors.message && (
      <p className="mt-2 text-sm text-red-600">
        {errors.message}
      </p>
    )}

  </div>


  <button
    type="submit"
    disabled={loading}
    className="
      rounded-full
      bg-black
      px-8
      py-4
      text-white
      transition
      hover:bg-neutral-800
      disabled:cursor-not-allowed
      disabled:opacity-60
    "
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