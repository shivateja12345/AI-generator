"use client";
import { useState } from "react";

type Props = {
  onExplain: (topic: string) => void;
  loading: boolean;
};

export default function TopicInput({ onExplain, loading }: Props) {
  const [topic, setTopic] = useState("");

  const handleClick = () => {
    if (!topic.trim()) {
      alert("Please enter a topic to continue.");
      return;
    }
    onExplain(topic);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xl">
      <input
        type="text"
        placeholder="Enter a study topic (e.g., Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating explanation..." : "Explain Topic"}
      </button>
    </div>
  );
}