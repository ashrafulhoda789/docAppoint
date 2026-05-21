import MyAppointmentCard from "@/components/MyAppointmentCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/myAppointment/${user.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    const appointments = await res.json();

    return (
        <div className="min-h-screen space-y-8">

            <div className="rounded-3xl border border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-8">

                <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
                    My Bookings
                </h1>

                <p className="mt-2 text-slate-600">
                    Manage your doctor appointments easily and track your healthcare history
                </p>

            </div>

            {appointments?.length === 0 ? (

                <div className="flex min-h-[60vh] items-center justify-center">

                    <div className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-10 text-center shadow-lg">

                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-10 w-10 text-teal-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75V4.5m7.5 2.25V4.5M3.75 9.75h16.5M4.5 6h15A1.5 1.5 0 0121 7.5v10.5A1.5 1.5 0 0119.5 19.5h-15A1.5 1.5 0 013 18V7.5A1.5 1.5 0 014.5 6z"
                                />
                            </svg>

                        </div>

                        <h2 className="text-xl font-bold text-slate-900">
                            No Appointments Found
                        </h2>

                        <p className="mt-3 text-slate-500">
                            You haven’t booked any doctor yet. Start booking appointments to manage them here.
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
    );
};

export default MyBookingPage;