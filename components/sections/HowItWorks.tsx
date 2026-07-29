import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import StepCard from "../ui/StepCard";

import { steps } from "@/data/howItWorks";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-[#f8fbff]"
    >
      <SectionTitle
        title="How We Deliver"
        highlight="Results"
        subtitle="A structured three-step approach to enterprise learning."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {steps.map((step) => (
          <StepCard
            key={step.id}
            {...step}
          />
        ))}
      </div>
    </Section>
  );
}