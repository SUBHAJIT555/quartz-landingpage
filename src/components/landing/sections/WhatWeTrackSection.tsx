"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";

type TrackEntry = {
  icon: string;
  heading: string;
  paragraph: string;
  points: string[];
  image: string;
};

const trackEntries: TrackEntry[] = [
  {
    icon: "🌍",
    heading: "Geopolitical Pulse",
    paragraph:
      "Tracking sanctions, conflicts and policy shifts that move currencies before headlines catch up.",
    image:
      "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Country-level policy updates with market impact context",
      "Risk-on / risk-off bias noted for major sessions",
    ],
  },
  {
    icon: "📈",
    heading: "Economic Data Decoded",
    paragraph:
      "CPI, NFP, PMI — we break down what the numbers actually mean for your positions.",
    image:
      "https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Consensus vs actual surprise analysis",
      "Immediate implications for FX, indices, and commodities",
    ],
  },
  {
    icon: "🧠",
    heading: "Multi-Indicator Analysis",
    paragraph:
      "Confluence-based setups using structure, momentum, volume and sentiment across timeframes.",
    image:
      "https://images.pexels.com/photos/7567534/pexels-photo-7567534.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Bias alignment from higher timeframes to execution charts",
      "Signal quality scores with invalidation context",
    ],
  },
  {
    icon: "⚡",
    heading: "Live Market Signals",
    paragraph:
      "Real-time alerts with clear entry, SL and TP levels — delivered directly to your device.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1400",
    points: [
      "Instant push-style updates during key sessions",
      "Clear risk framing before and after execution",
    ],
  },
  {
    icon: "🗓️",
    heading: "The Weekly Wrap",
    paragraph:
      "Every Sunday — a full debrief of the week's moves and a roadmap for the week ahead.",
    image:
      "https://images.pexels.com/photos/7654125/pexels-photo-7654125.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
    <section id="what" className="scroll-mt-24 bg-white">
      <Container className="max-w-7xl">
        <div className="w-full md:hidden">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            What We Track
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
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
                    src={entry.image}
                    alt={`${entry.heading} visual`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-base">
                    {entry.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900">{entry.heading}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {entry.paragraph}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="text-xs text-zinc-600">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              What We Track
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
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
                        src={entry.image}
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
