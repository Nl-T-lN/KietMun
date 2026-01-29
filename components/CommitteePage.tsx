"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const committees = [
    {
        name: "AIPPM",
        image: "/committees/aippm.png",
        position: "top-0 left-10",
    },
    {
        name: "UNCSW",
        image: "/committees/uncsw.png",
        position: "top-0 right-10",
    },
    {
        name: "UNHRC",
        image: "/committees/unhrc.png",
        position: "bottom-5 left-10",
    },
    {
        name: "UNGA-DISEC",
        image: "/committees/unga.png",
        position: "bottom-5 right-10",
    },
];

export default function CommitteesPage() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 py-20 relative overflow-x-hidden bg-white">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-5xl font-extrabold text-[#062045] mb-2 text-center"
            >
                Committees
            </motion.h2>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="text-sm sm:text-base text-gray-600 mb-12 text-center tracking-wide"
            >
                DEBATE. DIPLOMACY. DEVELOPMENT.
            </motion.p>

            {/* Committees Layout */}
            <div
                className="
          relative w-full max-w-5xl mx-auto
          flex flex-col lg:block items-center
          gap-12 lg:gap-0
          lg:h-[560px]
        "
            >
                {/* Center Emblem (Desktop Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
            hidden lg:block absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-72 h-72
            bg-no-repeat bg-center bg-contain
            z-[5] pointer-events-none
          "
                    style={{ backgroundImage: "url('/committees/Blo.png')" }}
                />

                {/* Committee Items */}
                {committees.map((committee, index) => (
                    <motion.div
                        key={committee.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`
              flex flex-col items-center
              transition-transform hover:scale-110
              mt-10 lg:mt-0
              relative lg:absolute ${committee.position}
            `}
                    >
                        {/* Image */}
                        <div
                            className="
                relative
                w-40 h-40 sm:w-56 sm:h-56
                rounded-full overflow-hidden
                shadow-[0px_10px_45px_rgba(0,0,0,0.4)]
                hover:shadow-[0px_14px_55px_rgba(0,0,0,0.6)]
                transition-all duration-500
              "
                        >
                            <Image
                                src={committee.image}
                                alt={committee.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 160px, 224px"
                                priority={index < 2}
                                quality={80}
                            />
                        </div>

                        {/* Name */}
                        <span className="mt-4 text-base sm:text-xl font-semibold text-[#062045] text-center">
                            {committee.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
