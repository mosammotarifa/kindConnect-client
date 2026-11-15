import { joinedUserData } from "@/lib/action";
import { auth } from "@/lib/auth";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  HeartHandshake,
  MapPin,
  Plus,
  Users,
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const JoindData = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const joineddata = await joinedUserData(session?.user?.email);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingJoinedData = joineddata
    .filter((joined) => {
      const eventDate = new Date(`${joined.date}T00:00:00`);
      return eventDate >= today;
    })
    .sort((a, b) => {
      return (
        new Date(`${a.date}T00:00:00`).getTime() -
        new Date(`${b.date}T00:00:00`).getTime()
      );
    });
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">
          Your Activities
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Joined Events
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Keep track of the events you have joined.
        </p>
      </div>

      {upcomingJoinedData.length === 0 ? (
        /* Empty State */
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-purple-200 bg-gradient-to-br from-purple-50/80 via-card to-indigo-50/50 px-6 py-12 text-center dark:border-purple-900 dark:from-purple-950/30 dark:via-card dark:to-indigo-950/20">
          <div className="relative mb-6">
            <div className="flex size-24 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950">
              <HeartHandshake
                size={43}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <span className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full border-4 border-card bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Plus size={16} />
            </span>
          </div>

          <span className="rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            Your Journey Starts Here
          </span>

          <h3 className="mt-5 text-2xl font-extrabold text-foreground sm:text-3xl">
            No Joined Events Yet!
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-text-muted">
            You haven't joined any community events yet. Explore upcoming
            activities, connect with people, and start making a positive
            difference in your community.
          </p>

          <Link
            href="/show-event"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-600/20 transition hover:-translate-y-1 hover:bg-purple-700"
          >
            Explore Events
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-5 text-xs text-text-muted">
            Every small action can create a big impact.
          </p>
        </div>
      ) : (
        /* Joined Events */
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {upcomingJoinedData.map((joined) => (
            <div
              key={joined._id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:border-purple-200 hover:shadow-md dark:hover:border-purple-800 sm:p-7"
            >
              {/* Event Heading */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    Event Joined
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-foreground">
                    {joined.eventName}
                  </h3>
                </div>

                <div className="shrink-0 rounded-xl bg-purple-50 p-3 dark:bg-purple-950">
                  <Users
                    size={23}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Event Information */}
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={19}
                    className="mt-1 shrink-0 text-purple-600 dark:text-purple-400"
                  />
                  <div>
                    <p className="text-xs font-medium text-text-muted">
                      Event Date
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {new Date(`${joined.date}T00:00:00`).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={19}
                    className="mt-1 shrink-0 text-purple-600 dark:text-purple-400"
                  />
                  <div>
                    <p className="text-xs font-medium text-text-muted">
                      Starting Time
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {joined.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-purple-600 dark:text-purple-400"
                />
                <div>
                  <p className="text-xs font-medium text-text-muted">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {joined.location}
                  </p>
                </div>
              </div>

              {/* User Information */}
              <div className="mt-7 flex items-center gap-3 rounded-xl bg-muted p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                  {joined.userName?.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {joined.userName}
                  </p>
                  <p className="truncate text-xs text-text-muted">
                    {joined.userEmail}
                  </p>
                </div>

                <span className="ml-auto shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                  Joined
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoindData;
