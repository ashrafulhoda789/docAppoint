"use client";

import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("searchTerm") || ""
    );

    // console.log(search);

    const handleSearch = () => {

        const params = new URLSearchParams(searchParams.toString());

        if (search) {
            params.set("searchTerm", search);
        } else {
            params.delete("searchTerm");
        }

        router.push(`/appointments?${params.toString()}`);
    };

    return (
        <div className="mx-auto flex w-full max-w-2xl items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-100">

            <div className="pl-5 text-slate-400">
                <FaSearch className="h-5 w-5" />
            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search doctor by name or specialty..."
                className="h-14 flex-1 bg-transparent px-4 text-slate-700 outline-none placeholder:text-slate-400"
            />

            <Button
                onClick={handleSearch}
                className="mr-2 rounded-xl bg-linear-to-r from-teal-700 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
                Search
            </Button>

        </div>
    );
};

export default SearchBar;