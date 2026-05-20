"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/src/context/ThemeContext"
import { PortfolioProvider } from "@/src/context/PortfolioContext"
import Navbar from "@/src/components/Navbar"
import { Toaster } from "@/src/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
      </head>
      <body className="selection:bg-blue-500/30 selection:text-blue-200">
        <ThemeProvider>
          
            <PortfolioProvider>
              <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
                <Navbar />
                {children}
                <Toaster />
              </div>
            </PortfolioProvider>
          
        </ThemeProvider>
      </body>
    </html>
  );
}


