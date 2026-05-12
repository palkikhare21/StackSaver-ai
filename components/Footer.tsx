export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-bold">StackSaver AI</p>
          <p className="mt-2 text-sm text-slate-400">
            AI spend audit tool built for Credex Round 1 assignment.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}