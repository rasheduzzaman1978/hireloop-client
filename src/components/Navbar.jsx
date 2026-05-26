"use client";

import Link from "next/link";
import {
  useState,
  useEffect,
} from "react";

import { Button } from "@heroui/react";

import {
  Bars,
  Xmark,
} from "@gravity-ui/icons";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

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

import { useTheme } from "next-themes";

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

  // ================= HYDRATION FIX =================

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ================= THEME =================

  const {
    theme,
    setTheme,
  } = useTheme();

  const handleLogout =
    async () => {
      await signOut();

      window.location.reload();
    };

  // Prevent hydration mismatch

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0F] transition-colors duration-300">

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

          <div className="flex items-center rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.03] px-2 py-2 backdrop-blur-xl transition-colors duration-300">

            {navItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  pathname === item.href
                    ? "text-indigo-500 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5"
                }`}
              >

                {item.label}

              </Link>
            ))}

            <div className="mx-2 h-5 w-px bg-gray-300 dark:bg-white/10" />

            {/* THEME TOGGLE */}

            <button
              onClick={() =>
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              }
              className="mr-2 rounded-lg bg-gray-200 dark:bg-gray-800 p-2 transition hover:scale-105"
            >

              {theme === "dark" ? (

                <FaSun className="text-yellow-400 text-lg" />

              ) : (

                <FaMoon className="text-black text-lg" />

              )}
            </button>

            {/* USER AREA */}

            {!user ? (

              <Link
                href="/signin"
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  pathname === "/signin"
                    ? "text-indigo-500 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300 hover:bg-gray-200 dark:hover:bg-white/5"
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

               <div className="relative group">

                {/* USER IMAGE */}

                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gray-300 dark:border-white/10">

                  <Image
                    src={
                      user?.image ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    alt={user?.name || "User"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TOOLTIP */}

                <div className="absolute left-1/2 top-12 z-50 hidden -translate-x-1/2 rounded-xl bg-black px-4 py-2 text-center shadow-xl group-hover:block">

                  <p className="text-sm font-semibold text-white">
                    {user?.name}
                  </p>

                  <p className="text-xs text-gray-300">
                    {user?.email}
                  </p>

                </div>

              </div>

                {/* USER NAME */}

                <span className="text-sm font-medium text-black dark:text-white">

                  {user?.name}

                </span>

                {/* LOGOUT */}

                <button
                  onClick={
                    handleLogout
                  }
                  className="rounded-xl border border-red-400 bg-red-500 px-3 py-2 text-sm font-medium text-white shadow-red-400/50 transition hover:scale-105 hover:cursor-pointer hover:border-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-400/70 active:scale-95"
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
              className="h-11 bg-black dark:bg-white px-6 font-semibold text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >

              Get Started

            </Button>
          </motion.div>
        </div>

        {/* MOBILE RIGHT */}

        <div className="flex items-center gap-3 md:hidden">

          {/* MOBILE THEME TOGGLE */}

          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            className="rounded-lg bg-gray-200 dark:bg-gray-800 p-2 transition hover:scale-105"
          >

            {theme === "dark" ? (

              <FaSun className="text-yellow-400 text-lg" />

            ) : (

              <FaMoon className="text-black text-lg" />

            )}
          </button>

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
            className="text-black dark:text-white"
          >

            {isMenuOpen ? (

              <Xmark className="h-7 w-7" />

            ) : (

              <Bars className="h-7 w-7" />

            )}
          </motion.button>
        </div>
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
            className="overflow-hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0F] transition-colors duration-300 md:hidden"
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
                          ? "text-indigo-500 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
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
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-indigo-500 dark:text-indigo-400 transition hover:bg-gray-100 dark:hover:bg-white/5"
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
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.03] px-3 py-3 transition-colors duration-300"
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

                    <span className="text-sm font-semibold text-black dark:text-white">

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