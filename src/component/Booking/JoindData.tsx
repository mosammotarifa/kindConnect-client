import { joinedUserData } from "@/lib/action";
import { auth } from "@/lib/auth";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { headers } from "next/headers";
import React from "react";

const JoindData = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const joineddata = await joinedUserData(session?.user?.email);
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {joineddata.map((joined) => (
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
                <p className="text-xs font-medium text-text-muted">Location</p>
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
    </div>
  );
};

export default JoindData;
