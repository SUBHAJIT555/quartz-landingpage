"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { ShinyButton } from "@/components/ui/shiny-button";
import ShinyText from "@/components/ui/ShinyText";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "/Testimonials/PriyaSharma.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "/Testimonials/ArjunMehta.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "/Testimonials/NehaVerma.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "/Testimonials/RahulIyer.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "/Testimonials/AditiKulkarni.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "/Testimonials/SnehaNair.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "/Testimonials/VikramSingh.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "/Testimonials/KavyaReddy.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "/Testimonials/RohanDesai.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "/Testimonials/AnanyaPatel.webp",
    label: "Dubai",
  },
];

export default function Globe3DDemoThird() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-7xl overflow-hidden rounded-3xl border border-zinc-300 bg-white shadow-xl ring ring-zinc-200 ring-offset-4 ring-offset-white sm:h-[560px] md:h-[400px] md:ring-offset-6">
      <div className="relative z-10 p-4 sm:p-6 md:p-12">
        <h2 className="mb-4 max-w-[20rem] text-2xl font-extrabold tracking-tight text-balance text-neutral-900 sm:max-w-3xl md:max-w-4xl md:text-5xl lg:text-6xl">
          <ShinyText text="This Is Not For Everyone." disabled={false} speed={3} />
        </h2>
        <p className="mt-2 max-w-sm text-balance text-neutral-600 sm:max-w-lg md:mt-8 md:text-lg">
        We built Quartz for the focused few -traders and investors who want clarity, not clutter. If you're ready to see the market through a sharper lens, we're ready for you.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 md:mt-8 md:gap-4">
          <ShinyButton className="max-w-full whitespace-nowrap px-5! py-4! text-base! sm:px-10! sm:py-5! sm:text-lg!">
            Join Quartz Telegram Channel
          </ShinyButton>
          
        </div>

        <p className="mt-4 max-w-sm text-sm italic sm:max-w-2xl md:max-w-3xl">
          <ShinyText
            text="All content shared within the Quartz community is for educational and informational purposes only. It does not constitute financial advice. Always do your own research."
            speed={4}
            color="#6b7280"
            shineColor="#111827"
            spread={110}
          />
        </p>
      </div>
      {/* Globe container - sized and positioned just for the globe */}
      <div className="absolute -right-40 -bottom-56 z-10 size-108 sm:-right-52 sm:-bottom-72 sm:size-128 md:-right-72 md:-bottom-80 md:size-180">
        <Globe3D
          className="h-full w-full"
          markers={sampleMarkers}
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
          }}
          onMarkerClick={(marker) => {
            console.log("Clicked marker:", marker.label);
          }}
          onMarkerHover={(marker) => {
            if (marker) {
              console.log("Hovering:", marker.label);
            }
          }}
        />
      </div>
    </div>
  );
}
