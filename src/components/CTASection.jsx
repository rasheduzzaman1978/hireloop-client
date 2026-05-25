"use client";

import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
      style={{
        backgroundImage: "url('/images/cta-bg.png')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      {/* OVERLAY */}
<div className="absolute inset-0 bg-black/30" />

{/* BLUE GLOW */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.45),transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        
        {/* TITLE */}
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          Build a profile in three minutes. The matches start
          arriving tomorrow morning.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          
          {/* PRIMARY BUTTON */}
          <Button className="h-12 rounded-xl bg-white px-7 text-sm font-medium text-black hover:bg-zinc-200">
            Create a free account
          </Button>

          {/* SECONDARY BUTTON */}
          <Button className="h-12 rounded-xl border border-white/10 bg-white/[0.03] px-7 text-sm font-medium text-white hover:bg-white/10">
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}