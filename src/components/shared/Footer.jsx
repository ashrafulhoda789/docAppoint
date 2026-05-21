"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white">

            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-3">

                    <div className="space-y-5">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                                <Image
                                    src="/logo.png"
                                    alt="DocAppoint"
                                    width={28}
                                    height={28}
                                    className="rounded"
                                />
                            </div>

                            <h2 className="text-xl font-bold tracking-wide">
                                DocAppoint
                            </h2>

                        </div>

                        <p className="text-sm leading-7 text-slate-300">
                            A smart healthcare platform to book trusted doctors instantly and manage your appointments with ease and confidence.
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-300">

                            <li className="cursor-pointer transition hover:text-teal-400">
                                Home
                            </li>

                            <li className="cursor-pointer transition hover:text-teal-400">
                                Doctors
                            </li>

                            <li className="cursor-pointer transition hover:text-teal-400">
                                Appointments
                            </li>

                            <li className="cursor-pointer transition hover:text-teal-400">
                                Contact
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">

                            <a className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-teal-500/20 hover:text-teal-300">
                                <FaFacebookF />
                            </a>

                            <a className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-teal-500/20 hover:text-teal-300">
                                <FaInstagram />
                            </a>

                            <a className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-teal-500/20 hover:text-teal-300">
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} DocAppoint. All rights reserved.
                    </p>

                    <p>
                        Built with care for better healthcare experience
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;