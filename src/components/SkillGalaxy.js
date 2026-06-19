"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, ClipboardList, Shield, Kanban, Code } from "lucide-react";

const skillCategories = [
  {
    id: "ba",
    name: "Business Analysis",
    icon: ClipboardList,
    desc: "Elicitation, functional specs modeling, and stakeholder alignment.",
    skills: [
      "BRD / FSD Drafting",
      "INVEST User Stories",
      "UML swimlane flowcharts",
      "MoSCoW Prioritization",
      "Gap Analysis"
    ]
  },
  {
    id: "qa",
    name: "Quality Assurance",
    icon: Shield,
    desc: "API validating, automated e2e runs, and manual regression checks.",
    skills: [
      "Playwright Automation",
      "Postman API Assertions",
      "Manual Test Cases",
      "Bug Lifecycle Logs",
      "Regression Testing"
    ]
  },
  {
    id: "pm",
    name: "Project Management",
    icon: Kanban,
    desc: "Scrum coordination, risk modeling, and velocity parameters.",
    skills: [
      "Agile Scrum checkpointing",
      "RAID Logs & Risk tracking",
      "WBS & Gantt planning",
      "Backlog Grooming",
      "Stakeholder reporting"
    ]
  },
  {
    id: "dev",
    name: "Software Development",
    icon: Code,
    desc: "Structured backend logic, DB designs, and responsive layouts.",
    skills: [
      "JavaScript / React",
      "C# / .NET Core",
      "PostgreSQL & SQL Server",
      "Tailwind / Bootstrap",
      "Version Control (Git)"
    ]
  }
];

export default function SkillGalaxy() {
  const [activeCategory, setActiveCategory] = useState("ba");
  const selectedCat = skillCategories.find((c) => c.id === activeCategory);

  // Position sub-nodes circularly (5 items: 72 degrees each)
  const getSubnodeCoords = (idx, total = 5) => {
    const radius = 120; // radius of orbit
    const angle = (idx * 2 * Math.PI) / total - Math.PI / 2; // start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-primary-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Specialties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Skill Galaxy
          </h2>
          <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
            Select a capability sector to expand and visualize the underlying technologies and project standards in the network orbit.
          </p>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Skill Galaxy Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Category Selectors (Hub Nodes) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2 mb-2">
              <Network className="h-5 w-5 text-accent-clr" />
              <span>Core Core Capabilities</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`p-5 rounded-xl border cursor-pointer text-left transition-all duration-200 ${
                      isActive
                        ? "bg-card-bg border-accent-clr shadow-md"
                        : "bg-card-bg/25 border-accent-clr/10 hover:border-accent-clr/30 hover:bg-card-bg/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded ${
                        isActive 
                          ? "bg-accent-clr text-white dark:text-primary-bg" 
                          : "bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-bold text-primary-txt">{cat.name}</h4>
                    </div>
                    <p className="text-xs text-muted-txt mt-3 leading-relaxed">{cat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic SVG Network Node Visualization */}
          <div className="lg:col-span-6 flex justify-center items-center h-[340px] sm:h-[380px] relative overflow-hidden bg-card-bg/10 rounded-2xl border border-accent-clr/10">
            {/* Fine vector details */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-accent-clr/20" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-accent-clr/20" />

            <div className="relative w-64 h-64 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Dynamic connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {selectedCat.skills.map((_, idx) => {
                      const coords = getSubnodeCoords(idx, selectedCat.skills.length);
                      return (
                        <motion.line
                          key={idx}
                          x1="128"
                          y1="128"
                          x2={128 + coords.x}
                          y2={128 + coords.y}
                          stroke="rgba(110, 90, 71, 0.25)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                        />
                      );
                    })}
                  </svg>

                  {/* Central Node representing the active category */}
                  <div className="absolute z-10 w-24 h-24 rounded-full border border-accent-clr bg-card-bg shadow flex flex-col items-center justify-center p-2 text-center select-none">
                    <selectedCat.icon className="h-5 w-5 text-accent-clr mb-1.5" />
                    <span className="text-[10px] font-bold text-primary-txt leading-none">{selectedCat.name}</span>
                  </div>

                  {/* Orbiting Sub-skills Nodes */}
                  {selectedCat.skills.map((skill, idx) => {
                    const coords = getSubnodeCoords(idx, selectedCat.skills.length);
                    return (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{ scale: 1, x: coords.x, y: coords.y }}
                        transition={{ type: "spring", stiffness: 100, damping: 12, delay: idx * 0.05 }}
                        className="absolute w-24 p-2 rounded border border-accent-clr/15 bg-primary-bg shadow-sm text-center select-none z-10 hover:border-accent-clr transition-colors duration-150"
                        style={{
                          left: "calc(50% - 48px)", // half of node width (96px/2)
                          top: "calc(50% - 24px)"  // half of node height (48px/2)
                        }}
                      >
                        <span className="text-[9px] font-semibold text-primary-txt leading-tight block">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
