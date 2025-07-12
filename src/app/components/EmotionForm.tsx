"use client";

import React, { useState } from "react";
import EmotionResult from "./EmotionResult";
import axios from "axios";

// Define the expected response structure from the API
interface EmotionResponse {
  emotion: string;
  confidence: number;
}

const EmotionForm: React.FC = () => {
  // State to hold the user's input text
  const [text, setText] = useState<string>("");

  // State to hold the API response
  const [result, setResult] = useState<EmotionResponse | null>(null);

  // State to track loading status
  const [loading, setLoading] = useState<boolean>(false);

  // State to store any error messages
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = async () => {
    // Input validation
    if (!text.trim()) {
      setError("Please write something first.");
      return;
    }

    // Reset states before calling API
    setLoading(true);
    setError("");
    setResult(null);

    try {
      // Call the FastAPI backend with user input
      const res = await axios.post("https://emotion-reflection-tool-backend-p3gl.onrender.com/analyze", { text });
      setResult(res.data); // Set API response to state
    } catch (err) {
      // Handle error gracefully
      setError("Could not connect to the server. Please try again.");
    } finally {
      setLoading(false); // Reset loading
    }
  };

  return (
    
    <div className="p-6 max-w-md mx-auto mt-10 font-sans bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Emotion Reflection Tool
      </h1>

      {/* Textarea for user input */}
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md text-sm focus:outline-blue-500"
        rows={5}
        placeholder="Write your thoughts or feelings here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Submit button */}
      <button
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md disabled:opacity-60"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Emotion"}
      </button>

      {/* Error message (if any) */}
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Display result if analysis is successful */}
      {result && (
        <EmotionResult
          emotion={result.emotion}
          confidence={result.confidence}
        />
      )}
    </div>
  );
};

export default EmotionForm;
