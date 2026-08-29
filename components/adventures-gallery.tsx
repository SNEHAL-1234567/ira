"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import Reveal from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import TiltCard from "@/components/ui/tilt-card";
import { useToast } from "@/components/ui/toast";

const BLOG_CARDS = [
  {
    image: "/ira-images/ira-pool-rain.jpg",
    title: "Poolside in the Rain",
    date: "Monsoon Magic",
    category: "Pool",
  },
  {
    image: "/ira-images/ira-thatched-hut.jpg",
    title: "The Thatched Cottage",
    date: "Farm Mornings",
    category: "Farmstay",
  },
  {
    image: "/ira-images/ira-decor-forever.jpg",
    title: "Moments You'll Hold Onto",
    date: "Forever",
    category: "Decor",
  },
];

const MOSAIC = [
  "/ira-images/ira-decor-finesse.jpg",
  "/ira-images/ira-aerial.jpg",
  "/ira-images/ira-capacity-400.jpg",
];

const FEATURED = {
  image: "/ira-images/ira-exterior-day.jpg",
  title: "Your Celebration Begins Here",
  date: "IRA Luxury Farmstay",
};

export default function AdventuresGallery() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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

  const handleBlogCard = (title: string) => {
    showToast(`Viewing: "${title}"`, "info", "📸");
  };

  const handleAllBlogs = () => {
    showToast("Loading more photos of IRA…", "info", "📸");
  };

  const handleStartTrip = () => {
    window.open(
      "https://wa.me/919347567338?text=" +
        encodeURIComponent("Hi! I'd like to check availability at IRA Luxury Farmstay."),
      "_blank"
    );
  };

  return (
    <section id="adventures" className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left block */}
        <div>
          <div className="mb-6 flex items-center justify-between md:mb-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                Glimpses of
                <br />
                IRA
              </h2>
            </Reveal>
            <MagneticButton
              onClick={handleAllBlogs}
              className="border border-border-subtle px-4 py-2 text-xs font-medium md:px-5 md:py-2.5 md:text-sm"
            >
              View Gallery
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

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {BLOG_CARDS.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
                onClick={() => handleBlogCard(card.title)}
              >
                <TiltCard className="group absolute inset-0 h-full w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 33vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2 md:p-4">
                    <p className="text-[10px] uppercase tracking-wide text-white/70 md:text-xs">
                      {card.date}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold leading-snug text-white md:mt-1 md:text-sm">
                      {card.title}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

          <TiltCard
            className="group relative mt-4 aspect-[21/9] overflow-hidden rounded-2xl md:mt-6 md:rounded-3xl cursor-pointer"
            onClick={() => handleBlogCard(FEATURED.title)}
          >
            <Image
              src={FEATURED.image}
              alt={FEATURED.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p className="text-xs uppercase tracking-wide text-white/70">
                {FEATURED.date}
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug text-white md:text-base">
                {FEATURED.title}
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Right block */}
        <div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <TiltCard className="group relative row-span-2 aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={MOSAIC[0]}
                alt="Wedding decor at IRA Luxury Farmstay"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </TiltCard>
            <TiltCard className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={MOSAIC[1]}
                alt="Aerial view of IRA Luxury Farmstay"
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </TiltCard>
            <TiltCard className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={MOSAIC[2]}
                alt="Event lawn at IRA Luxury Farmstay"
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </TiltCard>
          </div>

          <Reveal className="mt-6 md:mt-8">
            <p className="text-sm font-medium text-accent-green">Ready?</p>
            <h3 className="mt-2 font-display text-xl font-bold md:text-3xl">
              Book Your Celebration at IRA Today
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:mt-4">
              Grand lawns, thoughtful decor, and a peaceful farm setting —
              everything set up for your next celebration.
            </p>
            <MagneticButton
              onClick={handleStartTrip}
              className="mt-5 border border-text-primary px-6 py-3 text-sm font-semibold md:mt-6"
            >
              Enquire Now
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
