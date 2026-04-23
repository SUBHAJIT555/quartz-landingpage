"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/cn";
import ShinyText from "@/components/ui/ShinyText";

const cards = [
  {
    title: "Geopolitical Alert",
    time: "08:14 AM",
    content:
      "🇺🇸🇨🇳 New tariff measures announced on semiconductor exports. USD/CNH likely to gap on Asia open. Watch 7.2850 resistance.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Global market monitoring dashboard",
  },
  {
    title: "Economic Data",
    time: "02:30 PM",
    content:
      "🇺🇸 CPI came in at 3.2% vs 3.4% expected. Core MoM 0.2%. Dovish repricing underway -DXY breaking below 104.20. Gold bid.",
    image:
      "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Economic charts and macro analysis",
  },
  {
    title: "Technical Setup",
    time: "09:45 AM",
    content:
      "EUR/USD -Daily OB tapped at 1.0720. H4 BOS confirmed. Waiting for LTF entry on London open. Targets: 1.0780 / 1.0830.",
    image:
      "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Technical chart analysis on trading screens",
  },
  {
    title: "Weekly Wrap",
    time: "Sunday",
    content:
      "Week in review: DXY -0.8%, Gold +2.1%, SPX flat. Key theme: dovish Fed pivot narrative gaining traction. Next week: FOMC minutes, EU GDP.",
    image:
      "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Weekly market review notes and dashboard",
  },
] as const;

const sharedGrid = {
  backgroundImage:
    "linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)",
  backgroundSize: "1px 1px",
  backgroundPosition: "0 0, 0 0",
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

const mobileGridStyle: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
};

const desktopImageRightStyle: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
};

const desktopImageLeftStyle: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
};

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
  stickyOffset?: number;
}

const StickyScrollContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
});
StickyScrollContainer.displayName = "StickyScrollContainer";

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 14,
      incrementZ = 10,
      stickyOffset = 112,
      children,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const y = stickyOffset + index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
CardSticky.displayName = "CardSticky";

export function InsideCommunitySection() {
  return (
    <section id="inside-community" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 md:py-20">
      <Container className="max-w-7xl px-0 sm:px-0 lg:px-0">
        <div className="w-full md:hidden">
          <h2 className="mb-3 text-3xl font-semibold text-zinc-900">
            Inside the Community
          </h2>
          <p className="mb-8 text-base leading-relaxed text-zinc-600">
            A glimpse into what our members receive every single day.
          </p>

          <div className="space-y-6">
            {cards.map((card, index) => (
              (() => {
                const isAccent = false;
                return (
                  <article
                    key={`${card.title}-${index}`}
                    className="relative grid gap-5 overflow-hidden rounded-3xl border border-zinc-300 bg-white p-4 ring-1 ring-zinc-200 ring-offset-2"
                  >
                    <div className="pointer-events-none absolute inset-0 z-0" style={mobileGridStyle} />
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="relative z-10 h-full min-h-[220px] w-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 flex h-full flex-col py-4 md:py-6">
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight">
                          <ShinyText
                            text={card.title}
                            speed={2.1}
                            delay={0.2}
                            color={isAccent ? "#ffffff" : "#111827"}
                            shineColor={isAccent ? "#fde68a" : "#64748b"}
                            spread={125}
                            direction="left"
                            className="inline"
                          />
                        </h3>
                        <span
                          className={cn(
                            "mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                            isAccent
                              ? "border border-white/35 bg-white/10 text-white"
                              : "border border-zinc-300 bg-white text-zinc-600",
                          )}
                        >
                          {card.time}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-6 text-base leading-relaxed",
                          isAccent ? "text-white/90" : "text-zinc-700",
                        )}
                      >
                        {card.content}
                      </p>
                    </div>
                  </article>
                );
              })()
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-zinc-900 md:text-5xl">
              Inside the Community
            </h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-600">
              A glimpse into what our members receive every single day.
            </p>
          </div>

          <StickyScrollContainer className="space-y-16 pb-40">
            {cards.map((card, index) => {
              const reverseLayout = index % 2 === 1;
              const isAccent = false;

              return (
                <CardSticky
                  key={card.title}
                  index={index}
                  incrementY={22}
                  incrementZ={10}
                  stickyOffset={128}
                >
                  <article
                    className="relative grid gap-6 overflow-hidden rounded-3xl border border-zinc-300 bg-white p-4 ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-6 shadow-lg md:grid-cols-2 md:p-7"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-0"
                      style={reverseLayout ? desktopImageLeftStyle : desktopImageRightStyle}
                    />
                    {reverseLayout ? (
                      <>
                        <div className="relative z-10 flex h-full flex-col py-4 md:py-6">
                          <div>
                            <h3 className="text-3xl font-semibold leading-tight md:text-5xl">
                              <ShinyText
                                text={card.title}
                                speed={2.1}
                                delay={0.2}
                                color={isAccent ? "#ffffff" : "#111827"}
                                shineColor={isAccent ? "#fde68a" : "#64748b"}
                                spread={125}
                                direction="left"
                                className="inline"
                              />
                            </h3>
                            <span
                              className={cn(
                                "mt-3 md:mt-6 inline-flex rounded-lg ring-1 ring-zinc-300 ring-offset-2 bg-white px-3 py-1 text-xs font-medium",
                                isAccent
                                  ? "border border-white/35 bg-white/10 text-white"
                                  : "border border-zinc-300 bg-white text-zinc-600",
                              )}
                            >
                              {card.time}
                            </span>
                          </div>
                          <p
                            className={cn(
                              "mt-6 text-base leading-relaxed md:mt-auto md:text-2xl",
                              isAccent ? "text-white/90" : "text-zinc-700",
                            )}
                          >
                            {card.content}
                          </p>
                        </div>
                        <div className="relative z-10 overflow-hidden rounded-xl">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="h-full min-h-[260px] w-full object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative z-10 overflow-hidden rounded-xl">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="h-full min-h-[260px] w-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex h-full flex-col py-4 md:py-6">
                          <div>
                            <h3 className="text-3xl font-semibold leading-tight md:text-5xl">
                              <ShinyText
                                text={card.title}
                                speed={2.1}
                                delay={0.2}
                                color={isAccent ? "#ffffff" : "#111827"}
                                shineColor={isAccent ? "#fde68a" : "#64748b"}
                                spread={125}
                                direction="left"
                                className="inline"
                              />
                            </h3>
                            <span
                              className={cn(
                                "mt-3 md:mt-6 inline-flex rounded-lg ring-1 ring-zinc-300 ring-offset-2 bg-white px-3 py-1 text-xs font-medium",
                                isAccent
                                  ? "border border-white/35 bg-white/10 text-white"
                                  : "border border-zinc-300 bg-white text-zinc-600",
                              )}
                            >
                              {card.time}
                            </span>
                          </div>
                          <p
                            className={cn(
                              "mt-6 text-base leading-relaxed md:mt-auto md:text-2xl",
                              isAccent ? "text-white/90" : "text-zinc-700",
                            )}
                          >
                            {card.content}
                          </p>
                        </div>
                      </>
                    )}
                  </article>
                </CardSticky>
              );
            })}
          </StickyScrollContainer>
        </div>
      </Container>
    </section>
  );
}
