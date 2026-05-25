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

            {/* LOGIN / LOGOUT */}

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

              <button
                onClick={
                  handleLogout
                }
                className="rounded-xl px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-white/5"
              >

                Logout

              </button>
            )}
          </div>

          {/* GET STARTED */}

          <Button
            radius="lg"
            className="h-11 bg-white px-6 font-semibold text-black hover:bg-gray-200"
          >

            Get Started

          </Button>
        </div>

        {/* MOBILE BUTTON */}

        <button
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
        </button>
      </div>

      {/* MOBILE MENU */}

      {isMenuOpen && (

        <div className="border-t border-white/10 bg-[#0A0A0F] md:hidden">

          <div className="space-y-3 px-4 py-5">

            {/* NAV ITEMS */}

            {navItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-sm transition ${
                  pathname === item.href
                    ? "text-indigo-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >

                {item.label}

              </Link>
            ))}

            {/* LOGIN / LOGOUT */}

            {!user ? (

              <Link
                href="/signin"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-indigo-400 transition hover:bg-white/5"
              >

                Login

              </Link>

            ) : (

              <button
                onClick={handleLogout}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-400 transition hover:bg-white/5"
              >

                Logout

              </button>
            )}

            {/* GET STARTED */}

            <Button
              radius="lg"
              className="mt-2 w-full bg-white font-semibold text-black"
            >

              Get Started

            </Button>
          </div>
        </div>
      )}
    </header>
  );
}