"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <Section id="testimonials">
      <SectionTitle
        title="What Our"
        highlight="Clients Say"
        subtitle="Trusted by organizations across industries."
      />

      <div className="relative mt-16">

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 -translate-x-5 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-blue-600 hover:text-white"
        >
          <ChevronLeft />
        </button>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 translate-x-5 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-blue-600 hover:text-white"
        >
          <ChevronRight />
        </button>
      </div>
    </Section>
  );
}