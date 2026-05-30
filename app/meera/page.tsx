import InstitutionalReach from "@/components/sections/InstitutionalReach";
import Architecture from "@/components/sections/Architecture";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";

export default function MeeraPage() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32">
  <div className="max-w-7xl mx-auto px-8 w-full">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <p className="uppercase tracking-[0.35em] text-sm mb-8 text-gray-500">
          Enterprise Voice Intelligence Platform
        </p>

        <h1 className="text-7xl md:text-8xl font-light leading-[0.9]">
          Enterprise
          <br />
          Voice Intelligence
          <br />
          For Regulated Enterprises.
        </h1>

        <p className="mt-10 text-2xl text-gray-600 leading-relaxed max-w-2xl">
          Deploy conversational AI inside your bank,
          private cloud, or data center without exposing
          customer data to public AI systems.
        </p>

        <div className="mt-12 flex gap-4">
          <button className="px-8 py-4 bg-black text-white">
            Request Briefing
          </button>

          <button className="px-8 py-4 border border-gray-300">
            Explore Architecture
          </button>
        </div>

      </div>

      <div className="border border-neutral-200 bg-neutral-50 rounded-3xl p-12 relative overflow-hidden">

  <div className="absolute top-8 right-8 flex gap-1">
    <div className="w-1 h-4 bg-black animate-pulse"></div>
    <div className="w-1 h-7 bg-black animate-pulse [animation-delay:150ms]"></div>
    <div className="w-1 h-10 bg-black animate-pulse [animation-delay:300ms]"></div>
    <div className="w-1 h-6 bg-black animate-pulse [animation-delay:450ms]"></div>
  </div>

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

    <div className="flex justify-center py-2">
      <div className="flex gap-1">
        <div className="w-1 h-3 bg-black animate-pulse"></div>
        <div className="w-1 h-5 bg-black animate-pulse"></div>
        <div className="w-1 h-7 bg-black animate-pulse"></div>
        <div className="w-1 h-4 bg-black animate-pulse"></div>
      </div>
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
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-16">
            Deployment Models
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-2xl mb-4">On-Premise</h3>
              <p>Deploy completely within customer infrastructure.</p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Private Cloud</h3>
              <p>Dedicated cloud environments with enterprise governance.</p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Hybrid Cloud</h3>
              <p>Balance flexibility, control, and compliance.</p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Sovereign Cloud</h3>
              <p>Meet regional data residency requirements.</p>
            </div>

          </div>

        </div>
      </section>

     <div className="grid md:grid-cols-3 gap-10 mt-12">

  <div>
    <div className="mb-4 text-xl">🛡</div>
    <h3 className="mb-3 text-xl">Governance Controls</h3>
    <p className="text-neutral-600">
      Policy-driven execution with enterprise auditability.
    </p>
  </div>

  <div>
    <div className="mb-4 text-xl">🔐</div>
    <h3 className="mb-3 text-xl">Customer-Owned Data</h3>
    <p className="text-neutral-600">
      On-premise, sovereign cloud and private deployment options.
    </p>
  </div>

  <div>
    <div className="mb-4 text-xl">🌐</div>
    <h3 className="mb-3 text-xl">Multi-Language Support</h3>
    <p className="text-neutral-600">
      Native support for multilingual customer interactions.
    </p>
  </div>

</div>


<div className="grid md:grid-cols-4 gap-0 mt-12 border">

  <div className="p-8 border-r border-b">
    Banking
  </div>

  <div className="p-8 border-r border-b">
    Insurance
  </div>

  <div className="p-8 border-r border-b">
    NBFC
  </div>

  <div className="p-8 border-b">
    Fintech
  </div>

  <div className="p-8 border-r">
    Capital Markets
  </div>

  <div className="p-8 border-r">
    Government
  </div>

  <div className="p-8 border-r">
    Healthcare
  </div>

  <div className="p-8">
    Manufacturing
  </div>

</div>
      {/* CTA */}
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-6xl font-light mb-8">
            Ready for an Executive Briefing?
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            Explore how MEERA can be deployed
            inside your enterprise environment.
          </p>

          <button className="px-8 py-4 bg-black text-white">
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
  <div className="max-w-5xl mx-auto px-8 text-center">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
      Executive Briefing
    </p>

    <h2 className="text-6xl font-light mb-8">
      Explore MEERA Inside Your Enterprise.
    </h2>

    <p className="text-xl text-gray-600 mb-12">
      Discuss deployment models, security requirements,
      compliance controls, and implementation strategy.
    </p>

    <a
      href="mailto:contact@awaia.ai"
      className="inline-block px-8 py-4 bg-black text-white"
    >
      Request Executive Briefing
    </a>

  </div>
</section>

    </main>
  );
}