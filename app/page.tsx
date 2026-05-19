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

      <div className="relative z-10 max-w-5xl w-full text-center text-white">
        <p className="uppercase tracking-[0.4em] text-sm text-white/60 mb-4">
          Global Celebration of Rhythm
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl">
          World Frame Drum Day
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mt-6 mb-14">
          02. Oktober 2026
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card value={timeLeft.days} label="Days" />
          <Card value={timeLeft.hours} label="Hours" />
          <Card value={timeLeft.minutes} label="Minutes" />
          <Card value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="mt-14">
          <button className="bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:scale-105 transition-transform duration-300">
            Join The Movement
          </button>
        </div>

        <p className="mt-12 text-white/50 tracking-[0.2em] text-sm">
          #WorldFrameDrumDay
        </p>
      </div>
    </main>
  );
}
