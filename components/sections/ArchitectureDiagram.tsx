export default function ArchitectureDiagram() {
  return (
    <section className="py-28 border-t">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
          Enterprise Architecture
        </p>

        <h2 className="text-5xl font-light mb-16">
          Designed for enterprise-grade voice operations.
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* CHANNELS */}

          <div>

            <h3 className="text-xl mb-6">
              Customer Channels
            </h3>

            <div className="space-y-4">

              {[
                "Phone Banking",
                "Contact Center",
                "Mobile App",
                "WhatsApp",
                "Web Portal",
              ].map((item) => (
                <div
                  key={item}
className="
border
border-neutral-200
bg-white
rounded-xl
px-5
py-4
hover-lift
transition-all
duration-300
shadow-[0_8px_25px_rgba(15,23,42,0.04)]
"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* CORE */}

          <div
            className="
            border
            border-neutral-200
            bg-white
            rounded-[32px]
            p-8
            shadow-sm
            "
          >

            <div className="text-[#3F5E8C] text-xs tracking-[0.25em] uppercase mb-6">
              MEERA Core
            </div>

            <div className="space-y-4">

              {[
                "Speech Engine",
                "Conversation Engine",
                "Authentication Layer",
                "Policy Engine",
                "Workflow Engine",
                "Analytics Layer",
              ].map((item) => (
                <div
                  key={item}
                  className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-neutral-100
                  pb-3
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-[#3F5E8C]" />

                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

          {/* SYSTEMS */}

          <div>

            <h3 className="text-xl mb-6">
              Enterprise Systems
            </h3>

            <div className="space-y-4">

              {[
                "Core Banking",
                "CRM",
                "LOS / LMS",
                "ERP",
                "Identity Systems",
                "Knowledge Bases",
              ].map((item) => (
                <div
                  key={item}
className="
border
border-neutral-200
bg-white
rounded-xl
px-5
py-4
hover-lift
transition-all
duration-300
shadow-[0_8px_25px_rgba(15,23,42,0.04)]
"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="mt-16 border-t pt-10">

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <div className="text-[#3F5E8C] text-sm mb-2">
                Authentication
              </div>

              <div className="text-neutral-600">
                OTP, DTMF and customer verification workflows.
              </div>
            </div>

            <div>
              <div className="text-[#3F5E8C] text-sm mb-2">
                Security
              </div>

              <div className="text-neutral-600">
                Customer-controlled deployment and data ownership.
              </div>
            </div>

            <div>
              <div className="text-[#3F5E8C] text-sm mb-2">
                Compliance
              </div>

              <div className="text-neutral-600">
                Auditability, policy enforcement and traceability.
              </div>
            </div>

            <div>
              <div className="text-[#3F5E8C] text-sm mb-2">
                Automation
              </div>

              <div className="text-neutral-600">
                Enterprise workflow execution and orchestration.
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}