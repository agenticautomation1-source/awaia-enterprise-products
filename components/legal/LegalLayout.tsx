import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

interface LegalLayoutProps {
  title: string;
  heroImage: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  heroImage,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="bg-[#f9f9f8] min-h-screen">

        {/* HERO */}

        <section className="relative h-[72vh] overflow-hidden">

 <img
  src={heroImage}
  alt={title}
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
  "
  style={{ objectPosition: "center 75%" }}
/>

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex h-full items-end">

            <div className="mx-auto w-full max-w-[1440px] px-8 pb-20">

              <p
                className="
                  mb-6
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                "
              >
                LEGAL
              </p>

              <h1
                className="
                  max-w-4xl
                  text-6xl
                  md:text-[110px]
                  font-light
                  leading-[0.92]
                  tracking-[-0.05em]
                  text-white
                "
              >
                {title}
              </h1>

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="relative bg-[#f9f9f8] pb-28">

          <div className="mx-auto max-w-6xl px-8">

            <div
              className="
                relative
                z-20
                -mt-10
                rounded-[36px]
                border
                border-neutral-200/70
                bg-white
                p-12
                md:p-20
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              "
            >

              <div
                className="
                  legal-content
                  text-[18px]
                  leading-[2]
                  text-neutral-700
                "
              >
                {children}
              </div>

            </div>

          </div>

        </section>

      </main>


    </>
  );
}