"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import GeopoliticalPulseImage from "../../../../public/track/GeopoliticalPulse.webp";
import EconomicDataDecodedImage from "../../../../public/track/EconomicDataDecoded.webp";
import MultiIndicatorAnalysisImage from "../../../../public/track/Multi-IndicatorAnalysis.webp";
import LiveMarketSignalsImage from "../../../../public/track/LiveMarketSignals.webp";
import TheWeeklyWrapImage from "../../../../public/track/TheWeeklyWrap.webp";

type TrackEntry = {
  icon: ReactNode;
  heading: string;
  paragraph: string;
  points: string[];
  image: string | StaticImageData;
};

const trackEntries: TrackEntry[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20.972 11.291a9 9 0 1 0 -8.322 9.686" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h8.9" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.018" />
        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
        <path d="M19 18v.01" />
      </svg>
    ),
    heading: "Geopolitical Pulse",
    paragraph:
      "Tracking sanctions, conflicts and policy shifts that move currencies before headlines catch up.",
    image: GeopoliticalPulseImage,
    points: [
      "Country-level policy updates with market impact context",
      "Risk-on / risk-off bias noted for major sessions",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
        <path d="M9 17l0 -5" />
        <path d="M12 17l0 -1" />
        <path d="M15 17l0 -3" />
      </svg>
    ),
    heading: "Economic Data Decoded",
    paragraph:
      "CPI, NFP, PMI -we break down what the numbers actually mean for your positions.",
    image: EconomicDataDecodedImage,
    points: [
      "Consensus vs actual surprise analysis",
      "Immediate implications for FX, indices, and commodities",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12h4l3 8l4 -16l3 8h4" />
      </svg>
    ),
    heading: "Multi-Indicator Analysis",
    paragraph:
      "Confluence-based setups using structure, momentum, volume and sentiment across timeframes.",
    image: MultiIndicatorAnalysisImage,
    points: [
      "Bias alignment from higher timeframes to execution charts",
      "Signal quality scores with invalidation context",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
        <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
        <path d="M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    ),
    heading: "Live Market Signals",
    paragraph:
      "Real-time alerts with clear entry, SL and TP levels -delivered directly to your device.",
    image: LiveMarketSignalsImage,
    points: [
      "Instant push-style updates during key sessions",
      "Clear risk framing before and after execution",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
        <path d="M16 3l0 4" />
        <path d="M8 3l0 4" />
        <path d="M4 11l16 0" />
        <path d="M8 15h2v2h-2l0 -2" />
      </svg>
    ),
    heading: "The Weekly Wrap",
    paragraph:
      "Every Sunday -a full debrief of the week's moves and a roadmap for the week ahead.",
    image: TheWeeklyWrapImage,
    points: [
      "Top winners, losers, and regime shifts summarized",
      "Macro calendar priorities for the next week",
    ],
  },
];

export function WhatWeTrackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight * 0.36;
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="what-we-track" className="scroll-mt-12 bg-white">
      <Container className="max-w-7xl">
        <div className="w-full md:hidden">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            What We Track
          </h2>
          <p className="mt-3 text-base leading-relaxed font-medium text-zinc-600">
            Five pillars of intelligence delivered daily to our community.
          </p>

          <div className="mt-8 space-y-4">
            {trackEntries.map((entry) => (
              <article
                key={entry.heading}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={typeof entry.image === "string" ? entry.image : entry.image.src}
                    alt={`${entry.heading} visual`}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 border border-zinc-300 ring ring-zinc-200 ring-offset-2 shadow-md text-base">
                    {entry.icon}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    <ShinyText text={entry.heading} speed={3} />
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-800 font-semibold">
                  {entry.paragraph}
                </p>
                <div className="h-px w-full bg-zinc-200 my-2"></div>
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium text-zinc-600">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded bg-emerald-500 animate-pulse" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              What We Track
            </h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-600">
              Five pillars of intelligence delivered daily to our community.
            </p>
          </div>

          <div className="mt-16 w-full max-w-7xl space-y-16 md:mt-20 md:space-y-24">
            {trackEntries.map((entry, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={entry.heading}
                  className="relative flex flex-col gap-5 md:flex-row md:gap-20"
                  aria-current={isActive ? "true" : "false"}
                >
                  <div className="top-20 flex h-min w-72 shrink-0 items-start gap-3 md:sticky">
                    <span
                      className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-zinc-200 ring-offset-2 text-base ${
                        isActive ? "bg-zinc-100 border border-zinc-200 text-white shadow-xl" : "bg-zinc-100 text-zinc-700 "
                      }`}
                    >
                      {entry.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-zinc-900">
                        {entry.heading}
                      </span>
                      <span className="text-sm text-zinc-500">
                        Pillar {index + 1} of {trackEntries.length}
                      </span>
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      sentinelRefs.current[index] = el;
                    }}
                    aria-hidden
                    className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                  />

                  <article
                    className={`flex flex-col rounded-2xl border p-4 transition-all duration-300 md:p-5 ${
                      isActive
                        ? "border-zinc-300 bg-zinc-50 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-6 md:shadow-xl"
                        : "border-zinc-200 bg-white  ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-6 shadow-xl"
                    } w-full max-w-4xl`}
                  >
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <img
                        src={typeof entry.image === "string" ? entry.image : entry.image.src}
                        alt={`${entry.heading} visual`}
                        className={`w-full object-cover transition-all duration-300 ${
                          isActive ? "h-56 md:h-64" : "h-44 md:h-48"
                        }`}
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3
                        className={`text-xl font-semibold leading-tight transition-colors md:text-3xl ${
                          isActive ? "text-zinc-900" : "text-zinc-800"
                        }`}
                      >
                        {entry.heading}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed transition-all md:text-lg font-medium ${
                          isActive
                            ? "text-zinc-700 line-clamp-none"
                            : "text-zinc-600 line-clamp-2"
                        }`}
                      >
                        {entry.paragraph}
                      </p>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="rounded-xl border border-zinc-200 bg-white p-4">
                          <ul className="space-y-2">
                            {entry.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-sm md:text-base font-medium text-zinc-600"
                              >
                                <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm bg-emerald-500" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
