import { useState } from "react";
import LearningPage from "./pages/LearningPage";
import MathBallGame from "./pages/MathBallGame";

export default function App() {
  const [page, setPage] = useState("learning");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {page === "learning" ? (
        <LearningPage onStartGame={() => setPage("game")} />
      ) : (
        <MathBallGame onBackToLearning={() => setPage("learning")} />
      )}
    </div>
  );
}