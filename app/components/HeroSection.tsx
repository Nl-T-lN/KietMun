export default function HeroContent() {
    return (
        <div className="mt-24 flex flex-col items-center text-center text-white">
            <span className="mb-3 text-sm tracking-[0.4em] text-[#C7BEE6]">
                KIET
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
                MODEL UNITED NATION 7.0
            </h1>

            <p className="mt-4 text-sm tracking-[0.3em] text-[#C7BEE6]">
                E • DIPLOMACY • DEVELOPMENT
            </p>

            {/* Divider */}
            <div className="my-10 flex items-center gap-6">
                <div className="h-px w-32 bg-[#C7BEE6]/40" />
                <span className="text-[#C7BEE6] text-sm tracking-widest">
                    KIET MUN
                </span>
                <div className="h-px w-32 bg-[#C7BEE6]/40" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#C7BEE6]">
                2025
            </h2>
        </div>
    );
}
