"use client";

import { useEffect, useState } from "react";
import { Button, Card } from "@heroui/react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaCalendarCheck, FaHospital } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Banner = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBannerDoctors = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bannerDoctor`);
            const data = await res.json();
            setBanners(data);
        };

        fetchBannerDoctors();
    }, []);

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-[#F8FAFC] via-[#ECFEFF] to-[#F0FDFA]">

            {/* background blur */}
            <div className="absolute inset-0">
                <div className="absolute -left-24 top-10 h-60 w-60 md:h-80 md:w-80 rounded-full bg-teal-200/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 md:h-96 md:w-96 rounded-full bg-cyan-200/30 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

                {/* LEFT CONTENT */}
                <div className="space-y-6 md:space-y-8 text-center lg:text-left">

                    <div className="inline-flex mx-auto lg:mx-0 w-fit items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3 py-2 text-xs sm:text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
                        <MdOutlineHealthAndSafety className="text-base sm:text-lg" />
                        Smart Healthcare Platform
                    </div>

                    <div className="space-y-4 md:space-y-5">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                            Your Health
                            <span className="bg-linear-to-r from-teal-700 to-cyan-500 bg-clip-text text-transparent">
                                {" "}One Click Away
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-7 text-slate-600 max-w-xl mx-auto lg:mx-0">
                            Book trusted doctors instantly, manage appointments smoothly, and experience modern healthcare with comfort and confidence.
                        </p>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

                        <Link href={"/dashboard"}>
                            <Button
                                size="lg"
                                radius="full"
                                className="w-full sm:w-auto bg-linear-to-r from-teal-700 to-cyan-500 px-6 sm:px-8 font-semibold text-white shadow-xl"
                            >
                                Book Appointment
                            </Button>
                        </Link>

                        <Link href={"/appointments"}>
                            <Button
                                size="lg"
                                radius="full"
                                variant="bordered"
                                className="w-full sm:w-auto border-teal-200 bg-white font-semibold text-teal-700"
                            >
                                View Doctors
                            </Button>
                        </Link>

                    </div>

                    {/* FEATURES */}
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center lg:justify-start">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                                <FaCalendarCheck className="text-lg md:text-xl text-teal-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm md:text-base">
                                    Easy Booking
                                </h4>
                                <p className="text-xs md:text-sm text-slate-500">
                                    Fast & secure appointments
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                                <FaHospital className="text-lg md:text-xl text-teal-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm md:text-base">
                                    Chamber Consultation
                                </h4>
                                <p className="text-xs md:text-sm text-slate-500">
                                    Meet doctors anywhere
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT SWIPER */}
                <div className="w-full flex justify-center">

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                    >

                        {banners?.map((banner) => (
                            <SwiperSlide key={banner._id}>
                                <div className="flex justify-center">

                                    <Card className="w-full rounded-2xl md:rounded-[28px] border border-slate-100 bg-white shadow-sm hover:shadow-lg transition">

                                        <div className="space-y-4 md:space-y-6 p-4 md:p-6">

                                            {/* HEADER */}
                                            <div className="flex items-start justify-between gap-3">

                                                <div>
                                                    <h2 className="text-base md:text-xl font-semibold text-slate-900">
                                                        {banner?.name}
                                                    </h2>

                                                    <p className="mt-1 text-xs md:text-sm text-slate-500">
                                                        {banner?.specialty} • {banner?.experience}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-1 md:gap-2 rounded-full bg-teal-50 px-2 md:px-3 py-1 text-xs md:text-sm font-medium text-teal-700 border border-teal-100">
                                                    <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                                                    Available
                                                </div>

                                            </div>

                                            {/* MAIN CARD */}
                                            <div className="rounded-xl md:rounded-2xl bg-linear-to-br from-teal-700 to-cyan-500 p-4 md:p-6 text-white">

                                                <p className="text-[10px] md:text-xs text-white/70">
                                                    Next Appointment
                                                </p>

                                                <h3 className="text-xl md:text-3xl font-bold mt-1">
                                                    10:30 AM
                                                </h3>

                                            </div>

                                        </div>

                                    </Card>

                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </div>
        </section>
    );
};

export default Banner;