import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const MyAppointmentCard = ({ booking }) => {
    const { doctorName, doctorImage, appointmentDate, appointmentTime, specialty } = booking;

    return (
        <Card className="w-full flex flex-col md:flex-row gap-4 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-sky-100 bg-white">

            {/* Image Section */}
            <div className="relative h-28 w-full md:w-28 md:h-28 shrink-0 overflow-hidden rounded-xl bg-sky-50">
                <Image
                    src={doctorImage}
                    alt={doctorName}
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-between gap-3">

                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-800">
                            {doctorName}
                        </h2>
                        <p className="text-xs text-sky-600 font-medium">
                            {specialty}
                        </p>
                    </div>

                    {/* Optional Status Badge */}
                    <Chip
                        className="bg-emerald-50 text-emerald-600 border border-emerald-100"
                        variant="flat"
                        size="sm"
                    >
                        Confirmed
                    </Chip>
                </div>

                {/* Appointment Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-slate-600">

                    <div className="flex items-center gap-2 bg-sky-50 px-3 py-1 rounded-lg">
                        <FaCalendarAlt className="text-sky-600" />
                        <span>{appointmentDate}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-lg">
                        <FaClock className="text-teal-600" />
                        <span>{appointmentTime}</span>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-2 pt-2">

                    <Button
                        size="sm"
                        className="w-full sm:w-auto bg-rose-50 text-rose-600 hover:bg-rose-100"
                    >
                        Delete
                    </Button>

                    

                </div>
            </div>
        </Card>
    );
};

export default MyAppointmentCard;