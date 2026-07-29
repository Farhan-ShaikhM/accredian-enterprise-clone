"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  logo: string;
  name: string;
}

export default function LogoCard({ logo, name }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="mx-8 flex h-28 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <Image
        src={logo}
        alt={name}
        width={140}
        height={70}
        className="h-12 w-auto object-contain"
      />
    </motion.div>
  );
}