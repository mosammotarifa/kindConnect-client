"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { FaChrome, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Eye,
  EyeOff,
  HeartHandshake,
  ImagePlus,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter()
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      image: String(formData.get("image")),
      password: String(formData.get("password")),
      confirmPassword: String(formData.get("confirmPassword")),
    };
    if (!passwordValid.test(userData.password)) {
      toast.error(
        "Password must contain at least 6 characters, one uppercase, one lowercase and one number.",
      );
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      toast.error("do not match with confirm Password");
      return;
    }
    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.image,
      password: userData.password,
    
    });
    if (error) {
      toast.error("failed to sign up");
      return;
    }
    toast.success("welcome in kindConnect");
    console.log("sign up form sign up", data);
    router.push('/show-event')

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
    <div>
      <main className="min-h-screen bg-background px-4 py-10 transition-colors sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <section className="hidden lg:block">
            <Link href="/" className="mb-12 flex items-center gap-3">
              <div className="rounded-2xl bg-purple-700 p-3 text-white">
                <HeartHandshake size={38} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-400">
                  KindConnect
                </h1>
                <p className="text-sm text-text-muted">
                  Connect • Volunteer • Make a Difference
                </p>
              </div>
            </Link>

            <h2 className="mb-4 text-5xl font-bold leading-tight text-foreground">
              Join KindConnect
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-8 text-text-muted">
              Be a part of a kinder, greener and more connected community.
              Together, we can make a difference.
            </p>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
                alt="Plant growing in a green garden"
                className="h-[430px] w-full object-cover"
              />
            </div>
          </section>

          {/* Signup Form */}
          <section className="mx-auto w-full max-w-xl rounded-3xl border border-border bg-card p-6 shadow-xl shadow-purple-100/50 transition-colors dark:shadow-black/20 sm:p-10">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center lg:hidden">
                <HeartHandshake
                  size={42}
                  className="text-purple-700 dark:text-purple-400"
                />
              </div>

              <h2 className="text-3xl font-bold text-foreground">
                Create Your Account
              </h2>

              <p className="mt-2 text-text-muted">
                Start your journey with KindConnect today!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500">
                  <UserRound className="text-text-muted" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-text-muted"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500">
                  <Mail className="text-text-muted" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
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
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500">
                  <LockKeyhole className="text-text-muted" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Create a password"
                    required
                    className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-text-muted"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-text-muted transition hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <p
                  className={`mt-2 text-xs ${
                    password && !passwordValid
                      ? "text-red-500"
                      : "text-text-muted"
                  }`}
                >
                  Minimum 6 characters, one uppercase, one lowercase and one
                  number.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-purple-500">
                  <LockKeyhole className="text-text-muted" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                    name="confirmPassword"
                    className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-text-muted"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-text-muted transition hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="mt-2 text-xs text-red-500">
                    Passwords do not match.
                  </p>
                )}
              </div>

              {/* Profile Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Profile Image
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-background p-4 text-text-muted transition hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30">
                  <ImagePlus size={22} />
                  <span className="text-sm">Upload your profile image</span>
                  <input
                    type="url"
                    name="image"
                    required
                    // accept="image/png,image/jpeg,image/webp"
                    // className="sr-only"
                  />
                </label>
              </div>

              {/* Create Account */}
              <button
                type="submit"
                disabled={!passwordValid || password !== confirmPassword}
                className="w-full rounded-xl bg-purple-700 py-4 font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-text-muted">Or continue with</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* GitHub */}
              <button
                type="button"
                onClick={handleGithubSignIn}
                className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 font-medium text-foreground transition-all duration-300 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-950/30 dark:hover:text-purple-400"
              >
                <FaGithub
                  size={20}
                  className="transition group-hover:scale-110"
                />
                <span className="text-sm sm:text-base">GitHub</span>
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 font-medium text-foreground transition-all duration-300 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-950/30 dark:hover:text-purple-400"
              >
                <FaChrome
                  size={20}
                  className="text-blue-600 transition group-hover:scale-110"
                />
                <span className="text-sm sm:text-base">Google</span>
              </button>
            </div>

            {/* Sign In */}
            <p className="mt-8 text-center text-sm text-text-muted">
              Already have an account?
              <Link
                href="/sign-in"
                className="font-bold text-purple-700 hover:underline dark:text-purple-400"
              >
                Sign In
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
