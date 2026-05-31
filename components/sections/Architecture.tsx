import {
Phone,
Shield,
Workflow,
Database,
Languages,
Building2,
} from "lucide-react";

export default function Architecture() {
const capabilities = [
{
icon: Phone,
title: "Conversation Intelligence",
items: [
"Voice Understanding",
"Context Retention",
"Interruption Handling",
"Multilingual Support",
],
},
{
icon: Shield,
title: "Authentication",
items: [
"OTP Verification",
"DTMF Validation",
"Identity Checks",
"Consent Capture",
],
},
{
icon: Workflow,
title: "Workflow Automation",
items: [
"Service Requests",
"Collections",
"Claims",
"Lead Qualification",
],
},
{
icon: Database,
title: "Enterprise Systems",
items: [
"CRM",
"Core Banking",
"ERP",
"Knowledge Bases",
],
},
];

return ( <section className="py-28 border-t">
  <div className="max-w-7xl mx-auto px-8">

    <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
      MEERA Capabilities
    </p>

    <h2 className="text-5xl font-light max-w-4xl mb-16">
      Built for real enterprise conversations, not scripted IVRs.
    </h2>

    <div className="grid lg:grid-cols-4 gap-10">

      {capabilities.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="hover-lift"
          >
            <Icon
              size={22}
              className="text-[#3F5E8C] mb-5"
            />

            <h3 className="text-xl mb-5">
              {item.title}
            </h3>

            <div className="space-y-3">

              {item.items.map((entry) => (
                <div
                  key={entry}
                  className="flex items-center gap-3 text-neutral-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3F5E8C]" />
                  {entry}
                </div>
              ))}

            </div>
          </div>
        );
      })}

    </div>

  </div>

</section>


);
}