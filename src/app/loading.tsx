import { HeartHandshake } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-background px-4 py-8 sm:px-6 lg:px-10">
      {/* Navbar Skeleton */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950">
            <HeartHandshake
              className="text-purple-300 dark:text-purple-500"
              size={24}
            />
          </div>
          <div className="h-6 w-32 rounded-lg bg-muted" />
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-3 w-16 rounded-full bg-muted" />
          ))}
        </div>

        <div className="h-10 w-24 rounded-xl bg-purple-100 dark:bg-purple-950" />
      </nav>

      {/* Hero Skeleton */}
      <section className="mx-auto mt-8 max-w-7xl">
        <div className="relative h-[300px] overflow-hidden rounded-[2rem] bg-muted sm:h-[400px] lg:h-[460px]">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-background to-muted" />

          <div className="absolute bottom-8 left-6 right-6 space-y-5 sm:bottom-12 sm:left-12">
            <div className="h-5 w-32 rounded-full bg-card/60" />
            <div className="h-9 w-3/4 max-w-xl rounded-xl bg-card/70 sm:h-12" />
            <div className="h-4 w-2/3 max-w-md rounded-full bg-card/50" />
            <div className="h-12 w-36 rounded-xl bg-purple-200/80 dark:bg-purple-900/80" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto mt-12 max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 space-y-3">
          <div className="h-3 w-28 rounded-full bg-purple-200 dark:bg-purple-900" />
          <div className="h-8 w-64 max-w-full rounded-lg bg-muted" />
          <div className="h-4 w-80 max-w-full rounded-lg bg-muted" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              {/* Image */}
              <div className="h-52 bg-muted" />

              {/* Card Content */}
              <div className="space-y-4 p-5">
                <div className="h-3 w-24 rounded-full bg-purple-100 dark:bg-purple-950" />
                <div className="h-6 w-3/4 rounded-lg bg-muted" />
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-2/3 rounded-full bg-muted" />

                <div className="flex items-center justify-between pt-3">
                  <div className="h-4 w-24 rounded-full bg-muted" />
                  <div className="h-9 w-24 rounded-xl bg-purple-100 dark:bg-purple-950" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section Skeleton */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="h-52 rounded-3xl bg-muted" />
          <div className="h-52 rounded-3xl bg-muted" />
        </section>
      </div>
    </main>
  );
}
