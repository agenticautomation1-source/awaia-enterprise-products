export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <div className="font-medium tracking-tight">
          AWAIA
        </div>

        <nav className="flex gap-10 text-sm text-gray-600">
          <a href="/meera"><span className="text-[#3F5E8C]">
  MEERA
</span>
<div className="h-px bg-[#3F5E8C] mt-2"></div>
</a>
          <a href="/lea">LEA</a>
        </nav>

      </div>
    </header>
  );
}