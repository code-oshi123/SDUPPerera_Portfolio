"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Milestone, Calendar, Award, Lightbulb, Compass, ArrowRight } from "lucide-react";

const milestones = [
  {
    id: "foundation",
    title: "Foundation Studies",
    period: "Feb 2024 - Oct 2024",
    institution: "APIIT Sri Lanka",
    highlights: "First steps in computational logic and systems modeling.",
    achievements: [
      "Completed computing foundation with overall distinction passes.",
      "Developed basic algorithms and structural systems schemas.",
      "Acquired core competencies in academic communication and database fundamentals."
    ],
    lessons: "Structured system analysis is vital before typing any code; thorough preparation saves hours of troubleshooting later."
  },
  {
    id: "undergrad",
    title: "Computer Science Undergraduate",
    period: "2023 - Present",
    institution: "University of Staffordshire (APIIT Sri Lanka)",
    highlights: "Specializing in Software Quality Assurance, agile systems design, and database engineering.",
    achievements: [
      "Candidate for the Dean's List for consistent academic performance.",
      "Mastered OOP concepts (C#/JS), database normalization, and SQL optimization.",
      "Participated actively in student tech guilds and hackathon logistics."
    ],
    lessons: "Continuous metrics evaluation and code coverage are key to building stable, scalable application models."
  },
  {
    id: "lead",
    title: "Agile Team Lead",
    period: "2025 (Project Lead)",
    institution: "Delivery Management System",
    highlights: "Coordinated sprint planning, backlogs, risk registers, and API validations.",
    achievements: [
      "Led a team of 4 devs to deliver a logistics route tracker ahead of sprint parameters.",
      "Established active RAID logs and sprint velocity tracking.",
      "Facilitated stakeholder checkpoint demos and daily scrums."
    ],
    lessons: "Employing clear project ownership matrices (RACI) prevents tasks from stalling during peak development loops."
  },
  {
    id: "analyst",
    title: "Requirements Analyst",
    period: "2024 (Analyst / QA)",
    institution: "Ticket Management System",
    highlights: "Managed elicitation sessions to map client specifications to system flows.",
    achievements: [
      "Wrote INVEST-compliant User Stories with Given-When-Then acceptance criteria.",
      "Controlled scope parameters using the MoSCoW prioritization model.",
      "Drafted 40+ granular UI/API test cases for manual checking cycles."
    ],
    lessons: "Requirements are fluid; getting early signed-off wireframes prevents scope-creep from affecting launch targets."
  },
  {
    id: "dev",
    title: "Client Project Developer",
    period: "2024 (Developer)",
    institution: "E-Commerce Flower Shop",
    highlights: "Developer on a direct client retail store website.",
    achievements: [
      "Interviewed client to map operational workflows, catalog styles, and checkout pricing.",
      "Programmed transaction calendar widgets and automated reservation checks.",
      "Run system demos to capture direct client adjustments during early cycles."
    ],
    lessons: "Conducting regular, transparent sprint demos with clients reduces feedback lag and product rework costs."
  },
  {
    id: "growth",
    title: "QA & Business Analysis Growth",
    period: "Ongoing Development",
    institution: "Advanced Frameworks",
    highlights: "Developing automated testing suites and REST contract testing collections.",
    achievements: [
      "Configuring cross-browser Playwright test frameworks using Page Object Models.",
      "Writing automated Postman schema assertions and response validation chains.",
      "Analyzing system flows to construct non-functional testing check sheets."
    ],
    lessons: "Test automation is not just about replacing manual checks; it is about creating reliable regression guards."
  },
  {
    id: "future",
    title: "Future Technology Professional",
    period: "Career Outlook",
    institution: "Business Analyst / PM / QA Engineer",
    highlights: "Targeting corporate roles where business analysis, project coordination, and QA quality systems meet.",
    achievements: [
      "Prepared to relocate and integrate into fast-moving corporate teams.",
      "Committed to continuous learning in Agile frameworks and product metrics.",
      "Eager to translate client business needs into structured engineering deliverables."
    ],
    lessons: "The most impactful software systems are constructed at the intersection of business requirements and engineering quality."
  }
];

export default function CareerRoadmap() {
  const [selectedId, setSelectedId] = useState("undergrad");
  const activeMilestone = milestones.find((m) => m.id === selectedId);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Milestones & Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Interactive Career Roadmap
          </h2>
          <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
            Click on any milestone in the roadmap to review achievements, project responsibilities, and critical lessons learned.
          </p>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Roadmap Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Milestone Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2 mb-2">
              <Milestone className="h-5 w-5 text-accent-clr" />
              <span>Journey Path</span>
            </h3>

            <div className="relative pl-6 border-l border-accent-clr/25 space-y-6">
              {milestones.map((m) => {
                const isActive = m.id === selectedId;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedId(m.id)}
                    className="relative group cursor-pointer text-left"
                  >
                    {/* Bullet indicator */}
                    <div
                      className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-accent-clr bg-accent-clr scale-125 shadow-sm"
                          : "border-accent-clr/45 bg-primary-bg group-hover:border-accent-clr group-hover:scale-110"
                      }`}
                    />

                    <div className={`p-4 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "bg-card-bg border-accent-clr shadow-sm"
                        : "bg-primary-bg/50 border-accent-clr/10 hover:border-accent-clr/30 hover:bg-card-bg/30"
                    }`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                          {m.period}
                        </span>
                        <ArrowRight className={`h-3 w-3 text-accent-clr transition-transform duration-200 ${
                          isActive ? "translate-x-0.5" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </div>
                      <h4 className={`text-sm font-bold mt-1 transition-colors ${
                        isActive ? "text-primary-txt" : "text-primary-txt/80 group-hover:text-accent-clr"
                      }`}>
                        {m.title}
                      </h4>
                      <p className="text-[10px] text-muted-txt line-clamp-1 mt-0.5">{m.highlights}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Immersive Detailed Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-accent-clr/20 glass p-6 sm:p-8 space-y-6 shadow-lg text-left"
              >
                {/* Header info */}
                <div className="border-b border-accent-clr/15 pb-4 space-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-accent-clr uppercase tracking-widest">
                      {activeMilestone.period}
                    </span>
                    <span className="text-[10px] text-muted-txt font-semibold px-2 py-0.5 border border-accent-clr/15 rounded">
                      {activeMilestone.institution}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-txt mt-1">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-xs text-muted-txt italic mt-1 leading-relaxed">
                    {activeMilestone.highlights}
                  </p>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-primary-txt flex items-center gap-1.5">
                    <Award className="h-4.5 w-4.5 text-accent-clr" />
                    <span>Produced Deliverables & Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeMilestone.achievements.map((ach, idx) => (
                      <li key={idx} className="text-xs text-muted-txt leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-clr mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div className="p-5 rounded-xl border border-accent-clr/15 bg-surface/10 dark:bg-card-bg/40 space-y-2.5">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-primary-txt flex items-center gap-1.5">
                    <Lightbulb className="h-4.5 w-4.5 text-accent-clr" />
                    <span>Critical Lessons Learned</span>
                  </h4>
                  <p className="font-serif text-xs italic text-primary-txt/95 leading-relaxed">
                    "{activeMilestone.lessons}"
                  </p>
                </div>

                {/* Workspace indicator */}
                <div className="flex justify-between items-center text-[8px] text-muted-txt tracking-wide font-mono pt-2 border-t border-accent-clr/10 select-none">
                  <span>METRICS REF: {activeMilestone.id.toUpperCase()}_LOG</span>
                  <span>STATUS: VERIFIED</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
