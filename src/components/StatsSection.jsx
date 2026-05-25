"use client";

import Image from "next/image";

import {
  Briefcase,
  CircleInfo,
  Persons,
  Star,
} from "@gravity-ui/icons";
import { motion } from "motion/react"

const stats = [
  {
    id: 1,
    icon: Briefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    id: 2,
    icon: CircleInfo,
    value: "12K",
    label: "Companies",
  },
  {
    id: 3,
    icon: Persons,
    value: "2M",
    label: "Job Seekers",
  },
  {
    id: 4,
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8">
      
      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.25),transparent_45%)]" />

      {/* GLOBE IMAGE */}
      <div className="absolute inset-0 flex items-start justify-center">
        
        <div className="relative h-[260px] w-[900px] opacity-80 sm:h-[320px] sm:w-[1200px] md:h-[420px] md:w-[1600px] lg:h-[520px] lg:w-[2200px] xl:h-[620px] xl:w-[2800px]">
          
          <Image
            src="/globe2.PNG"
            alt="Globe Background"
            fill
            priority
            sizes="100vw"
            className="object-contain object-top"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto mt-24 max-w-7xl sm:mt-32 lg:mt-40">
        
        {/* TEXT */}
        <div className="mx-auto max-w-2xl text-center">
          
          <h2 className="text-2xl font-medium leading-relaxed text-white sm:text-3xl md:text-4xl">
            Assisting over 15,000 job seekers
            <br className="hidden sm:block" />
            find their dream positions.
          </h2>
          <motion.p animate={{ rotate: 360 }} className="mt-4 text-sm text-gray-400 sm:text-base">
            Remote Jobs
          </motion.p>
          <motion.p  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="mt-4 text-sm text-gray-400 sm:text-base">
            On-site Jobs
          </motion.p>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Fade In Content
</motion.div>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-indigo-500/40"
              >
                
                {/* ICON */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300">
                  <Icon className="h-5 w-5" />
                </div>

                {/* VALUE */}
                <h3 className="mt-10 text-4xl font-semibold text-white">
                  {item.value}
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}