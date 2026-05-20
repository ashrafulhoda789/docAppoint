"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="relative bg-[#071A3A] text-white overflow-hidden">

            {/* glow background */}
            <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* LEFT: LOGO + NAME */}
                    

                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold">
                            <Image
                                src="/logo.png"   // put your logo in public folder
                                alt="DocAppoint Logo"
                                width={32}
                                height={32}
                                className="rounded"
                            />

                            DocAppoint
                        </div>

                        <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                            A smart healthcare platform to book trusted doctors instantly and manage your appointments with ease.
                        </p>
                    </div>

                    {/* CENTER: QUICK LINKS (optional style section) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                            <li className="hover:text-cyan-400 cursor-pointer">Doctors</li>
                            <li className="hover:text-cyan-400 cursor-pointer">Appointments</li>
                            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* RIGHT: SOCIAL ICONS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

                        <div className="flex gap-3">
                            <a className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 transition">
                                <FaFacebookF />
                            </a>

                            <a className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 transition">
                                <FaInstagram />
                            </a>
                            <a className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 transition">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                </div>

                {/* bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} DocAppoint. All rights reserved.</p>

                    <p className="mt-2 md:mt-0">
                        Built with ❤️ for better healthcare
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;