export default function MeeraPage() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32">
        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.35em] text-sm mb-8 text-gray-500">
            Enterprise Voice Intelligence Platform
          </p>

          <h1 className="text-7xl md:text-8xl font-light leading-[0.9] max-w-5xl">
            Enterprise Voice Intelligence Built for Regulated Institutions.
          </h1>

          <p className="mt-10 text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Deploy conversational AI inside your bank,
            cloud, or data center without exposing
            customer data to public AI systems.
          </p>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.3em] text-sm mb-8 text-gray-500">
            Enterprise Architecture
          </p>

          <h2 className="text-5xl font-light mb-10">
            Designed for Regulated Institutions.
          </h2>

          <p className="text-xl max-w-4xl leading-relaxed text-gray-600">
            MEERA combines conversational AI,
            authentication,
            workflow orchestration,
            human escalation,
            audit logging,
            analytics,
            and compliance controls
            into a unified enterprise platform.
          </p>

        </div>
      </section>

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

      {/* SECURITY */}
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-12">
            Security & Compliance
          </h2>

          <ul className="space-y-4 text-xl">
            <li>End-to-End Encryption</li>
            <li>Complete Audit Trails</li>
            <li>Data Residency Controls</li>
            <li>Human Escalation Framework</li>
            <li>OTP & Authentication Workflows</li>
            <li>Customer-Owned Infrastructure</li>
          </ul>

        </div>
      </section>

      {/* USE CASES */}
      <section className="py-32 border-t">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light mb-12">
            BFSI Use Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>Customer Service Automation</div>
            <div>Collections Automation</div>
            <div>Loan Servicing</div>
            <div>Insurance Servicing</div>
            <div>Customer Authentication</div>
            <div>Relationship Manager Escalation</div>
          </div>

        </div>
      </section>

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

    </main>
  );
}