import type { Metadata } from "next";
import "./globals.css";
import OrganizationSchema from "./organization-schema";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://products.automatewithaiagent.com"
  ),

  title: {
    default:
      "AWAIA Enterprise Products | Automate With AI Agent",
    template:
      "%s | AWAIA",
  },

  description:
    "AWAIA (Automate With AI Agent) delivers Enterprise AI Platforms, Voice Intelligence, Legal Enforcement Intelligence, AI Governance, ISO/IEC 42001:2023 Consulting, Digital Workforce and Responsible AI Solutions for regulated enterprises.",

  keywords: [
    "AWAIA",
    "Automate With AI Agent",
    "automatewithaiagent.com",
    "Agentic AI",
    "Enterprise AI",
    "Artificial Intelligence",
    "AI Governance",
    "Responsible AI",
    "ISO 42001",
    "ISO IEC 42001",
    "AI Management System",
    "AI Compliance",
    "AI Risk Management",
    "Conversational AI",
    "Voice AI",
    "Enterprise Voice Intelligence",
    "Digital Workforce",
    "AI Automation",
    "Enterprise Automation",
    "Banking AI",
    "Insurance AI",
    "NBFC AI",
    "Financial Services AI",
    "MEERA",
    "LEA",
    "Legal Enforcement Assistant",
    "Enterprise Investigation Intelligence",
    "Enterprise Decision Support",
    "AI Consulting",
    "Enterprise Transformation",
    "Enterprise AI Products",
    "Enterprise AI Platforms",
  ],

  authors: [
    {
      name: "AWAIA - Automate With AI Agent",
      url: "https://automatewithaiagent.com",
    },
  ],

  creator: "AWAIA",

  publisher: "AWAIA (Automate With AI Agent)",

  category: "Enterprise Artificial Intelligence",

  applicationName:
    "AWAIA Enterprise Products",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical:
      "https://products.automatewithaiagent.com",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url:
      "https://products.automatewithaiagent.com",

    siteName:
      "AWAIA | Automate With AI Agent",

    title:
      "AWAIA Enterprise Products",

    description:
      "Enterprise AI Platforms, Voice Intelligence, Legal Enforcement Intelligence, AI Governance and Responsible AI Solutions from Automate With AI Agent (AWAIA).",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "AWAIA Enterprise Products - Automate With AI Agent",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AWAIA Enterprise Products",

    description:
      "Enterprise AI Platforms, Governance, Voice Intelligence and Responsible AI Solutions by Automate With AI Agent.",

    images: [
      "/images/og-image.jpg",
    ],
  },

  icons: {
    icon: "/images/site-icon.png",
    shortcut: "/images/site-icon.png",
    apple: "/images/site-icon.png",
  },

  other: {
    brand: "AWAIA",
    parentBrand: "Automate With AI Agent",
    website:
      "https://automatewithaiagent.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <meta
          name="theme-color"
          content="#ffffff"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        <meta
          name="author"
          content="AWAIA - Automate With AI Agent"
        />

        <meta
          name="publisher"
          content="AWAIA - Automate With AI Agent"
        />

        <meta
          name="application-name"
          content="AWAIA Enterprise Products"
        />

        <meta
          property="og:see_also"
          content="https://automatewithaiagent.com"
        />

        <link
          rel="stylesheet"
          href="https://use.typekit.net/cwf4kog.css"
        />

      </head>

<body>
  <OrganizationSchema />

  {children}

  <Footer />
</body>
    </html>
  );
}