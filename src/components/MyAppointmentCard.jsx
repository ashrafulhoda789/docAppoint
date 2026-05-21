import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import UpdateBookingModal from "./UpdateBookingModal";
import { DeleteBooking } from "./DeleteBooking";
import { LuDot } from "react-icons/lu";

const MyAppointmentCard = ({ booking }) => {
    // console.log(booking);
    const { doctorName, doctorImage, appointmentDate, appointmentTime, specialty, patientName, gender, phone } = booking;

    return (
        <Card className="w-full flex flex-col md:flex-row gap-5 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">

            <div className="relative h-28 w-full md:w-28 md:h-28 shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                <Image
                    src={doctorImage}
                    alt={doctorName}
                    fill
                    className="object-cover object-top"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4">

                <div className="flex items-start justify-between">

                    <div>
                        <h2 className="text-lg font-semibold text-slate-800">
                            {doctorName}
                        </h2>
                        <p className="text-xs text-sky-600 font-medium">
                            {specialty}
                        </p>
                    </div>

                    <Chip className="bg-emerald-50 text-emerald-600 border border-emerald-100" size="sm">
                        Confirmed
                    </Chip>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-2">

                        <h3 className="text-sm font-semibold text-teal-700 uppercase">
                            Patient Info
                        </h3>

                        <p className="text-lg font-semibold text-slate-800">
                            {patientName}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="capitalize">{gender}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>{phone}</span>
                        </div>

                    </div>

                    <div className="rounded-xl bg-white border border-slate-100 p-4 space-y-3">

                        <h3 className="text-sm font-semibold text-teal-700 uppercase">
                            Schedule
                        </h3>

                        <div className="flex items-center gap-3">

                            <div className="p-2 rounded-lg bg-sky-50">
                                <FaCalendarAlt className="text-sky-600" />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">Date</p>
                                <p className="text-sm font-semibold text-slate-700">
                                    {appointmentDate}
                                </p>
                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <div className="p-2 rounded-lg bg-teal-50">
                                <FaClock className="text-teal-600" />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">Time</p>
                                <p className="text-sm font-semibold text-slate-700">
                                    {appointmentTime}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex justify-end gap-2 pt-2">

                    <DeleteBooking booking={booking} />
                    <UpdateBookingModal booking={booking} />

                </div>

            </div>

        </Card>
    );
};

export default MyAppointmentCard;