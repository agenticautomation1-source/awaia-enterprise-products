import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Header />

      <main className="bg-[#f9f9f8] min-h-screen">

        <section className="mx-auto max-w-5xl px-6 pt-40 pb-20">

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Legal
          </p>

          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            {title}
          </h1>

        </section>

        <section className="mx-auto max-w-4xl px-6 pb-32">
          <div className="prose prose-neutral max-w-none">
            {children}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}