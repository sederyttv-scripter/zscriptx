"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [binary, setBinary] = useState("");
  const [copied, setCopied] = useState("");

  const saenCode =
    "loadstring(game:HttpGet('https://raw.githubusercontent.com/sederyttv-scripter/Wow/refs/heads/main/djdj'))()";

  const rogueCode =
    'loadstring(game:HttpGet("https://raw.githubusercontent.com/sederyttv-scripter/RogueRealm/refs/heads/main/jr"))()';

  // Binary animation
  useEffect(() => {
    const interval = setInterval(() => {
      const line = Array.from({ length: 200 })
        .map(() => (Math.random() > 0.5 ? "1" : "0"))
        .join("");
      setBinary(line);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-mono flex flex-col items-center justify-start py-12">

      {/* Animated Binary Background */}
      <div className="absolute inset-0 opacity-20 text-green-500 text-[10px] leading-tight whitespace-pre-wrap select-none animate-pulse">
        {binary}
      </div>

      <main className="relative z-10 max-w-3xl w-[90%] space-y-12">

        {/* SAEN Script Panel */}
        <section className="bg-black/50 backdrop-blur-xl border border-green-600 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,0,0.25)]">
          <h1 className="text-3xl font-bold text-green-400 mb-4 text-center">
            SAEN Script
          </h1>

          {/* Features */}
          <div className="space-y-2 text-lg text-green-300 text-center">
            <p>✔ Auto Eat</p>
            <p>✔ Auto Shoot</p>
            <p>✔ Auto Pickup Eggs</p>
          </div>

          {/* Copy Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => copyText(saenCode)}
              className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.5)] transition"
            >
              {copied === saenCode ? "Copied!" : "Copy SAEN Loadstring"}
            </button>
          </div>

          {/* Loadstring Preview */}
          <div className="mt-4 bg-black/60 p-3 rounded-lg border border-green-700 text-green-300 text-sm overflow-x-auto">
            {saenCode}
          </div>
        </section>

        {/* Rogue Realm Script Panel */}
        <section className="bg-black/50 backdrop-blur-xl border border-green-600 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,0,0.25)]">
          <h1 className="text-3xl font-bold text-green-400 mb-2 text-center">
            Rogue Realm Script
          </h1>

          {/* Discontinued Warning */}
          <p className="text-red-500 font-bold text-center mb-4">
            ⚠️ DISCONTINUED
          </p>

          {/* Features */}
          <div className="space-y-2 text-lg text-green-300 text-center">
            <p>✔ Auto Kill</p>
            <p>✔ Loop Auto Heal</p>
            <p>✔ And more OP stuffs</p>
          </div>

          {/* Copy Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => copyText(rogueCode)}
              className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.5)] transition"
            >
              {copied === rogueCode ? "Copied!" : "Copy Rogue Realm Loadstring"}
            </button>
          </div>

          {/* Loadstring Preview */}
          <div className="mt-4 bg-black/60 p-3 rounded-lg border border-green-700 text-green-300 text-sm overflow-x-auto">
            {rogueCode}
          </div>
        </section>

      </main>
    </div>
  );
}
