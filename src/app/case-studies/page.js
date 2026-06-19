"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudiesData } from "@/data/portfolioData";
import { BookOpen, FolderArchive, ArrowUpRight, Award, Compass, Kanban } from "lucide-react";

export default function CaseStudiesHub() {
  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5 text-left">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
              Corporate Case Vault
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-txt">
              Case Study Vault
            </h1>
            <p className="text-sm text-muted-txt max-w-2xl leading-relaxed">
              Archived professional case studies detailing software project lifecycles, business requirements documentation, test plans, and agile retrospective releases.
            </p>
            <div className="w-12 h-[2px] bg-accent-clr mx-auto lg:mx-0 mt-2" />
          </div>

          {/* Secure Cabinet folders grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => {
              let RoleIcon = BookOpen;
              if (study.role.includes("Lead") || study.role.includes("PM") || study.role.includes("Project")) RoleIcon = Kanban;
              if (study.role.includes("Analyst") || study.role.includes("Designer")) RoleIcon = Compass;
              if (study.role.includes("QA") || study.role.includes("Automation")) RoleIcon = Award;

              return (
                <div
                  key={study.id}
                  className="rounded-2xl border border-accent-clr/15 bg-card-bg/60 p-6 flex flex-col justify-between space-y-6 premium-border relative overflow-hidden"
                >
                  {/* Folder Tab Detail */}
                  <div className="absolute top-0 left-0 w-24 h-1.5 bg-accent-clr" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-accent-clr text-[10px] font-mono tracking-wider uppercase">
                        <FolderArchive className="h-3.5 w-3.5" />
                        <span>VAULT_ID: CS_{study.id.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="px-2 py-0.5 rounded bg-surface/20 border border-accent-clr/10 text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                        {study.role}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-primary-txt pt-1">
                        {study.title}
                      </h3>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-bold text-primary-txt uppercase tracking-wider">
                        Impediment Case Description
                      </h4>
                      <p className="text-xs text-muted-txt leading-relaxed line-clamp-4">
                        {study.problem}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="text-xs font-semibold text-accent-clr flex items-center justify-between hover:underline pt-3 border-t border-accent-clr/10 group"
                  >
                    <span>Inspect Vault Artifacts</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
