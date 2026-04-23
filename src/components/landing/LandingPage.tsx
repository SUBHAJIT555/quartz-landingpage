import { HeroSection } from "@/components/landing/sections/HeroSection";
import { InsideCommunitySection } from "@/components/landing/sections/InsideCommunitySection";
import { InquiryModal } from "@/components/landing/InquiryModal";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { NotForEveryoneSection } from "@/components/landing/sections/NotForEveryoneSection";
import { TrustedPartnersSection } from "@/components/landing/sections/TrustedPartnersSection";
import { WhatMembersSaySection } from "@/components/landing/sections/WhatMembersSaySection";
import { WhatWeTrackSection } from "@/components/landing/sections/WhatWeTrackSection";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <LandingNavbar />
      <InquiryModal />
      <HeroSection />
      <TrustedPartnersSection />
      <InsideCommunitySection />
      <WhatWeTrackSection />
      <WhatMembersSaySection />
      <NotForEveryoneSection />
    </main>
  );
}
