import { Music, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-emerald-500 to-blue-500 text-white">
            <Music size={20} />
          </div>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Spotishare</span>
        </div>
        <nav className="flex items-center gap-2">
          <button className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200">Browse</button>
          <button className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200">About</button>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow hover:opacity-95">
            <User size={16} />
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
