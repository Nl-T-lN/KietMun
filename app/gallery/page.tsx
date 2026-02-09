"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

interface GalleryImage {
    src: string;
    alt: string;
    rotate?: number;
}

/* ================= DATA ================= */

const images: GalleryImage[] = [
    { src: "/IMG_2980.webp", alt: "Gallery image 1" },
    { src: "/DSC01458.webp", alt: "Gallery image 2" },
    { src: "/DSC01494.webp", alt: "Gallery image 3" },
    { src: "/DSC01539.webp", alt: "Gallery image 4" },
    { src: "/IMG_3044.webp", alt: "Gallery image 5" },
    { src: "/IMG_3101.webp", alt: "Gallery image 6" },
    { src: "/IMG_3106.webp", alt: "Gallery image 7" },
    { src: "/IMG_3110.webp", alt: "Gallery image 8" },
    { src: "/DSC01440.webp", alt: "Gallery image 9" },
    { src: "/DSC01527.webp", alt: "Gallery image 10" },
    { src: "/IMG_3243.webp", alt: "Gallery image 11" },
    { src: "/IMG_3291.webp", alt: "Gallery image 12",rotate: -90 },
    { src: "/IMG_3308.webp", alt: "Gallery image 13" },
    { src: "/IMG_3363.webp", alt: "Gallery image 14" },
    { src: "/IMG_3449.webp", alt: "Gallery image 15" },
    { src: "/IMG_3477.webp", alt: "Gallery image 16" },
    { src: "/IMG_3676.webp", alt: "Gallery image 17" },
    { src: "/IMG_4030.webp", alt: "Gallery image 18" },
    { src: "/IMG_5001.webp", alt: "Gallery image 19" },
    { src: "/IMG_5010.webp", alt: "Gallery image 20" },
    { src: "/IMG_4005.webp", alt: "Gallery image 21" },
    { src: "/IMG_3998.webp", alt: "Gallery image 22" },
    { src: "/IMG_3040.webp", alt: "Gallery image 23", },
    { src: "/IMG_3529.webp", alt: "Gallery image 24" },
    { src: "/IMG_3500.webp", alt: "Gallery image 25" },
    { src: "/IMG_3467.webp", alt: "Gallery image 26",rotate: -90 },
    { src: "/IMG_3306.webp", alt: "Gallery image 27" },
    { src: "/IMG_3216.webp", alt: "Gallery image 28",rotate: -90 },
    { src: "/IMG_3055.webp", alt: "Gallery image 29" },
    { src: "/IMG_3072.webp", alt: "Gallery image 30" },
    { src: "/IMG_3111.webp", alt: "Gallery image 31" },
    { src: "/IMG_3114.webp", alt: "Gallery image 32" },
    { src: "/IMG_3289.webp", alt: "Gallery image 33",rotate: -90 },
    { src: "/IMG_3346.webp", alt: "Gallery image 34" },
    { src: "/IMG_3356.webp", alt: "Gallery image 35",rotate: -90 },
    { src: "/IMG_3350.webp", alt: "Gallery image 36" },
    { src: "/grp photo mun.webp", alt: "Gallery image 37" },
];

/* ================= COMPONENT ================= */

export default function Gallery(): React.ReactElement {
    const renderMobile = (): React.ReactElement[] =>
        images.map((image, index) => (
            <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="block md:hidden mb-4"
            >
                <div className="relative h-48 rounded-xl overflow-hidden shadow-[0_6px_30px_rgba(13,12,45,0.25)]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={70}
                        sizes="100vw"
                        className="object-cover"
style={{ transform: image.rotate ? `rotate(${image.rotate}deg)` : undefined }}

                    />
                </div>
            </motion.div>
        ));

    const renderDesktop = (): React.ReactElement[] => {
        const rows: React.ReactElement[] = [];
        let i = 0;

        while (i < images.length) {
            rows.push(
                <motion.div
                    key={`row-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:flex w-full gap-4 mb-4"
                >
                    {[0, 1, 2].map((offset) => {
                        const img = images[i + offset];
                        if (!img) return null;

                        return (
                            <div
                                key={offset}
                                className="relative h-96 flex-1 rounded-xl overflow-hidden shadow-[0_6px_30px_rgba(13,12,45,0.25)]"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    quality={70}
                                    sizes="(min-width: 768px) 33vw"
                                    className="object-cover"
style={{ transform: img.rotate ? `rotate(${img.rotate}deg)` : undefined }}

                                />
                            </div>
                        );
                    })}
                </motion.div>
            );

            i += 3;
        }

        return rows;
    };

    return (
        <section className="min-h-screen w-full bg-white px-6 py-28">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-16"
            >
                Photo Gallery
            </motion.h1>

            <div className="w-full max-w-7xl mx-auto">
                {renderMobile()}
                {renderDesktop()}
            </div>
        </section>
    );
}
