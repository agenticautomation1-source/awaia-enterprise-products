import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEA Investigation Intelligence Platform",
  description:
    "Investigation intelligence platform for fraud detection, compliance, and enforcement workflows.",
};


export default function LeaPage() {
  return (
    <main className="min-h-screen flex items-center pt-32">
      <div className="max-w-6xl mx-auto px-8">
        <p className="uppercase tracking-[0.3em] text-sm mb-6">
          Legal Enforcement Assistant
        </p>

        <h1 className="text-7xl font-light">
          LEA™
        </h1>

        <p className="mt-8 text-xl max-w-2xl">
          Investigation intelligence platform for banks and regulated
          financial institutions.
        </p>
      </div>
    </main>
  );
}