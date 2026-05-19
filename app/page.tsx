"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-10-02T00:00:00");

  const calculateTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Card = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 min-w-[120px] text-center shadow-2xl">
      <div className="text-4xl md:text-6xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </div>

      <div className="text-xs uppercase tracking-[0.25em] text-white/60 mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <main
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/drum.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-5xl w-full text-center text-white pt-8 md:pt-16">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.04em] uppercase drop-shadow-2xl">
            WORLD
            <br />
            FRAME DRUM
            <br />
            DAY
          </h1>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-10 h-[1px] bg-white/30" />

            <p className="text-lg md:text-2xl tracking-[0.25em] uppercase text-white/80">
              02 · Oktober · 2026
            </p>

            <div className="w-10 h-[1px] bg-white/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card value={timeLeft.days} label="Days" />
          <Card value={timeLeft.hours} label="Hours" />
          <Card value={timeLeft.minutes} label="Minutes" />
          <Card value={timeLeft.seconds} label="Seconds" />
        </div>

        

        <p className="mt-8 text-white/70 tracking-[0.15em] text-2xl md:text-3xl font-semibold">
  #WorldFrameDrumDay
</p>
      </div>
    </main>
  );
}
