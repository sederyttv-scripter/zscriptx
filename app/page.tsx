"use client";
import { useEffect, useState } from "react";

type Tab = "scripts" | "owners";

const scripts = [
  {
    name: "SAEN Script",
    code: "loadstring(game:HttpGet('https://raw.githubusercontent.com/sederyttv-scripter/Wow/refs/heads/main/djdj'))()",
    features: ["Auto Eat", "Auto Shoot", "Auto Pickup Eggs"],
  },
  {
    name: "Enfosi Script",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/sederyttv-scripter/redesigned-octo-happiness/refs/heads/main/skibidienfosi"))()',
    features: ["Highlight Fake NPCs", "100% Accuracy"],
  },
  {
    name: "Rogue Realm Script",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/sederyttv-scripter/RogueRealm/refs/heads/main/jr"))()',
    features: ["Auto Kill", "Loop Auto Heal", "And more OP stuffs"],
    discontinued: true,
  },
];

export default function Home() {
  const [binary, setBinary] = useState("");
  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("scripts");
  const [profileImageLoaded, setProfileImageLoaded] = useState(true);

  const profilePicUrl = "https://imgur.com/a/1fANzVl";

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

      <main className="relative z-10 max-w-3xl w-[90%] space-y-8">
        <nav className="grid grid-cols-2 gap-3 rounded-2xl border border-green-600 bg-black/60 p-2 shadow-[0_0_30px_rgba(0,255,0,0.18)] backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("scripts")}
            className={`rounded-xl px-4 py-3 text-lg font-bold transition ${
              activeTab === "scripts"
                ? "bg-green-500 text-black shadow-[0_0_18px_rgba(0,255,0,0.55)]"
                : "text-green-300 hover:bg-green-900/40"
            }`}
          >
            Scripts
          </button>
          <button
            onClick={() => setActiveTab("owners")}
            className={`rounded-xl px-4 py-3 text-lg font-bold transition ${
              activeTab === "owners"
                ? "bg-green-500 text-black shadow-[0_0_18px_rgba(0,255,0,0.55)]"
                : "text-green-300 hover:bg-green-900/40"
            }`}
          >
            Owners
          </button>
        </nav>

        {activeTab === "scripts" ? (
          <div className="space-y-12">
            {scripts.map((script) => (
              <section
                key={script.name}
                className="bg-black/50 backdrop-blur-xl border border-green-600 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,255,0,0.25)]"
              >
                <h1 className="text-3xl font-bold text-green-400 mb-2 text-center">
                  {script.name}
                </h1>

                {script.discontinued ? (
                  <p className="text-red-500 font-bold text-center mb-4">
                    ⚠️ DISCONTINUED
                  </p>
                ) : null}

                {/* Features */}
                <div className="space-y-2 text-lg text-green-300 text-center">
                  {script.features.map((feature) => (
                    <p key={feature}>✔ {feature}</p>
                  ))}
                </div>

                {/* Copy Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => copyText(script.code)}
                    className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.5)] transition"
                  >
                    {copied === script.code
                      ? "Copied!"
                      : `Copy ${script.name.replace(" Script", "")} Loadstring`}
                  </button>
                </div>

                {/* Loadstring Preview */}
                <div className="mt-4 bg-black/60 p-3 rounded-lg border border-green-700 text-green-300 text-sm overflow-x-auto">
                  {script.code}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section className="bg-black/50 backdrop-blur-xl border border-green-600 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(0,255,0,0.25)]">
            <a
              href={profilePicUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-green-500 bg-green-950 text-4xl font-black text-green-300 shadow-[0_0_25px_rgba(0,255,0,0.45)]"
            >
              {profileImageLoaded ? (
                // The provided profile picture is an Imgur album URL, so keep a
                // fallback avatar if the browser cannot render it directly.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profilePicUrl}
                  alt="ZscriptX profile"
                  onError={() => setProfileImageLoaded(false)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>ZX</span>
              )}
            </a>
            <h1 className="text-3xl font-bold text-green-400">ZscriptX</h1>
            <p className="mt-3 text-xl text-green-300">
              (ZscriptX) Made All the scripts
            </p>
            <a
              href={profilePicUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-lg border border-green-700 px-4 py-2 text-sm text-green-300 transition hover:bg-green-900/40"
            >
              View profile pic
            </a>
          </section>
        )}
      </main>
    </div>
  );
}
