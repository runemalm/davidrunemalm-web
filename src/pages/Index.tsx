
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen retro-bg font-mono text-white flex flex-col">
      {/* Top hazard banner */}
      <div className="hazard-stripes h-8 w-full" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="animate-blink text-3xl md:text-5xl font-bold text-yellow-300 [text-shadow:_2px_2px_0_#000] mb-6">
          ★ Welcome to David Runemalm's Homepage! ★
        </h1>

        <div className="text-7xl md:text-9xl my-6 select-none" aria-hidden="true">
          🚧 👷 🛠️
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-widest text-yellow-300 [text-shadow:_3px_3px_0_#000] mb-4">
          UNDER CONSTRUCTION
        </h2>

        <p className="max-w-xl text-lg md:text-xl text-white [text-shadow:_1px_1px_0_#000] mb-8">
          This corner of the World Wide Web is being rebuilt from the ground up.
          Please pardon the dust while the webmaster hammers away!
        </p>

        {/* Marquee */}
        <div className="w-full max-w-3xl border-4 border-yellow-300 bg-black overflow-hidden mb-8">
          <div className="whitespace-nowrap animate-marquee text-yellow-300 py-2 text-lg">
            ✦ Coming soon: a brand-new portfolio ✦ Check back later ✦
            Bookmark this page (Ctrl+D)! ✦ Tell your friends on ICQ! ✦
          </div>
        </div>

        {/* Hit counter */}
        <div className="inline-flex items-center gap-2 bg-black border-2 border-white px-4 py-2 mb-8">
          <span className="text-white text-sm">You are visitor #</span>
          <span className="font-bold text-2xl tracking-widest text-green-400 bg-black px-2 [font-family:monospace]">
            0000042
          </span>
        </div>

        {/* Contact link */}
        <p className="mb-2">
          <a
            href="mailto:david.runemalm@gmail.com"
            className="text-cyan-300 underline hover:text-yellow-300 text-lg"
          >
            ✉ Sign my guestbook (email me!)
          </a>
        </p>
      </main>

      {/* Bottom hazard banner */}
      <div className="hazard-stripes h-8 w-full" />

      <footer className="bg-black text-center text-xs md:text-sm text-gray-300 py-4 px-2 space-y-1">
        <p>Best viewed in Netscape Navigator 4.0 at 800×600 resolution</p>
        <p>Last updated: May 2026 — © David Runemalm</p>
      </footer>
    </div>
  );
};

export default Index;
