export async function generateExplanation(topic: string) {
  const apiKey = process.env.GROQ_API_KEY;

  const prompt = `Explain the topic "${topic}" in simple terms for a student.`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  console.log("Groq response:", data);

  if (!data.choices) {
    return "AI model error. Please try again.";
  }

  return data.choices[0].message.content;
}