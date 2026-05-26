import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Programming Hero",
  description: "Modern Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0A0A0F] text-white">
        <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
           <main className="flex-1">
            {children}
          </main>
          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}