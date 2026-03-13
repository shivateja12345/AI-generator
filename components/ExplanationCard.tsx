import ReactMarkdown from "react-markdown";

type Props = {
  topic: string;
  explanation: string;
  loading: boolean;
};

export default function ExplanationCard({ topic, explanation, loading }: Props) {
  if (loading) {
    return (
      <div className="mt-8 w-full max-w-xl bg-white shadow-md rounded-lg p-6 border text-center">
        <p className="text-blue-600 font-semibold">
          Generating explanation...
        </p>
      </div>
    );
  }

  if (!explanation) return null;

  return (
    <div className="mt-8 w-full max-w-xl bg-white shadow-md rounded-lg p-6 border">
      <div className="text-gray-700 leading-relaxed prose">
        <ReactMarkdown>{explanation}</ReactMarkdown>
      </div>
    </div>
  );
}