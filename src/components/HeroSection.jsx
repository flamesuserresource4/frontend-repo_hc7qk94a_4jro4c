export default function HeroSection({ onSearchChange }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Share your Spotify playlists. Discover new vibes.
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg">
              Upload a playlist link, tag the mood or genre, and explore what your community is listening to.
            </p>
            <div className="mt-6">
              <input
                type="text"
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search playlists, moods, or genres..."
                className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-tr from-emerald-500 via-blue-500 to-purple-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white dark:bg-zinc-950 grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-500 font-semibold">Spotishare</p>
                  <p className="mt-2 text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Music tastes made social</p>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">Share. Browse. Connect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
