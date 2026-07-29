import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import StatsCard from "../ui/StatsCard";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <Section id="stats">
      <SectionTitle
        title="Our Track"
        highlight="Record"
        subtitle="The Numbers Behind Our Success"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((item) => (
          <StatsCard
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </Section>
  );
}