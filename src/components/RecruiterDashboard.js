"use client";

import { useState } from "react";
import { LayoutDashboard, GitBranch, Hourglass, BarChart3, CheckSquare, Award } from "lucide-react";
import GithubRepoGrid from "./GithubRepoGrid";

const competencyWeights = [
  { name: "Requirements Gathering & BA", weight: 90 },
  { name: "Quality Assurance & QA Automation", weight: 85 },
  { name: "Agile Project Coordination", weight: 80 },
  { name: "Software Development (Full Stack)", weight: 75 }
];

export default function RecruiterDashboard() {
  const [activeMetricTab, setActiveMetricTab] = useState("learning");

  // Mock data for Git grid (52 weeks x 7 days represented as 24 cols x 7 rows for layout fit)
  const gitCommitActivity = Array.from({ length: 168 }, () => Math.floor(Math.random() * 5));

  const getCommitColor = (level) => {
    switch (level) {
      case 0: return "bg-accent-clr/5 dark:bg-card-bg/20 border border-accent-clr/5";
      case 1: return "bg-accent-clr/20 border border-accent-clr/10";
      case 2: return "bg-accent-clr/40 border border-accent-clr/15";
      case 3: return "bg-accent-clr/60 border border-accent-clr/20";
      case 4: return "bg-accent-clr/90 border border-accent-clr/25";
      default: return "bg-accent-clr/5";
    }
  };

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Analytics Overview
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Recruiter Metrics Dashboard
          </h2>
          <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
            Real-time operational summary, core competency weighting, simulated GitHub contribution logs, and learning hours progression.
          </p>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Dashboard Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left panel: Statistics Grid & Competency Weightings */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2 mb-2">
              <LayoutDashboard className="h-5 w-5 text-accent-clr" />
              <span>Operational Analytics</span>
            </h3>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-accent-clr/15 bg-card-bg shadow-sm">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-muted-txt uppercase tracking-wider">Learning Hours</span>
                  <Hourglass className="h-4 w-4 text-accent-clr" />
                </div>
                <h4 className="text-2xl font-bold text-primary-txt font-serif mt-1">450+ hrs</h4>
                <p className="text-[9px] text-muted-txt mt-1">Self-paced & University courses</p>
              </div>

              <div className="p-4 rounded-xl border border-accent-clr/15 bg-card-bg shadow-sm">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-muted-txt uppercase tracking-wider">Certificates</span>
                  <Award className="h-4 w-4 text-accent-clr" />
                </div>
                <h4 className="text-2xl font-bold text-primary-txt font-serif mt-1">7 Verified</h4>
                <p className="text-[9px] text-muted-txt mt-1">Postman, LinkedIn Learning, APIIT</p>
              </div>
            </div>

            {/* Competency Weightings */}
            <div className="p-6 rounded-xl border border-accent-clr/15 bg-card-bg/50 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-txt flex items-center gap-1.5">
                <BarChart3 className="h-4 w-4 text-accent-clr" />
                <span>Competency Distribution Weight</span>
              </h4>
              <div className="space-y-4">
                {competencyWeights.map((w, idx) => (
                  <div key={idx} className="space-y-1.5 text-left">
                    <div className="flex justify-between text-[10px] font-bold text-primary-txt/90">
                      <span>{w.name}</span>
                      <span>{w.weight}%</span>
                    </div>
                    {/* Visual Meter */}
                    <div className="h-2 w-full rounded bg-surface/20 border border-accent-clr/10 overflow-hidden">
                      <div
                        className="h-full bg-accent-clr rounded transition-all duration-500"
                        style={{ width: `${w.weight}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Tabbed Visualizations (Git Activity Grid vs Learning Progress SVG Charts) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-accent-clr/15 glass overflow-hidden shadow-sm h-full justify-between p-6">
            <div className="space-y-6">
              
              {/* Tab Selector */}
              <div className="flex border-b border-accent-clr/15 pb-2 justify-between items-center">
                <span className="font-serif text-sm font-bold text-primary-txt flex items-center gap-2">
                  <GitBranch className="h-4.5 w-4.5 text-accent-clr" />
                  <span>Activity Visualization</span>
                </span>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveMetricTab("learning")}
                    className={`px-3 py-1 rounded text-[10px] font-bold tracking-wide uppercase transition ${
                      activeMetricTab === "learning"
                        ? "bg-accent-clr text-white dark:text-primary-bg"
                        : "text-muted-txt hover:bg-surface/20"
                    }`}
                  >
                    Hours Progression
                  </button>
                  <button
                    onClick={() => setActiveMetricTab("git")}
                    className={`px-3 py-1 rounded text-[10px] font-bold tracking-wide uppercase transition ${
                      activeMetricTab === "git"
                        ? "bg-accent-clr text-white dark:text-primary-bg"
                        : "text-muted-txt hover:bg-surface/20"
                    }`}
                  >
                    Commit Activity
                  </button>
                </div>
              </div>

              {/* Tab display */}
              <div className="flex-grow flex items-center justify-center py-4 min-h-[180px]">
                {activeMetricTab === "learning" ? (
                  /* SVG Learning hours progression chart */
                  <div className="w-full space-y-4">
                    <div className="h-40 w-full relative flex items-end">
                      {/* SVG Line Graph */}
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent-clr)" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="var(--accent-clr)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area Fill */}
                        <path
                          d="M 0,150 L 0,120 Q 100,90 200,60 T 400,20 L 500,10 L 500,150 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Line */}
                        <path
                          d="M 0,120 Q 100,90 200,60 T 400,20 L 500,10"
                          fill="none"
                          stroke="var(--accent-clr)"
                          strokeWidth="2.5"
                        />
                      </svg>
                      {/* X-axis labels */}
                      <div className="absolute bottom-0 inset-x-0 flex justify-between text-[9px] text-muted-txt px-1 border-t border-accent-clr/15 pt-1.5 font-mono select-none">
                        <span>JAN (20h)</span>
                        <span>FEB (45h)</span>
                        <span>MAR (90h)</span>
                        <span>APR (160h)</span>
                        <span>MAY (280h)</span>
                        <span>JUN (450h)</span>
                      </div>
                    </div>
                    <span className="block text-[9px] text-muted-txt text-center italic leading-relaxed select-none">
                      Line represents cumulative learning hours track including database modeling, API testing workshops, and Staffordshire modules.
                    </span>
                  </div>
                ) : (
                  /* GitHub Commits Contribution Activity Grid */
                  <div className="w-full space-y-4 text-left">
                    <div className="flex justify-between items-center mb-1 text-[9px] text-muted-txt font-mono select-none">
                      <span>425 Commits in the last year</span>
                      <div className="flex items-center gap-1">
                        <span>Less</span>
                        <span className="w-2.5 h-2.5 rounded bg-accent-clr/5" />
                        <span className="w-2.5 h-2.5 rounded bg-accent-clr/20" />
                        <span className="w-2.5 h-2.5 rounded bg-accent-clr/40" />
                        <span className="w-2.5 h-2.5 rounded bg-accent-clr/60" />
                        <span className="w-2.5 h-2.5 rounded bg-accent-clr/90" />
                        <span>More</span>
                      </div>
                    </div>

                    {/* Commit Matrix Grid */}
                    <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-2 scrollbar-thin select-none max-w-full justify-start">
                      {gitCommitActivity.map((lvl, idx) => (
                        <div
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-sm transition-colors duration-200 ${getCommitColor(lvl)}`}
                          title={`Commit weight level: ${lvl}`}
                        />
                      ))}
                    </div>

                    <span className="block text-[9px] text-muted-txt text-center italic leading-relaxed select-none">
                      Visual logs simulated from active academic repositories. Solid green blocks represent days of intense commit logs.
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Dashboard Footer info */}
            <div className="flex justify-between items-center text-[8px] text-muted-txt tracking-wide font-mono pt-4 border-t border-accent-clr/10 select-none">
              <span>REF: RECRUITER_METRICS_DASH</span>
              <span>STATUS: ONLINE</span>
            </div>
          </div>

        </div>

        {/* Integrated GitHub Repos Section */}
        <div className="pt-16 border-t border-accent-clr/15 text-left">
          <h3 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2 mb-8">
            <GitBranch className="h-5 w-5 text-accent-clr" />
            <span>GitHub Specifications Directory</span>
          </h3>
          <GithubRepoGrid />
        </div>

      </div>
    </section>
  );
}
