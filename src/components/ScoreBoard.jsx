export default function ScoreBoard({ score, lives, level }) {
  return (
    <div className="bg-white rounded-xl p-3 mb-4 flex justify-center items-center space-x-6 font-bold text-lg">
      {/* Skor */}
      <div className="flex items-center space-x-1">
        <span className="text-3xl">⭐</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {score}
        </span>
      </div>

      {/* Nyawa */}
      <div className="flex items-center space-x-1">
        <span className="text-3xl">❤️</span>
        <span className="text-red-500">{lives}</span>
      </div>

      {/* Level */}
      <div className="flex items-center space-x-1">
        <span className="text-3xl">🏆</span>
        <span className="text-blue-500">Level {level}</span>
      </div>
    </div>
  );
}


