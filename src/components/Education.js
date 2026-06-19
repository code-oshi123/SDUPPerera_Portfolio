"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    period: "2023 - Present",
    degree: "Bachelor of Science (Hons) in Computer Science",
    institution: "University of Staffordshire (APIIT Sri Lanka)",
    achievements: [
      "Specialized in Software Quality Assurance, Software Engineering, and Enterprise Database Architecture.",
      "Dean's List / Consistent academic performer.",
      "Active participant in tech workshops and university clubs."
    ],
    modules: [
      "Software Quality Assurance & Testing",
      "System Design & Development",
      "Object-Oriented Programming (C# / JavaScript)",
      "Database Systems & SQL",
      "Agile Project Management & Methods"
    ]
  },
  {
    period: "Feb 2024 - Oct 2024",
    degree: "Computing Foundation",
    institution: "APIIT Sri Lanka",
    achievements: [
      "Completed foundation pathway focusing on computational logic and academic standards.",
      "Excelled in fundamental coding constructs and network structures."
    ],
    modules: [
      "Introduction to Programming",
      "Systems Analysis & Design",
      "Mathematics for Computing",
      "Communication & Academic Skills"
    ]
  },
  {
    period: "2022 (2023)",
    degree: "G.C.E. Ordinary Level — 9 A's Pass",
    institution: "Secondary Education",
    achievements: [
      "Achieved 9 A's (Highest possible distinction passes in all 9 subjects).",
      "Excellent performance in Mathematics, Science, and English."
    ],
    modules: [
      "Mathematics",
      "Science",
      "English",
      "Information & Communication Technology",
      "Commerce"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/25">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Qualifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Education
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-semibold text-primary-txt flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent-clr" />
            <span>Academic History</span>
          </h3>

          <div className="relative pl-6 border-l border-accent-clr/20 space-y-10">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative space-y-4"
              >
                {/* Timeline bullet */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-accent-clr bg-primary-bg" />
                
                <div className="flex items-center gap-2 text-xs text-accent-clr font-semibold">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{edu.period}</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary-txt">{edu.degree}</h4>
                  <p className="text-xs font-semibold text-muted-txt italic">{edu.institution}</p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-clr">
                    <Award className="h-4 w-4" />
                    <span>Academic Highlights</span>
                  </div>
                  <ul className="space-y-1 pl-1">
                    {edu.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="text-xs text-muted-txt leading-relaxed flex items-start gap-1.5">
                        <span className="text-accent-clr mt-1">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modules */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-clr">
                    <BookOpen className="h-4 w-4" />
                    <span>Key Learning Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-1">
                    {edu.modules.map((mod, modIdx) => (
                      <span
                        key={modIdx}
                        className="px-2.5 py-1 rounded bg-surface/25 border border-accent-clr/15 text-[10px] font-medium text-primary-txt"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
