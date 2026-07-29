"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Presentation,
  MonitorPlay,
} from "lucide-react";

const iconMap = {
  chart: BarChart3,
  presentation: Presentation,
  monitor: MonitorPlay,
};

interface Props {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export default function StepCard({
  id,
  title,
  description,
  icon,
}: Props) {

  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        relative
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-8
        shadow-md
        hover:shadow-xl
      "
    >
      {/* Step Number */}

      <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
        {id}
      </div>

      {/* Icon */}

      <div className="mt-6 mb-6 inline-flex rounded-2xl bg-blue-50 p-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}