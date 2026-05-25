"use client";

import { Button } from "@heroui/react";

import {
  Magnifier,
  MapPin,
} from "@gravity-ui/icons";

const trendingTags = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),transparent_40%)]" />

      {/* STARS */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-[radial-gradient(circle,rgba(99,102,241,0.4)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        
        {/* BADGE */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] text-gray-300 backdrop-blur-xl sm:mb-8 sm:px-5 sm:text-xs">
          
          <span className="text-orange-400">
            💼
          </span>

          <span className="font-semibold text-white">
            50,000+
          </span>

          <span className="uppercase tracking-wider text-gray-500">
            New Jobs This Month
          </span>
        </div>

        {/* TITLE */}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* SEARCH BOX */}
        <div className="mt-8 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl sm:mt-10">
          
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            
            {/* SEARCH INPUT */}
            <div className="flex h-14 flex-1 items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-4">
              
              <Magnifier className="h-5 w-5 shrink-0 text-gray-500" />

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
              />
            </div>

            {/* DIVIDER */}
            <div className="hidden h-6 w-px bg-white/10 lg:block" />

            {/* LOCATION INPUT */}
            <div className="flex h-14 flex-1 items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-4">
              
              <MapPin className="h-5 w-5 shrink-0 text-gray-500" />

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
              />
            </div>

            {/* BUTTON */}
            <Button
              isIconOnly
              radius="lg"
              className="h-14 min-w-14 bg-indigo-500 text-white hover:bg-indigo-600"
            >
              <Magnifier className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* TRENDING TAGS */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:mt-8 sm:text-sm">
          
          <span className="text-gray-500">
            Trending Position
          </span>

          {trendingTags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-gray-300 transition hover:border-indigo-500 hover:text-white sm:px-4"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}