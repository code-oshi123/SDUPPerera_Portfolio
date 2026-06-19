import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudiesData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Layers, CheckCircle2, AlertTriangle, TrendingUp, Lightbulb, Compass, Award, ShieldAlert, FolderArchive } from "lucide-react";
import ArtifactTabs from "./ArtifactTabs";

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudyDetail({ params }) {
  const { id } = await params;
  const study = caseStudiesData.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5 text-left">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-clr hover:text-primary-txt transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Case Vault</span>
          </Link>

          {/* Title Header */}
          <div className="space-y-4 pb-8 border-b border-accent-clr/15">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-surface/25 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[10px] font-bold text-accent-clr uppercase tracking-wider">
                Analyst Dossier
              </span>
              <span className="text-xs text-muted-txt font-semibold">
                Specialty: {study.role}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-txt">
              {study.title}
            </h1>
          </div>

          {/* Dossier Folder Layout Container */}
          <div className="rounded-2xl border border-accent-clr/15 glass p-6 sm:p-8 space-y-12 shadow-lg relative overflow-hidden">
            
            {/* Header Classification Tag */}
            <div className="flex justify-between items-center text-[9px] font-mono text-muted-txt border-b border-accent-clr/15 pb-4 select-none">
              <span className="flex items-center gap-1.5">
                <FolderArchive className="h-3.5 w-3.5 text-accent-clr" />
                <span>DOSSIER_ID: CS_{study.id.toUpperCase()}_WORKSPACE</span>
              </span>
              <span>CLASSIFICATION: RECRUITER_INSPECTION</span>
            </div>

            {/* 1. Problem Statement */}
            <section className="space-y-3 p-6 rounded-xl bg-rose-500/5 border border-rose-500/10">
              <h2 className="font-serif text-sm font-bold text-rose-500 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span>1. Business Challenge Analysis</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.problem}
              </p>
            </section>

            {/* 2. Business Objective */}
            <section className="space-y-3 p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <h2 className="font-serif text-sm font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5" />
                <span>2. Business Objective Specification</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.objective}
              </p>
            </section>

            {/* 3. Analysis Process */}
            <section className="space-y-3 pl-4 border-l-2 border-accent-clr/25">
              <h2 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider flex items-center gap-2">
                <Compass className="h-4.5 w-4.5 text-accent-clr" />
                <span>3. Analysis Process & Elicitation</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.process}
              </p>
            </section>

            {/* 4. Solution Design */}
            <section className="space-y-3 pl-4 border-l-2 border-accent-clr/25">
              <h2 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider flex items-center gap-2">
                <Layers className="h-4.5 w-4.5 text-accent-clr" />
                <span>4. Solution Design Architecture</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.solution}
              </p>
            </section>

            {/* 5. Deliverables (Interactive Tabs) */}
            <section className="space-y-4 pt-4 border-t border-accent-clr/15">
              <h2 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-accent-clr" />
                <span>5. Produced Deliverables & Analyst Workspace</span>
              </h2>
              <p className="text-[10px] text-muted-txt leading-relaxed">
                Click on the disciplines below to inspect the specifications, user stories, retrospectives, and risk registers produced during the project cycle.
              </p>
              
              <ArtifactTabs deliverables={study.deliverables} />
            </section>

            {/* 6. Results */}
            <section className="space-y-3 p-6 rounded-xl bg-surface/25 border border-accent-clr/15">
              <h2 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="h-4.5 w-4.5 text-accent-clr" />
                <span>6. Metrics Impact Audit Report</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.results}
              </p>
            </section>

            {/* 7. Lessons Learned */}
            <section className="space-y-3 pl-4 border-l-2 border-accent-clr/25">
              <h2 className="font-serif text-sm font-bold text-accent-clr uppercase tracking-wider flex items-center gap-2">
                <Lightbulb className="h-4.5 w-4.5" />
                <span>7. Retrospective Evaluation</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                {study.lessons}
              </p>
            </section>

            {/* Dossier Footer Info */}
            <div className="flex justify-between items-center text-[8px] text-muted-txt tracking-wide font-mono pt-4 border-t border-accent-clr/10 select-none">
              <span>RECORD_STATE: SIGNED_OFF</span>
              <span>INSPECTION_STATUS: COMPLETED</span>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
