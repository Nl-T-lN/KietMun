"use client";

import Image from "next/image";

interface Member {
    name: string;
    role: string;
    image: string;
}

export default function Secretariat(): React.ReactElement {
    const leaders: Member[] = [
        { name: "Ashutosh", role: "Secretary General", image: "/images/ashutosh.jpeg" },
        { name: "Tashi Verma", role: "Deputy Secretary General", image: "/images/tashi.jpeg" },
        { name: "Aadish Pathak", role: "Director General", image: "/images/aadish.jpeg" },
    ];

    const departmentHeads: Member[] = [
        { name: "Pravira Shukla", role: "Senior Convenor", image: "/images/pravira.jpeg" },
        { name: "Sourav Prasad", role: "Convenor", image: "/images/sourav.jpeg" },
        { name: "Janhwee Pandey", role: "Head of Secretariat", image: "/images/janhwee.jpeg" },
        { name: "Mitansh Gupta", role: "Director of Management", image: "/images/mitansh.jpeg" },
    ];

    const secretariat: Member[] = [
        { name: "Vartika Agrawal", role: "Head of Graphics", image: "/images/vartika.jpeg" },
        { name: "Shudha Nidhi", role: "Head of Digital Affairs", image: "/images/shudha.jpeg" },
        { name: "Sakshi Agrawal", role: "Head of Public Relations", image: "/images/sakshi.jpeg" },
    ];

    const Card = ({ name, role, image }: Member): React.ReactElement => (
        <div
            className="
                bg-white
                border border-[#C7BEE6]/40
                rounded-2xl
                overflow-hidden
                shadow-sm
                transition-all duration-300
                hover:shadow-lg
                hover:-translate-y-1
            "
        >
            {/* Image */}
            <div className="relative w-full h-64">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                    quality={70}
                />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#0d0c2d] mb-1">
                    {name}
                </h3>
                <p className="text-[#0d0c2d]/70">{role}</p>
            </div>
        </div>
    );

    return (
        <main className="bg-white text-[#0d0c2d] pt-28">
            {/* INTRO */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Secretariat
                </h1>
                <p className="text-[#0d0c2d]/70 text-lg max-w-3xl mx-auto">
                    The Secretariat serves as the executive and administrative backbone
                    of the conference, ensuring smooth coordination, leadership, and
                    an enriching experience for all delegates.
                </p>
            </section>

            {/* LEADERS */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-[#0d0c2d] mb-12 text-center">
                    Leadership
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {leaders.map((member) => (
                        <Card key={member.name} {...member} />
                    ))}
                </div>
            </section>

            {/* DEPARTMENT HEADS */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-[#0d0c2d] mb-12 text-center">
                    Department Heads
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {departmentHeads.map((member) => (
                        <Card key={member.name} {...member} />
                    ))}
                </div>
            </section>

            {/* SECRETARIAT */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-[#0d0c2d] mb-12 text-center">
                    Secretariat Team
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {secretariat.map((member) => (
                        <Card key={member.name} {...member} />
                    ))}
                </div>
            </section>
        </main>
    );
}
