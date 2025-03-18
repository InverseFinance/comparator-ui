import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import FuturisticBackground from "@/components/ui/futuristic-background";
// import { AppNav } from "@/components/app-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-futuristic`}
      >
        {/* <FuturisticBackground> */}
          <div className="min-h-screen flex flex-col align-center items-center justify-center">
            <main className="flex flex-col align-center items-center justify-center" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              {children}
            </main>
            <footer className="fixed bottom-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              <a
                href="https://inverse.finance/firm"
                target="_blank"
                className="text-blue-300"
              >
                Powered by Inverse Finance
              </a>
            </footer>
          </div>
        {/* </FuturisticBackground> */}
      </body>
    </html>
  );
}
