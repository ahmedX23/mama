import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] px-4">
      <div className="bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl max-w-md w-full text-center shadow-xl shadow-[#0077b6]/5">
        <h1 className="text-4xl font-bold text-[#ffb703] mb-4">404</h1>
        <h2 className="text-xl font-semibold text-white mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6 text-sm">
          The link you followed might be broken, or the page may have been removed. Let's get you back on track.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#ffb703] hover:bg-[#ffb703]/90 text-[#0d1117] font-semibold px-6 py-2.5 rounded-lg transition-all text-sm duration-200 shadow-md shadow-[#ffb703]/10"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
