export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "AWAIA",

    alternateName: "Automate With AI Agent",

    legalName: "Automate With AI Agent",

    url: "https://automatewithaiagent.com",

    logo:
      "https://products.automatewithaiagent.com/images/awaia-logo-desktop.png",

    image:
      "https://products.automatewithaiagent.com/images/og-image.jpg",

    description:
      "AWAIA (Automate With AI Agent) delivers Enterprise AI Platforms, Voice Intelligence, AI Governance, ISO/IEC 42001:2023 Consulting, Digital Workforce and Responsible AI Solutions for regulated enterprises.",

    sameAs: [
      "https://automatewithaiagent.com",
      "https://products.automatewithaiagent.com",
    ],

    brand: {
      "@type": "Brand",
      name: "AWAIA",
      alternateName: "Automate With AI Agent",
    },

    knowsAbout: [
      "Enterprise AI",
      "Agentic AI",
      "AI Governance",
      "Responsible AI",
      "ISO IEC 42001",
      "AI Management Systems",
      "Conversational AI",
      "Voice Intelligence",
      "Digital Workforce",
      "Enterprise Automation",
      "Banking AI",
      "Insurance AI",
      "NBFC AI",
      "Financial Services AI",
      "Legal Enforcement Intelligence",
    ],

    areaServed: {
      "@type": "Place",
      name: "Global",
    },

    makesOffer: [
      {
        "@type": "Service",
        name: "MEERA Enterprise Voice Intelligence Platform",
      },
      {
        "@type": "Service",
        name: "LEA Legal Enforcement Assistant",
      },
      {
        "@type": "Service",
        name: "ISO/IEC 42001:2023 Consulting",
      },
      {
        "@type": "Service",
        name: "Enterprise AI Governance",
      },
      {
        "@type": "Service",
        name: "Digital Workforce Transformation",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}