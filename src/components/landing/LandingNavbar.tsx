"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ShinyButton } from "@/components/ui/shiny-button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Partners", href: "#partners" },
  { label: "What", href: "#what" },
  { label: "Member", href: "#member" },
  { label: "Why", href: "#why" },
];

export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openInquiryModal = () => {
    window.dispatchEvent(new Event("openInquiryModal"));
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
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <ShinyButton
            onClick={openInquiryModal}
            className="shiny-cta--compact"
          >
            Join the Inner Circle
          </ShinyButton>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden",
            open
              ? "border-zinc-900 bg-zinc-900 text-white"
              : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50",
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

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-3 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <ShinyButton
              onClick={openInquiryModal}
              className="mt-1 w-full justify-center shiny-cta--compact"
            >
              Join the Inner Circle
            </ShinyButton>
          </div>
        </div>
      )}
    </header>
  );
}
