"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@heroui/react";

import { Bars, Xmark } from "@gravity-ui/icons";

import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  useSession,
  signOut,
} from "@/lib/auth-client";

import {
  motion,
  AnimatePresence,
} from "motion/react";

const navItems = [
  {
    label: "Browse Jobs",
    href: "/jobs",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const pathname =
    usePathname();

  const {
    data: session,
  } = useSession();

  const user =
    session?.user;

  const handleLogout =
    async () => {
      await signOut();

      window.location.reload();
    };

  return (
    <header className="w-full border-b border-white/10 bg-[#0A0A0F]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="relative h-5 w-20 overflow-hidden rounded-xl md:h-8 md:w-30">
            <Image
              src="/logo.png"
              alt="Hireloop Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        {/* DESKTOP */}

        <div className="hidden items-center gap-4 md:flex">
          
          {/* MENU */}

          <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-xl">
            
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm transition hover:bg-white/5 ${
                  pathname === item.href
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mx-2 h-5 w-px bg-white/10" />

            {/* USER AREA */}

            {!user ? (
              <Link
                href="/signin"
                className={`rounded-xl px-4 py-2 text-sm font-medium transition hover:bg-white/5 ${
                  pathname === "/signin"
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-indigo-300"
                }`}
              >
                Login
              </Link>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex items-center gap-3"
              >
                
                {/* USER IMAGE */}

                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={
                      user?.image ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    alt={
                      user?.name || "User"
                    }
                    fill
                    className="object-cover"
                  />
                </div>

                {/* USER NAME */}

                <span className="text-sm font-medium text-white">
                  {user?.name}
                </span>

                {/* LOGOUT */}

                <button
                  onClick={
                    handleLogout
                  }
                  className="rounded-xl px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-white/5"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>

          {/* GET STARTED */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Button
              radius="lg"
              className="h-11 bg-white px-6 font-semibold text-black hover:bg-gray-200"
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* MOBILE BUTTON */}

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() =>
            setIsMenuOpen(
              !isMenuOpen
            )
          }
          className="text-white md:hidden"
        >
          {isMenuOpen ? (
            <Xmark className="h-7 w-7" />
          ) : (
            <Bars className="h-7 w-7" />
          )}
        </motion.button>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/10 bg-[#0A0A0F] md:hidden"
          >
            <div className="space-y-3 px-4 py-5">
              
              {/* NAV ITEMS */}

              {navItems.map(
                (item, index) => (
                  <motion.div
                    key={
                      item.label
                    }
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-2 text-sm transition ${
                        pathname ===
                        item.href
                          ? "text-indigo-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}

              {/* LOGIN / USER */}

              {!user ? (
                <Link
                  href="/signin"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-indigo-400 transition hover:bg-white/5"
                >
                  Login
                </Link>
              ) : (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3"
                >
                  
                  {/* USER IMAGE */}

                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image
                      src={
                        user?.image ||
                        "https://ui-avatars.com/api/?name=User"
                      }
                      alt={
                        user?.name ||
                        "User"
                      }
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* USER INFO */}

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {user?.name}
                    </span>

                    <button
                      onClick={
                        handleLogout
                      }
                      className="text-left text-sm text-red-400"
                    >
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}

              {/* GET STARTED */}

              <div className="mt-10 flex items-center justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    boxShadow:
                      "0px 0px 30px rgba(0,255,255,0.35)",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="rounded-full bg-cyan-500 px-6 py-4 font-semibold text-black shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}