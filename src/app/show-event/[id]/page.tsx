import BookingBar from "@/component/Booking/BookingBar";
import { getEventDataById } from "@/lib/action";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  UserRound,
  Users,
} from "lucide-react";
interface IEventDetailsPage {
  params: Promise<{ id: string }>;
}

const EventDetailsPage = async ({ params }: IEventDetailsPage) => {
  const { id } = await params;
  const eventdetails = await getEventDataById(id);
  return (
    <main className="min-h-screen bg-background px-4 py-8 transition-colors sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-muted">
          <span>Home</span>
          <span className="text-purple-400">/</span>
          <span>Events</span>
          <span className="text-purple-400">/</span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Event Details
          </span>
        </div>

        {/* Hero - Split Layout */}
        <section className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm lg:grid-cols-5">
          {/* Image */}
          <div className="relative min-h-[300px] overflow-hidden lg:col-span-3 lg:min-h-[530px]">
            <img
              src={eventdetails.image}
              alt={eventdetails.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-lg">
                {eventdetails.category}
              </span>
            </div>

            <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                KINDCONNECT COMMUNITY EVENT
              </p>

              <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {eventdetails.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
                <span className="flex items-center gap-2">
                  <CalendarDays size={17} className="text-purple-300" />
                  {new Date(eventdetails.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={17} className="text-purple-300" />
                  {eventdetails.location}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Information */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-2 lg:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              Be Part of the Change
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              Small actions can create a big impact.
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-muted">
              Every community initiative starts with people who care. Discover
              this opportunity, connect with others, and contribute to something
              meaningful.
            </p>

            <div className="my-8 border-t border-border" />

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                  <Clock size={21} />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Event Starts At</p>
                  <p className="mt-1 font-bold text-foreground">
                    {eventdetails.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400">
                  <Users size={21} />
                </div>
                <div>
                  <p className="text-xs text-text-muted">
                    Participant Capacity
                  </p>
                  <p className="mt-1 font-bold text-foreground">
                    {eventdetails.capacity} People
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <HeartHandshake size={21} />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Organized By</p>
                  <p className="mt-1 font-bold text-foreground">
                    {eventdetails.organizerName}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-900 dark:bg-purple-950/30">
              <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                Your presence matters!
              </p>
              <p className="mt-1 text-xs leading-5 text-purple-600 dark:text-purple-400">
                Join hands with your community and help make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* About */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-purple-600" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  The Story Behind
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                About This Event
              </h2>

              <p className="mt-6 whitespace-pre-line text-base leading-8 text-text-muted">
                {eventdetails.description}
              </p>
            </section>

            {/* Event Information */}
            <section className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="border-b border-border p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  Plan Your Visit
                </p>

                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  Event Information
                </h2>

                <p className="mt-2 text-sm text-text-muted">
                  Everything you need before joining us.
                </p>
              </div>

              <div className="divide-y divide-border px-6 sm:px-8">
                {/* Date */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                    <CalendarDays size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Date
                    </p>
                    <p className="mt-1 font-bold text-foreground">
                      {new Date(eventdetails.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400">
                    <Clock size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Starting Time
                    </p>
                    <p className="mt-1 font-bold text-foreground">
                      {eventdetails.time}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <MapPin size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Location
                    </p>
                    <p className="mt-1 break-words font-bold text-foreground">
                      {eventdetails.location}
                    </p>
                  </div>
                </div>

                {/* Capacity */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
                    <Users size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Total Capacity
                    </p>
                    <p className="mt-1 font-bold text-foreground">
                      {eventdetails.capacity} Participants
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                    <HeartHandshake size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Category
                    </p>
                    <p className="mt-1 font-bold text-foreground">
                      {eventdetails.category}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Organizer */}
            <section>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  Meet The Organizer
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  The Person Behind This Initiative
                </h2>
              </div>

              <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg">
                  <UserRound size={30} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {eventdetails.organizerName}
                  </h3>
                </div>

                <div className="w-fit rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700 dark:bg-green-950/50 dark:text-green-400">
                  <span className="mr-2 inline-block size-2 rounded-full bg-green-500" />
                  Event Organizer
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <BookingBar eventdetails={eventdetails} />
          </aside>
        </div>

        {/* Bottom Message */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-600 px-6 py-10 text-center text-white sm:px-12">
          <HeartHandshake className="mx-auto mb-4" size={35} />

          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Together, We Can Make a Difference.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-purple-100">
            Every volunteer, every contribution, and every small act of kindness
            helps build a stronger community.
          </p>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsPage;
