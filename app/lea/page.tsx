import type { Metadata } from "next";
import LeaClient from "./LeaClient";


export const metadata: Metadata = {
  title:
    "LEA™ Legal Enforcement Assistant",

  description:
    "LEA™ is an Enterprise Investigation Intelligence and Decision Support Platform from AWAIA (Automate With AI Agent) that helps banks, NBFCs, insurers and regulated institutions accelerate response readiness for regulatory, investigative and law-enforcement requests.",

  keywords: [
    "LEA",
    "Legal Enforcement Assistant",
    "Investigation Intelligence",
    "Decision Support Platform",
    "Regulatory Intelligence",
    "Enterprise Investigation Platform",
    "Regulatory Response Management",
    "Law Enforcement Requests",
    "BFSI Compliance",
    "Financial Crime Investigation",
    "AML Investigation",
    "Case Intelligence",
    "Regulatory Technology",
    "Enterprise Intelligence Platform",
    "AWAIA",
    "Automate With AI Agent",
  ],

  alternates: {
    canonical:
      "https://products.automatewithaiagent.com/lea",
  },

  openGraph: {
    title:
      "LEA™ Legal Enforcement Assistant",

    description:
      "Enterprise Investigation Intelligence and Decision Support Platform for BFSI institutions.",

    url:
      "https://products.automatewithaiagent.com/lea",

    siteName:
      "AWAIA",

    type:
      "website",

    images: [
      {
        url:
          "/images/lea-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "LEA Legal Enforcement Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LEA™ Legal Enforcement Assistant",

    description:
      "Enterprise Investigation Intelligence Platform from AWAIA.",

    images: [
      "/images/lea-og.jpg",
    ],
  },
};


export default function Page() {
  return <LeaClient />;
}


