"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroContent(): React.ReactElement {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Navbar (single source of truth) */}
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

            {/* Hero Content */}
            <div
                className="
                    relative z-10
                    min-h-screen
                    flex flex-col
                    items-center
                    
                    text-center
                    px-6
                    pt-24 md:pt-32
                    text-white
                "
            >
                <span className="mb-3 text-xs sm:text-sm tracking-[0.4em] text-[#C7BEE6]">
                    KIET
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide leading-tight">
                    MODEL UNITED NATION 8.0
                </h1>

                <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] text-[#C7BEE6]">
                    DEBATE • DIPLOMACY • DEVELOPMENT
                </p>

                {/* Divider */}
                <div className="my-10 flex items-center gap-6">
                    <div className="h-px w-24 sm:w-32 bg-[#C7BEE6]/40" />
                    <span className="text-[#C7BEE6] text-xs sm:text-sm tracking-widest">
                        KIET MUN
                    </span>
                    <div className="h-px w-24 sm:w-32 bg-[#C7BEE6]/40" />
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C7BEE6]">
                    2026
                </h2>
            </div>

            {/* Bottom Building Image */}
            <Image
                src="/building.png"
                alt="KIET Building"
                width={600}
                height={400}
                priority
                className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    z-20
                    grayscale
                    pointer-events-none
                    w-[280px] sm:w-[420px] md:w-[600px]
                "
            />
        </section>
    );
}
