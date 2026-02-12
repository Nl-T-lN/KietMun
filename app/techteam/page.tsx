"use client";

import { FaLinkedin } from "react-icons/fa";

/* =======================
   Types
======================= */

interface TeamMember {
    img: string;
    name: string;
    linkedin: string;
    batch: string;
}

/* =======================
   Core Lead (Top Center)
======================= */

const coreLead: TeamMember = {
   img: "/self1.jpeg",
        name: "Shudha Nidhi Soni",
        linkedin: "https://www.linkedin.com/in/shudha-nidhi-soni-5833142a1/",
        batch: "2023-2027",
    
};

/* =======================
   Core Team Members
======================= */

const teamMembers: TeamMember[] = [
  
    {
        img: "/sk.jpeg",
        name: "Saksham Saxena",
        linkedin: "https://www.linkedin.com/in/sakkshm/",
        batch: "2024-2028",
    },
    {
        img: "/satyam.jpeg",
        name: "Satyam Kumar",
        linkedin: "https://www.linkedin.com/in/satyam-singh-972496204",
        batch: "2024-2028",
    },
    {
        img: "/shivam.jpeg",
        name: "Shivam Pandey",
        linkedin: "https://www.linkedin.com/in/shivam-pandey-8b1186311",
        batch: "2024-2028",
    },
    {
        img: "/nitin.jpeg",
        name: "Nitin Pandey",
        linkedin: "https://www.linkedin.com/in/-nitinpandey-",
        batch: "2024-2028",
    },
    {
        img: "/arush.jpeg",
        name: "Arush Gupta",
        linkedin: "https://www.linkedin.com/in/arush-gupta-43b873280",
        batch: "2025-2028",
    },
      {
        img: "/vansh.jpeg",
        name: "Vansh Gautam",
        linkedin: "https://www.linkedin.com/in/vansh-chaudhary-936824327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        batch: "2024-2028",
    },
];

/* =======================
   Freshman Team (Names Only)
======================= */

const freshmanMembers: string[] = [
    "Ayush",
    "Adarsh",
    "Shubhi",
    "Shristi",
    "saurabh",
    "Yatharth",
];

/* =======================
   Component
======================= */

export default function Team(): React.ReactElement {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] px-8 py-27">
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-[#0d0c2d]">
                Technical Team
            </h1>

            {/* =======================
                Core Lead (Centered)
            ======================= */}

            <div className="flex justify-center mb-20">
                <div className="group w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#C7BEE6]/40 hover:shadow-2xl transition-all duration-300">
                    
                    <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-[#C7BEE6]/20 to-[#0d0c2d]/10">
                        <img
                            src={coreLead.img}
                            alt={coreLead.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0c2d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={coreLead.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#C7BEE6] hover:text-white transform hover:scale-110 transition-all duration-200"
                            >
                                <FaLinkedin size={60} />
                            </a>
                        </div>
                    </div>

                    <div className="p-6 text-center bg-gradient-to-br from-white to-[#f4f5fb]">
                        <h3 className="text-xl font-bold text-[#0d0c2d] mb-2">
                            {coreLead.name}
                        </h3>
                        <p className="text-[#C7BEE6] text-lg font-semibold">
                            [ {coreLead.batch} ]
                        </p>
                        <p className="text-sm mt-2 text-gray-500 font-medium">
                            Tech Core Lead
                        </p>
                    </div>
                </div>
            </div>

            {/* =======================
                Core Team Grid
            ======================= */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#C7BEE6]/20 hover:border-[#C7BEE6]/60"
                    >
                        <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-[#C7BEE6]/20 to-[#0d0c2d]/10">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-[#0d0c2d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C7BEE6] hover:text-white transform hover:scale-110 transition-all duration-200"
                                >
                                    <FaLinkedin size={60} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 text-center bg-gradient-to-br from-white to-[#f4f5fb]">
                            <h3 className="text-xl font-bold text-[#0d0c2d] mb-2">
                                {member.name}
                            </h3>
                            <p className="text-[#C7BEE6] text-lg font-semibold">
                                [ {member.batch} ]
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* =======================
                Freshman Team
            ======================= */}

            <div className="max-w-5xl mx-auto mt-24 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d0c2d] mb-10">
                    Freshman
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {freshmanMembers.map((name, index) => (
                        <div
                            key={index}
                            className="py-4 px-6 bg-[#C7BEE6]/10 rounded-xl text-lg font-semibold text-[#0d0c2d] hover:bg-[#C7BEE6]/20 transition-all duration-300"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
