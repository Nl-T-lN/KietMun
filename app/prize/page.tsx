"use client";

import {
    FaMedal,
    FaTrophy,
    FaAward,
    FaUsers,
    FaSchool,
} from "react-icons/fa";

interface Prize {
    title: string;
    amount: string;
    quote: string;
    icon: React.ReactElement;
}

export default function Prizes(): React.ReactElement {
    const prizeList: Prize[] = [
        {
            title: "Best Delegate",
            amount: "₹10,000",
            quote: "Excellence in diplomacy, leadership, and impact.",
            icon: <FaTrophy className="text-[#0d0c2d] text-5xl" />,
        },
        {
            title: "High Commendation",
            amount: "₹5,000",
            quote: "Outstanding performance and substantive debate.",
            icon: <FaMedal className="text-[#0d0c2d] text-5xl" />,
        },
        {
            title: "Special Mention",
            amount: "₹2,000",
            quote: "Recognizing consistent contribution and initiative.",
            icon: <FaAward className="text-[#0d0c2d] text-5xl" />,
        },
        {
            title: "Best Delegation",
            amount: "₹2,000",
            quote: "Exceptional teamwork and strategic coordination.",
            icon: <FaUsers className="text-[#0d0c2d] text-5xl" />,
        },
        {
            title: "Best School Delegation",
            amount: "₹2,000",
            quote: "Collective excellence across committees.",
            icon: <FaSchool className="text-[#0d0c2d] text-5xl" />,
        },
    ];

    return (
        <section className="bg-white py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] mb-6">
                        Prize Structure
                    </h1>
                    <div className="mx-auto h-1 w-24 bg-[#C7BEE6] mb-6" />
                    <p className="text-[#0d0c2d]/65 max-w-2xl mx-auto text-lg">
                        Recognising excellence, leadership, and diplomacy through
                        awards that honour exceptional performance.
                    </p>
                </div>

                {/* Prizes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    {prizeList.map((prize) => (
                        <div
                            key={prize.title}
                            className="
                                group
                                relative
                                bg-white
                                border border-[#C7BEE6]/40
                                rounded-3xl
                                p-10
                                h-[360px]
                                flex flex-col
                                justify-between
                                transition-all duration-300
                                hover:shadow-xl
                                hover:-translate-y-2
                            "
                        >
                            {/* Top Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-[#C7BEE6]" />

                            {/* Icon */}
                            <div className="flex justify-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C7BEE6]/15 transition group-hover:scale-105">
                                    {prize.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-[#0d0c2d] mb-2">
                                    {prize.title}
                                </h2>
                                <p className="text-3xl font-extrabold text-[#062045] mb-4">
                                    {prize.amount}
                                </p>
                                <p className="text-[#0d0c2d]/70 max-w-xs mx-auto">
                                    {prize.quote}
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-16 bg-[#C7BEE6]/60 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
