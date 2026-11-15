"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { Dropdown, Avatar, Label } from "@heroui/react";
import { UserRound, LogOut, CalendarDays } from "lucide-react";
import Link from "next/link";

const AvatarProfile = () => {
  const { data: session } = useSession();

  const user = session?.user;

  const getInitials = (name?: string) => {
    return (
      name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "U"
    );
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full outline-none ring-offset-2 transition hover:ring-2 hover:ring-purple-300">
        <Avatar className="h-10 w-10 cursor-pointer border-2 border-purple-200 shadow-sm dark:border-purple-800">
          <Avatar.Image alt={user?.name || "User"} src={user?.image || ""} />
          <Avatar.Fallback delayMs={600}>
            {getInitials(user?.name)}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover className="w-64 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 px-4 py-5 dark:from-purple-950 dark:to-violet-950">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-white shadow-md dark:border-purple-800">
              <Avatar.Image
                alt={user?.name || "User"}
                src={user?.image || ""}
              />
              <Avatar.Fallback delayMs={600}>
                {getInitials(user?.name)}
              </Avatar.Fallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-purple-950 dark:text-purple-100">
                {user?.name || "User"}
              </p>
              <p className="truncate text-xs text-purple-600 dark:text-purple-300">
                {user?.email}
              </p>
              <span className="mt-1 inline-flex rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                Member
              </span>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <Dropdown.Menu>
          <Dropdown.Item id="profile" textValue="My Profile">
            <UserRound className="size-4 text-purple-600 dark:text-purple-400" />
            <Link href="/profile">
              <Label className="text-foreground">My Profile</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="createEvent" textValue="Create Event">
            <CalendarDays className="size-4 text-purple-600 dark:text-purple-400" />
            <Link href="/create-event">
              <Label className="text-foreground">Create Event</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="manageEvent" textValue="Manage Event">
            <CalendarDays className="size-4 text-purple-600 dark:text-purple-400" />
            <Link href="/manage-event">
              <Label className="text-foreground">Manage Event</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="joinedEvent" textValue="Joined Event">
            <CalendarDays className="size-4 text-purple-600 dark:text-purple-400" />
            <Link href="/joined-event">
              <Label className="text-foreground">Joined Event</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onAction={() => signOut()}
          >
            <LogOut className="size-4" />
            <Label>Log Out</Label>
          </Dropdown.Item>
        </Dropdown.Menu>

        {/* Footer */}
        <div className="border-t border-border px-4 py-3">
          <p className="text-center text-[11px] text-text-muted">
            KindConnect © 2026
          </p>
        </div>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default AvatarProfile;
