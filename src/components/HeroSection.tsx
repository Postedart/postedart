"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Props = {
  region: string;
};

const themes = ["birthday", "love", "getwell"] as const;

const messages = {
  birthday: {
    title: "It’s not just a card. It’s a birthday moment.",
    text: "She opens her phone and finds a digital card — not just a message, but a piece of art, wrapped in meaning.\nIt’s on-chain, permanent, and unexpected.\nNo wallet needed. No app to download.\nA forever card, delivered instantly from a friend who couldn’t be there in person.",
  },
  love: {
    title: "You’re my Valentine. And yes, I booked the seats.",
    text: "She opens her phone and finds a digital card — not just a message, but a beautifully wrapped surprise.\nTwo cinema tickets, already waiting.\nA little moment of love, made permanent.\nA forever card, delivered instantly — because romance should never wait.",
  },
  getwell: {
    title: "You didn’t expect it. That’s why it matters.",
    text: "He opens his phone and finds a digital card — not just a message, but a quiet moment of care.\nA few kind words, wrapped in art.\nA little spark of warmth in a hard place.\nA forever card, delivered instantly — because feeling better starts with feeling seen.",
  },
};

export default function HeroSection({ region }: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const regionCode = region.toLowerCase();
  const theme = themes[index];
  const { title, text } = messages[theme];
  const imageSrc = `/stories/${theme}_${regionCode}.webp`;

  // Rotate slides every 5s unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % themes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Spacebar toggles pause/resume
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="relative w-full h-screen touch-none"
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
    >
      <Image
        src={imageSrc}
        alt={`${theme} story`}
        fill
        className="object-cover object-center transition-opacity duration-700 ease-in-out"
        priority
      />

      {/* Pause icon */}
      {isPaused && (
        <div
          className="absolute top-4 right-4 z-10 text-white text-2xl opacity-70"
          aria-label="Slideshow paused"
        >
          ❚❚
        </div>
      )}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end justify-center lg:justify-start lg:items-end">
        <div className="bg-black/10 p-6 lg:p-12 w-full lg:w-1/3 h-fit lg:h-full flex justify-center lg:items-center">
          <div className="text-center max-w-md w-full mx-auto lg:text-left lg:max-w-xl lg:mx-0">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
            <p className="text-base leading-relaxed whitespace-pre-line">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
