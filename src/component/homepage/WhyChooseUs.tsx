import {
  ArrowRight,
  CalendarCheck,
  ChartNoAxesCombined,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Connect with like-minded people who share your passion for helping others and building stronger communities.",
  },
  {
    icon: MapPin,
    title: "Local Opportunities",
    description:
      "Discover meaningful social events and volunteering opportunities happening right in your neighborhood.",
  },
  {
    icon: HeartHandshake,
    title: "Make Real Impact",
    description:
      "Turn your time and kindness into positive changes that make a real difference in people's lives.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Event Creation",
    description:
      "Create, manage, and organize social service events with simple and user-friendly tools.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Community",
    description:
      "Build a safer volunteering experience through event reporting, moderation, and community guidelines.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Track Your Impact",
    description:
      "Keep track of your joined events, organized activities, and volunteering journey.",
  },
];
const WhyChooseUs = () => {
  return (
    <section className="bg-background px-5 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
            WHY KINDCONNECT
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="text-purple-600 dark:text-purple-400">
              KindConnect?
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-text-muted">
            More than an event platform. A community built on kindness,
            connection, and positive change. Together, we make every little
            action count.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/70 dark:hover:border-purple-800 dark:hover:shadow-purple-950/30"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-950 dark:text-purple-400 dark:group-hover:bg-purple-600 dark:group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {reason.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-purple-500 dark:text-purple-400">
                    0{index + 1}
                  </span>

                  <div className="h-1 w-12 rounded-full bg-purple-200 transition-all duration-300 group-hover:w-20 group-hover:bg-purple-600 dark:bg-purple-900 dark:group-hover:bg-purple-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <Link
            href="/show-event"
            className="inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Discover Our Community
            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
