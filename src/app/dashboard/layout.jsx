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
        <div className="min-h-screen my-10 bg-linear-to-br from-slate-50 via-white to-cyan-50 flex">

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:static top-0 left-0 z-50
                    h-screen md:h-auto
                    w-72 bg-white/90 backdrop-blur-xl
                    border-r border-gray-200 shadow-lg md:shadow-sm
                    transform transition-transform duration-300
                    ${isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                    md:translate-x-0
                    flex flex-col
                `}
            >

                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-2xl flex items-center justify-center">

                            <Image
                                src={"/logo.png"}
                                alt="DocAppoint"
                                width={62}
                                height={62}
                                className="object-contain"
                            />

                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-800">
                                DocAppoint
                            </h2>
                        </div>

                    </div>

                    {/* Close Button Mobile */}
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="md:hidden text-gray-600 text-xl hover:text-red-500 transition"
                    >
                        <FaTimes />
                    </button>

                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-3">

                    {navItems.map((item) => {

                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-2xl
                                    transition-all duration-200 font-medium

                                    ${isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Topbar */}
                <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">

                    <div className="flex items-center gap-4">

                        {/* Mobile Sidebar Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition"
                        >
                            <FiSidebar />
                        </button>

                        <div>

                            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                                Dashboard
                            </h1>

                            <p className="text-xs md:text-sm text-gray-500">
                                Manage your appointments & profile
                            </p>

                        </div>

                    </div>

                </header>

                {/* Page Content */}
                <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden">

                    <div className="rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm min-h-full p-4 md:p-6">

                        {children}

                    </div>

                </main>

            </div>

        </div>
    );
}