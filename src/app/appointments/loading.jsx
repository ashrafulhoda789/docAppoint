export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">

            {/* Spinner */}
            <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600"></div>
            </div>

        </div>
    );
}