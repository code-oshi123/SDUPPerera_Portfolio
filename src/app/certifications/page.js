"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

const certificationsData = [
  {
    title: "Postman Student Expert",
    issuer: "Postman",
    date: "2024",
    category: "Technical",
    skills: ["API Testing", "Postman Assertions", "Mock Servers"],
    link: "https://badgr.com/public/assertions/c0e9b98687a44f8ab4fcdcf5b99e7152",
  },
  {
    title: "Agile Project Management Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "LinkedIn Learning",
    skills: ["Agile", "Scrum Roles", "Sprint Metrics"],
    link: "https://www.linkedin.com/learning/agile-project-management-foundations",
  },
  {
    title: "Business Analysis Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "LinkedIn Learning",
    skills: ["Elicitation", "BRD Drafting", "Stakeholder Management"],
    link: "https://www.linkedin.com/learning/business-analysis-foundations",
  },
  {
    title: "Software QA Testing Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "LinkedIn Learning",
    skills: ["Manual Testing", "Bug Lifecycle", "Regression Testing"],
    link: "https://www.linkedin.com/learning/software-qa-testing-foundations",
  },
  {
    title: "BSc (Hons) Computer Science Student Academic Progress",
    issuer: "University of Staffordshire / APIIT",
    date: "2023 - Present",
    category: "Academic",
    skills: ["Object-Oriented Programming", "Software Quality Assurance", "SQL Databases"],
    link: "https://apiit.lk/",
  },
  {
    title: "Playwright Automation Testing Workshop Certificate",
    issuer: "APIIT Sri Lanka",
    date: "2024",
    category: "Workshops",
    skills: ["Playwright E2E", "Page Object Model", "UI Assertions"],
    link: "https://apiit.lk/",
  },
  {
    title: "APIIT Annual Tech Hackathon Participant Record",
    issuer: "APIIT Student Guild",
    date: "2024",
    category: "Competitions",
    skills: ["Rapid Prototyping", "Team Coordination", "Pitching"],
    link: "https://apiit.lk/",
  }
];

const categories = [
  { label: "All Credentials", val: "all" },
  { label: "LinkedIn Learning", val: "LinkedIn Learning" },
  { label: "Academic", val: "Academic" },
  { label: "Technical", val: "Technical" },
  { label: "Workshops", val: "Workshops" },
  { label: "Competitions", val: "Competitions" },
];

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || cert.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/5 to-transparent dark:from-surface-secondary/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
              Verified Achievements
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-primary-txt">
              Certifications & Records
            </h1>
            <p className="text-sm text-muted-txt max-w-2xl leading-relaxed">
              Showcasing professional courses, academic honors, technical certifications, and university workshops verifying business analysis, QA automation, and coordination skills.
            </p>
            <div className="w-12 h-[2px] bg-accent-clr mx-auto lg:mx-0 mt-2" />
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-card-bg p-4 rounded-xl border border-accent-clr/15">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-txt" />
              <input
                type="text"
                placeholder="Search by certificate title, issuer, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1.5 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.val}
                  onClick={() => setActiveCategory(cat.val)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    activeCategory === cat.val
                      ? "bg-accent-clr text-white dark:text-primary-bg"
                      : "text-muted-txt hover:bg-surface/20 dark:hover:bg-surface-secondary/15 hover:text-primary-txt"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display */}
          {filteredCerts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCerts.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-accent-clr/15 bg-card-bg p-6 flex flex-col justify-between space-y-6 premium-border"
                >
                  <div className="space-y-4">
                    {/* Header: Badge & Date */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-surface/25 dark:bg-surface-secondary/20 border border-accent-clr/10 text-[9px] font-bold text-accent-clr uppercase tracking-wider">
                        {cert.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-muted-txt font-medium">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg font-bold text-primary-txt leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-txt font-semibold italic flex items-center gap-1">
                        <ShieldCheck className="h-4 w-4 text-accent-clr" />
                        <span>Authority: {cert.issuer}</span>
                      </p>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-surface-secondary/10 text-[9px] font-semibold text-primary-txt"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-accent-clr flex items-center gap-1.5 hover:underline group pt-2 border-t border-accent-clr/10"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-accent-clr/20 bg-card-bg/10 space-y-3">
              <Award className="h-10 w-10 text-muted-txt mx-auto" />
              <h3 className="font-serif text-lg font-bold text-primary-txt">No Credentials Found</h3>
              <p className="text-xs text-muted-txt">
                Try refining your search query or choosing another credential category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
