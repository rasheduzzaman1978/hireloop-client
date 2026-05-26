"use client";

import {
  Magnifier,
  ChartColumn,
  Briefcase,
  Bookmark,
  Sparkles,
  FileText,
  CirclePlus,
  ArrowUpRight,
} from "@gravity-ui/icons";

const features = [
  {
    id: 1,
    icon: Magnifier,
    title: "Smart Search",
    description:
      "Find your ideal job with advanced filters.",
  },
  {
    id: 2,
    icon: ChartColumn,
    title: "Salary Insights",
    description:
      "Get real salary data to negotiate confidently.",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Top Companies",
    description:
      "Apply to vetted companies that are hiring.",
  },
  {
    id: 4,
    icon: Bookmark,
    title: "Saved Jobs",
    description:
      "Manage apps & favorites on your dashboard.",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "One-Click Apply",
    description:
      "Simplify your job applications for an easier process.",
  },
  {
    id: 6,
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional resumes with modern templates.",
  },
  {
    id: 7,
    icon: CirclePlus,
    title: "Skill-Based Matching",
    description:
      "Discover jobs that match your skills and experience.",
  },
  {
    id: 8,
    icon: ArrowUpRight,
    title: "Career Growth Resources",
    description:
      "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {

  return (

    <section className="bg-gray-100 px-4 py-16 text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white sm:px-6 lg:px-8 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="text-center">

          {/* BADGE */}

          <div className="mb-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 dark:text-zinc-400 sm:text-xs">

            <span className="h-1 w-1 rounded-full bg-indigo-500" />

            Feature Job

            <span className="h-1 w-1 rounded-full bg-indigo-500" />
          </div>

          {/* TITLE */}

          <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">

            Everything you need

            <br />

            to succeed

          </h2>
        </div>

        {/* FEATURES */}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.id}
                className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:border-indigo-300 hover:shadow-lg dark:border-white/5 dark:bg-[#0B0B0F] dark:hover:border-white/10 dark:hover:bg-[#111116]"
              >

                {/* ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 text-indigo-500 dark:border-white/5 dark:bg-black dark:text-indigo-400">

                  <Icon className="h-5 w-5" />

                </div>

                {/* CONTENT */}

                <div>

                  <h3 className="text-base font-medium text-gray-900 dark:text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-zinc-500">

                    {feature.description}

                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}