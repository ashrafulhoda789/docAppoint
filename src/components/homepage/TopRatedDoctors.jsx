import React from "react";
import DoctorsCard from "../shared/DoctorsCard";

const TopRatedDoctors = async () => {

    const res = await fetch('http://localhost:5000/topRated', {
        cache: "no-store"
    });

    const doctors = await res.json();

    return (
        <div className="mx-auto my-16 w-full max-w-7xl px-4 md:px-6 lg:px-8">

            <div className="mb-12 text-center">

                <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-5 py-2 text-xs font-semibold tracking-widest text-teal-700 shadow-sm">
                    TOP RATED
                </span>

                <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
                    Top Rated Doctors
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
                    Highly trusted and experienced doctors selected by patients for their exceptional care and service quality
                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {doctors?.map((doctor) => (
                    <DoctorsCard key={doctor._id} doctor={doctor} />
                ))}

            </div>

        </div>
    );
};

export default TopRatedDoctors;