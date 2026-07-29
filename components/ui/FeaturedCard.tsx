"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Sparkles,
  Globe,
  Package,
  GraduationCap,
  Rocket,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon:
    | "lightbulb"
    | "sparkles"
    | "globe"
    | "package"
    | "graduationCap"
    | "rocket";
}

const iconMap = {
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  globe: Globe,
  package: Package,
  graduationCap: GraduationCap,
  rocket: Rocket,
};

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02, }} transition={{ duration: 0.25, }} className=" group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-2xl transition-all " >
      <div className=" mb-6 inline-flex rounded-2xl bg-blue-50 p-4 transition-all group-hover:bg-blue-600 "> 
        <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
      </div>

      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}