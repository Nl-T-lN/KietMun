"use client";

import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer(): React.ReactElement {
    return (
        <footer className="relative bg-[#0d0c2d] text-white pt-20">

            {/* TOP BROCHURE CTA */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-2xl border border-[#C7BEE6]/30 bg-gradient-to-r from-[#0d0c2d] to-[#062045] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">

                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">
                            Download the <span className="text-[#C7BEE6]">Official Brochure</span>
                        </h3>
                        <p className="text-white/70 max-w-xl">
                            Get complete information about committees, schedules, accommodation,
                            and registration details in our official brochure.
                        </p>
                    </div>

                    <a
                        href="/brochure.pdf"
                        className="inline-flex items-center gap-3 bg-[#C7BEE6] text-[#0d0c2d] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* BRAND */}
                <div>
                    <h4 className="text-2xl font-bold mb-3">KIET MUN</h4>
                    <p className="text-white/70 leading-relaxed">
                        Empowering the next generation of global leaders through diplomacy,
                        debate, and collaboration.
                    </p>

                    <div className="flex gap-4 mt-6 text-xl">
                        <a href="#" className="hover:text-[#C7BEE6] transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-[#C7BEE6] transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#C7BEE6]">
                        Contact Info
                    </h4>

                    <ul className="space-y-3 text-white/80">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C7BEE6]" />
                            +91 8303220540
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C7BEE6]" />
                            +91 7017712755
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#C7BEE6]" />
                            kietmun@kiet.edu
                        </li>
                    </ul>
                </div>

                {/* ADDRESS */}
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#C7BEE6]">
                        Address
                    </h4>

                    <p className="flex gap-3 text-white/80 leading-relaxed">
                        <FaMapMarkerAlt className="mt-1 text-[#C7BEE6]" />
                        KIET Group of Institutions <br />
                        Ghaziabad, Uttar Pradesh <br />
                        India
                    </p>

                    <div className="w-full h-52 md:h-48 rounded-xl overflow-hidden border border-[#C7BEE6]/40 shadow-sm">
                    <iframe
                        title="KIET Group of Institutions Location"
                        src="https://www.google.com/maps?q=KIET%20Group%20of%20Institutions%20Ghaziabad&output=embed"
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 mt-6" />

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
                <span>© 2026 KIET MUN. All rights reserved.</span>
                <span>
                    Designed with ❤️ by{" "}
                    <a href="/team" className="text-[#C7BEE6] hover:underline">
                        KIET MUN Tech Team
                    </a>
                </span>
            </div>
        </footer>
    );
}
