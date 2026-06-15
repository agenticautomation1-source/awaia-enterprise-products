import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AWAIA Enterprise Products",
    template: "%s | AWAIA",
  },

  description:
    "Enterprise AI platforms for banking, insurance, NBFCs and regulated industries.",

  openGraph: {
    title: "AWAIA Enterprise Products",
    description:
      "Enterprise AI platforms for regulated institutions.",
    images: ["/og-image.jpg"],
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
        <link
          rel="stylesheet"
          href="https://use.typekit.net/cwf4kog.css"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}