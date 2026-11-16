import {
  ArrowRight,

  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-background px-5 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-muted p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          {/* Left Image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[420px]">
            <Image
              src="/volunteer2.png"
              alt="Volunteers making a difference together"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Image Overlay Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                  <Users size={23} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Stronger Together</p>
                  <p className="text-xs text-text-muted">
                    Every volunteer matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start py-5 lg:py-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm dark:text-purple-300">
              <Sparkles size={16} />
              MAKE AN IMPACT
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Be the Reason
              <br />
              Someone{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Smiles Today.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-text-muted">
              Your time, your kindness, and your contribution can change lives.
              Connect with people who care, participate in meaningful events,
              and make your community a better place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/sign-up"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-200/30 transition hover:-translate-y-1 hover:bg-purple-700"
              >
                <HeartHandshake size={20} />
                Join the Community
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/create-event"
                className="inline-flex items-center justify-center rounded-xl border border-purple-200 bg-card px-7 py-4 font-semibold text-purple-700 transition hover:border-purple-500 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
              >
                Start Your Own Event
              </Link>
            </div>

            {/* Bottom Message */}
            <div className="mt-9 flex items-center gap-3 border-t border-border pt-6">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-muted bg-purple-200 dark:bg-purple-900">
                  <Users
                    size={17}
                    className="text-purple-700 dark:text-purple-300"
                  />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-muted bg-pink-200 dark:bg-pink-900">
                  <HeartHandshake
                    size={17}
                    className="text-pink-700 dark:text-pink-300"
                  />
                </div>
              </div>

              <p className="text-sm text-text-muted">
                <span className="font-bold text-foreground">
                  Every act counts.
                </span>
                Be part of the change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
