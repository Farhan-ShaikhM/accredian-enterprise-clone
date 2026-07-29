"use client";

import Marquee from "react-fast-marquee";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import LogoCard from "../ui/LogoCard";

import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <Section id="clients" className="bg-[#f8fbff]">
      <SectionTitle
        title="Trusted"
        highlight="Clients"
        subtitle="Organizations that trust our enterprise learning solutions"
      />

      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover
      >
        {clients.map((client) => (
          <LogoCard
            key={client.name}
            {...client}
          />
        ))}
      </Marquee>
    </Section>
  );
}