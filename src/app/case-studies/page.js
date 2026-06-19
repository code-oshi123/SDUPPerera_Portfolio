"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudiesData } from "@/data/portfolioData";
import { BookOpen, ArrowUpRight, Award, Compass, Kanban } from "lucide-react";

export default function CaseStudiesHub() {
  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
              Corporate Case Files
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-txt">
              Case Studies Hub
            </h1>
            <p className="text-sm text-muted-txt max-w-2xl leading-relaxed">
              Deep-dive reviews of academic and practical project cycles, highlighting requirements analysis, test planning, sprint management registers, and verified software quality indicators.
            </p>
            <div className="w-12 h-[2px] bg-accent-clr mx-auto lg:mx-0 mt-2" />
          </div>

          {/* Grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, idx) => {
              // Custom icon based on role
              let RoleIcon = BookOpen;
              if (study.role.includes("Lead") || study.role.includes("PM") || study.role.includes("Project")) RoleIcon = Kanban;
              if (study.role.includes("Analyst") || study.role.includes("Designer")) RoleIcon = Compass;
              if (study.role.includes("QA") || study.role.includes("Automation")) RoleIcon = Award;

              return (
                <div
                  key={study.id}
                  className="rounded-2xl border border-accent-clr/15 bg-card-bg p-6 flex flex-col justify-between space-y-6 premium-border"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-clr text-xs font-bold uppercase tracking-wider">
                      <RoleIcon className="h-4 w-4" />
                      <span>{study.role}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-primary-txt">
                        {study.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-primary-txt uppercase tracking-wider">
                        Business Problem
                      </h4>
                      <p className="text-xs text-muted-txt leading-relaxed line-clamp-4">
                        {study.problem}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="text-xs font-semibold text-accent-clr flex items-center gap-1.5 hover:underline group pt-2 border-t border-accent-clr/10"
                  >
                    <span>View Case Study Artifacts</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
