
import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Search,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F7FC] px-4 py-12">
      {/* Background */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white bg-white/80 p-8 text-center shadow-2xl shadow-purple-900/5 backdrop-blur-xl sm:p-14">

        {/* 404 */}
        <div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-pink-100" />

          <div className="relative text-6xl font-black tracking-tighter text-purple-600 sm:text-7xl">
            404
          </div>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
          <Search size={14} />
          Page Not Found
        </span>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Lost Your Way?
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          The page you're looking for doesn't exist or may have
          been moved. Let's help you find your way back to
          the KindConnect community.
        </p>

        {/* Navigation */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-xs font-medium tracking-wide text-gray-300">
            KINDCONNECT · CONNECTING PEOPLE, CREATING IMPACT
          </p>
        </div>
      </div>
    </main>
  );
}
