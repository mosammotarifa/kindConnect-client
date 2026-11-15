"use client";

import { useSession } from "@/lib/auth-client";
import {
  HeartHandshake,
  LogIn,
  Menu,
  UserPlus,
  X,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AvaterProfile from "../event/Avaterprofile";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [{ name: "Upcoming Events", href: "/show-event" }];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-200/30 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <HeartHandshake size={25} strokeWidth={2.2} />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Kind
              <span className="text-purple-600 dark:text-purple-400">
                Connect
              </span>
            </span>
            <span className="-mt-1 text-[9px] font-semibold uppercase tracking-[2.5px] text-text-muted">
              Make a difference
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    : "text-text-muted hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-950/60 dark:hover:text-purple-300"
                }`}
              >
                <CalendarDays
                  size={17}
                  className={
                    isActive
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-text-muted group-hover:text-purple-600 dark:group-hover:text-purple-400"
                  }
                />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          {session?.user ? (
            <div className="flex items-center gap-3 border-l border-border pl-5">
              <div className="text-right">
                <p className="text-xs font-semibold text-text-muted">
                  Welcome back
                </p>
                <p className="max-w-32 truncate text-sm font-bold text-foreground">
                  {session.user.name}
                </p>
              </div>
              <AvaterProfile />
            </div>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-full px-5 py-2.5 text-sm font-bold text-foreground transition hover:bg-muted hover:text-purple-600 dark:hover:text-purple-400"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-200/20 transition duration-300 hover:-translate-y-0.5 hover:bg-purple-700"
              >
                <UserPlus size={17} />
                Join Our Community
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-foreground transition hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-950 dark:hover:text-purple-300 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-card shadow-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-5 sm:px-6">
            {/* Mobile Links */}
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                      : "text-text-muted hover:bg-muted hover:text-purple-700 dark:hover:text-purple-300"
                  }`}
                >
                  <CalendarDays size={19} />
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Authentication */}
            <div className="border-t border-border pt-4">
              {session?.user ? (
                <div className="flex items-center justify-between rounded-2xl bg-muted p-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
                      Welcome back
                    </p>
                    <p className="truncate text-sm font-bold text-foreground">
                      {session.user.name}
                    </p>
                  </div>
                  <AvaterProfile />
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/sign-in"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-bold text-foreground transition hover:bg-muted hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <LogIn size={18} />
                    Sign In
                  </Link>

                  <Link
                    href="/sign-up"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-sm font-bold text-white shadow-md shadow-purple-200/20 transition hover:bg-purple-700"
                  >
                    <UserPlus size={18} />
                    Join Our Community
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Footer */}
            <div className="flex flex-col items-center gap-3 pt-2 text-center">
              <ThemeToggle />
              <p className="text-[11px] font-medium tracking-wide text-text-muted">
                Be Kind. Connect. Make a Difference.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
