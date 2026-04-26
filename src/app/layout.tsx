import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quartz Financial Advisory | Market Intelligence Community",
  description:
    "Real-time market intelligence from geopolitics, macro data, and technical signals delivered daily by Quartz Financial Advisory.",
  icons: {
    icon: "/logo/quartz-icon.ico",
    shortcut: "/logo/quartz-icon.ico",
    apple: "/logo/quartz-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-white font-sans text-zinc-900"
      >
        {children}
      </body>
    </html>
  );
}
