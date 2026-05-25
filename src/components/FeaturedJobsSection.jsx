"use client";

import { Button } from "@heroui/react";

import {
  MapPin,
  Briefcase,
  ArrowRight,
} from "@gravity-ui/icons";
import { motion } from "motion/react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
  },
  {
    id: 2,
    title: "Frontend Developer",
  },
  {
    id: 3,
    title: "Frontend Developer",
  },
  {
    id: 4,
    title: "Frontend Developer",
  },
  {
    id: 5,
    title: "Frontend Developer",
  },
  {
    id: 6,
    title: "Frontend Developer",
  },
];

export default function FeaturedJobsSection() {
  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="text-center">
          
          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400 sm:text-xs">
            
            <span className="h-1 w-1 rounded-full bg-indigo-500" />

            Smart Job Discovery

            <span className="h-1 w-1 rounded-full bg-indigo-500" />
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl border border-white/5 bg-[#0B0B0F] p-6 transition duration-300 hover:border-white/10 hover:bg-[#101015]"
            >
              
              {/* TITLE */}
              <h3 className="text-2xl font-medium text-white">
                {job.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Showcase your commitment to diversity and
                inclusion by highlighting initiatives
              </p>

              {/* TAGS */}
              <div className="mt-8 flex flex-wrap gap-3">
                
                {/* LOCATION */}
                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
                  
                  <MapPin className="h-3.5 w-3.5 text-indigo-400" />

                  New York, USA
                </div>

                {/* TYPE */}
                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
                  
                  <Briefcase className="h-3.5 w-3.5 text-indigo-400" />

                  Hybrid
                </div>

                {/* SALARY */}
                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
                  
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />

                  €25–€40/hour
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-10 flex items-center gap-2 text-sm font-medium text-white transition hover:text-indigo-400">
                
                Apply Now

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          
          <div className="relative w-fit overflow-hidden rounded-3xl p-[2px]">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-100%] bg-conic from-cyan-500 via-purple-500 to-pink-500"
        />

        <button className="relative rounded-3xl bg-black px-4 py-3">
           View all job open
        </button>
        </div>
        </div>
      </div>
    </section>
  );
}