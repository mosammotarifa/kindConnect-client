import { showEventData } from "@/lib/action";
import { ArrowRight, CalendarDays, Clock, Plus, Users } from "lucide-react";
import Link from "next/link";

const ShowEvent = async () => {
  const showevent = await showEventData();
  return (
    <section className="min-h-screen bg-background px-4 py-14 transition-colors sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              ✨ Discover Your Community
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Explore{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Events
              </span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
              Discover meaningful experiences, meet amazing people, and become
              part of something bigger.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-border bg-card px-5 py-3 shadow-sm">
              <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">
                {showevent.length}
              </p>
              <p className="text-xs font-medium text-text-muted">
                Available Events
              </p>
            </div>

            <Link href="/create-event">
              <button className="flex items-center gap-2 rounded-2xl bg-purple-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-purple-700 hover:shadow-xl dark:shadow-purple-950/40">
                <Plus size={19} />
                Create Event
              </button>
            </Link>
          </div>
        </div>

        {/* Event Cards */}
        {showevent.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-24 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
              <CalendarDays size={30} />
            </div>

            <h3 className="text-xl font-bold text-foreground">No Events Yet</h3>

            <p className="mt-2 text-sm text-text-muted">
              Be the first to bring your community together!
            </p>

            <button className="mt-6 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
              Create Your First Event
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {showevent.map((event) => (
              <article
                key={event._id}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100/70 dark:hover:shadow-purple-950/30"
              >
                {/* Event Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-xs font-bold text-purple-700 shadow-sm">
                    {event.category}
                  </span>

                  <div className="absolute bottom-4 left-5 text-white">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                      Community Event
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {event.location}
                    </p>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="line-clamp-1 text-xl font-bold text-foreground transition group-hover:text-purple-700 dark:group-hover:text-purple-400">
                    {event.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-text-muted">
                    {event.description}
                  </p>

                  {/* Organizer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                        Organized by
                      </p>
                      <p className="mt-1 truncate text-sm font-bold text-foreground">
                        {event.organizerName}
                      </p>
                    </div>

                    <Link href={`/show-event/${event._id}`}>
                      <button className="flex shrink-0 items-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-purple-700">
                        View Details
                        <ArrowRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowEvent;
