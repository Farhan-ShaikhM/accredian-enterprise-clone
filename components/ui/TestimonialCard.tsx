"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface Props {
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    review: string;
}

export default function TestimonialCard({
    name,
    role,
    company,
    image,
    rating,
    review,
}: Props) {
    return (
        <motion.div whileHover={{ y: -8, scale: 1.02, }} transition={{ duration: 0.25, }} className=" h-full rounded-3xl border border-slate-100 bg-white p-10 shadow-lg transition-all hover:shadow-2xl " >
            <div className="flex gap-1 mb-6">
                <Quote className="mb-4 h-8 w-8 text-blue-100" />
                {[...Array(rating)].map((_, i) => (

                    <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            <p className="leading-7 text-gray-600 italic">
                "{review}"
            </p>

            <div className="mt-8 flex items-center gap-4">
                <Image
                    src={image}
                    alt={name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-50"
                />

                <div>
                    <h4 className="font-semibold">
                        {name}
                    </h4>

                    <p className="text-sm text-gray-500">
                        {role}
                    </p>

                    <p className="text-sm text-blue-600">
                        {company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}