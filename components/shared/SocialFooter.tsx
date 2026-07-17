"use client";

import Link from "next/link";

import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/automate-with-ai-agent",
    icon: <FaLinkedinIn className="w-6 h-6" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AWAIA",
    icon: <FaYoutube className="w-6 h-6" />,
  },
  {
    name: "X",
    href: "https://x.com/AWAIA_AI",
    icon: <FaXTwitter className="w-6 h-6" />,
  },
];

export default function SocialFooter() {
  return (
    <section className="mt-14 pt-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-center items-center gap-8">

          {socials.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              aria-label={item.name}
              className="
group

flex
items-center
justify-center

w-11
h-11

rounded-full

text-white/90

transition-all
duration-300
ease-out

hover:text-white
hover:scale-110
hover:-translate-y-0.5

hover:bg-white/[0.04]
hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
"
            >
              {item.icon}
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}