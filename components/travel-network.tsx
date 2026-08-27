"use client";

import { WorldMap } from "@/components/ui/map";
import Reveal from "@/components/ui/reveal";

export default function TravelNetwork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium text-accent-green">
          Location
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
          Explore Around Lotus Castle
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
          Tucked away in Moinabad, Hyderabad, yet close to everything
          worth seeing — Lotus Castle is your base for the weekend.
        </p>
      </Reveal>

      <WorldMap
        lineColor="#B6FF3C"
        dots={[
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.3616, lng: 78.4747, label: "Hyderabad City", labelDir: "n" },
          },
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.3833, lng: 78.4011, label: "Golconda Fort", labelDir: "n" },
          },
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.2543, lng: 78.6808, label: "Ramoji Film City", labelDir: "s" },
          },
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.3833, lng: 78.2833, label: "Gandipet Lake", labelDir: "n" },
          },
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.2403, lng: 78.4294, label: "RGIA Airport", labelDir: "s" },
          },
          {
            start: { lat: 17.3400, lng: 78.2700, label: "Lotus Castle", labelDir: "w" },
            end: { lat: 17.3213, lng: 78.2965, label: "Chilkur Balaji Temple", labelDir: "e" },
          },
        ]}
      />
    </section>
  );
}
