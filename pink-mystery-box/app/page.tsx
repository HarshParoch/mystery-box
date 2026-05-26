"use client";

import React from "react";

export default function LuxuryMysteryBox() {
  const [opened, setOpened] = React.useState(false);
  const [exploding, setExploding] = React.useState(false);

  const products = [
    {
      name: "Velvet Lipstick",
      emoji: "💄",
      tag: "Limited Edition",
      delay: "0ms",
    },
    {
      name: "Diamond Gloss",
      emoji: "✨",
      tag: "Rare Drop",
      delay: "150ms",
    },
    {
      name: "Rose Blush",
      emoji: "🌸",
      tag: "Soft Glow",
      delay: "300ms",
    },
    {
      name: "Luxury Perfume",
      emoji: "🧴",
      tag: "Best Seller",
      delay: "450ms",
    },
  ];

  const openBox = () => {
    setExploding(true);

    setTimeout(() => {
      setOpened(true);
      setExploding(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-200 to-fuchsia-200 relative flex items-center justify-center px-4 py-10">
      {/* Luxury Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-300/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white/70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              fontSize: `${10 + Math.random() * 30}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        <div className="mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 text-white font-semibold shadow-xl mb-6">
            Luxury Beauty Experience
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight drop-shadow-2xl">
            Mystery Beauty Box
          </h1>

          <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            Tap the luxury box and reveal exclusive beauty treasures ✨
          </p>
        </div>

        {/* Main Area */}
        <div className="relative h-[520px] flex items-center justify-center">
          {!opened && (
            <button onClick={openBox} className="group relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-pink-400 blur-[120px] opacity-70 scale-125 group-hover:scale-150 transition duration-700 rounded-full" />

              {/* Floating Rings */}
              <div className="absolute inset-0 rounded-full border border-white/30 scale-125 animate-ping" />
              <div className="absolute inset-0 rounded-full border border-white/20 scale-150 animate-pulse" />

              {/* Box */}
              <div
                className={`relative w-72 h-72 rounded-[48px] bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-500 border border-white/40 shadow-[0_30px_120px_rgba(255,105,180,0.6)] flex items-center justify-center transition-all duration-700 ${
                  exploding
                    ? "scale-125 rotate-12 opacity-0"
                    : "group-hover:scale-110 group-hover:rotate-3 animate-float"
                }`}
              >
                {/* Glass Overlay */}
                <div className="absolute inset-0 rounded-[48px] bg-white/10 backdrop-blur-2xl" />

                {/* Ribbon */}
                <div className="absolute w-16 h-full bg-rose-100/70 rounded-full" />
                <div className="absolute h-16 w-full bg-rose-100/70 rounded-full" />

                {/* Bow */}
                <div className="absolute top-8 flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/80" />
                  <div className="w-12 h-12 rounded-full bg-white/80" />
                </div>

                {/* Text */}
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-4 animate-bounce">🎀</div>
                  <div className="text-white text-3xl font-black tracking-wide">
                    TAP ME
                  </div>
                </div>
              </div>
            </button>
          )}

          {/* Explosion Effect */}
          {exploding && (
            <>
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-4xl animate-explode"
                  style={{
                    transform: `rotate(${i * 15}deg) translateY(-120px)`,
                    animationDelay: `${i * 40}ms`,
                  }}
                >
                  ✨
                </div>
              ))}
            </>
          )}

          {/* Opened */}
          {opened && (
            <div className="relative w-full flex flex-col items-center">
              {/* Heart Glow */}
              <div className="absolute w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl animate-pulse" />

              <div className="text-8xl mb-4 animate-bounce">💖</div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-12 drop-shadow-2xl">
                Your Luxury Reveal
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-2">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[36px] bg-white/20 backdrop-blur-2xl border border-white/40 p-6 shadow-[0_20px_60px_rgba(255,255,255,0.25)] hover:scale-110 transition-all duration-700 animate-[fadeIn_1s_ease-out_forwards] opacity-0"
                    style={{ animationDelay: product.delay }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-60" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-5">
                        <div className="px-3 py-1 rounded-full bg-white/40 text-white text-xs font-bold uppercase tracking-widest">
                          {product.tag}
                        </div>

                        <div className="text-white/80">♡</div>
                      </div>

                      <div className="text-7xl mb-6 group-hover:rotate-12 group-hover:scale-125 transition duration-500">
                        {product.emoji}
                      </div>

                      <h3 className="text-white font-black text-2xl mb-4 leading-tight">
                        {product.name}
                      </h3>

                      <button className="w-full py-3 rounded-full bg-white text-pink-500 font-black shadow-2xl hover:scale-105 transition duration-300">
                        Add To Vanity ✨
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpened(false)}
                className="mt-12 px-10 py-4 rounded-full bg-white text-pink-500 font-black text-lg shadow-[0_20px_60px_rgba(255,255,255,0.5)] hover:scale-105 transition duration-300"
              >
                Open Another Box 🎀
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes explode {
          0% {
            opacity: 1;
            transform: scale(0.5) translateY(0px);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateY(-200px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-explode {
          animation: explode 1s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
