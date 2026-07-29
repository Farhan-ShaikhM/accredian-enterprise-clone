import FeatureCard from "../ui/FeaturedCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { edgeFeatures } from "@/data/edge";

export default function AccredianEdge() {
  return (
    <Section
      id="edge"
      className="bg-gradient-to-b from-white to-[#f8fbff]"
    >
      <SectionTitle
        title="The Accredian"
        highlight="Edge"
        subtitle="Why enterprises choose our learning solutions"
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {edgeFeatures.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
}