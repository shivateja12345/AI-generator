"use client";

import { useState } from "react";
import TopicInput from "@/components/TopicInput";
import ExplanationCard from "@/components/ExplanationCard";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async (inputTopic: string) => {
    setLoading(true);
    setTopic(inputTopic);
    setExplanation("");

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: inputTopic,
        }),
      });

      const data = await res.json();

      if (data.explanation) {
        setExplanation(data.explanation);
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Failed to fetch explanation");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        AI Study Topic Explainer
      </h1>

      <TopicInput onExplain={handleExplain} loading={loading} />

      <ExplanationCard
  topic={topic}
  explanation={explanation}
  loading={loading}
/>
    </main>
  );
}