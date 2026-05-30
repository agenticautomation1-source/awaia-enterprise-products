export default function ArchitectureDiagram() {
  return (
    <section className="py-32 border-t">
      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-16">
          Platform Architecture
        </p>

        <div className="flex flex-col items-center gap-6">

          <div className="border px-12 py-6 w-80 text-center">
            Voice Channels
          </div>

          <div>↓</div>

          <div className="border px-12 py-6 w-80 text-center">
            MEERA Intelligence Core
          </div>

          <div>↓</div>

          <div className="border px-12 py-6 w-80 text-center">
            Authentication Layer
          </div>

          <div>↓</div>

          <div className="border px-12 py-6 w-80 text-center">
            Human Escalation
          </div>

          <div>↓</div>

          <div className="border px-12 py-6 w-80 text-center">
            Audit & Analytics
          </div>

        </div>

      </div>
    </section>
  );
}