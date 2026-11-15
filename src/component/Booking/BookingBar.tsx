"use client";
import { BookingData } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import { Event, IJoined } from "@/type/type";
import { ArrowRight, Users } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const BookingBar = ({ eventdetails }: { eventdetails: Event }) => {
  const { data: session } = useSession();
  const handleSubmit = async () => {
    //   e.preventDefault();
    //   const formData = new FormData(e.currentTarget);
    const joinedUserData: IJoined = {
      //     eventName:String(formData.get("eventName")),
      //     time:String(formData.get("time")),
      //     location:String(formData.get("location")),
      //     date:String(formData.get("date"))
      eventName: eventdetails.title,
      location: eventdetails.location,
      date: eventdetails.date,
      time: eventdetails.time,
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      userId: session?.user?.id,
    };
    try {
      const result = await BookingData(joinedUserData);
      console.log(result);
      toast.success("Successfull Joined");
    } catch (error) {
      console.error(error);
      toast.error("failed to joined");
    }
  };
  return (
    
<div>
  <div className="sticky top-24 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">

    {/* Header */}
    <div className="bg-gradient-to-br from-purple-700 to-purple-500 p-7 text-white">
      <p className="text-sm font-semibold uppercase tracking-widest text-purple-200">
        Be Part of Something Good
      </p>

      <h2 className="mt-3 text-3xl font-extrabold">
        Join This Event
      </h2>

      <p className="mt-3 text-sm leading-7 text-purple-100">
        Your participation can make a real difference. Join our community
        and help create positive change.
      </p>
    </div>

    <div className="space-y-5 p-6 sm:p-7">

      {/* Capacity */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/40">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
            Total Capacity
          </p>
          <Users size={20} className="text-purple-600 dark:text-purple-400" />
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-4xl font-extrabold text-purple-700 dark:text-purple-300">
            {eventdetails.capacity}
          </span>
          <span className="mb-1 text-sm text-text-muted">
            Participants
          </span>
        </div>

        <p className="mt-2 text-xs text-text-muted">
          Maximum participant limit for this event
        </p>
      </div>

      {/* Quick Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Date</span>
          <span className="font-semibold text-foreground">
            {eventdetails.date}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Time</span>
          <span className="font-semibold text-foreground">
            {eventdetails.time}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Category</span>
          <span className="font-semibold text-purple-700 dark:text-purple-400">
            {eventdetails.category}
          </span>
        </div>
      </div>

      {/* Join Button */}
      <div className="border-t border-border pt-5">
        <button
          type="button"
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-purple-200/50 transition hover:-translate-y-0.5 hover:bg-purple-700 active:translate-y-0 dark:shadow-purple-950/40"
        >
          Join Event
          <ArrowRight size={19} />
        </button>

        <p className="mt-4 text-center text-xs text-text-muted">
          Make a difference. Be a volunteer!
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default BookingBar;
