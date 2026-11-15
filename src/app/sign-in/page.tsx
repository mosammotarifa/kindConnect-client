"use client";

import { signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, HeartHandshake, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    try {
      const { data, error } = await signIn.email({
        email: userData.email,
        password: userData.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Failed to sign in");
        return;
      }

      toast.success("Welcome back!");
      console.log("Sign in successful:", data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  return (
 
<main className="min-h-screen bg-background px-4 py-10 sm:px-8">
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

    {/* Left Side */}
    <section className="hidden lg:block">
      <Link href="/" className="mb-12 flex items-center gap-3">
        <div className="rounded-2xl bg-purple-700 p-3 text-white">
          <HeartHandshake size={38} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-foreground">
            KindConnect
          </h1>
          <p className="text-sm text-text-muted">
            Connect • Volunteer • Make a Difference
          </p>
        </div>
      </Link>

      <h2 className="mb-4 text-5xl font-bold leading-tight text-foreground">
        Welcome Back!
        <br />
        <span className="text-purple-700 dark:text-purple-400">
          Make a Difference.
        </span>
      </h2>

      <p className="mb-8 max-w-lg text-lg leading-8 text-text-muted">
        Your community is waiting for you. Sign in to discover
        meaningful events, connect with volunteers and create
        positive change together.
      </p>

      <div className="overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
          alt="Volunteers working together"
          className="h-[430px] w-full object-cover"
        />
      </div>
    </section>

    {/* Sign In Form */}
    <section className="mx-auto w-full max-w-xl rounded-3xl border border-border bg-card p-6 shadow-xl shadow-purple-100/30 dark:shadow-purple-950/20 sm:p-10">

      {/* Heading */}
      <div className="mb-8 text-center">
        <div className="mb-4 flex justify-center lg:hidden">
          <HeartHandshake size={42} className="text-purple-700 dark:text-purple-400" />
        </div>

        <h2 className="text-3xl font-bold text-foreground">
          Welcome Back
        </h2>

        <p className="mt-2 text-text-muted">
          Sign in to continue your KindConnect journey!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Email Address
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/10">
            <Mail className="text-text-muted" size={20} />

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-text-muted"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Password
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/10">
            <LockKeyhole className="text-text-muted" size={20} />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-text-muted"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-text-muted transition hover:text-purple-600 dark:hover:text-purple-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-purple-700 py-4 font-semibold text-white transition hover:bg-purple-800"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm text-text-muted">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-4">

        {/* GitHub */}
        <button
          type="button"
          onClick={handleGithubSignIn}
          className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 font-medium text-foreground transition-all duration-300 hover:border-purple-400 hover:bg-muted hover:text-purple-700 dark:hover:text-purple-400"
        >
          <FaGithub
            size={20}
            className="transition group-hover:scale-110"
          />
          <span className="text-sm sm:text-base">
            GitHub
          </span>
        </button>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 font-medium text-foreground transition-all duration-300 hover:border-purple-400 hover:bg-muted hover:text-purple-700 dark:hover:text-purple-400"
        >
          <FcGoogle
            size={20}
            className="transition group-hover:scale-110"
          />
          <span className="text-sm sm:text-base">
            Google
          </span>
        </button>
      </div>

      {/* Sign Up */}
      <p className="mt-8 text-center text-sm text-text-muted">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="font-bold text-purple-700 hover:underline dark:text-purple-400"
        >
          Create Account
        </Link>
      </p>

    </section>
  </div>
</main>

  );
};

export default SignInPage;
