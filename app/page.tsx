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
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 min-w-[120px] text-center">
      <div className="text-4xl md:text-6xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-widest text-white/60 mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">

        <p className="text-xs tracking-[0.3em] uppercase text-white/50">
          Global Rhythm Community
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          World Frame Drum Day
        </h1>

        <p className="text-white/60 mt-4">
          A global celebration of rhythm and connection.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
          <Card value={timeLeft.days} label="Days" />
          <Card value={timeLeft.hours} label="Hours" />
          <Card value={timeLeft.minutes} label="Minutes" />
          <Card value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="text-white/40 text-sm">
          #WorldFrameDrumDay
        </p>

      </div>
    </main>
  );
}