import MyAppointmentCard from '@/components/MyAppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
    FaCalendarCheck,
    FaClock,
    FaUserMd,
} from 'react-icons/fa';

const DashBoardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    // console.log(user.id, user);

    const res = await fetch(
        `http://localhost:5000/myAppointment/${user.id}`,
        { cache: "no-store" }
    );

    const appointments = await res.json();

    const doctorRes = await fetch('http://localhost:5000/alldoctors', {
        cache: "no-store",
    });

    const doctors = await doctorRes.json();

    return (
        <div className="space-y-8">

            {/* Heading */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome Back 👋
                </h1>

                <p className="text-gray-500 mt-1">
                    Here’s an overview of your appointments.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Total Bookings */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-gray-500 text-sm">
                                Total Bookings
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                {appointments.length}
                            </h2>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                            <FaCalendarCheck />
                        </div>

                    </div>
                </div>

                {/* Doctors */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-gray-500 text-sm">
                                Doctors Consulted
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                {doctors.length}
                            </h2>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                            <FaUserMd />
                        </div>

                    </div>
                </div>

            </div>

            {/* Recent Appointments */}
            <div>

                <div className="flex items-center justify-between mb-5">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Recent Appointments
                        </h2>

                        <p className="text-sm text-gray-500">
                            Your latest booked appointments
                        </p>
                    </div>

                </div>

                <div className="space-y-6">

                    {
                        appointments.length === 0 ? (

                            <div className="flex items-center justify-center min-h-[60vh]">

                                <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-lg p-8 text-center">

                                    <div className="w-24 h-24 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-12 h-12 text-blue-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 6.75V4.5m7.5 2.25V4.5M3.75 9.75h16.5M4.5 6h15A1.5 1.5 0 0121 7.5v10.5A1.5 1.5 0 0119.5 19.5h-15A1.5 1.5 0 013 18V7.5A1.5 1.5 0 014.5 6z"
                                            />
                                        </svg>

                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                        No Appointments Yet
                                    </h2>

                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        You haven&apos;t booked any doctor appointment yet.
                                        Start booking appointments and manage them easily
                                        from your dashboard.
                                    </p>

                                   

                                </div>

                            </div>

                        ) : (

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                                {appointments.map((booking) => (
                                    <MyAppointmentCard
                                        key={booking._id}
                                        booking={booking}
                                    />
                                ))}

                            </div>

                        )
                    }

                </div>

            </div>

        </div >
    );
};

export default DashBoardPage;