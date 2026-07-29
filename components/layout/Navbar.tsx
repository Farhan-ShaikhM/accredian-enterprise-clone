"use client";

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../ui/Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
    const [active, setActive] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [active]);

    useEffect(() => {
        const sections = navigation
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        sections.forEach((section) => observer.observe(section!));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <Container className="flex h-20 items-center justify-between">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-blue-600">
                    accredian
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`group relative pb-2 font-medium transition-colors duration-300 ${active === item.id
                                ? "text-blue-600"
                                : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {item.name}

                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${active === item.id
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </a>
                    ))}
                </nav>
                {/* Mobile Menu Button */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </Container>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="border-t bg-white shadow-md md:hidden"
                    >
                        <nav className="flex flex-col py-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-6 py-4 text-base font-medium transition ${active === item.id
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}