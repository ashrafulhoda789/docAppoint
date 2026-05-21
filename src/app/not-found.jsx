"use client";

import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

            <div className="text-center max-w-md">

                {/* 404 Big Text */}
                <h1 className="text-7xl font-extrabold text-teal-600">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-bold text-slate-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-slate-500">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

                    <Link href="/">
                        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition">
                            <FaHome />
                            Go Home
                        </button>
                    </Link>

                    <Link href="/appointments">
                        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition">
                            Browse Doctors
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}