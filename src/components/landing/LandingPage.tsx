import { HeroSection } from "@/components/landing/sections/HeroSection";
import { InsideCommunitySection } from "@/components/landing/sections/InsideCommunitySection";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { FooterSection } from "@/components/landing/sections/FooterSection";
import { NotForEveryoneSection } from "@/components/landing/sections/NotForEveryoneSection";
import { TrustedPartnersSection } from "@/components/landing/sections/TrustedPartnersSection";
import { WhatMembersSaySection } from "@/components/landing/sections/WhatMembersSaySection";
import { WhatWeTrackSection } from "@/components/landing/sections/WhatWeTrackSection";

export function LandingPage() {
  const TELEGRAM_GROUP_URL = "https://t.me/Quartzfinancial";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <LandingNavbar />
      <HeroSection />
      <TrustedPartnersSection />
      <InsideCommunitySection />
      <WhatWeTrackSection />
      <WhatMembersSaySection />
      <NotForEveryoneSection />
      <FooterSection />

      <a
        href={TELEGRAM_GROUP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Join Quartz on Telegram"
        className="fixed bottom-5 right-5 z-60 inline-flex h-14 w-14 items-center justify-center rounded-full border border-sky-200 bg-linear-to-br from-sky-500 to-blue-600 text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.6)] ring ring-sky-500 ring-offset-2 transition hover:scale-105 hover:from-sky-400 hover:to-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
      </a>
    </main>
  );
}
