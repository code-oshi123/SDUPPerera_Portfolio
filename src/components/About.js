"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Compass, Users2, Milestone } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Analytical Clarity",
    desc: "Deconstructs complex business challenges into clear, actionable requirements and documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Mindset",
    desc: "Champions test strategy, automation, and manual verification to deliver reliable software.",
  },
  {
    icon: Users2,
    title: "Collaborative Leadership",
    desc: "Facilitates seamless communication between client stakeholders, designers, and engineering teams.",
  },
  {
    icon: CheckCircle2,
    title: "Project Ownership",
    desc: "Applies Agile scrum principles to lead planning, coordinate sprints, and mitigate delivery risks.",
  },
];

const timelineEvents = [
  {
    year: "Current",
    title: "BSc (Hons) Computer Science",
    institution: "University of Staffordshire (APIIT Sri Lanka)",
    desc: "Undergraduate focusing on software engineering, databases, system design, and software quality assurance.",
  },
  {
    year: "Project Milestone",
    title: "Team Lead - Delivery Management System",
    institution: "Academic Project",
    desc: "Coordinated sprint planning, managed stakeholder communication, drove backlog refinement, and ran risk registers.",
  },
  {
    year: "Project Milestone",
    title: "Requirements Analyst & Dev - Ticket Management System",
    institution: "Academic Project",
    desc: "Authored functional specifications, designed test cases, ran manual testing, and verified scope parameters.",
  },
  {
    year: "Project Milestone",
    title: "Client-Facing Dev - E-Commerce Flower Shop",
    institution: "Academic Project",
    desc: "Managed client elicitation sessions, gathered requirements, built front-end features, and verified deployment quality.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Introduction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            About Me
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Bio, Mission & Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-primary-txt">
                Professional Overview & Values
              </h3>
              <p className="text-sm text-muted-txt leading-relaxed">
                As a Computer Science undergraduate at the University of Staffordshire, I have developed a keen specialization in bridging the gap between business specifications and high-quality software engineering. My experience centers on Agile methodologies, rigorous quality assurance, stakeholder communication, and project coordination.
              </p>
              <p className="text-sm text-muted-txt leading-relaxed">
                I thrive in environment contexts where analytical thinking, structured documentation (BRDs, User Stories, Test Cases), and cross-functional team leadership are essential to successful product execution.
              </p>
            </div>

            {/* Mission Box */}
            <div className="p-5 rounded-xl border border-accent-clr/20 bg-surface/10 dark:bg-card-bg/40">
              <h4 className="text-xs font-semibold tracking-wider text-accent-clr uppercase mb-2">
                Personal Mission Statement
              </h4>
              <p className="font-serif text-sm italic text-primary-txt/95 leading-relaxed">
                "To deliver corporate-grade software value by translation of client needs into verified, quality-assured requirements, facilitating execution clarity, and driving cross-functional alignment."
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-accent-clr/10 bg-primary-bg premium-border flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h5 className="text-xs font-bold text-primary-txt">{v.title}</h5>
                    </div>
                    <p className="text-xs text-muted-txt leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Journey Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-serif text-xl font-semibold text-primary-txt flex items-center gap-2">
              <Milestone className="h-5 w-5 text-accent-clr" />
              <span>Career Journey & Milestones</span>
            </h3>

            {/* Vertical Timeline */}
            <div className="relative pl-6 border-l border-accent-clr/20 space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-accent-clr bg-primary-bg group-hover:bg-accent-clr transition-colors duration-200" />
                  
                  <div className="space-y-1">
                    <span className="text-xs font-semibold tracking-wider text-accent-clr">
                      {event.year}
                    </span>
                    <h4 className="text-sm font-bold text-primary-txt group-hover:text-accent-clr transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-muted-txt font-semibold italic">
                      {event.institution}
                    </p>
                    <p className="text-xs text-muted-txt leading-relaxed mt-1">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
