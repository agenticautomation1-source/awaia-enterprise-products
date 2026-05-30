export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-xl tracking-tight">
          AWAIA
        </div>

        <nav className="flex gap-10 text-sm">
          <a href="/meera">MEERA</a>
          <a href="/lea">LEA</a>
        </nav>
      </div>
    </header>
  );
}