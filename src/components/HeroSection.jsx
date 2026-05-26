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

    <section className="relative overflow-hidden bg-gray-100 px-4 py-16 transition-colors duration-300 dark:bg-black sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.10),transparent_40%)] dark:bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),transparent_40%)]" />

      {/* STARS */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_1px,transparent_1px)] opacity-20 [background-size:24px_24px] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.4)_1px,transparent_1px)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* BADGE */}

        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-[10px] text-gray-700 shadow-sm backdrop-blur-xl sm:mb-8 sm:px-5 sm:text-xs dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">

          <span className="text-orange-400">

            💼

          </span>

          <span className="font-semibold text-gray-900 dark:text-white">

            50,000+

          </span>

          <span className="uppercase tracking-wider text-gray-500 dark:text-gray-500">

            New Jobs This Month

          </span>
        </div>

        {/* TITLE */}

        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">

          Find Your Dream Job Today

        </h1>

        {/* DESCRIPTION */}

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">

          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.

        </p>

        {/* SEARCH BOX */}

        <div className="mt-8 w-full max-w-4xl rounded-2xl border border-gray-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:mt-10">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

            {/* SEARCH INPUT */}

            <div className="flex h-14 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition-colors duration-300 dark:border-white/5 dark:bg-black/30">

              <Magnifier className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none dark:text-white dark:placeholder:text-gray-500"
              />
            </div>

            {/* DIVIDER */}

            <div className="hidden h-6 w-px bg-gray-200 dark:bg-white/10 lg:block" />

            {/* LOCATION INPUT */}

            <div className="flex h-14 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition-colors duration-300 dark:border-white/5 dark:bg-black/30">

              <MapPin className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none dark:text-white dark:placeholder:text-gray-500"
              />
            </div>

            {/* BUTTON */}

            <Button
              isIconOnly
              radius="lg"
              className="h-14 min-w-14 bg-indigo-500 text-white transition hover:bg-indigo-600"
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
              className="rounded-full border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-white sm:px-4"
            >

              {tag}

            </button>
          ))}
        </div>
      </div>
    </section>
  );
}