'use client'
import Link from "next/link";
import {
  ArrowLeft,
  
  HeartHandshake,
  Home,
  Search,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
          <HeartHandshake size={48} strokeWidth={1.7} />
          <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-purple-600 text-white">
            <Search size={15} />
          </span>
        </div>

        {/* 404 */}
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">
          Oops! Page not found
        </p>

        <h1 className="mt-4 text-8xl font-black tracking-tight text-purple-600 dark:text-purple-400 sm:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
          Looks like you're lost!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-text-muted sm:text-base">
          The page you're looking for might have been removed, had its name
          changed, or is temporarily unavailable. Don't worry, there's always a
          way back to making a difference!
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200/40 transition hover:-translate-y-1 hover:bg-purple-700 dark:shadow-purple-950/40"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition hover:bg-muted"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            Made with <span className="text-red-500">♥</span> for a better
            community.
          </p>
          <p className="mt-2 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400">
            KINDCONNECT
          </p>
        </div>
      </div>
    </main>
  );
}
