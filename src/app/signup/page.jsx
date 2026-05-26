"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import {
  authClient,
  signOut,
} from "@/lib/auth-client";

import {
  Eye,
  EyeSlash,
  Person,
  Picture,
  Envelope,
  Lock,
} from "@gravity-ui/icons";

export default function SignupPage() {

  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      photoURL: "",
      email: "",
      password: "",
    });

  const [errors, setErrors] =
    useState({});

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // VALIDATION

  const validate = () => {

    let newErrors = {};

    // NAME

    if (
      !formData.name.trim()
    ) {

      newErrors.name =
        "Name is required";
    }

    // EMAIL

    if (!formData.email) {

      newErrors.email =
        "Email is required";

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Invalid email address";
    }

    // PASSWORD

    if (
      !formData.password
    ) {

      newErrors.password =
        "Password is required";

    } else if (
      formData.password
        .length < 6
    ) {

      newErrors.password =
        "Password must be at least 6 characters";

    } else if (
      !/[A-Z]/.test(
        formData.password
      )
    ) {

      newErrors.password =
        "Password must contain at least one uppercase letter";

    } else if (
      !/[a-z]/.test(
        formData.password
      )
    ) {

      newErrors.password =
        "Password must contain at least one lowercase letter";
    }

    return newErrors;
  };

  // HANDLE SUBMIT

  const handleSubmit =
    async (e) => {

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
          await authClient.signUp.email({

            email:
              formData.email,

            password:
              formData.password,

            name:
              formData.name,

            image:
              formData.photoURL,
          });

        if (result.error) {

          toast.error(
            result.error.message
          );

          return;
        }

        // FORCE LOGOUT

        await signOut();

        toast.success(
          "Account Created Successfully!"
        );

        setTimeout(() => {

          router.push(
            "/signin"
          );

        }, 1500);

      } catch (error) {

        toast.error(
          "Something went wrong!"
        );
      }
    };

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-4 py-10 transition-colors duration-300 dark:bg-[#05060F]">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-500/20" />

      {/* CARD */}

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-2xl dark:backdrop-blur-2xl sm:p-8">

        {/* TOP */}

        <div className="text-center">

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">

            Create an Account

          </h1>

          <p className="mt-3 text-sm text-gray-500 dark:text-zinc-400">

            Join the future of smart hiring today.

          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleSubmit
          }
          className="mt-10 space-y-5"
        >

          {/* NAME */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">

              Name{" "}

              <span className="text-red-500">

                *

              </span>

            </label>

            <div className="relative">

              <Person className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>

            {errors.name && (

              <p className="mt-2 text-sm text-red-500">

                {errors.name}

              </p>
            )}
          </div>

          {/* PHOTO URL */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">

              Photo URL

            </label>

            <div className="relative">

              <Picture className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />

              <input
                type="text"
                name="photoURL"
                placeholder="https://example.com/photo.jpg"
                value={
                  formData.photoURL
                }
                onChange={
                  handleChange
                }
                className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>
          </div>

          {/* EMAIL */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">

              Email{" "}

              <span className="text-red-500">

                *

              </span>

            </label>

            <div className="relative">

              <Envelope className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />

              <input
                type="email"
                name="email"
                placeholder="rashed@gmail.com"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-zinc-500"
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

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">

              Password{" "}

              <span className="text-red-500">

                *

              </span>

            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="********"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-zinc-500"
              />

              {/* SHOW/HIDE */}

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 dark:text-zinc-500 dark:hover:text-white"
              >

                {showPassword ? (

                  <EyeSlash className="h-5 w-5" />

                ) : (

                  <Eye className="h-5 w-5" />

                )}
              </button>
            </div>

            {/* PASSWORD HINT */}

            <p className="mt-2 text-xs text-gray-500 dark:text-zinc-500">

              Password must contain uppercase,
              lowercase and minimum 6 characters.

            </p>

            {errors.password && (

              <p className="mt-2 text-sm text-red-500">

                {errors.password}

              </p>
            )}
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="mt-3 h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >

            Create Account

          </button>

          {/* LOGIN */}

          <p className="pt-3 text-center text-sm text-gray-600 dark:text-zinc-400">

            Already have an account?{" "}

            <Link
              href="/signin"
              className="font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >

              Login

            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}