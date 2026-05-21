import { AppointmentModal } from "@/components/AppointmentModal";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import Image from "next/image";
import {
    FaCheckCircle,
    FaMapMarkerAlt,
    FaClock,
    FaMoneyBillWave,
} from "react-icons/fa";

const DoctorDetailsPage = async ({ params }) => {

    const { doctorId } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`http://localhost:5000/alldoctors/${doctorId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const doctor = await res.json();


    if (!doctor) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50">
                <h2 className="text-lg font-semibold text-slate-600">
                    Doctor not found
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 px-4 py-12">

            <div className="mx-auto max-w-5xl">

                <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm">

                    <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">

                        <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-teal-100 shadow-sm md:h-36 md:w-36">

                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover object-top"
                            />

                        </div>

                        <div className="flex-1 space-y-3">

                            <div className="flex items-center gap-2">

                                <h1 className="text-2xl font-black text-slate-900 md:text-3xl">
                                    {doctor.name}
                                </h1>

                                <FaCheckCircle className="text-teal-600" />

                            </div>

                            <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                                {doctor.specialty}
                            </span>

                            <p className="text-sm text-slate-500">
                                {doctor.experience} experience
                            </p>

                            <div className="flex items-center gap-2 text-sm text-slate-600">

                                <FaMapMarkerAlt className="text-teal-600" />

                                <span>
                                    {doctor.hospital}
                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="border-t border-teal-100"></div>

                    <div className="space-y-10 p-6 md:p-8">

                        <section className="space-y-2">

                            <h2 className="text-lg font-bold text-slate-900">
                                About Doctor
                            </h2>

                            <p className="text-sm leading-7 text-slate-600 md:text-base">
                                {doctor.description}
                            </p>

                        </section>

                        <section className="space-y-3">

                            <h2 className="text-lg font-bold text-slate-900">
                                Availability
                            </h2>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {doctor.availability?.map((slot, idx) => (

                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 rounded-2xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm text-slate-700"
                                    >

                                        <FaClock className="text-teal-600" />

                                        {slot}

                                    </div>

                                ))}

                            </div>

                        </section>

                        <section className="flex items-center justify-between rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50 p-5">

                            <div className="flex items-center gap-2 font-medium text-slate-700">

                                <FaMoneyBillWave className="text-teal-600" />

                                Consultation Fee

                            </div>

                            <div className="text-2xl font-black text-slate-900">
                                ৳ {doctor.fee}
                            </div>

                        </section>

                        <div>
                            <AppointmentModal doctor={doctor} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DoctorDetailsPage;