"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Props {
  value: number;
  suffix: string;
  label: string;
}

export default function StatsCard({
  value,
  suffix,
  label,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
      }}
      className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md"
    >
      <h3 className="text-5xl font-bold text-blue-600">
        {inView && (
          <CountUp
            end={value}
            duration={2}
            separator=","
          />
        )}
        {suffix}
      </h3>

      <p className="mt-4 text-gray-600">
        {label}
      </p>
    </motion.div>
  );
}