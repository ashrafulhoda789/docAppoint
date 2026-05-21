import MyAppointmentCard from '@/components/MyAppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
    FaCalendarCheck,
    FaUserMd,
} from 'react-icons/fa';

const DashBoardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/myAppointment/${user.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    const appointments = await res.json();

    const doctorRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alldoctors`, {
        cache: "no-store",
    });

    const doctors = await doctorRes.json();

    return (
        <div className="space-y-10">

            <div className="rounded-3xl border border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-8">

                <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
                    Welcome Back 👋
                </h1>

                <p className="mt-2 text-slate-600">
                    Here&apos;s an overview of your appointments and activity.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm transition hover:shadow-lg">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-slate-500">
                                Total Bookings
                            </p>

                            <h2 className="mt-2 text-4xl font-black text-slate-900">
                                {appointments.length}
                            </h2>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl text-teal-600">
                            <FaCalendarCheck />
                        </div>

                    </div>

                </div>

                <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm transition hover:shadow-lg">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-slate-500">
                                Doctors Available
                            </p>

                            <h2 className="mt-2 text-4xl font-black text-slate-900">
                                {doctors.length}
                            </h2>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600">
                            <FaUserMd />
                        </div>

                    </div>

                </div>

            </div>

            <div className="space-y-6">

                <div className="space-y-1">

                    <h2 className="text-2xl font-bold text-slate-900">
                        Recent Appointments
                    </h2>

                    <p className="text-sm text-slate-500">
                        Your latest booked appointments
                    </p>

                </div>

                {appointments.length === 0 ? (

                    <div className="flex min-h-[60vh] items-center justify-center">

                        <div className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-10 text-center shadow-lg">

                            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-teal-50">

                                <FaCalendarCheck className="text-4xl text-teal-600" />

                            </div>

                            <h2 className="text-2xl font-bold text-slate-900">
                                No Appointments Yet
                            </h2>

                            <p className="mt-3 text-slate-500">
                                You haven&apos;t booked any doctor appointment yet. Start booking now and manage everything easily from your dashboard.
                            </p>

                        </div>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-6">

                        {appointments.map((booking) => (
                            <MyAppointmentCard
                                key={booking._id}
                                booking={booking}
                            />
                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default DashBoardPage;