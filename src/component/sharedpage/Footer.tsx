import {
  ArrowRight,
  BoxesLinkedIcon,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand Section */}
        <div className="space-y-5">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white">
              <HeartHandshake size={26} />
            </div>

            <span className="text-2xl font-bold">
              Kind
              <span className="text-purple-600 dark:text-purple-400">
                Connect
              </span>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-text-muted">
            Connecting kind hearts and passionate people to create positive
            changes in communities. Together, every small action makes a big
            difference.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground transition hover:bg-purple-600 hover:text-white"
            >
              <BoxesLinkedIcon size={19} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-foreground">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-text-muted">
            <li>
              <Link
                href="/"
                className="transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Explore Events
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Create Event
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                About Us
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Contact Us
              </span>
            </li>
          </ul>
        </div>

        {/* Event Categories */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-foreground">
            Event Categories
          </h3>

          <ul className="space-y-4 text-sm text-text-muted">
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Tree Plantation
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Community Cleanup
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Free Education
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Food & Clothing Donation
              </span>
            </li>
            <li>
              <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
                Blood Donation
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-foreground">
            Get In Touch
          </h3>

          <ul className="space-y-5 text-sm text-text-muted">
            <li className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-purple-600 dark:text-purple-400"
              />
              <span>Dhaka, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={19}
                className="shrink-0 text-purple-600 dark:text-purple-400"
              />
              <a
                href="mailto:hello@kindconnect.com"
                className="transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                hello@kindconnect.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={19}
                className="shrink-0 text-purple-600 dark:text-purple-400"
              />
              <a
                href="tel:+8801700000000"
                className="transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                +880 1700-000000
              </a>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-7">
            <h4 className="mb-3 font-semibold text-foreground">
              Stay Connected
            </h4>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
              Discover Events
              <ArrowRight size={17} />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row lg:px-8">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} KindConnect. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-text-muted">
            <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
              Privacy Policy
            </span>

            <span className="transition hover:text-purple-600 dark:hover:text-purple-400">
              Terms & Conditions
            </span>
          </div>

          <p className="flex items-center gap-1 text-sm text-text-muted">
            Made with{" "}
            <Heart size={15} className="fill-purple-500 text-purple-500" /> for
            humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
