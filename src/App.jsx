import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubmitPlaylist from "./components/SubmitPlaylist";
import PlaylistGrid from "./components/PlaylistGrid";

const initialPlaylists = [
  {
    id: "p1",
    title: "Sunrise Motivation",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX1g0iEXLFycr",
    mood: "Hype",
    genre: "Pop",
    author: "Ava",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p2",
    title: "Late Night Lo‑Fi",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX2m5cVnMXKBL",
    mood: "Chill",
    genre: "Indie",
    author: "Max",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p3",
    title: "Deep Focus Sessions",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ",
    mood: "Focus",
    genre: "Electronic",
    author: "Lena",
    createdAt: new Date().toISOString(),
  },
];

export default function App() {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedPlaylists = useMemo(() => {
    return [...playlists].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [playlists]);

  function handleAdd(newItem) {
    setPlaylists((prev) => [newItem, ...prev]);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <HeroSection onSearchChange={setSearchTerm} />
      <SubmitPlaylist onAdd={handleAdd} />
      <PlaylistGrid playlists={sortedPlaylists} searchTerm={searchTerm} />
      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-zinc-500">
        Built with love by your community. This is a visual prototype — sign up and social features coming next.
      </footer>
    </div>
  );
}
