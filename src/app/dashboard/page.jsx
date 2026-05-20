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

                <div className="space-y-5">

                    {appointments.map((booking) => (
                        <MyAppointmentCard
                            key={booking._id}
                            booking={booking}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
};

export default DashBoardPage;