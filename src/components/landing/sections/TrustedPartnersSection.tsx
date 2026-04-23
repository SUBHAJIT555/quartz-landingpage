"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import GradientText from "@/components/ui/GradientText";
import { FallingPattern } from "@/components/ui/falling-pattern";
import Shuffle from "@/components/ui/Shuffle";

export function TrustedPartnersSection() {
  return (
    <section id="partners" className="scroll-mt-24 bg-white ">
      <Container className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-zinc-50/70 p-3 md:p-6"
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-6">
              <div className="group rounded-2xl border border-zinc-200 bg-white p-4 sm:p-7">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                  <GradientText
                    colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                    animationSpeed={3}
                    direction="horizontal"
                    showBorder={false}
                    pauseOnHover={false}
                    yoyo
                    className="inline"
                  >
                    Trusted Partners
                  </GradientText>
                </p>
                <div className="mt-3">
                  <Shuffle
                    text="Backed by Regulated Institutions"
                    tag="h2"
                    className="text-left text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
                    textAlign="left"
                    shuffleDirection="right"
                    duration={0.35}
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
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-900 font-medium sm:text-base">
                  Our insights are supported by partnerships with firms licensed
                  under UAE&apos;s highest regulatory standard SCA Category 1, so
                  you&apos;re learning from sources that operate at the highest
                  level of credibility.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.14em] text-zinc-500">
                    <GradientText
                      colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                      animationSpeed={3}
                      direction="horizontal"
                      showBorder={false}
                      pauseOnHover={false}
                      yoyo
                      className="inline"
                    >
                      Standard
                    </GradientText>
                  </p>
                  <div className="mt-2">
                    <Shuffle
                      text="SCA Cat 1"
                      tag="h3"
                      className="text-left text-2xl font-bold text-zinc-900"
                      textAlign="left"
                      shuffleDirection="right"
                      duration={0.35}
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
                  </div>
                  <p className="mt-2 text-sm text-zinc-900 font-medium">
                    UAE&apos;s highest regulatory benchmark.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.14em] text-zinc-500">
                    <GradientText
                      colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                      animationSpeed={3}
                      direction="horizontal"
                      showBorder={false}
                      pauseOnHover={false}
                      yoyo
                      className="inline"
                    >
                      Trust Layer
                    </GradientText>
                  </p>
                  <div className="mt-2">
                    <Shuffle
                      text="Institutional"
                      tag="h3"
                      className="text-left text-2xl font-bold text-zinc-900"
                      textAlign="left"
                      shuffleDirection="right"
                      duration={0.35}
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
                  </div>
                  <p className="mt-2 text-sm text-zinc-900 font-medium">
                    Insight flow shaped by regulated partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 lg:col-span-6 md:p-7">
              <FallingPattern
                className="pointer-events-none absolute inset-0 z-0 p-0"
                color="rgba(15,23,42,0.32)"
                backgroundColor="rgba(255,255,255,0.82)"
                duration={180}
                blurIntensity="0.9em"
                density={1}
              />
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-zinc-900/10 blur-2xl" />
              <div className="relative z-10 flex h-full min-h-80 flex-col justify-between">
                <p className="max-w-xs text-sm font-medium text-zinc-900">
                  Learn from sources operating at the highest level of
                  credibility and compliance.
                </p>
                <div>
                  <p className="text-[0.72rem] md:text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
                    <GradientText
                      colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                      animationSpeed={3}
                      direction="horizontal"
                      showBorder={false}
                      pauseOnHover={false}
                      yoyo
                      className="inline"
                    >
                      Regulatory Confidence
                    </GradientText>
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <Shuffle
                      text="100%"
                      tag="h3"
                      className="text-left text-4xl font-bold tracking-tight text-zinc-900"
                      textAlign="left"
                      shuffleDirection="right"
                      duration={0.35}
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
                    <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs md:text-sm font-semibold text-emerald-700 ring ring-emerald-200 ring-offset-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">
                    Built around institutional-grade standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
