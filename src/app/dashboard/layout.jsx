"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    FaCalendarCheck,
    FaTimes,
    FaUserCircle,
} from "react-icons/fa";

import { FiSidebar } from "react-icons/fi";

export default function DashboardLayout({ children }) {

    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        {
            name: "My Bookings",
            href: "/dashboard/bookings",
            icon: <FaCalendarCheck />,
        },
        {
            name: "My Profile",
            href: "/dashboard/profile",
            icon: <FaUserCircle />,
        },
    ];

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-teal-50">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed md:static top-0 left-0 z-50
                    h-screen md:h-auto
                    w-72
                    bg-white/90 backdrop-blur-xl
                    border-r border-teal-100
                    shadow-xl md:shadow-sm
                    transform transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0
                    flex flex-col
                `}
            >

                <div className="flex h-20 items-center justify-between border-b border-teal-50 px-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                            <Image
                                src={"/logo.png"}
                                alt="DocAppoint"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        <h2 className="text-lg font-bold text-slate-900">
                            DocAppoint
                        </h2>

                    </div>

                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-xl text-slate-600 transition hover:text-rose-500 md:hidden"
                    >
                        <FaTimes />
                    </button>

                </div>

                <nav className="flex-1 space-y-2 p-4">

                    {navItems.map((item) => {

                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`
                                    flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition-all duration-200
                                    ${isActive
                                        ? "bg-gradient-to-r from-teal-700 to-cyan-500 text-white shadow-lg"
                                        : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                                    }
                                `}
                            >

                                <span className="text-lg">
                                    {item.icon}
                                </span>

                                <span>{item.name}</span>

                            </Link>
                        );
                    })}

                </nav>

            </aside>

            <div className="flex min-w-0 flex-1 flex-col">

                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-teal-100 bg-white/80 px-4 backdrop-blur-xl md:px-6">

                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-2xl text-slate-700 transition hover:text-teal-600 md:hidden"
                        >
                            <FiSidebar />
                        </button>

                        <div>

                            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
                                Dashboard
                            </h1>

                            <p className="text-xs text-slate-500 md:text-sm">
                                Manage your appointments & profile
                            </p>

                        </div>

                    </div>

                </header>

                <main className="flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">

                    <div className="min-h-full rounded-3xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-xl md:p-6">

                        {children}

                    </div>

                </main>

            </div>

        </div>
    );
}