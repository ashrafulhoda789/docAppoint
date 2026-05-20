import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const MyAppointmentCard = ({ booking }) => {
    const { doctorName, doctorImage, appointmentDate, appointmentTime, specialty } = booking;

    return (
        <Card className="w-full flex flex-col md:flex-row gap-4 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">

            {/* Image Section */}
            <div className="relative h-28 w-full md:w-28 md:h-28 shrink-0 overflow-hidden rounded-xl">
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
                        <h2 className="text-lg font-semibold text-gray-800">
                            {doctorName}
                        </h2>
                        <p className="text-xs text-gray-500">
                            {specialty}
                        </p>
                    </div>

                    {/* Optional Status Badge */}
                    <Chip color="success" variant="flat" size="sm">
                        Confirmed
                    </Chip>
                </div>

                {/* Appointment Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{appointmentDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaClock className="text-green-500" />
                        <span>{appointmentTime}</span>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-2 pt-2">

                    <Button
                        size="sm"
                        variant="danger"
                        color="danger"
                        className="w-full sm:w-auto"
                    >
                        Delete
                    </Button>

                    <Button
                        size="sm"
                        color="primary"
                        className="w-full sm:w-auto"
                    >
                        Update
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default MyAppointmentCard;