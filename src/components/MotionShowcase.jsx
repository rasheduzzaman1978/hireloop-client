"use client";

import { motion } from "motion/react";

export default function MotionShowcase() {
  return (
    <section className="min-h-screen space-y-24 overflow-hidden bg-black px-6 py-20 text-white">

      {/* ================================================= */}
      {/* 1. FADE IN */}
      {/* ================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="rounded-2xl bg-gray-900 p-10"
      >
        Fade In Animation
      </motion.div>

      {/* ================================================= */}
      {/* 2. SLIDE FROM LEFT */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-2xl bg-blue-500 p-10"
      >
        Slide From Left
      </motion.div>

      {/* ================================================= */}
      {/* 3. SLIDE FROM RIGHT */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-2xl bg-purple-500 p-10"
      >
        Slide From Right
      </motion.div>

      {/* ================================================= */}
      {/* 4. SLIDE FROM TOP */}
      {/* ================================================= */}

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="rounded-2xl bg-pink-500 p-10"
      >
        Slide From Top
      </motion.div>

      {/* ================================================= */}
      {/* 5. SLIDE FROM BOTTOM */}
      {/* ================================================= */}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="rounded-2xl bg-green-500 p-10"
      >
        Slide From Bottom
      </motion.div>

      {/* ================================================= */}
      {/* 6. SCALE IN */}
      {/* ================================================= */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="rounded-2xl bg-cyan-500 p-10"
      >
        Scale In
      </motion.div>

      {/* ================================================= */}
      {/* 7. ROTATE */}
      {/* ================================================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-32 w-32 rounded-full bg-orange-500"
      />

      {/* ================================================= */}
      {/* 8. HOVER SCALE */}
      {/* ================================================= */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="rounded-full bg-white px-8 py-4 text-black"
      >
        Hover Scale
      </motion.button>

      {/* ================================================= */}
      {/* 9. TAP EFFECT */}
      {/* ================================================= */}

      <motion.button
        whileTap={{ scale: 0.8 }}
        className="rounded-full bg-red-500 px-8 py-4"
      >
        Tap Effect
      </motion.button>

      {/* ================================================= */}
      {/* 10. FLOATING */}
      {/* ================================================= */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-24 w-24 rounded-full bg-cyan-400"
      />

      {/* ================================================= */}
      {/* 11. PULSE */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="h-24 w-24 rounded-full bg-purple-500"
      />

      {/* ================================================= */}
      {/* 12. OPACITY LOOP */}
      {/* ================================================= */}

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-24 w-24 rounded-full bg-pink-500"
      />

      {/* ================================================= */}
      {/* 13. DRAG */}
      {/* ================================================= */}

      <motion.div
        drag
        className="flex h-32 w-32 cursor-grab items-center justify-center rounded-2xl bg-blue-500"
      >
        Drag
      </motion.div>

      {/* ================================================= */}
      {/* 14. DRAG CONSTRAINT */}
      {/* ================================================= */}

      <motion.div
        drag
        dragConstraints={{
          left: -100,
          right: 100,
          top: -50,
          bottom: 50,
        }}
        className="flex h-32 w-32 cursor-grab items-center justify-center rounded-2xl bg-green-500"
      >
        Drag Limit
      </motion.div>

      {/* ================================================= */}
      {/* 15. BLUR REVEAL */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        className="rounded-2xl bg-gray-800 p-10"
      >
        Blur Reveal
      </motion.div>

      {/* ================================================= */}
      {/* 16. WIGGLE */}
      {/* ================================================= */}

      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-6xl"
      >
        🔔
      </motion.div>

      {/* ================================================= */}
      {/* 17. MARQUEE */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap text-3xl"
      >
        ⚡ Motion Animation Showcase ⚡
      </motion.div>

      {/* ================================================= */}
      {/* 18. HOVER ROTATE */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          rotate: 10,
        }}
        className="rounded-2xl bg-yellow-500 p-10"
      >
        Hover Rotate
      </motion.div>

      {/* ================================================= */}
      {/* 19. HOVER GLOW */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          boxShadow: "0px 0px 30px rgba(0,255,255,0.6)",
        }}
        className="rounded-2xl bg-gray-900 p-10"
      >
        Hover Glow
      </motion.div>

      {/* ================================================= */}
      {/* 20. BOUNCE */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className="h-24 w-24 rounded-full bg-red-400"
      />

      {/* ================================================= */}
      {/* 21. STAGGER CONTAINER */}
      {/* ================================================= */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="space-y-4"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            className="rounded-xl bg-gray-800 p-5"
          >
            Item {i}
          </motion.div>
        ))}
      </motion.div>

      {/* ================================================= */}
      {/* 22. SCROLL REVEAL */}
      {/* ================================================= */}

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
        className="rounded-2xl bg-indigo-500 p-10"
      >
        Scroll Reveal
      </motion.div>

      {/* ================================================= */}
      {/* 23. FLIP */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          rotateY: 180,
        }}
        className="rounded-2xl bg-cyan-600 p-10"
      >
        Flip Animation
      </motion.div>

      {/* ================================================= */}
      {/* 24. SKEW */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          skewX: 10,
        }}
        className="rounded-2xl bg-teal-500 p-10"
      >
        Skew Animation
      </motion.div>

      {/* ================================================= */}
      {/* 25. ROTATING BORDER */}
      {/* ================================================= */}

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

        <div className="relative rounded-3xl bg-black px-10 py-5">
          Rotating Border
        </div>
      </div>

      {/* ================================================= */}
      {/* 26. MORPH BUTTON */}
      {/* ================================================= */}

      <motion.button
        whileHover={{
          borderRadius: "40px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
        className="rounded-xl bg-white px-8 py-4 text-black"
      >
        Morph Button
      </motion.button>

      {/* ================================================= */}
      {/* 27. PING */}
      {/* ================================================= */}

      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 2],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute h-24 w-24 rounded-full bg-cyan-500"
        />

        <div className="relative z-10 h-24 w-24 rounded-full bg-cyan-300" />
      </div>

      {/* ================================================= */}
      {/* 28. TEXT GRADIENT */}
      {/* ================================================= */}

      <motion.h1
        animate={{
          backgroundPosition: ["0%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-6xl font-black text-transparent"
      >
        Gradient Animation
      </motion.h1>

      {/* ================================================= */}
      {/* 29. 3D CARD */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          rotateX: 10,
          rotateY: -10,
          scale: 1.05,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="rounded-3xl bg-gray-900 p-10"
      >
        3D Motion Card
      </motion.div>

      {/* ================================================= */}
      {/* 30. COMBINED ANIMATION */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        whileHover={{
          scale: 1.05,
          rotate: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 p-10"
      >
        Combined Premium Animation
      </motion.div>
    </section>
  );
}