export default function InstitutionalReach() {
  const industries = [
    {
      title: "Banking",
      workflows: [
        "Account Services",
        "Loan Servicing",
        "Collections",
        "Transaction Assistance",
      ],
    },
    {
      title: "Insurance",
      workflows: [
        "Claims Assistance",
        "Policy Servicing",
        "Renewals",
        "Customer Support",
      ],
    },
    {
      title: "NBFC",
      workflows: [
        "Customer Verification",
        "Lead Qualification",
        "Collections",
        "Service Requests",
      ],
    },
    {
      title: "Government",
      workflows: [
        "Citizen Services",
        "Information Access",
        "Application Support",
        "Multilingual Assistance",
      ],
    },
    {
      title: "Healthcare",
      workflows: [
        "Patient Engagement",
        "Appointment Assistance",
        "Service Support",
        "Information Services",
      ],
    },
    {
      title: "Fintech",
      workflows: [
        "Digital Onboarding",
        "Transaction Support",
        "Customer Service",
        "Identity Verification",
      ],
    },
  ];

  return (
    <section className="py-28 border-t">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.35em] text-[11px] text-[#3F5E8C] mb-8">
          Industry Workflows
        </p>

        <h2 className="text-5xl font-light max-w-4xl mb-16">
          Purpose-built for regulated customer interactions.
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
              hover-lift
              border
              border-neutral-200
              rounded-[24px]
              bg-white
              p-8
              "
            >
              <h3 className="text-2xl mb-6">
                {industry.title}
              </h3>

              <div className="space-y-4">

                {industry.workflows.map((workflow) => (
                  <div
                    key={workflow}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3F5E8C]" />

                    <span className="text-neutral-600">
                      {workflow}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}