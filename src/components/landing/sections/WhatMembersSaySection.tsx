"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import type { StaticImageData } from "next/image";
import AditiKulkarniImage from "../../../../public/Testimonials/AditiKulkarni.webp";
import AnanyaPatelImage from "../../../../public/Testimonials/AnanyaPatel.webp";
import ArjunMehtaImage from "../../../../public/Testimonials/ArjunMehta.webp";
import KavyaReddyImage from "../../../../public/Testimonials/KavyaReddy.webp";
import NehaVermaImage from "../../../../public/Testimonials/NehaVerma.webp";
import PriyaSharmaImage from "../../../../public/Testimonials/PriyaSharma.webp";
import RahulIyerImage from "../../../../public/Testimonials/RahulIyer.webp";
import RohanDesaiImage from "../../../../public/Testimonials/RohanDesai.webp";
import SnehaNairImage from "../../../../public/Testimonials/SnehaNair.webp";
import VikramSinghImage from "../../../../public/Testimonials/VikramSingh.webp";

type Testimonial = {
  text: string;
  image: string | StaticImageData;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Your pre-market macro brief helped me stop trading random moves. I now enter with a clear plan and better risk control.",
    image: PriyaSharmaImage,
    name: "Priya Sharma",
    role: "Mumbai, India",
  },
  {
    text: "The event-day guidance around CPI and Fed updates is very practical. It helps me avoid emotional entries during volatility.",
    image: ArjunMehtaImage,
    name: "Arjun Mehta",
    role: "Delhi, India",
  },
  {
    text: "The weekly outlook saves me hours every Sunday. I can map key levels in advance and trade the week with more confidence.",
    image: NehaVermaImage,
    name: "Neha Verma",
    role: "Bengaluru, India",
  },
  {
    text: "I like that your levels are clear and not overcomplicated. Entry and risk zones are easy to follow even on busy workdays.",
    image: RahulIyerImage,
    name: "Rahul Iyer",
    role: "Chennai, India",
  },
  {
    text: "Your geopolitical notes were useful during high-volatility sessions. I reduced unnecessary trades and protected capital better.",
    image: AditiKulkarniImage,
    name: "Aditi Kulkarni",
    role: "Pune, India",
  },
  {
    text: "The best part is consistency. Daily updates are timely and structured, so my prep routine is now much more disciplined.",
    image: SnehaNairImage,
    name: "Sneha Nair",
    role: "Hyderabad, India",
  },
  {
    text: "I finally understand how macro data impacts price action. The explanations are simple, actionable, and easy to apply.",
    image: VikramSinghImage,
    name: "Vikram Singh",
    role: "Ahmedabad, India",
  },
  {
    text: "The framework combining structure and sentiment helped me cut overtrading. My setups are fewer now, but much higher quality.",
    image: KavyaReddyImage,
    name: "Kavya Reddy",
    role: "Kolkata, India",
  },
  {
    text: "The research quality feels professional and balanced. I moved from impulsive entries to planned execution in a few weeks.",
    image: RohanDesaiImage,
    name: "Rohan Desai",
    role: "Jaipur, India",
  },
  {
    text: "The alerts and market context are clear enough for beginners yet detailed enough for active traders. Great value overall.",
    image: AnanyaPatelImage,
    name: "Ananya Patel",
    role: "Surat, India",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 7);
const thirdColumn = testimonials.slice(7, 10);
const mobileColumn = testimonials.slice(0, 2);

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
                    src={typeof item.image === "string" ? item.image : item.image.src}
                    alt={`Avatar of ${item.name}`}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-zinc-100 ring-offset-2 shadow-sm border border-zinc-300"
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

          <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[420px] overflow-hidden md:max-h-[740px]">
            <TestimonialsColumn
              testimonials={mobileColumn}
              className="md:hidden"
              duration={15}
            />
            <TestimonialsColumn
              testimonials={firstColumn}
              className="hidden md:block"
              duration={15}
            />
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
