export default function InstitutionalReach() {
  const sectors = [
    "Banking",
    "Insurance",
    "NBFC",
    "Fintech",
    "Capital Markets",
    "Government",
    "Healthcare",
    "Manufacturing",
  ];

  return (
    <section className="py-32 border-t">
      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
          Market Verticals
        </p>

        <h2 className="text-6xl font-light mb-16">
          Institutional Reach.
        </h2>

        <div className="grid md:grid-cols-4 border">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="p-8 border-r border-b hover:bg-neutral-50 transition"
            >
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                Sector
              </div>

              <div className="text-xl">
                {sector}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}