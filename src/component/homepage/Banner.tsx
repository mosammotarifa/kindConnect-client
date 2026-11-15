import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Plus,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-violet-100 dark:from-[#100D20] dark:via-background dark:to-[#211438]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
            <HeartHandshake size={18} />
            CONNECT · VOLUNTEER · INSPIRE
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Together, We
              <br />
              Make a{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Difference.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-text-muted md:text-lg">
              Discover local social events, connect with passionate people, and
              contribute to a kinder, stronger community. Every small action
              creates a big impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/show-event"
              className="group flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-200/30 transition hover:-translate-y-1 hover:bg-purple-700"
            >
              <CalendarDays size={19} />
              Explore Events
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/create-event"
              className="flex items-center gap-2 rounded-xl border-2 border-purple-300 bg-card px-6 py-3.5 font-semibold text-purple-700 transition hover:-translate-y-1 hover:border-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
            >
              <Plus size={20} />
              Create Event
            </Link>
          </div>

          {/* Community Statistics */}
          <div className="grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Users size={21} />
                <h3 className="text-2xl font-bold text-foreground">5K+</h3>
              </div>
              <p className="mt-1 text-sm text-text-muted">Volunteers</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <CalendarDays size={21} />
                <h3 className="text-2xl font-bold text-foreground">250+</h3>
              </div>
              <p className="mt-1 text-sm text-text-muted">Events</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <HeartHandshake size={21} />
                <h3 className="text-2xl font-bold text-foreground">120+</h3>
              </div>
              <p className="mt-1 text-sm text-text-muted">Communities</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Decorative Background */}
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-purple-200/70 blur-2xl dark:bg-purple-700/30" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-pink-200/70 blur-2xl dark:bg-pink-700/20" />

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-card shadow-2xl shadow-purple-200/60 dark:shadow-purple-950/40">
            <Image
              src="/volunteer1.png"
              alt="Community volunteers working together"
              width={700}
              height={750}
              priority
              className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[520px]"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
              <HeartHandshake size={26} />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Be the Change!</h4>
              <p className="text-xs text-text-muted">Your kindness matters.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Shape */}
      <div className="absolute -bottom-16 left-0 h-32 w-full rounded-[50%] bg-purple-100/70 dark:bg-purple-950/50" />
    </section>
  );
};

export default Banner;
