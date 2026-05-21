import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdVerified } from "react-icons/md";

const DoctorsCard = ({ doctor }) => {
    return (
        <div className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,118,110,0.12)]">

            <div className="relative w-full overflow-hidden bg-slate-100 aspect-4/3">

                <Image
                    src={doctor.image || "/doctor-placeholder.png"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-500 shadow-sm backdrop-blur">
                    <FaStar />
                    4.9 Rating
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm">
                    Available
                </div>

            </div>

            <div className="space-y-5 p-6">

                <div className="space-y-2">

                    <div className="flex items-center gap-2">

                        <h2 className="text-xl font-bold text-slate-800">
                            {doctor.name}
                        </h2>

                        <MdVerified className="text-lg text-teal-600" />

                    </div>

                    <p className="font-medium text-teal-600">
                        {doctor?.specialty || "General Physician"}
                    </p>

                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">

                    <LuMapPin className="text-base text-teal-600" />

                    <p className="truncate">
                        {doctor.hospital || "City Medical Hospital"}
                    </p>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                    <div>
                        <p className="text-sm text-slate-500">
                            Experience
                        </p>

                        <h4 className="font-bold text-slate-800">
                            {doctor?.experience || "5 Years"}
                        </h4>
                    </div>

                    <div className="h-10 w-px bg-slate-200" />

                    <div>
                        <p className="text-sm text-slate-500">
                            Patients
                        </p>

                        <h4 className="font-bold text-slate-800">
                            1K+
                        </h4>
                    </div>

                </div>

                <Link href={`/appointments/${doctor._id}`}>
                    <Button
                        radius="full"
                        className="w-full bg-linear-to-r from-teal-700 to-cyan-500 py-6 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/30"
                    >
                        View Details
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default DoctorsCard;