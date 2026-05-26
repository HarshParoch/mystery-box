"use client";

import React from "react";

export default function LuxuryMysteryBox() {
  const [opened, setOpened] = React.useState(false);
  const [exploding, setExploding] = React.useState(false);

  const products = [
    {
      name: "Luxury Face Serum",
      brand: "Glow",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=300&fit=crop",
      color: "from-rose-300 to-pink-400",
      angle: -45,
      distance: 280,
    },
    {
      name: "Hydrating Cream",
      brand: "Radiance",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&h=300&fit=crop",
      color: "from-amber-200 to-rose-300",
      angle: -135,
      distance: 260,
    },
    {
      name: "Velvet Lipstick",
      brand: "Luxe",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
      color: "from-fuchsia-400 to-pink-500",
      angle: 45,
      distance: 270,
    },
    {
      name: "Rose Perfume",
      brand: "Bloom",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      color: "from-pink-300 to-fuchsia-400",
      angle: 135,
      distance: 250,
    },
    {
      name: "Glow Palette",
      brand: "Shimmer",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
      color: "from-violet-300 to-purple-400",
      angle: 0,
      distance: 300,
    },
    {
      name: "Skin Elixir",
      brand: "Pure",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=300&h=300&fit=crop",
      color: "from-emerald-200 to-teal-300",
      angle: 180,
      distance: 290,
    },
  ];

  const glitterParticles = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    type: i % 3 === 0 ? "star" : i % 3 === 1 ? "diamond" : "circle",
  }));

  const openBox = () => {
    setExploding(true);
    setTimeout(() => {
      setOpened(true);
      setExploding(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-fuchsia-100 relative flex items-center justify-center px-4 py-10">
      {/* Luxury Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-pink-300/40 to-rose-300/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-fuchsia-200/40 to-pink-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-gradient-to-br from-rose-200/30 to-amber-100/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        {/* Gold accent */}
        <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] bg-gradient-to-br from-amber-200/20 to-yellow-100/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Glitter Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {glitterParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-glitter"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          >
            {particle.type === "star" ? (
              <svg
                width={particle.size}
                height={particle.size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            ) : particle.type === "diamond" ? (
              <svg
                width={particle.size}
                height={particle.size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-pink-300 drop-shadow-[0_0_8px_rgba(249,168,212,0.8)]"
              >
                <path d="M12 2L22 12L12 22L2 12L12 2Z" />
              </svg>
            ) : (
              <div
                className="rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                style={{ width: particle.size, height: particle.size }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Floating Hearts & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-300/50 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
              animationDelay: `${i * 0.6}s`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
          >
            {["&#10084;", "&#10022;", "&#9830;"][i % 3] === "&#10084;" ? (
              <span className="text-pink-300/60">&#10084;</span>
            ) : i % 3 === 1 ? (
              <span className="text-amber-300/60">&#10022;</span>
            ) : (
              <span className="text-rose-300/60">&#9830;</span>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        <div className="mb-8">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] mb-6">
            <span className="text-amber-500">&#9830;</span>
            <span className="text-rose-600 font-semibold tracking-wide uppercase text-sm">Luxury Beauty Experience</span>
            <span className="text-amber-500">&#9830;</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent leading-tight drop-shadow-sm">
            Mystery Beauty Box
          </h1>

         <p className="mt-6 text-rose-500/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
             Tap to reveal your exclusive beauty treasures
         </p>

          <span className="block mt-3 text-3xl md:text-5xl font-black text-pink-600 drop-shadow-lg">
              Dear Kashvi aka Minnie
          </span>
        </div>

        {/* Main Area */}
        <div className="relative h-[600px] flex items-center justify-center">
          {!opened && !exploding && (
            <button onClick={openBox} className="group relative">
              {/* Multi-layer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 blur-[120px] opacity-50 scale-150 group-hover:scale-175 transition duration-700 rounded-full" />
              <div className="absolute inset-0 bg-amber-200 blur-[80px] opacity-20 scale-125 rounded-full animate-pulse" />

              {/* Sparkle Ring */}
              <div className="absolute inset-[-50px] animate-spin-slow">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 22.5}deg) translateY(-200px)`,
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-amber-300' : 'bg-pink-300'} shadow-[0_0_15px_currentColor]`} />
                  </div>
                ))}
              </div>

              {/* Floating Rings */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-rose-300/40 animate-ping" />
              <div className="absolute inset-[-40px] rounded-full border border-amber-200/30 animate-pulse" />

              {/* Box */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[48px] bg-gradient-to-br from-rose-300 via-pink-300 to-fuchsia-400 border-2 border-white/60 shadow-[0_30px_100px_rgba(244,114,182,0.4),inset_0_2px_20px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 animate-float-box">
                {/* Shine Overlay */}
                <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/50 via-white/10 to-transparent" />
                
                {/* Gold Trim */}
                <div className="absolute inset-3 rounded-[40px] border border-amber-300/40" />

                {/* Ribbon */}
                <div className="absolute w-14 h-full bg-gradient-to-b from-white/90 via-amber-100/80 to-white/90 rounded-full shadow-sm" />
                <div className="absolute h-14 w-full bg-gradient-to-r from-white/90 via-amber-100/80 to-white/90 rounded-full shadow-sm" />

                {/* Bow */}
                <div className="absolute top-3 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-amber-50 shadow-lg transform -rotate-12 border border-amber-200/50" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 shadow-md -mx-2 z-10" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-amber-50 shadow-lg transform rotate-12 border border-amber-200/50" />
                </div>

                {/* Text */}
                <div className="relative z-10 text-center mt-8">
                  <div className="text-7xl md:text-8xl mb-2 animate-bounce drop-shadow-lg">&#127872;</div>
                  <div className="text-white text-2xl md:text-3xl font-black tracking-wider drop-shadow-md">
                    TAP ME
                  </div>
                  <div className="text-white/70 text-xs font-medium mt-1 tracking-widest uppercase">
                    Reveal Your Luxury
                  </div>
                </div>
              </div>
            </button>
          )}

          {/* 3D Product Explosion */}
          {exploding && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Box Breaking Apart */}
              <div className="absolute animate-box-explode">
                <div className="w-72 h-72 rounded-[48px] bg-gradient-to-br from-pink-300 to-fuchsia-400 opacity-50" />
              </div>

              {/* Gold Confetti Burst */}
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={`confetti-${i}`}
                  className="absolute animate-confetti"
                  style={{
                    left: "50%",
                    top: "50%",
                    animationDelay: `${i * 15}ms`,
                    ["--random-x" as string]: `${(Math.random() - 0.5) * 400}px`,
                    ["--random-y" as string]: `${Math.random() * 400 + 100}px`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: ["#fbbf24", "#f9a8d4", "#fda4af", "#ffffff", "#fcd34d", "#fbcfe8"][i % 6],
                      boxShadow: "0 0 8px currentColor",
                    }}
                  />
                </div>
              ))}

              {/* Products Flying Out */}
              {products.map((product, i) => (
                <div
                  key={i}
                  className="absolute animate-product-fly"
                  style={{
                    animationDelay: `${i * 80 + 150}ms`,
                    ["--fly-x" as string]: `${Math.cos((product.angle * Math.PI) / 180) * product.distance}px`,
                    ["--fly-y" as string]: `${Math.sin((product.angle * Math.PI) / 180) * product.distance}px`,
                  }}
                >
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${product.color} p-0.5 shadow-[0_15px_40px_rgba(244,114,182,0.4)] transform rotate-12`}>
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Sparkle Burst */}
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={`spark-${i}`}
                  className="absolute text-xl md:text-3xl animate-sparkle-burst text-amber-400"
                  style={{
                    animationDelay: `${i * 40}ms`,
                    ["--burst-x" as string]: `${Math.cos((i * 15 * Math.PI) / 180) * 180}px`,
                    ["--burst-y" as string]: `${Math.sin((i * 15 * Math.PI) / 180) * 180}px`,
                  }}
                >
                  {["✦", "◆", "♥", "✵"][i % 4]}
                </div>
              ))}
            </div>
          )}

          {/* Opened State - 3D Floating Products */}
          {opened && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Background Glow */}
              <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-200/40 via-rose-200/40 to-amber-100/40 rounded-full blur-3xl animate-pulse" />

              {/* 3D Floating Product Images */}
              <div className="relative w-full h-[400px] md:h-[450px]">
                {products.map((product, index) => {
                  const positions = [
                    { x: '50%', y: '5%', rotate: -8, scale: 1.1, delay: 0 },
                    { x: '15%', y: '25%', rotate: 12, scale: 0.95, delay: 100 },
                    { x: '85%', y: '20%', rotate: -15, scale: 1, delay: 200 },
                    { x: '25%', y: '60%', rotate: 8, scale: 0.9, delay: 300 },
                    { x: '75%', y: '55%', rotate: -10, scale: 1.05, delay: 400 },
                    { x: '50%', y: '75%', rotate: 5, scale: 0.95, delay: 500 },
                  ];
                  const pos = positions[index];
                  
                  return (
                    <div
                      key={index}
                      className="absolute animate-product-pop group cursor-pointer"
                      style={{
                        left: pos.x,
                        top: pos.y,
                        transform: `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                        animationDelay: `${pos.delay}ms`,
                      }}
                    >
                      {/* Product Glow */}
                      <div className={`absolute inset-[-10px] bg-gradient-to-br ${product.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                      
                      {/* 3D Product Container */}
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] group-hover:scale-110 group-hover:rotate-0 transition-all duration-500 animate-float-product"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {/* Shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                        
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                        
                        {/* Brand Badge */}
                        <div className="absolute bottom-1 left-1 right-1 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-white/90 text-rose-500 text-[8px] md:text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {product.brand}
                          </span>
                        </div>
                      </div>
                      
                      {/* Sparkles around product */}
                      <div className="absolute -top-2 -right-2 text-amber-300 text-lg animate-pulse">&#10022;</div>
                      <div className="absolute -bottom-1 -left-1 text-pink-300 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>&#10022;</div>
                    </div>
                  );
                })}
              </div>

              {/* Title */}
              <div className="relative z-10 text-center mt-4">
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  Your Luxe Haul
                </h2>
                <p className="text-rose-400/80 text-sm font-medium">Your Exclusive Beauty Collection</p>
              </div>

              <button
                onClick={() => setOpened(false)}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 text-white font-bold shadow-[0_15px_40px_rgba(244,114,182,0.4)] hover:scale-105 hover:shadow-[0_20px_50px_rgba(244,114,182,0.5)] transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <span>Open Another Box</span>
                <span className="text-lg">&#127872;</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(30px, 10px) scale(1.02); }
        }

        @keyframes glitter {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes float-heart {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes float-box {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes box-explode {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        @keyframes confetti {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes product-fly {
          0% { 
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translate(calc(-50% + var(--fly-x)), calc(-50% + var(--fly-y))) scale(1) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sparkle-burst {
          0% { 
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% { 
            transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes card-appear {
          0% { 
            opacity: 0;
            transform: translateY(60px) scale(0.6) rotateX(30deg);
          }
          60% {
            transform: translateY(-5px) scale(1.02) rotateX(0deg);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes product-pop {
          0% { 
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(10deg);
          }
          100% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(var(--rotate, 0deg));
          }
        }

        @keyframes float-product {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-12px) rotate(3deg);
          }
        }

        .animate-blob { animation: blob 10s ease-in-out infinite; }
        .animate-glitter { animation: glitter 2s ease-in-out infinite; }
        .animate-float-heart { animation: float-heart 12s ease-in-out infinite; }
        .animate-float-box { animation: float-box 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-box-explode { animation: box-explode 0.8s ease-out forwards; }
        .animate-confetti { animation: confetti 1.2s ease-out forwards; }
        .animate-product-fly { animation: product-fly 1.3s ease-out forwards; }
        .animate-sparkle-burst { animation: sparkle-burst 1s ease-out forwards; }
        .animate-card-appear { animation: card-appear 0.8s ease-out forwards; opacity: 0; }
        .animate-product-pop { animation: product-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .animate-float-product { animation: float-product 3s ease-in-out infinite; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
