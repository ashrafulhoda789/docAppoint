import React from 'react';

const GuideSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        How It Works
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Simple 3 steps to get your appointment done.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    <div className="text-center space-y-3">
                        <div className="mx-auto h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl">
                            1
                        </div>
                        <h3 className="font-semibold text-slate-800">Search Doctor</h3>
                        <p className="text-slate-500 text-sm">
                            Find specialist doctors based on your need.
                        </p>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="mx-auto h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl">
                            2
                        </div>
                        <h3 className="font-semibold text-slate-800">Book Appointment</h3>
                        <p className="text-slate-500 text-sm">
                            Choose date and time instantly.
                        </p>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="mx-auto h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl">
                            3
                        </div>
                        <h3 className="font-semibold text-slate-800">Visit Doctor</h3>
                        <p className="text-slate-500 text-sm">
                            Meet doctor and get treatment easily.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GuideSection;