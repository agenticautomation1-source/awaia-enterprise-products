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

        <div className="mt-12 flex gap-4">
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

    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
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