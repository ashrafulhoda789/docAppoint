import DoctorsCard from "@/components/shared/DoctorsCard";
import SearchBar from "@/components/shared/SearchBar";
import { fetchAllDoctors } from "@/lib/appointments/data";

const AllApointmentsPage = async ({searchParams}) => {

    const sParams = await searchParams;

    const doctors = await fetchAllDoctors(sParams?.searchTerm);

    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10">

            <div className="mx-auto mb-10 max-w-6xl text-center">

                <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
                    Find Your Doctor
                </h1>

                <p className="mt-2 text-slate-500">
                    Browse and book appointments with trusted specialists
                </p>

            </div>

            <div className="mb-10">
                <SearchBar />
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    doctors?.map((doctor) => (
                        <DoctorsCard key={doctor._id} doctor={doctor} />
                    ))
                }

            </div>

        </div>
    );
};

export default AllApointmentsPage;