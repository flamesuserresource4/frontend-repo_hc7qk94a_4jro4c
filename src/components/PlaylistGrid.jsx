import { useMemo, useState } from "react";
import { ExternalLink, Copy, Heart } from "lucide-react";

const moodOptions = ["All", "Happy", "Chill", "Focus", "Hype", "Romantic", "Melancholy"];
const genreOptions = ["All", "Pop", "Hip-Hop", "Rock", "Electronic", "Indie", "Classical", "Jazz"];

export default function PlaylistGrid({ playlists, searchTerm }) {
  const [mood, setMood] = useState("All");
  const [genre, setGenre] = useState("All");

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return playlists.filter((p) => {
      const matchesTerm = !term ||
        p.title.toLowerCase().includes(term) ||
        p.mood.toLowerCase().includes(term) ||
        p.genre.toLowerCase().includes(term) ||
        p.author.toLowerCase().includes(term);
      const matchesMood = mood === "All" || p.mood === mood;
      const matchesGenre = genre === "All" || p.genre === genre;
      return matchesTerm && matchesMood && matchesGenre;
    });
  }, [playlists, searchTerm, mood, genre]);

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Playlist link copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Discover</h2>
        <div className="flex items-center gap-2">
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
            {moodOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
            {genreOptions.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <article key={p.id} className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video w-full bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 grid place-items-center">
              <div className="text-center text-white px-4">
                <div className="text-xs uppercase tracking-widest opacity-90">{p.mood} • {p.genre}</div>
                <div className="mt-1 text-lg font-semibold line-clamp-2">{p.title}</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">By {p.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => copyToClipboard(p.url)} className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    <Copy size={16} /> Copy
                  </button>
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                    <ExternalLink size={16} /> Open
                  </a>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{p.mood}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{p.genre}</span>
                <button className="ml-auto inline-flex items-center gap-1.5 text-sm px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <Heart size={16} className="text-rose-500" /> Like
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-zinc-500">No playlists found. Try different filters or share one above!</p>
      )}
    </section>
  );
}
