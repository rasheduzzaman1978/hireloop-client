import Link from "next/link";
import Image from "next/image";

import {
  LogoFacebook,
  LogoLinkedin,
  LogoGithub,
} from "@gravity-ui/icons";

const footerLinks = {
  product: [
    "Job discovery",
    "Worker AI",
    "Companies",
    "Salary data",
  ],

  navigations: [
    "Help center",
    "Career library",
    "Contact",
  ],

  resources: [
    "Brand Guideline",
    "Newsroom",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="relative h-8 w-30 md:h-10 md:w-40 overflow-hidden rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Programming Hero Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              The AI-native career platform. Built for
              people who take their work seriously.
            </p>

            {/* SOCIAL ICONS */}
            {/* SOCIAL ICONS */}
<div className="mt-10 flex items-center gap-3">
  
  {/* FACEBOOK */}
  <Link
    href="https://facebook.com/programminghero"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-indigo-500 hover:text-white"
  >
    <LogoFacebook className="h-5 w-5" />
  </Link>

  {/* GITHUB */}
  <Link
    href="https://github.com/programminghero1"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white transition hover:opacity-90"
  >
    <LogoGithub className="h-5 w-5" />
  </Link>

  {/* LINKEDIN */}
  <Link
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-indigo-500 hover:text-white"
  >
    <LogoLinkedin className="h-5 w-5" />
  </Link>
</div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-medium text-indigo-400">
              Product
            </h3>

            <div className="mt-5 space-y-4">
              {footerLinks.product.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-10">
            
            {/* NAVIGATIONS */}
            <div>
              <h3 className="text-sm font-medium text-indigo-400">
                Navigations
              </h3>

              <div className="mt-5 space-y-4">
                {footerLinks.navigations.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="text-sm font-medium text-indigo-400">
                Resources
              </h3>

              <div className="mt-5 space-y-4">
                {footerLinks.resources.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-gray-500 md:flex-row">
          
          <p>
             Copyright © {new Date().getFullYear()} — Programming Hero
          </p>

          <div className="flex items-center gap-3"> 
            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Policy
            </Link>

            <span>-</span>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}