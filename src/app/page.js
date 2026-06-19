import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Strengths from "@/components/Strengths";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { projectsData, caseStudiesData } from "@/data/portfolioData";
import { ArrowUpRight, BookOpen, Layers } from "lucide-react";

export default function Home() {
  // Highlight first 3 projects & case studies on home page
  const featuredProjects = projectsData.slice(0, 3);
  const featuredCaseStudies = caseStudiesData.slice(0, 3);

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Strengths Section */}
        <Strengths />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Featured Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/25">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
                Detailed Work Reviews
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
                Featured Case Studies
              </h2>
              <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
                Recruiter-focused business analysis, quality assurance strategies, and agile project deliverables.
              </p>
              <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-2xl border border-accent-clr/15 bg-card-bg p-6 flex flex-col justify-between space-y-6 premium-border"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-accent-clr text-xs font-semibold">
                      <BookOpen className="h-4.5 w-4.5" />
                      <span>{study.role}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary-txt">
                      {study.title}
                    </h3>
                    <p className="text-xs text-muted-txt leading-relaxed line-clamp-3">
                      {study.problem}
                    </p>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="text-xs font-semibold text-accent-clr flex items-center gap-1.5 hover:underline group"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-accent-clr/30 text-xs font-semibold hover:bg-surface/20 dark:hover:bg-surface-secondary/15 transition-all duration-200"
              >
                <span>Browse All Case Studies</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-primary-bg">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
                Technical Builds
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
                Featured Projects
              </h2>
              <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
                Development deliverables demonstrating clean programming structures, testing, and requirement gathering.
              </p>
              <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-accent-clr/15 glass p-6 flex flex-col justify-between space-y-6 premium-border"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-surface/25 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-muted-txt font-medium">{project.period}</span>
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
                      {project.tech.slice(0, 4).map((t, idx) => (
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

            <div className="text-center pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-accent-clr/30 text-xs font-semibold hover:bg-surface/20 dark:hover:bg-surface-secondary/15 transition-all duration-200"
              >
                <span>Browse All Projects</span>
                <Layers className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
