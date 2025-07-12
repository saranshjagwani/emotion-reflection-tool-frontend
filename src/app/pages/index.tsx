import React from "react";
import EmotionForm from "../components/EmotionForm";

// Main page that wraps the form component
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <EmotionForm/>
    </main>
  );
}
