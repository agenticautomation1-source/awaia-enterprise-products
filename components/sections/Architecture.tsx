export default function Architecture() {
  return (
    <section className="py-32 border-t">
      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-16">
          Enterprise Architecture
        </p>

        <div className="grid md:grid-cols-5 gap-6">

          <div className="border p-8 text-center">
            <h3 className="font-medium mb-4">Voice Channels</h3>
            <p className="text-sm text-gray-500">
              Phone, IVR, Contact Center
            </p>
          </div>

          <div className="border p-8 text-center">
            <h3 className="font-medium mb-4">MEERA Core</h3>
            <p className="text-sm text-gray-500">
              Conversational Intelligence
            </p>
          </div>

          <div className="border p-8 text-center">
            <h3 className="font-medium mb-4">Authentication</h3>
            <p className="text-sm text-gray-500">
              OTP, DTMF, Identity Controls
            </p>
          </div>

          <div className="border p-8 text-center">
            <h3 className="font-medium mb-4">Human Escalation</h3>
            <p className="text-sm text-gray-500">
              Agent Transfer & Review
            </p>
          </div>

          <div className="border p-8 text-center">
            <h3 className="font-medium mb-4">Audit Layer</h3>
            <p className="text-sm text-gray-500">
              Logs, Compliance, Analytics
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}