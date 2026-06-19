import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, FileText, CheckCircle2, AlertTriangle, Lightbulb, Users, Settings, ClipboardCheck } from "lucide-react";
import ProjectSpecTabs from "./ProjectSpecTabs";

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

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5 text-left">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-clr hover:text-primary-txt transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Command Center</span>
          </Link>

          {/* Heading */}
          <div className="space-y-4 pb-8 border-b border-accent-clr/15">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-2.5 py-0.5 rounded bg-surface/25 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-muted-txt font-semibold">
                Timeline: {project.period}
              </span>
              <span className="text-xs text-muted-txt font-semibold px-2 py-0.5 border border-accent-clr/10 rounded uppercase">
                {project.type === "Existing" ? "Deployed" : "Blueprint"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div className="space-y-1">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-txt">
                  {project.title}
                </h1>
                <p className="text-xs text-accent-clr font-semibold">
                  Role: {project.role}
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
                    <span>Repository</span>
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
                    <span>Live Demo</span>
                  </a>
                )}

                {project.documentation && (
                  <a
                    href={project.documentation}
                    download
                    className="px-4 py-2 rounded bg-surface/30 dark:bg-surface-secondary/20 border border-accent-clr/15 hover:border-accent-clr transition-all flex items-center gap-1.5"
                  >
                    <FileText className="h-4 w-4 text-accent-clr" />
                    <span>Download Spec</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Details Workspace */}
          <div className="rounded-2xl border border-accent-clr/15 glass p-6 sm:p-8 shadow-md">
            {/* Folder Header Tag */}
            <div className="flex justify-between items-center text-[9px] font-mono text-muted-txt border-b border-accent-clr/15 pb-4 mb-6 select-none">
              <span>FILE: {project.id.toUpperCase()}_SPECIFICATION_SHEET.TXT</span>
              <span>CLASSIFICATION: CONFIDENTIAL</span>
            </div>

            {/* Client Tab Manager */}
            <ProjectSpecTabs project={project} />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
