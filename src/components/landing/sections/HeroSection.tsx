"use client";

import { useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import { ShinyButton } from "@/components/ui/shiny-button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasSoundStarted, setHasSoundStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const safePlay = async (video: HTMLVideoElement) => {
    try {
      await video.play();
      return true;
    } catch (error) {
      // This can happen if the element unmounts or play is interrupted.
      if (error instanceof DOMException && error.name === "AbortError") {
        return false;
      }
      return false;
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasSoundStarted) {
      video.currentTime = 0;
      video.muted = false;
      const didPlay = await safePlay(video);
      if (!didPlay) return;
      setHasSoundStarted(true);
      setIsPlaying(true);
      return;
    }

    if (video.paused) {
      const didPlay = await safePlay(video);
      if (!didPlay) return;
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimelineChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const openInquiryModal = () => {
    window.dispatchEvent(new Event("openInquiryModal"));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full scroll-mt-24 overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)",
          backgroundSize: "1px 1px",
          backgroundPosition: "0 0, 0 0",
          maskImage:
            "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="space-y-3 px-4 md:space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] sm:text-sm">
                <GradientText
                  colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                  animationSpeed={3}
                  showBorder={false}
                  direction="horizontal"
                  pauseOnHover={false}
                  yoyo
                  className="inline"
                >
                  Market Intelligence Community
                </GradientText>
              </p>
              <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-[3.6rem] md:leading-[1.05]">
                <ShinyText
                  text="Understanding how market moves has never been easier than this"
                  speed={2.2}
                  delay={0.5}
                  color="#111827"
                  shineColor="#64748b"
                  spread={130}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  className="inline"
                />
              </h1>
              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg">
                Real-time intelligence from geopolitics, macro data, and
                technical signals delivered daily.
              </p>
            </div>
          }
        >
          <div className="group relative h-full w-full">
            <video
              ref={videoRef}
              className="h-full w-full rounded-2xl object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=80"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={(event) => {
                setCurrentTime(event.currentTarget.currentTime);
              }}
              onLoadedMetadata={(event) => {
                setDuration(event.currentTarget.duration || 0);
              }}
              onClick={togglePlayback}
            >
              <source
                src="https://www.pexels.com/download/video/34630451/"
                type="video/mp4"
              />
            </video>

            {(!hasSoundStarted || !isPlaying) && (
              <button
                type="button"
                onClick={togglePlayback}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 bg-black/75 text-white shadow-xl backdrop-blur transition hover:scale-105 cursor-pointer"
                aria-label={!hasSoundStarted ? "Play video with sound" : "Play video"}
              >
                <span className="ml-1 text-3xl">▶</span>
              </button>
            )}

            {hasSoundStarted && (
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-black/70 p-3 text-white backdrop-blur">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={Math.min(currentTime, duration || 0)}
                  onChange={(event) =>
                    handleTimelineChange(Number(event.currentTarget.value))
                  }
                  className="h-1.5 w-full cursor-pointer accent-white"
                  aria-label="Video progress timeline"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span>{formatTime(currentTime)}</span>
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="rounded-md px-2 py-1 text-xs font-medium hover:bg-white/20"
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            )}
          </div>
        </ContainerScroll>

        <div className="relative z-30 mx-auto -mt-24 w-full max-w-4xl px-4 pb-10 md:-mt-28">
          <div className="">
            <div className="flex flex-col items-center gap-6 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <div className="-space-x-2">
                  {[
                    "https://i.pravatar.cc/80?img=12",
                    "https://i.pravatar.cc/80?img=32",
                    "https://i.pravatar.cc/80?img=45",
                    "https://i.pravatar.cc/80?img=52",
                  ].map((avatar) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt="Community member"
                      className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover sm:h-11 sm:w-11"
                      loading="lazy"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-700 md:text-xl">
                  <GradientText
                    colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                    animationSpeed={3}
                    direction="horizontal"
                    showBorder={false}
                    pauseOnHover={false}
                    yoyo
                    className="inline font-bold! text-xl"
                  >
                    1 Million+
                  </GradientText>{" "}
                  members building market clarity with{" "}
                  <a
                    href="https://www.qf-advisory.com/"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-900 cursor-pointer"
                  >
                    Quartz insights
                  </a>
                </p>
              </div>

              <ShinyButton onClick={openInquiryModal}>
                Join the Inner Circle
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
