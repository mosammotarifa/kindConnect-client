import { getEventDataByEmail } from "@/lib/action";
import { auth } from "@/lib/auth";
import {
  CalendarDays,
  Eye,
  HeartHandshake,
 
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import EditManage from "./EditManage";
import DeleteManage from "./DeleteManage";
import { getTokenFromServer } from "@/lib/tokenFromSarver";

const ManageEvent = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.email) {
    return <div>Please login to see your joined events.</div>;
  }
  const token = await getTokenFromServer();
  const manageEvent = await getEventDataByEmail(session?.user?.email, token);
  console.log(manageEvent);

  return (
    <section className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              <CalendarDays size={14} />
              Organizer Dashboard
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Manage Your Events
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
              Keep track of your community initiatives, update event details,
              and manage everything in one place.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-muted">
                  Total Events Created
                </p>
                <h2 className="mt-3 text-4xl font-extrabold text-foreground">
                  {manageEvent.length}
                </h2>
                <p className="mt-2 text-xs text-text-muted">
                  Events under your management
                </p>
              </div>

              <div className="rounded-2xl bg-purple-100 p-4 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <CalendarDays size={30} />
              </div>
            </div>
          </div>
        </div>

        {/* Events Heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Your Created Events
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Manage and organize your activities.
            </p>
          </div>

          <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
            {manageEvent.length} Events
          </span>
        </div>

        {/* Events */}
        {manageEvent.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card px-5 py-20 text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
              <CalendarDays size={38} />
            </div>

            <h3 className="text-xl font-bold text-foreground">No Events Yet</h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-muted">
              You havent created any events yet. Start organizing an event and
              make a difference in your community.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {manageEvent.map((manageData) => (
              <div
                key={manageData._id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={manageData.image}
                    alt={manageData.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {manageData.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="line-clamp-1 text-xl font-bold text-white">
                      {manageData.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-5 p-5">
                  <p className="line-clamp-2 min-h-12 text-sm leading-6 text-text-muted">
                    {manageData.description}
                  </p>

                  {/* Organizer */}
                  <div className="flex items-center gap-3 rounded-xl bg-muted/70 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                      <HeartHandshake size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-text-muted">Organized by</p>
                      <p className="truncate text-sm font-bold text-foreground">
                        {manageData.organizerName}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border" />

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <Link
                      href={`/show-event/${manageData._id}`}
                      className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 py-2  px-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400"
                    >
                      <Eye size={17} />
                      View
                    </Link>

                    {/* Edit */}
                    <EditManage manageData={manageData} />

                    {/* Delete */}
                    <DeleteManage manageData={manageData} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageEvent;
