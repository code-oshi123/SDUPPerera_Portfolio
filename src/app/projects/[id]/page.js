import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, FileText, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-clr hover:text-primary-txt transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          {/* Heading */}
          <div className="space-y-4 pb-8 border-b border-accent-clr/15">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-2.5 py-0.5 rounded bg-surface/20 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[10px] font-bold text-accent-clr uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-muted-txt font-semibold">
                Timeline: {project.period}
              </span>
              <span className="text-xs text-muted-txt font-semibold px-2 py-0.5 border border-accent-clr/10 rounded">
                {project.type}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div className="space-y-1">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-txt">
                  {project.title}
                </h1>
                <p className="text-xs text-accent-clr font-semibold">
                  Role Played: {project.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-accent-clr text-white dark:text-primary-bg flex items-center gap-1.5 hover:bg-surface-secondary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
                
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded border border-accent-clr/30 hover:bg-surface/20 dark:hover:bg-surface-secondary/15 transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demonstration</span>
                  </a>
                )}

                {project.documentation && (
                  <a
                    href={project.documentation}
                    download
                    className="px-4 py-2 rounded bg-surface/30 dark:bg-surface-secondary/20 border border-accent-clr/15 hover:border-accent-clr transition-all flex items-center gap-1.5"
                  >
                    <FileText className="h-4 w-4 text-accent-clr" />
                    <span>Spec Sheet</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left/Main Column: Overview, Objectives, Challenges */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <section className="space-y-3">
                <h2 className="font-serif text-xl font-bold text-primary-txt">
                  Project Overview
                </h2>
                <p className="text-sm text-muted-txt leading-relaxed">
                  {project.overview}
                </p>
              </section>

              {/* Problem Statement */}
              <section className="p-5 rounded-xl bg-rose-500/5 border border-rose-500/15 space-y-2">
                <h2 className="font-serif text-sm font-bold text-rose-500 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Problem Statement</span>
                </h2>
                <p className="text-xs text-muted-txt leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Business Objective */}
              <section className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/15 space-y-2">
                <h2 className="font-serif text-sm font-bold text-emerald-500 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Business Objective</span>
                </h2>
                <p className="text-xs text-muted-txt leading-relaxed">
                  {project.objective}
                </p>
              </section>

              {/* Responsibilities */}
              <section className="space-y-3">
                <h2 className="font-serif text-xl font-bold text-primary-txt">
                  Responsibilities & Role Focus
                </h2>
                <p className="text-sm text-muted-txt leading-relaxed">
                  {project.responsibilities}
                </p>
              </section>

              {/* Challenges & Lessons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-accent-clr/10">
                <div className="space-y-2">
                  <h3 className="font-serif text-sm font-bold text-primary-txt">
                    Challenges Faced
                  </h3>
                  <p className="text-xs text-muted-txt leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-sm font-bold text-accent-clr flex items-center gap-1.5">
                    <Lightbulb className="h-4 w-4" />
                    <span>Lessons Learned</span>
                  </h3>
                  <p className="text-xs text-muted-txt leading-relaxed">
                    {project.lessons}
                  </p>
                </div>
              </div>

            </div>

            {/* Right/Meta Column: Tech stacks, Key Features, Gallery placeholders */}
            <div className="space-y-8">
              
              {/* Technologies */}
              <div className="p-6 rounded-xl border border-accent-clr/15 bg-card-bg space-y-4">
                <h3 className="text-xs font-bold text-primary-txt uppercase tracking-wider">
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-primary-bg border border-accent-clr/10 text-xs font-semibold text-primary-txt"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 rounded-xl border border-accent-clr/15 glass space-y-4">
                <h3 className="text-xs font-bold text-primary-txt uppercase tracking-wider">
                  Key System Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-muted-txt leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-accent-clr flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal Mockup Gallery */}
              <div className="p-6 rounded-xl border border-accent-clr/15 bg-card-bg/60 space-y-4">
                <h3 className="text-xs font-bold text-primary-txt uppercase tracking-wider">
                  System Architecture Preview
                </h3>
                {/* Visual Placeholder mimicking system drawing */}
                <div className="h-40 rounded-lg border border-accent-clr/20 bg-primary-bg flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
                  <div className="w-10 h-10 rounded bg-surface/20 border border-accent-clr/25 flex items-center justify-center text-[10px] text-accent-clr mb-2 font-mono">
                    SVG
                  </div>
                  <span className="text-[10px] font-bold text-primary-txt tracking-wide uppercase">
                    Workflow Wireframe
                  </span>
                  <span className="text-[9px] text-muted-txt mt-1">
                    System entity relationships and dashboard flow mappings.
                  </span>
                  {/* Fine vector details */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent-clr/30" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent-clr/30" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
