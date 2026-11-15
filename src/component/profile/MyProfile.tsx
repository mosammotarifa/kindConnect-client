"use client";
import { useSession } from "@/lib/auth-client";
import {
  CalendarDays,
  Camera,
  HeartHandshake,
  Mail,
  Save,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import React from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const initials =
    session?.user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-purple-600 dark:text-purple-400">
            My Account
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-text-muted sm:text-base">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Banner */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 p-7 shadow-lg shadow-purple-200 dark:shadow-purple-950/30 sm:p-10">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative flex flex-col items-center gap-5 sm:flex-row">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white/80 bg-white text-3xl font-extrabold text-purple-700 shadow-xl">
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>

              <button
                type="button"
                aria-label="Change profile picture"
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-white text-purple-700 shadow-md transition hover:bg-purple-50"
              >
                <Camera size={15} />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white">
                {session?.user?.name || "Welcome, User"}
              </h2>
              <p className="mt-1 text-sm text-purple-100">
                {session?.user?.email}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <HeartHandshake size={14} />
                KindConnect Member
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Account Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-5 font-bold text-foreground">
                Account Overview
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                    <UserRound size={19} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Account Type</p>
                    <p className="text-sm font-semibold text-foreground">
                      Community Member
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
                    <ShieldCheck size={19} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Account Status</p>
                    <p className="text-sm font-semibold text-foreground">
                      Active
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <CalendarDays size={19} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Member Since</p>
                    <p className="text-sm font-semibold text-foreground">
                      {session?.user?.createdAt
                        ? new Date(session.user.createdAt).toLocaleDateString(
                            "en-US",
                            { month: "long", year: "numeric" },
                          )
                        : "New Member"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Card */}
            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-950/50">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white">
                <HeartHandshake size={22} />
              </div>
              <h3 className="font-bold text-purple-950 dark:text-purple-100">
                Be Part of Something Good!
              </h3>
              <p className="mt-2 text-sm leading-6 text-purple-700 dark:text-purple-300">
                Connect with people, join meaningful events and make a positive
                difference in your community.
              </p>
            </div>
          </div>

          {/* Right Profile Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="mb-7 border-b border-border pb-5">
                <h2 className="text-xl font-bold text-foreground">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  Update your personal details below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserRound
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                      size={19}
                    />
                    <input
                      type="text"
                      name="name"
                      defaultValue={session?.user.name}
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-text-muted outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-50 dark:focus:ring-purple-950"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                      size={19}
                    />
                    <input
                      type="email"
                      name="email"
                      defaultValue={session?.user?.email}
                      // value={session?.user?.email || ""}
                      readOnly
                      className="w-full cursor-not-allowed rounded-xl border border-border bg-muted py-3.5 pl-12 pr-4 text-sm text-text-muted outline-none"
                    />
                  </div>
                  <p className="mt-2 text-xs text-text-muted">
                    Your registered email address cannot be changed here.
                  </p>
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8 flex justify-end border-t border-border pt-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700 dark:shadow-purple-950/30 sm:w-auto"
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
