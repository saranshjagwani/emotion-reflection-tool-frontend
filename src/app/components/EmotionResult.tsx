import React from "react";

// Define props for the result component
interface EmotionResultProps {
  emotion: string;
  confidence: number;
}

// Reusable card to display emotion and confidence
const EmotionResult: React.FC<EmotionResultProps> = ({
  emotion,
  confidence,
}) => {
  // Return background color based on confidence level
  const getColor = () => {
    if (confidence >= 0.8) return "bg-green-100";
    if (confidence >= 0.5) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className={`mt-6 p-4 rounded-md border shadow ${getColor()}`}>
      <p className="text-md mb-2">
        <strong>Emotion:</strong> {emotion}
      </p>

      <p className="text-md font-medium">Confidence:</p>

      {/* Confidence progress bar */}
      <div className="w-full bg-gray-200 h-4 rounded mt-1">
        <div
          className="h-4 bg-blue-500 rounded"
          style={{ width: `${confidence * 100}%` }}
        />
      </div>

      <p className="text-sm text-right mt-1 text-gray-700">
        {(confidence * 100).toFixed(1)}%
      </p>
    </div>
  );
};

export default EmotionResult;
