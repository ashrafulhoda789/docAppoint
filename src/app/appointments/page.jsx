import DoctorsCard from "@/components/shared/DoctorsCard";

const AllApointmentsPage = async () => {
    const res = await fetch('http://localhost:5000/alldoctors', {
        cache: "no-store",
    });

    const doctors = await res.json();

    return (
        <div className="min-h-screen px-6 py-10">

            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                    Find Your Doctor
                </h1>
                <p className="text-slate-500 mt-2">
                    Browse and book appointments with trusted specialists
                </p>
            </div>

            {/* Doctors Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {doctors?.length > 0 ? (
                    doctors.map((doctor) => (
                        <DoctorsCard key={doctor._id} doctor={doctor} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-slate-500">
                        No doctors available right now.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApointmentsPage;