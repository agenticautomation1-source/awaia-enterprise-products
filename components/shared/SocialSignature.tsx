import { ArrowUpRight } from "lucide-react";
import { LinkedInIcon, YouTubeIcon, XIcon } from "./icons";
import BrandWatermark from "./BrandWatermark";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/automate-with-ai-agent",
    Icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AutomateWithAIAgent",
    Icon: YouTubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/AutomateWithAI",
    Icon: XIcon,
  },
];

export default function SocialSignature() {
  return (
    <section className="relative py-4">
      
      {/* Background Brand Watermark */}
    {/*}  <BrandWatermark /> */}

      {/* Content */}
      <div
        className="
          relative
          z-10

          grid
          grid-cols-1
          gap-y-8

          md:grid-cols-2
          md:gap-x-10

          lg:grid-cols-[minmax(260px,1.55fr)_repeat(3,minmax(160px,1fr))]
          lg:gap-x-12
          lg:items-center
        "
      >
        {/* Left Heading */}

        <div>
          <h3
            className="text-[13px] text-white/60"
            style={{
              fontFamily:
                '"Neue Haas Grotesk Display Pro","Avenir Next","Helvetica Neue",sans-serif',
              fontWeight: 400,
              letterSpacing: "0.06em",
            }}
          >
            CONNECT WITH AWAIA
          </h3>
        </div>

        {/* Social Links */}

        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-3
              py-2
              transition-all
              duration-300
            "
          >
            {/* Icon */}

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl">
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-[#9EC8FF]/[0.05]
                  blur-xl
                  opacity-50
                  transition-all
                  duration-300
                  group-hover:bg-white/[0.08]
                  group-hover:opacity-100
                "
              />

              {/* Icon Container */}

              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/6
                "
              >
                <Icon className="h-5 w-5 text-white/80" />
              </div>
            </div>

            {/* Text */}

            <div className="flex items-center gap-2">
              <span
                className="text-[15px] text-white"
                style={{
                  fontFamily:
                    '"Neue Haas Grotesk Display Pro","Avenir Next","Helvetica Neue",sans-serif',
                  fontWeight: 400,
                }}
              >
                {name}
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-white
                "
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}