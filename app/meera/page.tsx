export default function MeeraPage() {
  return (
    <main>
      <section className="min-h-screen flex items-center pt-32">
        <div className="max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.35em] text-sm mb-8 text-gray-500">
            Enterprise Voice Intelligence Platform
          </p>

          <h1 className="text-7xl md:text-8xl font-light leading-[0.9] max-w-5xl">
            Enterprise Voice Intelligence
            Built for Regulated Institutions.
          </h1>

          <p className="mt-10 text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Deploy conversational AI inside your bank,
            cloud, or data center without exposing
            customer data to public AI systems.
          </p>

          <div className="mt-16 flex gap-6">
            <button className="px-8 py-4 bg-black text-white">
              Request Executive Briefing
            </button>

            <button className="px-8 py-4 border">
              Explore Architecture
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}