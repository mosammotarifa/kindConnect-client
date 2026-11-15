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
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-text-muted">
          <span className="transition hover:text-purple-600">Home</span>
          <span>/</span>
          <span className="transition hover:text-purple-600">Events</span>
          <span>/</span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Event Details
          </span>
        </div>

        {/* Hero Section */}
        <section className="group relative isolate overflow-hidden rounded-[2rem] bg-[#171321] shadow-2xl shadow-purple-900/10">
          <img
            src={eventdetails.image}
            alt={eventdetails.title}
            className="h-[360px] w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] sm:h-[440px] lg:h-[550px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#100D19] via-[#100D19]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#100D19]/50 to-transparent" />

          <div className="absolute left-5 top-5 sm:left-9 sm:top-9">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-xl">
              {eventdetails.category}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-14">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Discover Something Special
            </span>

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {eventdetails.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md">
                <CalendarDays size={18} className="text-purple-300" />
                {new Date(eventdetails.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md">
                <MapPin size={18} className="text-purple-300" />
                {eventdetails.location}
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* About Event */}
            <section className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-9">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                  <HeartHandshake size={26} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                    Get To Know
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">
                    About This Event
                  </h2>
                </div>
              </div>

              <p className="text-base leading-8 text-text-muted">
                {eventdetails.description}
              </p>
            </section>

            {/* Event Information */}
            <section>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  Event Essentials
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  Everything You Need to Know
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Important information to help you prepare for the event.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Date */}
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-950 dark:text-purple-400 dark:group-hover:bg-purple-600">
                    <CalendarDays size={25} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Event Date
                    </p>
                    <h3 className="mt-2 font-bold text-foreground">
                      {new Date(eventdetails.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                  </div>
                </div>

                {/* Time */}
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white dark:bg-pink-950 dark:text-pink-400 dark:group-hover:bg-pink-600">
                    <Clock size={25} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Starting Time
                    </p>
                    <h3 className="mt-2 font-bold text-foreground">
                      {eventdetails.time}
                    </h3>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:group-hover:bg-blue-600">
                    <MapPin size={25} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Event Location
                    </p>
                    <h3 className="mt-2 break-words font-bold text-foreground">
                      {eventdetails.location}
                    </h3>
                  </div>
                </div>

                {/* Capacity */}
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white dark:bg-green-950 dark:text-green-400 dark:group-hover:bg-green-600">
                    <Users size={25} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      Total Capacity
                    </p>
                    <h3 className="mt-2 font-bold text-foreground">
                      {eventdetails.capacity} Participants
                    </h3>
                  </div>
                </div>
              </div>
            </section>

            {/* Organizer */}
            <section className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-9">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-900/20" />

              <div className="relative">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  The People Behind It
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200 dark:shadow-purple-950/40">
                    <UserRound size={36} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {eventdetails.organizerName}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 break-all text-sm text-text-muted">
                      <Mail
                        size={16}
                        className="shrink-0 text-purple-500 dark:text-purple-400"
                      />
                      {eventdetails.organizerEmail}
                    </p>
                  </div>

                  <div className="sm:ml-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700 dark:bg-green-950/50 dark:text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Verified Organizer
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <BookingBar eventdetails={eventdetails} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsPage;
