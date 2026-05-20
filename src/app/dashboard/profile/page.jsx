'use client'

import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaIdBadge, FaCalendarAlt } from 'react-icons/fa';

const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    return (
        <div className="min-h-screen  flex items-center justify-center p-6 relative overflow-hidden">

            {/* Background Blobs */}
            

            {/* Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-linear-to-r from-blue-600 to-cyan-500 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                        My Profile
                    </h2>
                    <p className="text-white/80 text-sm mt-1">
                        Manage your personal information
                    </p>
                </div>

                {/* Avatar Section */}
                <div className="flex justify-center -mt-5">
                    <div className="relative">
                        <div className="p-1 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-xl">
                            <Image
                                src={user?.image || '/assets/userAvatar.webp'}
                                alt="User Avatar"
                                width={140}
                                height={140}
                                className="rounded-full w-32 h-32 object-cover border-4 border-white"
                            />
                        </div>

                        {/* Online Status */}
                        <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 border-3 border-white rounded-full"></span>
                    </div>
                </div>

                {/* User Info */}
                <div className="px-6 py-6 flex flex-col items-center">

                    <h3 className="text-xl font-bold text-gray-800 mt-3">
                        {user?.name}
                    </h3>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-gray-100">
                        <FaEnvelope className="text-cyan-500" />
                        <span className="text-sm text-gray-700">{user?.email || 'N/A'}</span>
                    </div>


                
                    

                    {/* Divider */}
                    <div className="w-full border-t border-gray-200 my-6"></div>

                    {/* Actions */}
                    <div className="w-full flex gap-3">

                        <UpdateUserModal user={user}/>

                       

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;