"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ShinyButton } from "@/components/ui/shiny-button";
import Shuffle from "@/components/ui/Shuffle";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Partners", href: "#partners" },
  { label: "Community", href: "#inside-community" },
  { label: "Track", href: "#what-we-track" },
  { label: "Testimonials", href: "#what-members-say" },
  // { label: "Why", href: "#why" },
];

const mobilePanelVariants = {
  closed: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1] as const,
      when: "afterChildren" as const,
      staggerChildren: 0.025,
      staggerDirection: -1 as const,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.035,
      delayChildren: 0.01,
    },
  },
};

const mobileItemVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.14, ease: [0.4, 0, 0.2, 1] as const },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function LandingNavbar() {
  const TELEGRAM_GROUP_URL = "https://t.me";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openTelegramGroup = () => {
    window.open(TELEGRAM_GROUP_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition",
        scrolled ? "border-zinc-200 bg-white/50" : "border-transparent bg-white/45",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link
          href="#home"
          className="inline-flex items-center"
          aria-label="Quartz home"
        >
          <Image
            src="/logo/quartz_dark_logo.webp"
            alt="Quartz"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
            style={{ width: "auto" }}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex text-sm md:text-base text-zinc-700 transition hover:text-zinc-950"
            >
              <Shuffle
                text={item.label}
                tag="span"
                className="text-sm md:text-base font-medium leading-none"
                textAlign="left"
                shuffleDirection="right"
                duration={0.3}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce
                triggerOnHover
                hoverTarget="parent-group"
                respectReducedMotion
              />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <ShinyButton
            onClick={openTelegramGroup}
            className="shiny-cta--compact"
          >
            Join the Inner Circle
          </ShinyButton>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-xl border transition md:hidden",
            open
              ? "border-zinc-300 bg-zinc-100 text-zinc-900 ring ring-zinc-200 ring-offset-2"
              : "border-zinc-300 ring ring-zinc-200 ring-offset-2 bg-zinc-100 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50",
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative block h-4 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition",
                open ? "translate-y-[7px] rotate-45" : "translate-y-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-current transition",
                open ? "translate-y-[-7px] -rotate-45" : "translate-y-0",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
        <motion.div
          key="mobile-menu"
          className="relative overflow-hidden border-t border-b shadow-lg border-zinc-200 bg-white md:hidden"
          variants={mobilePanelVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
              `,
              backgroundSize: "5px 5px",
              backgroundPosition: "0 0, 0 0",
              maskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
              `,
              WebkitMaskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
              `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <motion.div
            className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-1 px-3 py-3"
            variants={mobilePanelVariants}
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={mobileItemVariants}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={mobileItemVariants}>
              <ShinyButton
                onClick={openTelegramGroup}
                className="mt-1 w-full justify-center px-6! py-4! text-sm!"
              >
                Join the Inner Circle
              </ShinyButton>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
