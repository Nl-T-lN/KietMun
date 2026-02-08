"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function HeroContent(): React.ReactElement {
    const router = useRouter();

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Background Images */}
            <Image
                src="/test.svg"
                alt="Background Pattern"
                fill
                priority
                className="object-cover -z-20"
            />
            <Image
                src="/bg.jpeg"
                alt="Background Overlay"
                fill
                priority
                className="object-cover -z-30"
            />

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c2d]/60 via-transparent to-[#0d0c2d]/80 -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c2d]/30 to-transparent -z-10 pointer-events-none" />

            {/* Hero Content */}
            <div
                className="
                    relative z-10
                    min-h-screen
                    flex flex-col
                    items-center
                    text-center
                    px-6 sm:px-10
                    /* 1. Reduced Top Padding further to pull everything UP away from building */
                    pt-12 md:pt-16
                    text-white
                "
            >
                {/* KIET + Logo side by side */}
                <div className="flex flex-row items-center justify-center gap-3 sm:gap-5 md:gap-6 mb-[5px]">
                    
                    {/* 2. SIGNIFICANTLY REDUCED LOGO SIZE */ }
                    <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[150px] flex-shrink-0">
                        <Image
                            src="/log.png"
                            alt="KIET MUN Logo"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* 3. REDUCED KIET TEXT SIZE to match smaller logo */ }
                    <motion.span
                        {...({variants: fadeInUp,
                        initial: "hidden",
                        animate: "visible",
                        transition: { duration: 0.6, ease: "easeOut" }} as any)}
                        className="text-2xl sm:text-4xl md:text-5xl tracking-[0.3em] text-[#c7bee6] font-bold uppercase"
                    >
                        KIET
                    </motion.span>
                </div>

                {/* Title Container */}
                <div className="relative flex flex-row items-center justify-center">
                    {/* Main Title */}
                    <motion.h1
                        {...({variants: fadeInUp,
                        initial: "hidden",
                        animate: "visible",
                        transition: {
                            duration: 0.7,
                            delay: 0.2,
                            ease: "easeOut",
                        }} as any)}
                        /* Kept title large for impact, but it sits higher now due to changes above */
                        className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide leading-none text-white drop-shadow-lg"
                    >
                        MODEL UNITED NATIONS 8.0
                    </motion.h1>
                </div>

                {/* Static Tagline */}
                <motion.p
                    {...({variants: fadeIn,
                    initial: "hidden",
                    animate: "visible",
                    transition: { duration: 0.6, delay: 0.4 }} as any)}
                    className="mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] text-[#c7bee6]/80 font-medium"
                >
                    DEBATE &nbsp;•&nbsp; DIPLOMACY &nbsp;•&nbsp; DEVELOPMENT
                </motion.p>

                {/* Year */}
                <motion.h2
                    {...({variants: fadeInUp,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        duration: 0.6,
                        delay: 0.5,
                        ease: "easeOut",
                    }} as any)}
                    className="mt-3 sm:mt-4 text-5xl sm:text-6xl md:text-8xl font-bold text-[#c7bee6] leading-none drop-shadow-md"
                >
                    2026
                </motion.h2>
            </div>

            {/* Bottom Building Image */}
            <div
                className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    z-20
                    w-[95%] max-w-[1100px]
                    h-[220px]
                    sm:h-[280px]
                    md:h-[950px]
                    lg:h-[700px]
                    pointer-events-none
                "
            >
                <Image
                    src="/builld.png"
                    alt="KIET Building"
                    fill
                    priority
                    className="object-contain object-bottom"
                    style={{ filter: 'grayscale(100%) brightness(0.85) contrast(1.1)' }}
                />
            </div>

        </section>
    );
}