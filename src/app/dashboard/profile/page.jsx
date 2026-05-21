'use client'

import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    return (
        <div className="flex items-center justify-center p-6 relative overflow-hidden">


            <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden">

                <div className="bg-linear-to-r from-teal-700 to-cyan-600 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                        My Profile
                    </h2>
                    <p className="text-white/80 text-sm mt-1">
                        Manage your personal information
                    </p>
                </div>

                <div className="flex justify-center -mt-5">
                    <div className="relative">
                        <div className="p-1 rounded-full bg-linear-to-r from-teal-600 to-cyan-500 shadow-xl">
                            <Image
                                src={user?.image || '/assets/userAvatar.webp'}
                                alt="User Avatar"
                                width={140}
                                height={140}
                                className="rounded-full w-32 h-32 object-cover border-4 border-white"
                            />
                        </div>

                        {/* Online Status */}
                        <span className="absolute bottom-3 right-3 w-4 h-4 bg-emerald-500 border-3 border-white rounded-full"></span>
                    </div>
                </div>

                <div className="px-6 py-6 flex flex-col items-center">

                    <h3 className="text-xl font-bold text-slate-800 mt-3">
                        {user?.name}
                    </h3>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <FaEnvelope className="text-teal-600" />
                        <span className="text-sm text-slate-700">{user?.email || 'N/A'}</span>
                    </div>

                    <div className="w-full border-t border-slate-200 my-6"></div>

                    <div className="w-full flex gap-3">
                        <UpdateUserModal user={user} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;