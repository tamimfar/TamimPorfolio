import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Skills", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <nav className=" w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 z-50">
            <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold">
                    Tamim<span className="text-cyan-500">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <button className="hidden md:block px-5 py-2 rounded-full border-2 border-gray-300 text-black  transition">
                    Hire Me
                </button>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="mt-6 w-full py-3 rounded-full border-2 border-gray-300 text-black   transition">
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    );
}