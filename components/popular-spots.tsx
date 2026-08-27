"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import Reveal from "@/components/ui/reveal";
import TiltCard from "@/components/ui/tilt-card";
import MagneticButton from "@/components/ui/magnetic-button";
import { useToast } from "@/components/ui/toast";

const SPOTS = [
  {
    key: "pool",
    image: "/lotus-images/lotus-pool-dusk-2.jpg",
    tag: "Featured",
    title: "Poolside Deck",
    location: "Moinabad, Hyderabad",
    duration: "Full Day",
    price: null,
    showPrice: false,
    span: "md:col-span-2 md:row-span-2" as const,
    emoji: "🏊",
  },
  {
    key: "bonfire",
    image: "/lotus-images/lotus-pool-dusk-1.jpg",
    tag: "Evenings",
    title: "Bonfire Lounge",
    location: "Moinabad, Hyderabad",
    duration: null,
    price: null,
    showPrice: false,
    span: "md:col-start-3 md:row-start-1" as const,
    emoji: "🔥",
  },
  {
    key: "garden",
    image: "/lotus-images/lotus-exterior-day.jpg",
    tag: "Farmhouse",
    title: "Garden & Exterior",
    location: "Moinabad, Hyderabad",
    duration: null,
    price: null,
    showPrice: false,
    span: "md:col-start-3 md:row-start-2" as const,
    emoji: "🌿",
  },
];

function ArrowButton({ tone }: { tone: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
        isDark
          ? "bg-white text-text-primary"
          : "bg-accent-green text-text-primary"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M1 7H13M13 7L8 2M13 7L8 12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PopularSpots() {
  const { showToast } = useToast();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const handleBookTrip = (spot: (typeof SPOTS)[0]) => {
    window.open(
      "https://wa.me/919160037604?text=" +
        encodeURIComponent(`Hi! I'd like to ask about the ${spot.title} at Lotus Castle.`),
      "_blank"
    );
  };

  const handleSpotClick = (spot: (typeof SPOTS)[0]) => {
    showToast(`${spot.title} at Lotus Castle, ${spot.location}`, "info", spot.emoji);
  };

  return (
    <section id="popular-spots" className="relative mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-14 md:flex-row md:items-end">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green/80" style={{ color: "#7FBF00" }}>
            Spaces You&apos;ll Love
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-[1.05] md:text-4xl lg:text-5xl">
            Featured Spaces
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
            The corners of Lotus Castle our guests love most — from sunset
            swims to fireside evenings.
          </p>
        </Reveal>

        <MagneticButton
          onClick={() =>
            showToast("Browse more photos of Lotus Castle below…", "info", "🗺️")
          }
          className="shrink-0 border border-border-subtle px-5 py-2.5 text-xs font-semibold md:px-6 md:py-3 md:text-sm"
        >
          View Full Gallery
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7H13M13 7L8 2M13 7L8 12"
              stroke="#0B0F0D"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MagneticButton>
      </div>

      <div className="grid grid-cols-1 gap-5 md:h-[600px] md:grid-cols-3 md:grid-rows-2 md:gap-6">
        {SPOTS.map((spot, i) => {
          const isFeatured = spot.span.includes("row-span-2");
          return (
            <div
              key={spot.key}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`relative aspect-[4/5] cursor-pointer md:aspect-auto md:h-full ${spot.span}`}
              onClick={() => handleSpotClick(spot)}
            >
              <TiltCard
                max={5}
                className="group relative h-full w-full overflow-hidden rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-floating"
              >
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  sizes={
                    isFeatured
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Base gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

                {/* Top row: tag */}
                <div className="absolute inset-x-3 top-3 flex items-center justify-between md:inset-x-4 md:top-4">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-text-primary shadow-sm md:text-xs">
                    {spot.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 md:p-6 ${
                    isFeatured ? "md:gap-3 md:p-7" : ""
                  }`}
                >
                  <h3
                    className={`font-display font-bold text-white ${
                      isFeatured ? "text-2xl md:text-3xl" : "text-base md:text-lg"
                    }`}
                  >
                    {spot.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/80 md:text-sm">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      {spot.location}
                    </span>
                    {spot.duration && (
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        {spot.duration}
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex items-center justify-between md:mt-2">
                    {spot.showPrice ? (
                      <p className="font-display text-lg font-bold text-white md:text-xl">
                        {spot.price}
                        <span className="text-xs font-normal text-white/70 md:text-sm">
                          /session
                        </span>
                      </p>
                    ) : (
                      <span className="text-xs font-medium text-white/70 md:text-sm">
                        Inquire for pricing
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookTrip(spot);
                      }}
                      aria-label={spot.showPrice ? `Book ${spot.title}` : `Inquire about ${spot.title}`}
                    >
                      <ArrowButton tone={isFeatured ? "light" : "dark"} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
