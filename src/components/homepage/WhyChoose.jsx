import React from 'react';

const WhyChoose = () => {
    return (
        <section className="relative bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Why Choose DocAppoint
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A smarter way to connect patients with trusted doctors anytime, anywhere.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-teal-700">Fast Booking</h3>
                        <p className="text-slate-500 mt-2">
                            Book appointments in seconds without waiting in long queues.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-teal-700">Trusted Doctors</h3>
                        <p className="text-slate-500 mt-2">
                            Verified specialists with real experience and patient ratings.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-teal-700">Easy Management</h3>
                        <p className="text-slate-500 mt-2">
                            Manage appointments, updates, and history in one dashboard.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;