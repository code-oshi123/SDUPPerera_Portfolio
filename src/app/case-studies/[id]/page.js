import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudiesData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Layers, CheckCircle2, AlertTriangle, TrendingUp, Lightbulb, Compass, Award } from "lucide-react";
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

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-clr hover:text-primary-txt transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Title Header */}
          <div className="space-y-4 pb-8 border-b border-accent-clr/15">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-surface/25 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[10px] font-bold text-accent-clr uppercase tracking-wider">
                Case Study
              </span>
              <span className="text-xs text-muted-txt font-semibold">
                Role: {study.role}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-txt">
              {study.title}
            </h1>
          </div>

          {/* 7-Step Case Study Layout */}
          <div className="space-y-12">
            
            {/* 1. Problem Statement */}
            <section className="space-y-3 p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10">
              <h2 className="font-serif text-lg font-bold text-rose-500 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <span>1. Problem Statement</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.problem}
              </p>
            </section>

            {/* 2. Business Objective */}
            <section className="space-y-3 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
              <h2 className="font-serif text-lg font-bold text-emerald-500 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>2. Business Objective</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.objective}
              </p>
            </section>

            {/* 3. Analysis Process */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-primary-txt flex items-center gap-2">
                <Compass className="h-5 w-5 text-accent-clr" />
                <span>3. Analysis Process</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.process}
              </p>
            </section>

            {/* 4. Solution Design */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-primary-txt flex items-center gap-2">
                <Layers className="h-5 w-5 text-accent-clr" />
                <span>4. Solution Design</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.solution}
              </p>
            </section>

            {/* 5. Deliverables (Interactive Tabs) */}
            <section className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-primary-txt flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent-clr" />
                <span>5. Produced Deliverables & Artifacts</span>
              </h2>
              <p className="text-xs text-muted-txt leading-relaxed">
                Select a discipline category below to view specific artifacts, spreadsheets, models, and charters produced during this project cycle.
              </p>
              
              {/* Client Component handling state */}
              <ArtifactTabs deliverables={study.deliverables} />
            </section>

            {/* 6. Results */}
            <section className="space-y-3 p-6 rounded-2xl bg-surface/20 dark:bg-surface-secondary/20 border border-accent-clr/15">
              <h2 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent-clr" />
                <span>6. Project Results & Impact</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.results}
              </p>
            </section>

            {/* 7. Lessons Learned */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-primary-txt flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent-clr" />
                <span>7. Lessons Learned & Retrospectives</span>
              </h2>
              <p className="text-sm text-muted-txt leading-relaxed">
                {study.lessons}
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
