"use client";

import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F7FC] px-4 py-12">
      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-7 text-center shadow-2xl shadow-purple-900/5 backdrop-blur-xl sm:p-12">
          {/* Error Icon */}
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-purple-100 to-pink-100">
            <div className="absolute inset-2 rounded-2xl border border-purple-200/60" />

            <AlertTriangle
              size={42}
              className="text-purple-600"
              strokeWidth={1.8}
            />

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
              !
            </span>
          </div>

          {/* Error Text */}
          <span className="inline-block rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
            Something Went Wrong
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Oops! An Unexpected Error
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Something unexpected happened while loading this page. Don't worry,
            your journey with KindConnect doesn't have to end here. Let's get
            you back on track!
          </p>

          {/* Error Details */}
          {error.digest && (
            <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
              <p className="text-xs text-gray-400">Error Reference</p>
              <p className="mt-1 font-mono text-sm text-gray-600">
                {error.digest}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {/* <button
              onClick={() => reset()}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <RefreshCw size={17} />
              Try Again
            </button> */}

            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
            >
              <Home size={17} />
              Back to Home
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-400">
              Need help?
              {/* <Link
                href="/contact"
                className="font-semibold text-purple-600 transition hover:text-pink-500"
              >
                Contact our support team
              </Link> */}
            </p>

            <p className="mt-3 text-xs font-medium tracking-wide text-gray-300">
              KINDCONNECT · CONNECTING PEOPLE, CREATING IMPACT
            </p>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mx-auto mt-5 h-2 w-1/3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30" />
      </div>
    </main>
  );
}
