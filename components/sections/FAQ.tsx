"use client";

import { useState } from "react";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import FAQItem from "../ui/FAQItem";

import {
  faqCategories,
  faqs,
} from "@/data/faq";

export default function FAQ() {
  const [active, setActive] = useState("General");

  return (
    <Section id="faq">
      <SectionTitle
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Everything you need to know."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-4">

        {/* Categories */}

        <div className="space-y-3">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`w-full rounded-xl px-5 py-3 text-left transition ${
                active === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Questions */}

        <div className="space-y-5 lg:col-span-3">
          {faqs
            .filter((faq) => faq.category === active)
            .map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
      </div>
    </Section>
  );
}