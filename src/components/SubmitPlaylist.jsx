import { useState } from "react";
import { PlusCircle } from "lucide-react";

const moods = ["Happy", "Chill", "Focus", "Hype", "Romantic", "Melancholy"]; 
const genres = ["Pop", "Hip-Hop", "Rock", "Electronic", "Indie", "Classical", "Jazz"];

function isSpotifyPlaylistUrl(url) {
  const r1 = /https?:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)(\?.*)?$/;
  const r2 = /^spotify:playlist:([a-zA-Z0-9]+)$/;
  return r1.test(url) || r2.test(url);
}

export default function SubmitPlaylist({ onAdd }) {
  const [url, setUrl] = useState("");
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!isSpotifyPlaylistUrl(url)) {
      setError("Please provide a valid Spotify playlist link.");
      return;
    }
    const item = {
      id: crypto.randomUUID(),
      title: description?.trim() || "New Playlist",
      url: url.trim(),
      mood: mood || "Chill",
      genre: genre || "Pop",
      author: "Anonymous",
      createdAt: new Date().toISOString(),
    };
    onAdd(item);
    setUrl("");
    setMood("");
    setGenre("");
    setDescription("");
    setError("");
  }

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <PlusCircle size={20} className="text-emerald-500" /> Share a playlist
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-4 md:grid-cols-5">
          <div className="md:col-span-3">
            <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">Spotify playlist URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://open.spotify.com/playlist/..."
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
          <div>
            <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">Mood</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-zinc-900 dark:text-zinc-100 focus:outline-none"
            >
              <option value="">Select</option>
              {moods.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">Genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-zinc-900 dark:text-zinc-100 focus:outline-none"
            >
              <option value="">Select</option>
              {genres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-5">
            <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">Title or description (optional)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="E.g., Morning run energy, late-night lo-fi..."
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-zinc-900 dark:text-zinc-100 focus:outline-none"
            />
          </div>
          <div className="md:col-span-5 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 font-medium shadow">
              <PlusCircle size={18} /> Add playlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
