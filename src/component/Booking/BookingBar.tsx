"use client";

import { BookingData, checkJoinedStatus, undoBooking } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/tokenFromClient";
import { Event, IJoined } from "@/type/type";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  HeartHandshake,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingBar = ({ eventdetails }: { eventdetails: Event }) => {
  const { data: session } = useSession();

  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [joinedCount, setJoinedCount] = useState(eventdetails.joinedCount ?? 0);

  const availableCapacity = Math.max(0, eventdetails.capacity - joinedCount);

  const handleSubmit = async () => {
    if (!session?.user) {
      toast.error("Please login first to join this event");
      return;
    }

    if (!eventdetails._id) {
      toast.error("Event ID not found");
      return;
    }

    if (!session.user.id || !session.user.email) {
      toast.error("User information is missing");
      return;
    }

    try {
      setLoading(true);
const token =await getTokenFromClient()
      const joined = await checkJoinedStatus(eventdetails._id, session.user.id,token);

      if (joined) {
        const token= await getTokenFromClient()
        await undoBooking(eventdetails._id, session.user.id,token);

        setIsJoined(false);
        setJoinedCount((prev) => Math.max(0, prev - 1));

        toast.success("You have left the event successfully");
      } else {
        if (availableCapacity <= 0) {
          toast.error("Sorry! This event is full");
          return;
        }

        const joinedUserData: IJoined = {
          eventId: eventdetails._id,
          eventName: eventdetails.title,
          location: eventdetails.location,
          date: eventdetails.date,
          time: eventdetails.time,
          userName: session.user.name ?? "",
          userEmail: session.user.email,
          userId: session.user.id,
        };
const token = await getTokenFromClient()
        await BookingData(joinedUserData,token);

        setIsJoined(true);
        setJoinedCount((prev) => prev + 1);

        toast.success("Successfully joined the event!");
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="sticky top-24">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-purple-950/5">
        <div className="h-2 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500" />

        <div className="p-6 sm:p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                <HeartHandshake size={14} />
                Make an Impact
              </span>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Ready to Make
                <span className="block text-purple-600 dark:text-purple-400">
                  a Difference?
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                Your time and kindness can create meaningful change. Become part
                of this community initiative.
              </p>
            </div>

            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
              <HeartHandshake size={25} />
            </div>
          </div>

          {/* Capacity */}
          <div className="mt-7 rounded-2xl bg-muted/70 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Available Participants
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-foreground">
                    {availableCapacity}
                  </span>
                  <span className="text-sm text-text-muted">Spots Left</span>
                </div>
              </div>

              <div className="flex size-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                <Users size={23} />
              </div>
            </div>

            <p className="mt-3 text-xs text-text-muted">
              Total capacity: {eventdetails.capacity} participants
            </p>
          </div>

          {/* Event Summary */}
          <div className="mt-7">
            <h3 className="mb-4 text-sm font-bold text-foreground">
              Event Overview
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                  <CalendarDays size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">Event Date</p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {eventdetails.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                  <Clock size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">Event Time</p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {eventdetails.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                  <HeartHandshake size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">Category</p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {eventdetails.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join / Undo Button */}
          <div className="mt-7 border-t border-border pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || (!isJoined && availableCapacity <= 0)}
              className={`group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                isJoined
                  ? "bg-red-600 shadow-red-600/20 hover:-translate-y-1 hover:bg-red-700"
                  : "bg-purple-600 shadow-purple-600/20 hover:-translate-y-1 hover:bg-purple-700"
              }`}
            >
              {loading
                ? "Please wait..."
                : isJoined
                  ? "Undo Join"
                  : availableCapacity <= 0
                    ? "Event Full"
                    : "Join This Event"}

              {!loading && (
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2">
              <HeartHandshake size={15} className="text-purple-500" />
              <p className="text-xs text-text-muted">
                Small actions. Big impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
