"use client";

import { useState } from "react";

import Link from "next/link";

import { toast } from "react-toastify";

import {
  Eye,
  EyeSlash,
  Envelope,
  Lock,
} from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    // EMAIL
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    // PASSWORD
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    }

    return newErrors;
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

  e.preventDefault();

  const validationErrors =
    validate();

  if (
    Object.keys(
      validationErrors
    ).length > 0
  ) {

    setErrors(
      validationErrors
    );

    toast.error(
      "Please fix the errors!"
    );

    return;
  }

  try {

    const result =
      await signIn.email({

        email:
          formData.email,

        password:
          formData.password,
      });

    if (result.error) {

      toast.error(
        result.error.message
      );

      return;
    }

    toast.success(
      "Login Successful!"
    );

    setTimeout(() => {

      router.push("/");

    }, 1500);

  } catch (error) {

    toast.error(
      "Invalid email or password!"
    );
  }
};

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05060F] px-4 py-10">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
        
        {/* TOP */}
        <div className="text-center">
          
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Login to continue your journey.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          
          {/* EMAIL */}
          <div>
            
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              
              <Envelope className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <input
                type="email"
                name="email"
                placeholder="rashed@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500"
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500"
              />

              {/* SHOW/HIDE */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeSlash className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* PASSWORD HINT */}
            <p className="mt-2 text-xs text-zinc-500">
              Password must contain uppercase,
              lowercase and minimum 6 characters.
            </p>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Login
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4">
            
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-sm text-zinc-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* GOOGLE BUTTON */}
            <button
              type="button"
              onClick={async () => {
                await signIn.social({
                  provider: "google",
                  callbackURL: "/",
                });
              }}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white transition hover:bg-white/[0.06]"
            >
              <span className="text-lg font-bold">
                G
              </span>

              Continue with Google
            </button>

          {/* REGISTER */}
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}

            <Link
              href="/signup"
              className="font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}