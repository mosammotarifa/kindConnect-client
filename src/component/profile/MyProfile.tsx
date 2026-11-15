"use client";
import { updateUser, useSession } from "@/lib/auth-client";
import {
  CalendarDays,
  Camera,
  HeartHandshake,
  Mail,
  Save,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const initials =
    session?.user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
        return;
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleImageUpdate = async () => {
    if (!imageUrl.trim()) {
      toast.error("Please enter an image URL");
      return;
    }

    try {
      setImageLoading(true);

      const { error } = await updateUser({
        image: imageUrl.trim(),
      });

      if (error) {
        toast.error(error.message || "Failed to update profile picture");
        return;
      }

      toast.success("Profile picture updated successfully!");
      setImageUrl("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setImageLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600 dark:text-purple-400">
            My Account
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Banner */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C1D95] via-purple-700 to-fuchsia-600 p-6 shadow-xl shadow-purple-200/50 dark:shadow-purple-950/30 sm:p-9">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* User Information */}
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="relative shrink-0">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white/80 bg-white text-3xl font-extrabold text-purple-700 shadow-xl">
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
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-200">
                  Welcome Back
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  {session?.user?.name || "Welcome, User"}
                </h2>
                <p className="mt-2 text-sm text-purple-100">
                  {session?.user?.email}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  <HeartHandshake size={15} />
                  KindConnect Member
                </div>
              </div>
            </div>

            {/* Image URL Update */}
            <div className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md lg:max-w-sm">
              <div className="mb-3 flex items-center gap-2 text-white">
                <Camera size={18} />
                <h3 className="text-sm font-bold">Update Profile Picture</h3>
              </div>

              <p className="mb-3 text-xs leading-5 text-purple-100">
                Paste a public image URL to change your profile picture.
              </p>

              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-xs text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
              />

              <button
                type="button"
                onClick={handleImageUpdate}
                disabled={imageLoading}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Camera size={16} />
                {imageLoading ? "Updating..." : "Update Picture"}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Overview */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">
                  Account Overview
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Your membership details
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <UserRound size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Account Type</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Community Member
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Account Status</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Active
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Member Since</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
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

            {/* Community Card */}
            <div className="overflow-hidden rounded-2xl border border-purple-100 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-950">
                <HeartHandshake size={24} />
              </div>

              <h3 className="text-lg font-bold text-purple-950 dark:text-purple-100">
                Be Part of Something Good!
              </h3>

              <p className="mt-2 text-sm leading-6 text-purple-700 dark:text-purple-300">
                Connect with people, join meaningful events and make a positive
                difference in your community.
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="mb-7 flex items-center gap-4 border-b border-border pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                  <UserRound size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-xs text-text-muted">
                    Update your personal details below.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Full Name
                  </label>

                  <div className="relative">
                    <UserRound
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
                      size={19}
                    />
                    <input
                      type="text"
                      name="name"
                      defaultValue={session?.user?.name || ""}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-4 text-sm text-foreground outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950"
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
                      size={19}
                    />
                    <input
                      type="email"
                      name="email"
                      value={session?.user?.email || ""}
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
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-purple-950/30 sm:w-auto"
                >
                  <Save size={18} />
                  {loading ? "Saving..." : "Save Changes"}
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
