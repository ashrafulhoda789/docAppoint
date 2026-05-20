import MyAppointmentCard from "@/components/MyAppointmentCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    console.log(user.id, user);

    const res = await fetch(
        `http://localhost:5000/myAppointment/${user.id}`,
        { cache: "no-store" }
    );

    const appointments = await res.json();
    console.log(appointments.length, appointments);

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    My Bookings
                </h1>
                <p className="text-gray-500 mt-1">
                    Manage your doctor appointments easily
                </p>
            </div>

            {/* Empty state */}
            {appointments?.length === 0 ? (
                <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                        No Appointments Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You haven&apos;t booked any doctor yet.
                    </p>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {appointments.map((booking) => (
                        <MyAppointmentCard key={booking._id} booking={booking}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingPage;