"use client";


export default function DashboardLayout({ children }) {
    
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <aside className="w-64 bg-white border-r p-4">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>

                <nav className="flex flex-col gap-3">
                    <a href="/dashboard/bookings">My Bookings</a>
                    <a href="/dashboard/profile">My Profile</a>
                </nav>
            </aside>

            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}