"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/portfolioData";
import { Search, Filter, ArrowUpRight, FolderOpen } from "lucide-react";
import GithubRepoGrid from "@/components/GithubRepoGrid";

export default function ProjectsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // all, existing, future

  // Filter projects dynamically
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      filterType === "all" ||
      (filterType === "existing" && project.type === "Existing") ||
      (filterType === "future" && project.type === "Future");

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
              Technical Directory
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-txt">
              Projects Repository
            </h1>
            <p className="text-sm text-muted-txt max-w-2xl leading-relaxed">
              Explore the technical portfolio, including currently deployed software builds, academic milestones, and future project designs outlining requirements and testing strategies.
            </p>
            <div className="w-12 h-[2px] bg-accent-clr mx-auto lg:mx-0 mt-2" />
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card-bg p-4 rounded-xl border border-accent-clr/15">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-txt" />
              <input
                type="text"
                placeholder="Search projects by title, tech (e.g. C#), role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1.5 w-full sm:w-auto overflow-x-auto">
              {[
                { label: "All Projects", val: "all" },
                { label: "Completed / Active", val: "existing" },
                { label: "Design Blueprint / Future", val: "future" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => setFilterType(btn.val)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    filterType === btn.val
                      ? "bg-accent-clr text-white dark:text-primary-bg"
                      : "text-muted-txt hover:bg-surface/20 dark:hover:bg-surface-secondary/15 hover:text-primary-txt"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Display */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-accent-clr/15 bg-card-bg p-6 flex flex-col justify-between space-y-6 premium-border"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-surface/20 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-muted-txt font-semibold">{project.period}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-primary-txt">
                        {project.title}
                      </h3>
                      <p className="text-[10px] text-accent-clr font-semibold">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-xs text-muted-txt leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-surface-secondary/10 text-[9px] font-semibold text-primary-txt"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs font-semibold text-accent-clr flex items-center gap-1.5 hover:underline group pt-2"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-accent-clr/20 bg-card-bg/10 space-y-3">
              <FolderOpen className="h-10 w-10 text-muted-txt mx-auto" />
              <h3 className="font-serif text-lg font-bold text-primary-txt">No Projects Found</h3>
              <p className="text-xs text-muted-txt">
                Try refining your search terms or choosing a different filter category.
              </p>
            </div>
          )}

          {/* Dynamic GitHub Repos Section */}
          <div className="pt-16 border-t border-accent-clr/15">
            <GithubRepoGrid />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
