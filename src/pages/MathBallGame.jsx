import React, { useEffect, useState, useRef } from "react"
import Ball from "../components/Ball"
import ScoreBoard from "../components/ScoreBoard"
import salahSound from "../assets/salah.mp3"
import benarSound from "../assets/benar.mp3"

export default function MathBallGame({ onBackToLearning }) {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [level, setLevel] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answerOptions, setAnswerOptions] = useState([])
  const [gameStatus, setGameStatus] = useState("playing") // playing, won, lost
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)

  const correctAudioRef = useRef(null)
  const wrongAudioRef = useRef(null)

  // Preload audios
  useEffect(() => {
    correctAudioRef.current = new Audio(benarSound)
    correctAudioRef.current.preload = "auto"
    wrongAudioRef.current = new Audio(salahSound)
    wrongAudioRef.current.preload = "auto"
  }, [])

  // generate question
  const generateQuestion = () => {
    const operations = ["+", "-"]
    const operation = operations[Math.floor(Math.random() * operations.length)]

    let num1, num2, correctAnswer

    if (operation === "+") {
      num1 = Math.floor(Math.random() * (5 + level * 2)) + 1
      num2 = Math.floor(Math.random() * (5 + level * 2)) + 1
      correctAnswer = num1 + num2
    } else {
      num1 = Math.floor(Math.random() * (10 + level * 2)) + 5
      num2 = Math.floor(Math.random() * num1) + 1
      correctAnswer = num1 - num2
    }

    const question = { text: `${num1} ${operation} ${num2}`, answer: correctAnswer }

    const options = [correctAnswer]
    while (options.length < 4) {
      const wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5
      if (wrongAnswer > 0 && !options.includes(wrongAnswer)) options.push(wrongAnswer)
    }

    setCurrentQuestion(question)
    setAnswerOptions(options.sort(() => Math.random() - 0.5))
  }

  // handle answer
  const handleAnswer = (selectedAnswer) => {
    if (!currentQuestion) return

    if (selectedAnswer === currentQuestion.answer) {
      // safe play
      correctAudioRef.current?.play().catch(() => {})

      setScore((s) => s + 10)
      setFeedback("🎉 Benar! +10 poin")
      setShowFeedback(true)

      setTimeout(() => {
        setShowFeedback(false)
        if (score + 10 >= level * 50) {
          if (level >= 5) {
            setGameStatus("won")
          } else {
            setLevel((lvl) => lvl + 1)
            generateQuestion()
          }
        } else {
          generateQuestion()
        }
      }, 1200)
    } else {
      wrongAudioRef.current?.play().catch(() => {})

      setLives((l) => l - 1)
      setFeedback("❌ Salah! Coba lagi")
      setShowFeedback(true)

      setTimeout(() => {
        setShowFeedback(false)
        setCurrentQuestion((q) => q) // noop to trigger re-render if needed
        if (lives - 1 <= 0) {
          setGameStatus("lost")
        }
      }, 1200)
    }
  }

  // reset
  const resetGame = () => {
    setScore(0)
    setLives(3)
    setLevel(1)
    setGameStatus("playing")
    setFeedback("")
    setShowFeedback(false)
    generateQuestion()
  }

  useEffect(() => {
    generateQuestion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // render end screens
  if (gameStatus === "won") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md w-full celebrate">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Selamat!</h2>
          <p className="text-lg text-gray-700 mb-4">Kamu berhasil menyelesaikan semua level!</p>
          <div className="text-2xl font-bold text-purple-600 mb-6">Skor Akhir: {score}</div>
          <div className="space-y-4">
            <button onClick={resetGame} className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full">
              🔄 Main Lagi
            </button>
            <button onClick={onBackToLearning} className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full">
              📚 Kembali Belajar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (gameStatus === "lost") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md w-full">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">Game Over</h2>
          <p className="text-lg text-gray-700 mb-4">Jangan menyerah! Coba lagi ya!</p>
          <div className="text-2xl font-bold text-purple-600 mb-6">Skor: {score}</div>
          <div className="space-y-4">
            <button onClick={resetGame} className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full">
              🔄 Coba Lagi
            </button>
            <button onClick={onBackToLearning} className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full">
              📚 Kembali Belajar
            </button>
          </div>
        </div>
      </div>
    )
  }

  // main game render
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-2xl">
          <div className="flex justify-between items-center">
            <ScoreBoard score={score} lives={lives} level={level} />
            <button onClick={onBackToLearning} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
              ← Kembali
            </button>
          </div>
        </div>

        <div className="game-field p-8 mb-6 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="ball float text-lg">{currentQuestion?.text}</div>
              <p className="text-white font-bold mt-2">Klik jawaban yang benar!</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {answerOptions.map((opt, i) => (
              <div key={i} className="answer-target hover:scale-110 transform transition-all duration-300" onClick={() => handleAnswer(opt)}>
                {opt}
              </div>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl celebrate">
              <div className="text-4xl font-bold text-purple-600">{feedback}</div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-4 shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-600">Progress Level {level}</span>
            <span className="text-sm font-bold text-gray-600">{score}/{level * 50}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500" style={{ width: `${Math.min((score / (level * 50)) * 100, 100)}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
