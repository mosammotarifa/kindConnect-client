
import { ArrowRight, HeartHandshake, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100 px-6 py-16 text-center shadow-xl transition-colors duration-300 dark:from-purple-950 dark:via-purple-900 dark:to-indigo-950 sm:px-12 lg:py-20">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 dark:bg-white/10" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 dark:bg-white/10" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white dark:bg-white/15">
            <HeartHandshake size={34} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">
            Stay Connected
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Be Part of Something
            <span className="block text-purple-700 dark:text-purple-200">
              Meaningful!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-purple-100 sm:text-base">
            Get updates about upcoming community events, volunteer
            opportunities, and inspiring stories of positive change.
          </p>

          {/* Newsletter UI only - no functionality */}
          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-2xl border border-purple-100 bg-white p-2 dark:border-white/10 dark:bg-gray-900 sm:flex-row sm:rounded-full">
            <div className="flex flex-1 items-center gap-3 px-4">
              <Mail size={20} className="shrink-0 text-purple-500 dark:text-purple-400" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
              />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-purple-700 px-7 py-3 font-semibold text-white transition hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="mt-5 text-xs text-purple-700 dark:text-purple-200">
            Join our community and be inspired to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
