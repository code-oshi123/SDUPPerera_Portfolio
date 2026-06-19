"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    period: "2025 (Project Lead)",
    role: "Project Team Lead & QA Lead",
    project: "Delivery Management System",
    highlights: [
      "Agile Collaboration: Conducted daily scrum checkpoints, defined user stories, and refined backlog priorities.",
      "Risk Management: Authored risk registers, tracked blocker items, and managed stakeholder progress.",
      "Quality Activities: Designed QA execution plans and manual API test assertions, verifying release parameters.",
      "Stakeholder Communication: Led progress demonstrations to academic project owners."
    ]
  },
  {
    period: "2024 (Analyst / QA)",
    role: "Requirements Analyst & Manual Tester",
    project: "Ticket Management System",
    highlights: [
      "Requirements gathering: Conducted elicitation reviews to translate user needs into functional schemas.",
      "Software Testing: Drafted 40+ granular test cases, verified API endpoints, and compiled defect tracking sheets.",
      "Scope management: Monitored scrum boards to prevent scope creep and align deliveries."
    ]
  },
  {
    period: "2024 (Client-Facing Developer)",
    role: "Client-Facing Full Stack Developer",
    project: "E-Commerce Flower Shop",
    highlights: [
      "Client communication: Gathered styling, catalogue, and operational parameters through client interviews.",
      "Testing activities: Validated transaction processing and responsiveness logs.",
      "Agile delivery: Led prompt demo cycles to collect early iteration feedback."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-primary-bg">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Project History
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-semibold text-primary-txt flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent-clr" />
            <span>Project Experience</span>
          </h3>

          <div className="relative pl-6 border-l border-accent-clr/20 space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative space-y-3"
              >
                {/* Timeline bullet */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-accent-clr bg-primary-bg" />
                
                <div className="flex items-center gap-2 text-xs text-accent-clr font-semibold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary-txt">{exp.role}</h4>
                  <p className="text-xs font-semibold text-muted-txt italic">{exp.project}</p>
                </div>

                <ul className="space-y-1.5 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-muted-txt leading-relaxed flex items-start gap-1.5">
                      <span className="text-accent-clr mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
