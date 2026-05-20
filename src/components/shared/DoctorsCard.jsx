import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const DoctorsCard = ({ doctor }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">

            {/* Doctor Image */}
            <div className="relative w-full aspect-4/3 bg-slate-100 overflow-hidden rounded-t-2xl">
                <Image
                    src={doctor.image || "/doctor-placeholder.png"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            {/* Content */}
            <div className="p-5 space-y-3">

                {/* Name */}
                <h2 className="text-lg font-semibold text-slate-800">
                    {doctor.name}
                </h2>

                {/* Specialization */}
                <p className="text-sky-600 font-medium text-sm">
                    {doctor?.specialty || "General Physician"}
                </p>

                {/* Info */}
                <div className="text-sm text-slate-500 space-y-1">
                    <p>🏥 {doctor.hospital || "City Medical Hospital"}</p>
                </div>


                {/* Button */}
                <Link href={`/appointments/${doctor._id}`}>
                    <Button
                        className="w-full mt-3 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-2.5 rounded-xl font-medium transition-all"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorsCard;