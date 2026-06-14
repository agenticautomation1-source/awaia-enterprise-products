import SignalBars from "@/components/ui/SignalBars";
import InstitutionalReach from "@/components/sections/InstitutionalReach";
import Architecture from "@/components/sections/Architecture";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";

export default function MeeraPage() {
  return (
    <main>

      {/* HERO */}


<section className="relative h-screen overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/videos/meera-hero.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/25" />

  <div className="relative z-10 h-full flex items-center">

    <div className="max-w-7xl mx-auto px-8 w-full">

      <div
        className="
          max-w-2xl
          bg-white/75
          backdrop-blur-xl
          border
          border-white/40
          rounded-[32px]
          p-10
          shadow-2xl
        "
      >

        <p className="uppercase tracking-[0.35em] text-sm mb-8 text-gray-500">
          Enterprise Voice Intelligence Platform
        </p>

        <h1 className="leading-[0.82] font-light">

          <span className="block text-4xl md:text-[52px] tracking-[-0.06em]">
            Enterprise
          </span>

          <span className="block text-5xl md:text-[52px] tracking-[-0.06em]">
            Voice Intelligence
          </span>

          <span className="block text-5xl md:text-[52px] tracking-[-0.06em]">
            For <span className="text-[#5D6B87]">Regulated</span>
          </span>

          <span className="block text-5xl md:text-[52px] tracking-[-0.06em]">
            Enterprises.
          </span>

        </h1>

        <p className="text-lg text-neutral-700 leading-relaxed max-w-xl mt-4">
          MEERA transforms customer conversations into
          authenticated, compliant and action-oriented
          enterprise workflows across banking, insurance,
          NBFC and regulated industries.
        </p>

        <div className="mt-6">

          <div className="text-[#3F5E8C] text-sm uppercase tracking-[0.25em] mb-3">
            Enterprise Outcomes
          </div>

          <div className="space-y-2 text-neutral-700">

            <div>✓ No waiting in IVR queues</div>

            <div>✓ 24×7×365 customer availability</div>

            <div>✓ No customer data leaves your environment</div>

            <div>✓ Authenticate before execution</div>

            <div>✓ Human-like multilingual conversations</div>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-4 items-center">

          <button
            className="
            px-8
            py-4
            bg-black
            text-white
            rounded-full
            hover:scale-105
            transition
            duration-300
            "
          >
            Request Briefing
          </button>

          <button
            className="
            px-8
            py-4
            border
            border-gray-300
            rounded-full
            bg-white/70
            backdrop-blur-sm
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

</section>


<Architecture />
<ArchitectureDiagram />


 
      {/* DEPLOYMENT */}
      <section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Business Problems Solved
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-4xl">
      Eliminate operational bottlenecks across customer interactions.
    </h2>

    <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">

      <div>
        <h3 className="text-xl mb-3">
          No Waiting In IVR Queues
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Customers receive immediate, human-like assistance without navigating
          complex IVR trees.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3">
          24×7×365 Service Availability
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Deliver uninterrupted customer engagement beyond business hours.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3">
          Customer Data Remains Internal
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Customer conversations, transcripts and sensitive information remain
          under enterprise control.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3">
          Authenticate Before Action
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          OTP, DTMF and workflow validation before executing customer requests.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3">
          Multilingual Customer Support
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Engage naturally in Hindi, English, Hinglish and regional languages.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3">
          Enterprise Workflow Execution
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          Move beyond conversations and execute real enterprise actions.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Enterprise Data & Security
    </p>

    <h2 className="text-5xl font-light mb-16">
      Built for environments where data matters.
    </h2>

    <div className="grid lg:grid-cols-3 gap-10">

      <div>
        <h3 className="mb-4 text-xl">
          Customer Conversations
        </h3>

        <p className="text-neutral-600">
          Voice interactions across support, collections,
          servicing and engagement workflows.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl">
          Personally Identifiable Information
        </h3>

        <p className="text-neutral-600">
          Secure handling of customer profile and identity data.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl">
          Authentication Data
        </h3>

        <p className="text-neutral-600">
          OTP validation, DTMF workflows and consent capture.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl">
          Financial Information
        </h3>

        <p className="text-neutral-600">
          Account servicing, transaction inquiries and policy workflows.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl">
          Call Recordings & Transcripts
        </h3>

        <p className="text-neutral-600">
          Conversation history, summaries and audit records.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl">
          Enterprise Integrations
        </h3>

        <p className="text-neutral-600">
          CRM, Core Banking, ERP and enterprise systems.
        </p>
      </div>

    </div>

  </div>

</section>


<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Business Impact
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Scale customer operations without scaling operational costs.
    </h2>

    <div className="grid lg:grid-cols-2 gap-16">

      <div
        className="
        border
        border-neutral-200
        rounded-[28px]
        bg-white
        p-10
        "
      >

        <div className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
          Traditional Contact Center
        </div>

        <div className="space-y-5 text-neutral-600">

          <div>Human agent availability constraints</div>

          <div>Limited operating hours</div>

          <div>Training and onboarding cycles</div>

          <div>Queue build-up during peak demand</div>

          <div>High cost per interaction</div>

          <div>Scaling requires additional headcount</div>

        </div>

      </div>

      <div
        className="
        border
        border-[#3F5E8C]
        rounded-[28px]
        bg-white
        p-10
        "
      >

        <div className="text-sm uppercase tracking-widest text-[#3F5E8C] mb-6">
          MEERA Voice Intelligence
        </div>

        <div className="space-y-5 text-neutral-700">

          <div>24×7×365 availability</div>

          <div>Instant customer engagement</div>

          <div>Consistent service quality</div>

          <div>Multilingual support at scale</div>

          <div>Reduce cost-per-interaction while increasing service coverage</div>

          <div>Scale customer operations without proportional FTE growth</div>

        </div>

      </div>

    </div>

  </div>

</section>
     
<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Operational Economics
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Increase customer service capacity while reducing operational friction.
    </h2>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <div className="space-y-8">

          <div className="border-b border-neutral-200 pb-6">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Cost Efficiency
            </div>

            <div className="text-3xl md:text-4xl">
              Lower Cost Per Interaction
            </div>

          </div>

          <div className="border-b border-neutral-200 pb-6">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Workforce Scaling
            </div>

            <div className="text-3xl md:text-4xl">
              Growth Without Proportional FTE Expansion
            </div>

          </div>

          <div className="border-b border-neutral-200 pb-6">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Service Availability
            </div>

            <div className="text-3xl md:text-4xl">
              24×7×365 Customer Engagement
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div
        className="
        bg-white
        border
        border-[#3F5E8C]
        rounded-[32px]
        p-10
        "
      >

        <div className="text-sm uppercase tracking-widest text-[#3F5E8C] mb-6">
          Expected Business Outcomes
        </div>

        <div className="space-y-5">

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Reduce repetitive customer servicing workload.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Increase service coverage without proportional headcount growth.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Improve customer experience through instant engagement.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Eliminate queue dependency across high-volume interactions.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Support multilingual operations across customer segments.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Maintain consistent service quality across every interaction.
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      MEERA vs Traditional IVR
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Move beyond menus, queues and scripted customer journeys.
    </h2>

    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">

      {/* HEADER */}

      <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50">

        <div className="p-6 font-medium">
          Capability
        </div>

        <div className="p-6 font-medium text-neutral-500">
          Traditional IVR
        </div>

        <div className="p-6 font-medium text-[#3F5E8C]">
          MEERA
        </div>

      </div>

      {[
        [
          "Customer Experience",
          "Menu navigation",
          "Natural conversation",
        ],
        [
          "Availability",
          "Business hour dependency",
          "24×7×365 availability",
        ],
        [
          "Language Support",
          "Limited",
          "Multilingual",
        ],
        [
          "Authentication",
          "Basic validation",
          "OTP + DTMF + workflow controls",
        ],
        [
          "Customer Context",
          "Session limited",
          "Context-aware conversations",
        ],
        [
          "Workflow Execution",
          "Not supported",
          "Enterprise action execution",
        ],
        [
          "Scalability",
          "Additional staffing required",
          "Scale without proportional FTE growth",
        ],
        [
          "Auditability",
          "Limited visibility",
          "Full audit traceability",
        ],
      ].map((row) => (
        <div
          key={row[0]}
          className="
          grid
          grid-cols-3
          border-b
          border-neutral-100
          last:border-0
          "
        >

          <div className="p-6 font-medium">
            {row[0]}
          </div>

          <div className="p-6 text-neutral-500">
            {row[1]}
          </div>

          <div className="p-6 text-neutral-700">
            {row[2]}
          </div>

        </div>
      ))}

    </div>

  </div>

</section>


<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      How MEERA Works
    </p>

    <h2 className="text-5xl font-light mb-20 max-w-4xl">
      From customer conversation to enterprise action.
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">01</div>
        <h3 className="text-xl mb-3">Customer Speaks</h3>
        <p className="text-neutral-600">
          Customer initiates a natural voice conversation.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">02</div>
        <h3 className="text-xl mb-3">Intent Detection</h3>
        <p className="text-neutral-600">
          MEERA understands context, intent and objective.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">03</div>
        <h3 className="text-xl mb-3">Identity Verification</h3>
        <p className="text-neutral-600">
          OTP, DTMF and workflow-based authentication.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">04</div>
        <h3 className="text-xl mb-3">Policy Validation</h3>
        <p className="text-neutral-600">
          Enterprise rules and permissions are checked.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">05</div>
        <h3 className="text-xl mb-3">System Access</h3>
        <p className="text-neutral-600">
          MEERA securely accesses CRM and core platforms.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">06</div>
        <h3 className="text-xl mb-3">Workflow Execution</h3>
        <p className="text-neutral-600">
          Service requests, updates and actions are executed.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">07</div>
        <h3 className="text-xl mb-3">Audit Logging</h3>
        <p className="text-neutral-600">
          Every interaction remains traceable and auditable.
        </p>
      </div>

      <div className="border border-neutral-200 rounded-[24px] p-8 bg-white hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-4">08</div>
        <h3 className="text-xl mb-3">Response Delivered</h3>
        <p className="text-neutral-600">
          Customer receives a completed outcome or next step.
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


<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Why Enterprises Choose MEERA
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Built for environments where customer experience,
      operational efficiency and governance matter equally.
    </h2>

    <div className="grid lg:grid-cols-3 gap-10">

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          01
        </div>

        <h3 className="text-xl mb-3">
          No IVR Queues
        </h3>

        <p className="text-neutral-600">
          Eliminate menu navigation and provide instant customer engagement.
        </p>
      </div>

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          02
        </div>

        <h3 className="text-xl mb-3">
          24×7×365 Availability
        </h3>

        <p className="text-neutral-600">
          Continue servicing customers beyond business hours.
        </p>
      </div>

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          03
        </div>

        <h3 className="text-xl mb-3">
          Multilingual Conversations
        </h3>

        <p className="text-neutral-600">
          Support Hindi, English, Hinglish and regional languages.
        </p>
      </div>

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          04
        </div>

        <h3 className="text-xl mb-3">
          Enterprise Workflow Execution
        </h3>

        <p className="text-neutral-600">
          Move beyond conversations and execute business actions.
        </p>
      </div>

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          05
        </div>

        <h3 className="text-xl mb-3">
          Customer-Owned Data
        </h3>

        <p className="text-neutral-600">
          Keep conversations, transcripts and customer information under enterprise control.
        </p>
      </div>

      <div className="hover-lift">
        <div className="text-[#3F5E8C] text-sm mb-3">
          06
        </div>

        <h3 className="text-xl mb-3">
          Lower Cost Per Interaction
        </h3>

        <p className="text-neutral-600">
          Increase service capacity without proportional FTE growth.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-28 border-t">

  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      Customer Experience Transformation
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Replace frustrating IVR journeys with intelligent customer conversations.
    </h2>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* IVR */}

      <div
        className="
        border
        border-neutral-200
        bg-white
        rounded-[32px]
        p-10
        "
      >

        <div className="text-sm uppercase tracking-widest text-neutral-500 mb-8">
          Traditional IVR Experience
        </div>

        <div className="space-y-5">

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Press 1 for Banking</div>
          </div>

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Press 4 for Account Services</div>
          </div>

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Wait in queue</div>
          </div>

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Repeat information to an agent</div>
          </div>

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Limited operating hours</div>
          </div>

          <div className="flex gap-4">
            <div className="text-red-500">✕</div>
            <div>Customer frustration and abandonment</div>
          </div>

        </div>

      </div>

      {/* MEERA */}

      <div
        className="
        border
        border-[#3F5E8C]
        bg-white
        rounded-[32px]
        p-10
        "
      >

        <div className="text-sm uppercase tracking-widest text-[#3F5E8C] mb-8">
          MEERA Experience
        </div>

        <div className="space-y-5">

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>Hello Rahul, how may I help you today?</div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>Natural conversation without menu navigation</div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>Instant customer authentication</div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>Real-time access to enterprise systems</div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>Execute workflow and resolve request</div>
          </div>

          <div className="flex gap-4">
            <div className="text-green-600">✓</div>
            <div>24×7×365 availability</div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


<div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-neutral-600">

  <div>Deployment Models</div>

  <div>Security Architecture</div>

  <div>Integration Strategy</div>

  <div>Implementation Roadmap</div>

  <div>Business Outcomes</div>

</div>







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

<a
  href="mailto:contact@awaia.ai"
  className="
  inline-flex
  items-center
  justify-center
  min-w-[360px]
  px-12
  py-5
  rounded-full
  bg-black
  hover:scale-105
  transition-all
  duration-300
  shadow-[0_12px_40px_rgba(0,0,0,0.25)]
  "
>
  <span className="!text-white text-lg font-medium">
    Request Executive Briefing →
  </span>
</a>

  </div>
</section>

    </main>
  );
}