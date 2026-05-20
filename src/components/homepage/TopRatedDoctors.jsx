import React from "react";
import DoctorsCard from "../shared/DoctorsCard";

const TopRatedDoctors = async () => {
    const res = await fetch(`http://localhost:5000/topRated`, {
        cache: "no-store",
    });

    const doctors = await res.json();

    return (
        <div className="w-9/12 mx-auto my-10 ">
            <div className="mb-10">
                <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-cyan-600 bg-cyan-100 rounded-full">
                    TOP RATED
                </span>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800">
                    Top Rated Doctors
                </h1>

                <p className="mt-2 text-sm sm:text-base text-slate-500">
                    Highly trusted and experienced doctors selected by patients
                </p>
            </div>

            {/* Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {doctors?.map((doctor) => (
                    <DoctorsCard key={doctor._id} doctor={doctor} />
                ))}
            </div>


        </div>
    );
};

export default TopRatedDoctors;