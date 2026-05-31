import SignalBars from "@/components/ui/SignalBars";
import InstitutionalReach from "@/components/sections/InstitutionalReach";
import Architecture from "@/components/sections/Architecture";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";

export default function MeeraPage() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">

  <div className="absolute top-20 right-20 w-[700px] h-[700px] rounded-full bg-violet-200/20 blur-[140px]" />

  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-100/20 blur-[120px]" />

</div>

  <div className="max-w-7xl mx-auto px-8 w-full">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <p className="uppercase tracking-[0.35em] text-sm mb-8 text-gray-500">
          Enterprise Voice Intelligence Platform
        </p>

        <h1 className="leading-[0.88] font-light">

  <span className="block text-7xl md:text-[110px] tracking-[-0.06em]">
    Enterprise
  </span>

  <span className="block text-7xl md:text-[110px] tracking-[-0.06em]">
    Voice Intelligence
  </span>

  <span className="block text-7xl md:text-[110px] tracking-[-0.06em]">
    For
    <span className="text-[#5D6B87]"> Regulated</span>
  </span>

  <span className="block text-7xl md:text-[110px] tracking-[-0.06em]">
    Enterprises.
  </span>

</h1>

        <p className="mt-10 text-2xl text-gray-600 leading-relaxed max-w-2xl">
          Deploy conversational AI inside your bank,
          private cloud, or data center without exposing
          customer data to public AI systems.
        </p>

        <div className="mt-12 flex flex-wrap gap-5 items-center">
          <button className="
px-8
py-4
bg-black
text-white
rounded-full
hover:scale-105
transition
duration-300
">
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

          <div className="flex items-center gap-3 ml-2">

  <div className="flex -space-x-2">

    <div className="w-8 h-8 rounded-full bg-[#d9dde5] border border-white"></div>

    <div className="w-8 h-8 rounded-full bg-[#c8cfdb] border border-white"></div>

    <div className="w-8 h-8 rounded-full bg-[#b8c2d3] border border-white"></div>

  </div>

  <span className="text-sm text-neutral-500">
    Trusted by regulated institutions
  </span>

</div>

        </div>

      </div>

      <div className="
float-card
border
border-white/60
bg-white/70
backdrop-blur-xl
shadow-[0_20px_80px_rgba(0,0,0,0.08)]
rounded-[32px]
p-12
relative
overflow-hidden
">


  <div className="mb-10 text-xs tracking-[0.25em] text-neutral-500 uppercase">
    Live Enterprise Interaction
  </div>

  <div className="space-y-6">

    <div className="border bg-white p-5">
      <div className="text-[10px] uppercase text-neutral-400 mb-2">
        Customer
      </div>

      <div>
        I need to check my overseas transaction limit.  
      </div>
    </div>

    <div className="flex justify-center py-6">
       <SignalBars />
    
    </div>


    <div className="bg-black text-white p-5 ml-12">
      <div className="text-[10px] uppercase text-neutral-400 mb-2">
        MEERA
      </div>

      <div>
        Your current limit is ₹50,00,000. Would you like a temporary increase request?
      </div>
    </div>

  </div>

  <div className="mt-12 pt-8 border-t flex justify-between text-[11px] uppercase tracking-widest text-neutral-500">

    <span>Voice Gateway</span>
    <span>Policy Engine</span>
    <span>Core Banking</span>

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
      Operational Impact
    </p>

    <h2 className="text-5xl font-light mb-16 max-w-5xl">
      Scale customer engagement without scaling operational headcount.
    </h2>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <div className="space-y-8">

          <div className="border-b border-neutral-200 pb-5">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Monthly Customer Interactions
            </div>

            <div className="text-4xl">
              100,000+
            </div>

          </div>

          <div className="border-b border-neutral-200 pb-5">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Typical Automation Potential
            </div>

            <div className="text-4xl">
              40% - 70%
            </div>

          </div>

          <div className="border-b border-neutral-200 pb-5">

            <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Availability
            </div>

            <div className="text-4xl">
              24×7×365
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
              Increase service coverage without proportional FTE growth.
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
              Lower cost-per-interaction across high-volume workflows.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#3F5E8C] mt-2" />
            <div>
              Support multilingual operations at enterprise scale.
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
        p-10
        text-center
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

      {/* CTA */}
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="
text-5xl
md:text-7xl
leading-[0.95]
font-light
mb-8
max-w-4xl
mx-auto
">
            Ready for an Executive Briefing?
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            Explore how MEERA can be deployed
            inside your enterprise environment.
          </p>

          <button className="
px-8
py-4
bg-black
text-white
rounded-full
hover:scale-105
transition
duration-300
">
            Contact AWAIA
          </button>

        </div>
      </section>




<section className="py-32 border-t">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-4 gap-12">

      <div>
        <div className="text-5xl mb-3">24×7</div>
        <p className="text-gray-500">Voice Operations</p>
      </div>

      <div>
        <div className="text-5xl mb-3">100%</div>
        <p className="text-gray-500">Audit Visibility</p>
      </div>

      <div>
        <div className="text-5xl mb-3">Multi</div>
        <p className="text-gray-500">Language Support</p>
      </div>

      <div>
        <div className="text-5xl mb-3">Hybrid</div>
        <p className="text-gray-500">Deployment Models</p>
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