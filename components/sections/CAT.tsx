import CATCard from "../ui/CATCard";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { catSteps } from "@/data/cat";

export default function CAT() {
  return (
    <Section
      id="cat"
      className="bg-[#f8fbff]"
    >
      <SectionTitle
        title="The CAT"
        highlight="Framework"
        subtitle="Our Proven Approach to Learning Excellence"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {catSteps.map((step) => (
          <div
            key={step.id}
            className="relative"
          >
            <CATCard {...step} />

            {step.id !== catSteps.length && (
              <div
                className="
                  hidden
                  lg:flex
                  absolute
                  top-1/2
                  -right-10
                  w-20
                  items-center
                  justify-center
                "
              >
                <div className="h-1 w-full rounded-full bg-blue-200" />

                <div className="-ml-2 h-3 w-3 rounded-full bg-blue-600" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}