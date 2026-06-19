"use client";

import { useState } from "react";
import { ClipboardList, Shield, Kanban, FileDown } from "lucide-react";

export default function ArtifactTabs({ deliverables }) {
  const [activeTab, setActiveTab] = useState("ba");

  const tabs = [
    { id: "ba", label: "Business Analysis", icon: ClipboardList, data: deliverables.ba || [] },
    { id: "qa", label: "Quality Assurance", icon: Shield, data: deliverables.qa || [] },
    { id: "pm", label: "Project Management", icon: Kanban, data: deliverables.pm || [] },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Tabs Menu */}
      <div className="flex border-b border-accent-clr/15 gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? "border-accent-clr text-accent-clr"
                  : "border-transparent text-muted-txt hover:text-primary-txt"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Artifacts List */}
      {currentTab.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentTab.data.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-accent-clr/10 bg-card-bg/50 flex items-center justify-between gap-4 group hover:border-accent-clr transition-colors duration-200"
            >
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-primary-txt leading-tight">
                  {item}
                </h4>
                <span className="text-[10px] text-muted-txt">
                  Format: PDF Specification / Spreadsheet Mapping
                </span>
              </div>

              {/* Simulated Download button */}
              <button
                className="p-2 rounded bg-surface/20 dark:bg-surface-secondary/20 hover:bg-accent-clr hover:text-white dark:hover:text-primary-bg text-accent-clr transition-colors"
                title={`Download ${item}`}
                onClick={() => alert(`Simulating download of: ${item}. In production, this targets the compiled static asset.`)}
              >
                <FileDown className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 rounded-xl border border-dashed border-accent-clr/20 text-xs text-muted-txt">
          No artifacts defined for this category in the current case study outline.
        </div>
      )}
    </div>
  );
}
