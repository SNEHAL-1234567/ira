"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const delay = setTimeout(() => setVisible(false), prefersReducedMotion ? 0 : 1600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-dark"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-2xl font-bold tracking-tight text-white"
            >
              Lotus Castle
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
