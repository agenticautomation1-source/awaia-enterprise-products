import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "AWAIA Enterprise Products",
    template: "%s | AWAIA",
  },
  description:
    "Enterprise AI platforms for banking, insurance, NBFCs, financial institutions, and regulated industries.",

  keywords: [
    "Enterprise AI",
    "Conversational AI",
    "Voice AI",
    "Banking AI",
    "BFSI AI",
    "Agentic AI",
    "AI Platform",
    "Financial Services AI",
    "MEERA",
    "LEA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}