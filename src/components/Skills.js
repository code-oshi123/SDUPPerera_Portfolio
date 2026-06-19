"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Shield, Kanban, Code, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    id: "ba",
    name: "Business Analysis",
    icon: ClipboardList,
    skills: [
      { name: "Requirements Gathering", desc: "Conducting elicitation sessions, stakeholder interviews, and gap reviews." },
      { name: "User Stories & Backlogs", desc: "Writing user-centric user stories with precise INVEST parameters." },
      { name: "Acceptance Criteria", desc: "Documenting Gherkin-syntax (Given-When-Then) criteria for QA validation." },
      { name: "Process Mapping", desc: "Creating detailed workflow charts, swimlane maps, and flow diagrams." },
      { name: "Stakeholder Analysis", desc: "Managing interest grid matrices and client feedback sessions." },
      { name: "Documentation", desc: "Drafting Business Requirements Documents (BRD) and Functional Specification Documents (FSD)." },
      { name: "Gap Analysis", desc: "Identifying discrepancies between current 'As-Is' and planned 'To-Be' systems." },
      { name: "Workflow Analysis", desc: "Analyzing process efficiency, identifying bottlenecks, and refining data flows." },
    ],
  },
  {
    id: "qa",
    name: "Quality Assurance",
    icon: Shield,
    skills: [
      { name: "Manual Testing", desc: "Executing smoke, sanity, regression, and exploratory tests on web apps." },
      { name: "Test Planning", desc: "Authoring comprehensive test strategies and test cases mapped to user stories." },
      { name: "Test Case Design", desc: "Utilizing equivalence partitioning and boundary value techniques." },
      { name: "Bug Reporting & Defect Tracking", desc: "Writing structured, reproducible bug reports with steps and logs." },
      { name: "API Testing", desc: "Verifying REST API endpoints, status codes, request payloads, and response bodies." },
      { name: "Playwright Automation", desc: "Writing automated end-to-end tests for modern, dynamic web pages." },
      { name: "Postman Automation", desc: "Configuring collection runs, pre-request scripts, and test assertion blocks." },
      { name: "Regression Testing", desc: "Designing automated regression suites to maintain system integrity." },
    ],
  },
  {
    id: "pm",
    name: "Project Management",
    icon: Kanban,
    skills: [
      { name: "Agile & Scrum Practices", desc: "Participating in sprint plannings, daily standups, and retrospective loops." },
      { name: "Sprint Planning", desc: "Refining backlog size, estimating story points, and mapping sprint velocity." },
      { name: "Risk Management", desc: "Maintaining active Risk Registers, identifying bottlenecks, and designing mitigations." },
      { name: "Project Coordination", desc: "Aligning developmental resources to keep deliverables on schedule." },
      { name: "Team Leadership", desc: "Directing team task allocations, resolving disputes, and fostering synergy." },
      { name: "RAID Logs", desc: "Tracking Risks, Assumptions, Issues, and Dependencies throughout the lifecycle." },
      { name: "Burndown Monitoring", desc: "Analyzing sprint metrics and velocity fluctuations to forecast completion." },
    ],
  },
  {
    id: "dev",
    name: "Development",
    icon: Code,
    skills: [
      { name: "JavaScript & Node.js", desc: "Building responsive frontend pages and backend REST APIs." },
      { name: "C# & OOP", desc: "Writing structured Object-Oriented code for systems and desktop apps." },
      { name: "Python", desc: "Developing scripts for data operations, calculations, and QA assertions." },
      { name: "SQL & Databases", desc: "Designing database structures, writing complex JOINs and queries." },
      { name: "HTML5 & CSS3", desc: "Styling semantic structures with clean vanilla classes and layouts." },
      { name: "Object-Oriented Design", desc: "Applying SOLID principles to build modular, clean codebases." },
    ],
  },
  {
    id: "tools",
    name: "Tools & Software",
    icon: Wrench,
    skills: [
      { name: "Jira & Confluence", desc: "Creating epic maps, tracking tasks, and compiling sprint releases." },
      { name: "Trello", desc: "Utilizing Kanban board visualization for quick workspace tracking." },
      { name: "Git & GitHub", desc: "Managing codebase versions, tracking pull requests, and code merges." },
      { name: "Postman", desc: "Developing mock servers, environment variables, and API environments." },
      { name: "VS Code", desc: "Writing, refactoring, and debugging source files locally." },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/25">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Specializations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Professional Skillset
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Desktop Tabs layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Selector Column */}
          <div className="lg:col-span-4 flex flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 flex-row lg:flex-col border-b lg:border-b-0 lg:border-r border-accent-clr/15">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                    isActive
                      ? "bg-accent-clr text-white dark:text-primary-bg font-semibold lg:translate-x-2"
                      : "text-muted-txt hover:bg-surface-secondary/15 hover:text-primary-txt"
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Grid display column with transition */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeCategory.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-card-bg border border-accent-clr/10 premium-border flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-accent-clr">
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-accent-clr" />
                      <h4 className="text-sm font-bold text-primary-txt">{skill.name}</h4>
                    </div>
                    <p className="text-xs text-muted-txt leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
