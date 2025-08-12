import React from "react"

export default function LearningPage({ onStartGame }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 float">🏈 Matematika Bola 🏈</h1>
          <p className="text-xl text-white opacity-90">Belajar Matematika Sambil Bermain!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">➕</div>
              <h2 className="text-2xl font-bold text-blue-600">Penjumlahan</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-lg font-semibold text-blue-800 mb-2">Contoh:</p>
                <div className="flex items-center justify-center space-x-2 text-2xl">
                  <span>🍎🍎</span>
                  <span className="font-bold text-blue-600">+</span>
                  <span>🍎🍎🍎</span>
                  <span className="font-bold text-blue-600">=</span>
                  <span className="font-bold text-green-600">5</span>
                </div>
                <p className="text-center mt-2 text-blue-700">2 + 3 = 5</p>
              </div>
              <p className="text-gray-700">Penjumlahan adalah menggabungkan dua atau lebih angka untuk mendapatkan jumlah total.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">➖</div>
              <h2 className="text-2xl font-bold text-red-600">Pengurangan</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-lg font-semibold text-red-800 mb-2">Contoh:</p>
                <div className="flex items-center justify-center space-x-2 text-2xl">
                  <span>🍎🍎🍎🍎🍎</span>
                  <span className="font-bold text-red-600">-</span>
                  <span>🍎🍎</span>
                  <span className="font-bold text-red-600">=</span>
                  <span className="font-bold text-green-600">3</span>
                </div>
                <p className="text-center mt-2 text-red-700">5 - 2 = 3</p>
              </div>
              <p className="text-gray-700">Pengurangan adalah mengambil sejumlah angka dari angka yang lebih besar.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-4">🎮 Cara Bermain</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl mb-2">🏈</div>
              <h3 className="font-bold text-yellow-700 mb-2">1. Lihat Soal</h3>
              <p className="text-sm text-yellow-600">Bola akan muncul dengan soal matematika</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-green-700 mb-2">2. Pilih Jawaban</h3>
              <p className="text-sm text-green-600">Klik angka yang benar di lapangan</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold text-blue-700 mb-2">3. Dapatkan Poin</h3>
              <p className="text-sm text-blue-600">Jawaban benar = +10 poin!</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStartGame}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 pulse"
          >
            🚀 Mulai Bermain!
          </button>
        </div>
      </div>
    </div>
  )
}
