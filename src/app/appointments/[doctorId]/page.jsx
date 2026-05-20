import Image from "next/image";
import {
    FaStar,
    FaCheckCircle,
    FaMapMarkerAlt,
    FaClock,
    FaMoneyBillWave,
} from "react-icons/fa";

const DoctorDetailsPage = async ({ params }) => {
    const { doctorId } = await params;

    const res = await fetch(`http://localhost:5000/alldoctors/${doctorId}`, {
        cache: "no-store",
    });

    const doctor = await res.json();

    

    if (!doctor) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <h2 className="text-lg font-semibold text-slate-600">
                    Doctor not found
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-sky-50 py-10 px-4">

            <div className="max-w-5xl mx-auto">

                {/* Main Card */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">

                    {/* Top Section */}
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">

                        {/* Image */}
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-2">

                            {/* Name */}
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                                    Dr. {doctor.name}
                                </h1>
                                <FaCheckCircle className="text-sky-500 text-lg" />
                            </div>

                            {/* Specialty chip */}
                            <span className="inline-block px-3 py-1 text-sm bg-sky-50 text-sky-600 rounded-full font-medium">
                                {doctor.specialty}
                            </span>

                            {/* Experience */}
                            <p className="text-slate-500 text-sm">
                                {doctor.experience} experience
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 text-yellow-500 text-sm">
                                <FaStar />
                                <span className="text-slate-700 font-semibold">
                                    4.6
                                </span>
                                <span className="text-slate-400">
                                    (200+ patients)
                                </span>
                            </div>

                            {/* Hospital */}
                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                <FaMapMarkerAlt className="text-slate-400" />
                                <span>{doctor.hospital}</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-100"></div>

                    {/* Body */}
                    <div className="p-6 md:p-8 space-y-8">

                        {/* About */}
                        <section>
                            <h2 className="text-lg font-semibold text-slate-800 mb-2">
                                About Doctor
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                {doctor.description}
                            </p>
                        </section>

                        {/* Availability */}
                        <section>
                            <h2 className="text-lg font-semibold text-slate-800 mb-3">
                                Availability
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {doctor.availability?.map((slot, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-600"
                                    >
                                        <FaClock className="text-slate-400" />
                                        {slot}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Fee Card */}
                        <section className="bg-sky-50 border border-sky-100 rounded-2xl p-5 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <FaMoneyBillWave className="text-green-500" />
                                Consultation Fee
                            </div>

                            <div className="text-xl font-bold text-slate-800">
                                ৳ {doctor.fee}
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="pt-2">
                            <button className="w-full md:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-semibold shadow-sm transition">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsPage;