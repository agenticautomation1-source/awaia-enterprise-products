import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-xl
      bg-white/60
      border-b
      border-white/20
      "
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link
          href="https://automatewithaiagent.com"
          className="
          text-xl
          tracking-[0.15em]
          font-medium
          "
        >
          AWAIA
        </Link>

        <nav className="hidden md:flex items-center gap-10">

          <a href="https://automatewithaiagent.com">
            Home
          </a>

          <a href="/meera">
            Meera
          </a>

          <a href="/lea">
            LEA
          </a>

          <a href="https://automatewithaiagent.com/insights">
            Insights
          </a>

        </nav>

        <a
          href="https://automatewithaiagent.com/contact"
          className="
          px-6
          py-3
          rounded-full
          bg-black
          text-white
          "
        >
          Request Briefing
        </a>

      </div>
    </header>
  );
}