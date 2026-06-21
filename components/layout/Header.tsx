export default function Header() {
  return (
    <header
      className="
      fixed
      top-4
      left-4
      right-4
      z-50
      bg-white/70
      backdrop-blur-xl
      border
      border-white/30
      rounded-2xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src="/awaia-logo-dark.png"
            alt="AWAIA"
            className="h-8 w-auto"
          />
        </div>

        <nav className="flex gap-10 text-sm text-gray-600">
          <a href="/meera">
            <span className="text-[#3F5E8C]">
              MEERA
            </span>
            <div className="h-px bg-[#3F5E8C] mt-2"></div>
          </a>

          <a href="/lea">
            LEA
          </a>
        </nav>

      </div>
    </header>
  );
}