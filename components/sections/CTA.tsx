"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Section from "../ui/Section";
import { cta } from "@/data/cta";

export default function CTA() {
  return (
    <Section id="cta">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-blue-700
          via-blue-600
          to-indigo-700
          px-8
          py-20
          text-center
          text-white
          shadow-2xl
        "
      >
        {/* Decorative Blobs */}

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            {cta.title}
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={cta.primaryButton.href}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-blue-700
                transition
                hover:scale-105
              "
            >
              {cta.primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href={cta.secondaryButton.href}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/30
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              {cta.secondaryButton.text}
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}