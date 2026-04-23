"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "The daily macro breakdowns gave me clear direction before London open. My execution quality improved within weeks.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "FX Trader",
  },
  {
    text: "I used to react to headlines late. Now I understand the why behind moves and can position early with confidence.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Portfolio Analyst",
  },
  {
    text: "The Sunday wrap alone is worth it. It saves hours and gives me a clear game plan for the coming week.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Swing Trader",
  },
  {
    text: "Signals are precise and easy to follow. Entry, SL, TP -no noise, just clear actionable levels.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "Intraday Trader",
  },
  {
    text: "The geopolitical notes helped me avoid high-risk windows and protect capital during volatile sessions.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Risk Manager",
  },
  {
    text: "Best part is the consistency. Every day I get the same high-quality framework to prepare and execute.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Market Researcher",
  },
  {
    text: "I finally understand how CPI and NFP flow into price action. This community made macro practical for me.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Commodity Trader",
  },
  {
    text: "From structure to sentiment, the confluence model is exactly what I needed to stop overtrading.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Technical Analyst",
  },
  {
    text: "The quality of insight feels institutional. It helped me upgrade from random setups to disciplined planning.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Independent Trader",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({
  testimonials: items,
  className,
  duration = 16,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="m-0 flex list-none flex-col gap-5 bg-transparent p-0 pb-5"
      >
        {new Array(2).fill(0).map((_, loopIndex) => (
          <div key={loopIndex} className="contents">
            {items.map((item, i) => (
              <motion.li
                key={`${loopIndex}-${i}-${item.name}`}
                aria-hidden={loopIndex === 1}
                className="w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_16px_35px_-30px_rgba(15,23,42,0.45)]"
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 360, damping: 24 },
                }}
              >
                <p className="text-sm leading-relaxed text-zinc-700">{item.text}</p>
                <footer className="mt-5 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={item.image}
                    alt={`Avatar of ${item.name}`}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-zinc-100"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <cite className="text-sm font-semibold not-italic leading-5 text-zinc-900">
                      {item.name}
                    </cite>
                    <span className="text-xs text-zinc-500">{item.role}</span>
                  </div>
                </footer>
              </motion.li>
            ))}
          </div>
        ))}
      </motion.ul>
    </div>
  );
}

export function WhatMembersSaySection() {
  return (
    <section id="what-members-say" className="scroll-mt-24 overflow-hidden bg-white py-24">
      <Container className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              What Members Say
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-zinc-600 md:text-lg">
              Real feedback from traders and analysts who use our daily
              intelligence to make faster, better-informed decisions.
            </p>
          </div>

          <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
