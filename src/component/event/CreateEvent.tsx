"use client";
import { createEventForm } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import { Event } from "@/type/type";
import {
  CalendarDays,
  Clock,
  HeartHandshake,
  ImagePlus,
  MapPin,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const categories = [
  "Tree Plantation",
  "Blood Donation",
  "Charity",
  "Food Distribution",
  "Education",
  "Environmental Cleanup",
  "Community Support",
  "Other",
];
const CreateEvent = () => {
  const {data:session}= useSession()
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: Event = {
      title: String(formData.get("title")),
      category: String(formData.get("category")),
      description: String(formData.get("description")),
      image: String(formData.get("image")),
      date: String(formData.get("date")),
      time: String(formData.get("time")),
      location: String(formData.get("location")),
      capacity: Number(formData.get("capacity")),
      email:session?.user.email,
   
      organizerName: String(formData.get("organizerName")),
    };
    try {
      const result = await createEventForm(userData);
      router.push('/show-event')
      toast.success("successfully create event !!");
      console.log(result);
    } catch (error) {
      console.log(error);
      toast.error("try again to create event form");
    }
  };
  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            <HeartHandshake size={30} />
          </div>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Create a Community Event
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Bring people together and make a positive difference in your
            community.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
        >
          {/* Basic Information */}
          <section>
            <h2 className="mb-5 text-xl font-semibold text-foreground">
              Event Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Community Tree Plantation"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Event Category *
                </label>
                <select
                  name="category"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Event Description *
                </label>
                <textarea
                  name="description"
                  rows={5}
                  placeholder="Tell people what this event is about..."
                  required
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <ImagePlus
                    size={17}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Event Banner
                </label>
                <input
                  type="url"
                  name="image"
                  className="w-full rounded-xl border border-dashed border-purple-300 bg-muted p-4 text-sm text-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-purple-100 file:px-4 file:py-2 file:font-medium file:text-purple-700 dark:border-purple-800 dark:file:bg-purple-950 dark:file:text-purple-300"
                />
                <p className="mt-2 text-xs text-text-muted">
                  Upload an image to represent your event.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Date and Location */}
          <section>
            <h2 className="mb-5 text-xl font-semibold text-foreground">
              Date & Location
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <CalendarDays
                    size={17}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Clock
                    size={17}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Event Time *
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <MapPin
                    size={17}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Event Location *
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter event location"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Users
                    size={17}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Maximum Volunteers *
                </label>
                <input
                  type="number"
                  name="capacity"
                  min="1"
                  placeholder="e.g. 50"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Organizer */}
          <section>
            <h2 className="mb-5 text-xl font-semibold text-foreground">
              Organizer Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Organizer Name *
                </label>
                <input
                  type="text"
                  name="organizerName"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div>

              {/* <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Organizer Email *
                </label>
                <input
                  type="email"
                  name="organizerEmail"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-950"
                />
              </div> */}
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#7C3AED] px-6 py-4 font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-[#6D28D9] dark:shadow-purple-950"
          >
            Create Event
          </button>

          <p className="text-center text-xs text-text-muted">
            By creating this event, you agree to help build a better community.
          </p>
        </form>
      </div>
    </main>
  );
};

export default CreateEvent;
