"use client";

import Image from "next/image";

import {
  Briefcase,
  CircleInfo,
  Persons,
  Star,
} from "@gravity-ui/icons";

import { motion } from "motion/react";

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

  /* STAGGER CONTAINER */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* CARD ANIMATION */

  const card = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },

    show: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (

    <section className="relative overflow-hidden bg-gray-100 px-4 py-20 transition-colors duration-300 dark:bg-black sm:px-6 lg:px-8">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.10),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.25),transparent_45%)]" />

      {/* EXTRA GLOW */}

      <div className="absolute left-[-120px] top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />

      <div className="absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/20" />

      {/* ================= GLOBE IMAGE ================= */}

      <div className="absolute inset-0 flex items-start justify-center">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 0.8,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative h-[260px] w-[900px] sm:h-[320px] sm:w-[1200px] md:h-[420px] md:w-[1600px] lg:h-[520px] lg:w-[2200px] xl:h-[620px] xl:w-[2800px]"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full"
          >

            <Image
              src="/globe2.PNG"
              alt="Globe Background"
              fill
              priority
              sizes="100vw"
              className="object-contain object-top opacity-40 dark:opacity-80"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto mt-24 max-w-7xl sm:mt-32 lg:mt-40">

        {/* ================= TEXT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* BADGE */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-6 inline-flex rounded-full border border-indigo-300 bg-indigo-100 px-5 py-2 text-sm text-indigo-700 shadow-sm backdrop-blur-xl dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
          >

            ✨ Trusted by thousands worldwide

          </motion.div>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-3xl font-semibold leading-relaxed tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >

            Assisting over{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

              15,000 job seekers

            </span>

            <br className="hidden sm:block" />

            find their dream positions.

          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg"
          >

            Discover opportunities from top companies and connect with millions
            of professionals around the world.

          </motion.p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  borderColor: "rgba(99,102,241,0.5)",
                  boxShadow:
                    "0px 0px 30px rgba(99,102,241,0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
              >

                {/* HOVER GLOW */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent" />

                </div>

                {/* TOP LIGHT */}

                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/20" />

                {/* ICON */}

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gray-100 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                >

                  <Icon className="h-6 w-6" />

                </motion.div>

                {/* VALUE */}

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative z-10 mt-10 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
                >

                  {item.value}

                </motion.h3>

                {/* LABEL */}

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                  }}
                  className="relative z-10 mt-3 text-sm tracking-wide text-gray-600 dark:text-gray-400"
                >

                  {item.label}

                </motion.p>

                {/* FLOATING DOT */}

                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-cyan-400"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}