import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
            S
          </div>
          <span className="text-lg font-bold tracking-tight">
            StackSaver AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-slate-950">
            How it works
          </a>
          <a href="#faq" className="hover:text-slate-950">
            FAQ
          </a>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 sm:block">
            Login
          </button>

          <Link
            href="/audit"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Start audit
          </Link>
        </div>
      </nav>
    </header>
  );
}