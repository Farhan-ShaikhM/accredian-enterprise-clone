"use client";

import { motion } from "framer-motion";

import {
  BookOpen,
  Cpu,
  Wrench,
} from "lucide-react";

const icons = {
  book: BookOpen,
  cpu: Cpu,
  wrench: Wrench,
};

interface Props {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export default function CATCard({
  title,
  description,
  icon,
}: Props) {

  const Icon = icons[icon];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        relative
        rounded-3xl
        bg-white
        border
        border-slate-100
        p-8
        shadow-md
        hover:shadow-xl
      "
    >
      <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4">

        <Icon className="h-8 w-8 text-blue-600"/>

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