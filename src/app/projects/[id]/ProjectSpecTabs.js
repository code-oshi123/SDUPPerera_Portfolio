"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Users, Settings, ClipboardCheck, Lightbulb, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSpecTabs({ project }) {
  const [activeTab, setActiveTab] = useState("scope");

  const tabs = [
    { id: "scope", label: "Scope & Objectives", icon: Compass },
    { id: "reqs", label: "System Requirements", icon: Settings },
    { id: "process", label: "Process & SQA", icon: ClipboardCheck },
    { id: "retro", label: "Retrospective", icon: Lightbulb }
  ];

  return (
    <div className="space-y-6">
      {/* Tabs list */}
      <div className="flex border-b border-accent-clr/15 gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "border-accent-clr text-accent-clr font-bold"
                  : "border-transparent text-muted-txt hover:text-primary-txt"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab contents */}
      <div className="min-h-[220px] select-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {activeTab === "scope" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider">Project Overview</h3>
                  <p className="text-xs text-muted-txt leading-relaxed">{project.overview}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15 space-y-1.5">
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>Business Problem</span>
                    </span>
                    <p className="text-xs text-muted-txt leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15 space-y-1.5">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Business Objective</span>
                    </span>
                    <p className="text-xs text-muted-txt leading-relaxed">{project.objective}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-accent-clr/15 bg-card-bg/30 space-y-1.5">
                  <span className="text-[10px] font-bold text-primary-txt uppercase tracking-wider flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-accent-clr" />
                    <span>Stakeholders Identified</span>
                  </span>
                  <p className="text-xs text-muted-txt leading-relaxed">
                    Client stakeholders, academic product owners, dispatch operators, and development engineering team.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reqs" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Features / Requirements */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider">Functional Requirements</h3>
                  <ul className="space-y-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-muted-txt leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-accent-clr flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stacks applied */}
                <div className="md:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl border border-accent-clr/15 bg-card-bg/40 space-y-3">
                    <h4 className="text-[10px] font-bold text-primary-txt uppercase tracking-wider">Technologies Applied</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-surface/20 border border-accent-clr/10 text-[9px] font-semibold text-primary-txt"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture placeholder */}
                  <div className="p-4 rounded-xl border border-accent-clr/15 bg-card-bg/10 flex flex-col items-center justify-center text-center">
                    <span className="text-[8px] font-mono text-muted-txt">ARCHITECTURE_SCHEMATIC_LOADED</span>
                    <div className="w-12 h-6 border border-accent-clr/20 bg-surface/20 rounded mt-2 flex items-center justify-center text-[7px] text-accent-clr font-mono">
                      ENTITY_REL
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider">Development & Agile Process</h3>
                  <p className="text-xs text-muted-txt leading-relaxed">{project.responsibilities}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-accent-clr/10 pt-4">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold text-primary-txt uppercase tracking-wider">Agile Artifacts Produced</h4>
                    <p className="text-[11px] text-muted-txt">
                      Scrum product backlog, sprint estimations, RAID logs risk registers, burndown velocity indicators.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold text-primary-txt uppercase tracking-wider">QA Verification Scope</h4>
                    <p className="text-[11px] text-muted-txt">
                      Manual endpoint testing, Postman script assert validations, 40+ granular UI functional test scenarios.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "retro" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-sm font-bold text-primary-txt uppercase tracking-wider">Challenges & Impediments</h3>
                    <p className="text-xs text-muted-txt leading-relaxed">{project.challenges}</p>
                  </div>

                  <div className="space-y-2 p-5 rounded-xl border border-accent-clr/15 bg-surface/10 dark:bg-card-bg/40">
                    <h3 className="font-serif text-sm font-bold text-accent-clr uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="h-4.5 w-4.5" />
                      <span>Retrospective Lessons</span>
                    </h3>
                    <p className="text-xs text-muted-txt leading-relaxed italic">"{project.lessons}"</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
