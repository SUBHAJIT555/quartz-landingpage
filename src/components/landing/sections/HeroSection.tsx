"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import { ShinyButton } from "@/components/ui/shiny-button";
import Image from "next/image";
const PriyaSharmaImage = "/Testimonials/PriyaSharma.webp";
const ArjunMehtaImage = "/Testimonials/ArjunMehta.webp";
const NehaVermaImage = "/Testimonials/NehaVerma.webp";
const RahulIyerImage = "/Testimonials/RahulIyer.webp";
const AnanyaPatelImage = "/Testimonials/AnanyaPatel.webp";

export function HeroSection() {
  const TELEGRAM_GROUP_URL = "https://t.me/Quartzfinancial";

  const memberAvatars = [
    { src: PriyaSharmaImage, alt: "Priya Sharma" },
    { src: ArjunMehtaImage, alt: "Arjun Mehta" },
    { src: NehaVermaImage, alt: "Neha Verma" },
    { src: RahulIyerImage, alt: "Rahul Iyer" },
    { src: AnanyaPatelImage, alt: "Ananya Patel" },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsHideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasSoundStarted, setHasSoundStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

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

  const handleVideoClick = () => {
    if (!hasSoundStarted) {
      void togglePlayback();
    }
  };

  const handleTimelineChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const clearHideControlsTimer = useCallback(() => {
    if (controlsHideTimeoutRef.current) {
      clearTimeout(controlsHideTimeoutRef.current);
      controlsHideTimeoutRef.current = null;
    }
  }, []);

  const scheduleControlsHide = useCallback(() => {
    clearHideControlsTimer();
    controlsHideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  }, [clearHideControlsTimer]);

  const revealControlsTemporarily = () => {
    if (!hasSoundStarted) return;
    setShowControls(true);
    if (isPlaying) {
      scheduleControlsHide();
    } else {
      clearHideControlsTimer();
    }
  };

  useEffect(() => {
    if (!hasSoundStarted) {
      clearHideControlsTimer();
      return;
    }

    if (isPlaying) {
      scheduleControlsHide();
    } else {
      clearHideControlsTimer();
    }

    return () => {
      clearHideControlsTimer();
    };
  }, [clearHideControlsTimer, hasSoundStarted, isPlaying, scheduleControlsHide]);

  const areControlsVisible = !isPlaying || showControls;

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const openTelegramGroup = () => {
    window.open(TELEGRAM_GROUP_URL, "_blank", "noopener,noreferrer");
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
            "linear-gradient(to right, rgba(231, 229, 228, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(231, 229, 228, 0.3) 1px, transparent 1px)",
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
              <p className="text-xs font-extrabold! uppercase tracking-[0.24em] sm:text-sm">
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
              <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-zinc-900 sm:text-base md:text-lg">
                Real-time intelligence from geopolitics, macro data, and
                technical signals delivered daily.
              </p>
            </div>
          }
        >
          <div
            className="group relative h-full w-full"
            onMouseMove={revealControlsTemporarily}
            onMouseEnter={revealControlsTemporarily}
            onTouchStart={revealControlsTemporarily}
          >
            <video
              ref={videoRef}
              className="h-full w-full rounded-2xl bg-black object-contain md:object-cover object-center"
              autoPlay
              muted={!hasSoundStarted}
              loop={!hasSoundStarted}
              controls={hasSoundStarted}
              playsInline
              preload="metadata"
              poster="/logo/quartz_dark_logo.webp"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                setCurrentTime(video.currentTime);
                if (!duration && Number.isFinite(video.duration) && video.duration > 0) {
                  setDuration(video.duration);
                }
              }}
              onLoadedMetadata={(event) => {
                const loadedDuration = event.currentTarget.duration;
                setDuration(
                  Number.isFinite(loadedDuration) && loadedDuration > 0
                    ? loadedDuration
                    : 0
                );
              }}
              onDurationChange={(event) => {
                const updatedDuration = event.currentTarget.duration;
                setDuration(
                  Number.isFinite(updatedDuration) && updatedDuration > 0
                    ? updatedDuration
                    : 0
                );
              }}
              onEnded={() => setIsPlaying(false)}
              onClick={handleVideoClick}
            >
              <source
                src="/quartz_hero.webm"
                type="video/webm"
              />
            </video>

            {(!hasSoundStarted || !isPlaying) && (
              <button
                type="button"
                onClick={togglePlayback}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 bg-black/75 text-white shadow-xl backdrop-blur transition hover:scale-105 cursor-pointer"
                aria-label={!hasSoundStarted ? "Play video with sound" : "Play video"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-10 w-10"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
                </svg>
              </button>
            )}

            {hasSoundStarted && (
              <div
                className={`absolute inset-x-4 bottom-4 rounded-xl bg-black/70 p-3 text-white backdrop-blur transition-opacity duration-200 ${areControlsVisible ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                onMouseMove={revealControlsTemporarily}
                onTouchStart={revealControlsTemporarily}
              >
                <input
                  type="range"
                  min={0}
                  max={duration > 0 ? duration : 1}
                  step={0.1}
                  value={duration > 0 ? Math.min(currentTime, duration) : 0}
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
                  {memberAvatars.map((avatar, index) => (
                    <Image
                      key={`member-avatar-${index}`}
                      width={40}
                      height={40}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="inline-block h-10 w-10 rounded-full border-2 border-zinc-300 object-cover sm:h-11 sm:w-11"
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
                    href="https://www.consult.qf-advisory.com/"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-900 cursor-pointer"
                  >
                    Quartz insights
                  </a>
                </p>
              </div>

              <ShinyButton onClick={openTelegramGroup}>
                Join the Inner Circle
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
