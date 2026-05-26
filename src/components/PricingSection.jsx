"use client";

import { Button } from "@heroui/react";

import {
  CrownDiamond,
  ChartColumn,
  Thunderbolt,
  Plus,
  ArrowRight,
} from "@gravity-ui/icons";

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$0",
    icon: CrownDiamond,
    highlighted: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: 2,
    name: "Growth",
    price: "$17",
    icon: ChartColumn,
    highlighted: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "$99",
    icon: Thunderbolt,
    highlighted: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingSection() {

  return (

    <section className="bg-gray-100 px-4 py-16 text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white sm:px-6 lg:px-8 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="text-center">

          {/* BADGE */}

          <div className="mb-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 dark:text-zinc-400 sm:text-xs">

            <span className="h-1 w-1 rounded-full bg-indigo-500" />

            Pricing

            <span className="h-1 w-1 rounded-full bg-indigo-500" />
          </div>

          {/* TITLE */}

          <h2 className="mx-auto max-w-3xl text-3xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">

            Pay for the leverage,

            <br />

            not the listings

          </h2>

          {/* TOGGLE */}

          <div className="mt-8 inline-flex items-center rounded-full border border-gray-300 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-[#0E0E12]">

            <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white dark:bg-white dark:text-black">

              Monthly

            </button>

            <button className="px-5 py-2 text-sm text-gray-500 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">

              Yearly

            </button>

            <span className="mr-1 rounded-full bg-pink-500 px-2 py-1 text-[10px] font-semibold text-white">

              25%

            </span>
          </div>
        </div>

        {/* PRICING CARDS */}

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {pricingPlans.map((plan) => {

            const Icon = plan.icon;

            return (

              <div
                key={plan.id}
                className={`rounded-3xl border p-6 transition duration-300 ${
                  plan.highlighted
                    ? "border-gray-300 bg-white shadow-xl dark:border-white/15 dark:bg-[#15151B]"
                    : "border-gray-200 bg-white/80 shadow-md dark:border-white/5 dark:bg-[#0B0B0F]"
                }`}
              >

                {/* TOP */}

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 text-indigo-500 dark:border-white/5 dark:bg-black dark:text-indigo-400">

                      <Icon className="h-4 w-4" />

                    </div>

                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">

                      {plan.name}

                    </h3>
                  </div>

                  <div className="text-right">

                    <div className="flex items-start gap-1">

                      <span className="text-4xl font-semibold text-gray-900 dark:text-white">

                        {plan.price}

                      </span>

                      <span className="mt-2 text-xs text-gray-500 dark:text-zinc-500">

                        /month

                      </span>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p className="mt-8 text-sm text-gray-600 dark:text-zinc-400">

                  Start building your insights hub:

                </p>

                {/* FEATURES */}

                <div className="mt-6 space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-zinc-300">

                        <Plus className="h-3 w-3" />

                      </div>

                      <span className="text-sm text-gray-600 dark:text-zinc-400">

                        {feature}

                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}

                <Button
                  className={`mt-10 h-12 w-full rounded-xl text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  }`}
                >

                  <div className="flex items-center gap-2">

                    Choose This Plan

                    <ArrowRight className="h-4 w-4" />

                  </div>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}