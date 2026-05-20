"use client";

import { Button, Card, Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Banner = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">

            {/* MAIN BACKGROUND */}
            <div className="absolute inset-0 bg-linear-to-br from-[#071A3A] via-[#0B2A52] to-[#0E6BA8]" />

            {/* soft glow shapes */}
            <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="space-y-6 text-left">

                    {/* TAG */}
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm uppercase tracking-widest">
                        <MdOutlineHealthAndSafety />
                        Smart Healthcare Platform
                    </div>

                    {/* HEADING */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Your Health, <br />
                        <span className="text-white">One Click Away</span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-slate-300 text-lg max-w-xl">
                        Book trusted doctors instantly and manage appointments with a premium healthcare experience.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">

                        <Button
                            size="lg"
                            className="bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/30"
                        >
                            Book Appointment
                        </Button>

                        <Button
                            size="lg"
                            variant="bordered"
                            className="border-white/30 text-white hover:bg-white/10"
                        >
                            View Doctors
                        </Button>

                    </div>

                    

                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center">

                    {/* OUTER GLOW FRAME */}
                    <div className="absolute w-[420px] h-[420px] bg-white/5 rounded-[40px] blur-sm" />

                    {/* MAIN CARD */}
                    <Card className="relative w-[360px] h-[420px] bg-[#0F1E3A] border border-white/10 rounded-[32px] shadow-2xl">

                        <div className="p-6 space-y-4">

                            <div className="text-white text-2xl font-bold">
                                Dr. Ayesha Rahman
                            </div>

                            <div className="text-slate-300">
                                Cardiologist • 10 Years Experience
                            </div>

                            {/* INNER DARK PANEL */}
                            <div className="mt-6 w-full h-[250px] rounded-2xl bg-linear-to-b from-[#0B1A33] to-[#0A1630] border border-white/5" />

                            {/* SMALL INFO */}
                            <div className="flex justify-between text-sm text-slate-300 pt-3">
                                <span>Available Today</span>
                                <span className="text-cyan-300">✔ Online</span>
                            </div>

                        </div>

                    </Card>

                </div>

            </div>
        </section>
    );
};

export default Banner;