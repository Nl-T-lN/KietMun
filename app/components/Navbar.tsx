export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6 text-white">
            <div className="font-bold tracking-widest">KIET</div>

            <ul className="hidden md:flex gap-8 text-sm tracking-wide">
                <li>Home</li>
                <li>Committees</li>
                <li>Prizes</li>
                <li>Gallery</li>
                <li>FAQs</li>
            </ul>

            <button className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#0d0c2d]">
                Register
            </button>
        </nav>
    );
}
