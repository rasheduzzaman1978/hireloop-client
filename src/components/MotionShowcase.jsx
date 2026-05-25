"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function MotionShowcase() {
  /* ---------------- TYPEWRITER ---------------- */

  const texts = [
    "Frontend Developer",
    "Next.js Creator",
    "Motion Designer",
    "UI Animation Expert",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1));

          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  /* ---------------- STAGGER ---------------- */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    "Hover Effects",
    "Scroll Reveal",
    "Smooth Motion",
    "Interactive UI",
    "Glassmorphism",
    "Modern Animation",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute right-[-100px] top-[300px] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="absolute bottom-[-100px] left-[30%] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[140px]" />

      {/* ================= HERO SECTION ================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* BADGE */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mb-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm text-cyan-300 backdrop-blur-xl"
        >
          ✨ Modern Motion Showcase
        </motion.div>

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black leading-[1.05] tracking-tight md:text-8xl"
        >
          Build Stunning
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {displayText}

            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="ml-2"
            >
              |
            </motion.span>
          </span>
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          Beautiful modern animations using Motion for React, Tailwind CSS,
          and Next.js to create premium interactive UI experiences.
        </motion.p>

        {/* CTA BUTTONS */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow: "0px 0px 30px rgba(0,255,255,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#ffffff",
            }}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl"
          >
            Live Preview
          </motion.button>
        </div>

        {/* FLOATING ICONS */}

        <div className="relative mt-24 flex flex-wrap justify-center gap-8">
          {["🚀", "⚡", "✨"].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-3xl backdrop-blur-xl"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= FEATURE GRID ================= */}

      <section className="relative z-10 mx-auto mt-40 max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((title, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {/* HOVER OVERLAY */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
              </div>

              {/* ICON */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative z-10 mb-6 text-4xl"
              >
                ✨
              </motion.div>

              <h3 className="relative z-10 text-2xl font-bold">
                {title}
              </h3>

              <p className="relative z-10 mt-4 leading-7 text-gray-400">
                Premium motion effects and interactive animations for modern
                websites and SaaS interfaces.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= INTERACTIVE SECTION ================= */}

      <section className="relative z-10 mx-auto mt-40 max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <div className="space-y-10">
            {/* MAGNETIC BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(0,255,255,0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 12,
              }}
              className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-black"
            >
              Magnetic Button
            </motion.button>

            {/* MORPH BUTTON */}

            <motion.button
              whileHover={{
                borderRadius: "40px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              transition={{
                duration: 0.3,
              }}
              className="rounded-xl bg-white px-8 py-4 font-bold text-black"
            >
              Morph Button
            </motion.button>

            {/* PING EFFECT */}

            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute h-24 w-24 rounded-full bg-cyan-500"
              />

              <div className="relative z-10 h-24 w-24 rounded-full bg-cyan-400"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-10">
            {/* 3D CARD */}

            <motion.div
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-black">
                3D Motion Card
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Beautiful hover perspective animation with glassmorphism design
                and premium interactions.
              </p>
            </motion.div>

            {/* WIGGLE ICON */}

            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="text-7xl"
            >
              🔔
            </motion.div>

            {/* FLOATING BADGE */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block rounded-full border border-cyan-400 px-5 py-2 text-cyan-400"
            >
              New Feature
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= AUTO SLIDER ================= */}

      <section className="relative z-10 mt-40 overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-6"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="min-w-[300px] rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">
                Motion Card {i}
              </h3>

              <p className="mt-4 text-gray-400">
                Interactive sliding showcase animation component.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= DRAG SECTION ================= */}

      <div className="relative z-10 mt-40 flex justify-center">
        <motion.div
          drag
          dragConstraints={{
            left: -150,
            right: 150,
            top: -50,
            bottom: 50,
          }}
          whileDrag={{
            scale: 1.1,
          }}
          className="flex h-32 w-32 cursor-grab items-center justify-center rounded-full bg-pink-500 text-xl font-bold shadow-2xl"
        >
          Drag Me
        </motion.div>
      </div>

      {/* ================= FINAL CTA ================= */}

      <section className="relative z-10 mx-auto mt-40 max-w-5xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
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
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-14 text-center backdrop-blur-xl"
        >
          <motion.h2
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-5xl font-black"
          >
            Next-Level Motion UI
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Combine hover animations, stagger effects, floating elements,
            draggable components, and smooth transitions into one premium UI
            experience.
          </p>

          {/* MARQUEE */}

          <motion.div
            animate={{
              x: ["0%", "-30%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mt-12 overflow-hidden whitespace-nowrap text-3xl font-bold text-cyan-400"
          >
            ⚡ Motion • Next.js • Tailwind CSS • Modern UI ⚡
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-10 mt-40 border-t border-white/10 py-10 text-center text-gray-500">
        Crafted with Motion Magic ✨
      </footer>
    </section>
  );
}