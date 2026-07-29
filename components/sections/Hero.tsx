"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section from "../ui/Section";
import Button from "../ui/Button";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <Section id="hero" className="pt-36 pb-5 bg-gradient-to-b from-[#F8FBFF] via-white to-white">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            {heroData.title.normal}

            <span className="text-blue-600">
              {" "}
              {heroData.title.highlight1}
            </span>

            <br />

            {heroData.title.normal2}

            <span className="text-blue-600">
              {" "}
              {heroData.title.highlight2}
            </span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">

            {heroData.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100"
                >
                  <Icon className="h-5 w-5 text-blue-600" />

                  {feature.text}
                </div>
              );
            })}
          </div>

          <Button className="mt-10 px-8 py-4">
            {heroData.button}
          </Button>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[280px] sm:h-[360px] lg:h-auto lg:aspect-[4/3] w-full overflow-hidden rounded-3xl">
  <Image
    src="/images/heros/hero.png"
    alt="Enterprise Learning"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-contain"
  />
</div>
        </motion.div>

      </div>

    </Section>
  );
}