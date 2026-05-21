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
            const res = await fetch('http://localhost:5000/bannerDoctor');
            const data = await res.json();
            setBanners(data);
        };

        fetchBannerDoctors();
    }, []);

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-[#F8FAFC] via-[#ECFEFF] to-[#F0FDFA]">

            <div className="absolute inset-0">
                <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 items-center gap-16">

                {/* LEFT CONTENT */}
                <div className="space-y-8">

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
                        <MdOutlineHealthAndSafety className="text-lg" />
                        Smart Healthcare Platform
                    </div>

                    <div className="space-y-5">

                        <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-6xl">
                            Your Health
                            <span className="bg-linear-to-r from-teal-700 to-cyan-500 bg-clip-text text-transparent">
                                {" "}One Click Away
                            </span>
                        </h1>

                        <p className="text-lg leading-8 text-slate-600 max-w-xl">
                            Book trusted doctors instantly, manage appointments smoothly, and experience modern healthcare with comfort and confidence.
                        </p>

                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">

                        <Link href={'/dashboard'}>
                            <Button
                                size="lg"
                                radius="full"
                                className="bg-linear-to-r from-teal-700 to-cyan-500 px-8 font-semibold text-white shadow-xl shadow-teal-500/20 transition-all duration-300 hover:scale-105"
                            >
                                Book Appointment
                            </Button>
                        </Link>

                        <Link href={'/appointments'}>
                            <Button
                                size="lg"
                                radius="full"
                                variant="bordered"
                                className="border-teal-200 bg-white font-semibold text-teal-700 hover:bg-teal-50"
                            >
                                View Doctors
                            </Button>
                        </Link>

                    </div>

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                                <FaCalendarCheck className="text-xl text-teal-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Easy Booking</h4>
                                <p className="text-sm text-slate-500">Fast & secure appointments</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                                <FaHospital className="text-xl text-teal-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Chamber Consultation</h4>
                                <p className="text-sm text-slate-500">Meet doctors anywhere</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT SWIPER */}
                <div className="flex justify-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        className="w-full max-w-md"
                    >

                        {banners?.map((banner) => (

                            <SwiperSlide key={banner._id}>

                                <div className="flex justify-center rounded-[28px] overflow-hidden">

                                    <Card className="w-full overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

                                        <div className="space-y-6 p-6">

                                            {/* Header */}
                                            <div className="flex items-start justify-between">

                                                <div>
                                                    <h2 className="text-xl font-semibold text-slate-900">
                                                        {banner?.name}
                                                    </h2>

                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {banner?.specialty} • {banner?.experience}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 border border-teal-100">
                                                    <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                                                    Available
                                                </div>

                                            </div>

                                            {/* Main Info Card */}
                                            <div className="rounded-2xl bg-linear-to-br from-teal-700 to-cyan-500 p-6 text-white shadow-lg">

                                                <div className="flex items-center justify-between">

                                                    <div>
                                                        <p className="text-xs text-white/70">
                                                            Next Appointment
                                                        </p>

                                                        <h3 className="text-3xl font-bold mt-1 tracking-tight">
                                                            10:30 AM
                                                        </h3>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-xs text-white/70">
                                                            Status
                                                        </p>
                                                        <p className="text-sm font-semibold">
                                                            Scheduled
                                                        </p>
                                                    </div>

                                                </div>

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