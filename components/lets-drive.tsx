"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import Reveal from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import AccordionItem from "@/components/ui/accordion-item";
import TiltCard from "@/components/ui/tilt-card";

const ACCORDION_ITEMS = [
  {
    title: "Enquire & Check Availability",
    body: "Message or call us with your preferred dates and group size, and we'll confirm availability at Lotus Castle right away.",
  },
  {
    title: "Choose Your Package",
    body: "Pick a full-day visit, an overnight stay, or a custom event package — we'll tailor it to your celebration.",
  },
  {
    title: "Confirm & Pay",
    body: "Once confirmed, we share simple payment details to lock in your booking. No hidden fees, no fuss.",
  },
  {
    title: "Arrive & Enjoy",
    body: "Arrive and relax — the pool, bonfire, kitchen, and games are all ready for you and your group from the moment you walk in.",
  },
];

export default function LetsDrive() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageCardRef.current) return;
      gsap.fromTo(
        imageCardRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageCardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnquire = () => {
    window.open(
      "https://wa.me/919160037604?text=" +
        encodeURIComponent("Hi! I'd like to check availability at Lotus Castle."),
      "_blank"
    );
  };

  const handlePlayVideo = () => {
    setModalOpen(true);
  };

  return (
    <section ref={sectionRef} id="lets-drive" className="mx-auto max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
      <div className="relative overflow-hidden rounded-4xl border border-border-subtle bg-gradient-to-b from-[#FAFDF6] to-white py-8 md:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-green/20 blur-[100px]"
        />

        <div className="relative mb-10 flex items-end justify-between px-6 md:mb-12 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-[1.05] md:text-4xl lg:text-5xl">
              Let&apos;s plan your getaway
            </h2>
          </Reveal>
          <MagneticButton
            onClick={handleEnquire}
            className="hidden shrink-0 bg-accent-green px-5 py-2.5 text-xs font-semibold text-text-primary md:inline-flex md:px-6 md:py-3 md:text-sm"
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
        </div>

        <div className="relative grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-10">
          <div ref={imageCardRef}>
            <TiltCard className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:rounded-[2rem]">
              <Image
                src="/lotus-images/lotus-aerial-dusk.jpg"
                alt="Aerial view of Lotus Castle farmhouse at dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur md:left-5 md:top-5 md:px-4 md:py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                Farmhouse
              </div>

              <button
                onClick={handlePlayVideo}
                aria-label="Play video"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110 md:right-5 md:top-5 md:h-12 md:w-12"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-white/60 [animation-duration:2s]" />
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="relative">
                  <path d="M5 3L13 8L5 13V3Z" fill="#0B0F0D" />
                </svg>
              </button>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 pt-16 md:p-6 md:pt-24">
                <p className="font-display text-sm font-bold text-white md:text-base">
                  Step 01 of 4
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/85 md:text-sm">
                  Message or call us with your preferred dates and group
                  size, and we&apos;ll confirm availability at Lotus Castle
                  right away.
                </p>
              </div>
            </TiltCard>
          </div>

          <div>
            <div className="flex flex-col">
              {ACCORDION_ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  index={i}
                  isOpen={openIndex === i}
                  isLast={i === ACCORDION_ITEMS.length - 1}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
            <MagneticButton
              onClick={handleEnquire}
              className="mt-6 w-full justify-center bg-accent-green px-6 py-3 text-sm font-semibold text-text-primary md:hidden"
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
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-black md:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90"
              aria-label="Close video"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2L12 12M2 12L12 2"
                  stroke="#0B0F0D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-green">
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                  <path d="M5 3L13 8L5 13V3Z" fill="#0B0F0D" />
                </svg>
              </div>
              <p className="text-center text-sm text-white/70">
                A video tour of Lotus Castle is coming soon.
                <br />
                <span className="text-accent-green">Stay tuned!</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
