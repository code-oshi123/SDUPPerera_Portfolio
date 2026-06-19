"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import HeroBgAnimation from "./HeroBgAnimation";

const roles = [
  "Business Analyst",
  "QA Automation Engineer",
  "Project Coordinator",
  "Associate Product Manager",
  "Software Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("card"); // "card" | "terminal"

  // CLI Terminal states
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeTab === "terminal") {
      focusInput();
    }
  }, [activeTab]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: "input", text: trimmed }];
    const commandLower = trimmed.toLowerCase();
    const args = commandLower.split(" ");
    const baseCommand = args[0];

    let output = "";
    let isError = false;

    switch (baseCommand) {
      case "help":
        output = `Available commands:
  about      - Professional overview & bio
  skills     - Technical competencies & stack
  projects   - Featured software builds
  education  - Academic credentials
  experience - Work & project history
  clear      - Clear the screen logs
  
Tip: Type any command above and hit Enter.`;
        break;
      case "clear":
        setHistory([]);
        setCurrentInput("");
        setCommandHistory([...commandHistory, trimmed]);
        setHistoryIndex(-1);
        return;
      case "about":
        output = `USHANI PERERA - CS Undergraduate & Systems Specialist
==================================================
Bridging business specifications, software quality, and tech solutions.
Specialized in BA requirements elicitation, QA manual/auto testing, 
and Agile scrum coordination.`;
        break;
      case "skills":
        output = `{\n  "competencies": [\n    "Requirements Elicitation (BRD, FSD, User Stories)",\n    "Software Quality Assurance (API, Manual UI, Playwright)",\n    "Agile Project Management (Scrum checkpoints, Backlogs)"\n  ],\n  "languages_and_tools": [\n    "JavaScript", "C#", "SQL", "Postgres", "Postman", "Playwright", "Jira"\n  ]\n}`;
        break;
      case "projects":
        output = `FEATURED PROJECTS:
------------------
1. Delivery Management System [Team Lead / QA Lead] (2025)
   - Logistics platform with route allocation and real-time status alerts.
2. Ticket Management System [Requirements Analyst / Dev] (2024)
   - Internal helpdesk to raise, prioritize, and verify bug tickets.
3. E-Commerce Flower Shop [Client-Facing Developer] (2024)
   - B2C e-commerce catalog and ordering engine.`;
        break;
      case "education":
        output = `ACADEMIC QUALIFICATIONS:
------------------------
1. BSc (Hons) Computer Science (2023 - Present)
   - University of Staffordshire (APIIT Sri Lanka)
2. Computing Foundation (Feb 2024 - Oct 2024)
   - APIIT Sri Lanka
3. G.C.E. Ordinary Level (2022/2023)
   - 9 A's Pass (Highest distinction passes)`;
        break;
      case "experience":
        output = `PROJECT EXPERIENCE:
-------------------
1. Project Team Lead & QA Lead (2025)
   - Delivery Management System
2. Requirements Analyst & Manual Tester (2024)
   - Ticket Management System
3. Client-Facing Full Stack Developer (2024)
   - E-Commerce Flower Shop`;
        break;
      default:
        output = `command not found: '${trimmed}'. Type 'help' for available commands.`;
        isError = true;
        break;
    }

    setHistory([...newHistory, { type: isError ? "error" : "output", text: output }]);
    setCommandHistory([...commandHistory, trimmed]);
    setHistoryIndex(-1);
    setCurrentInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCurrentInput(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCurrentInput("");
      } else {
        setHistoryIndex(nextIndex);
        setCurrentInput(commandHistory[nextIndex]);
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface/10 to-transparent dark:from-surface-secondary/5 dark:to-transparent">
      {/* Background Animation */}
      <HeroBgAnimation />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest text-accent-clr uppercase block mb-2">
              Corporate Portfolio
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary-txt leading-none">
              USHANI PERERA
            </h1>
          </motion.div>
          
          {/* Dynamic Role Switcher */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-serif italic text-accent-clr font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-txt max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Bridging business needs, software quality, and technology solutions through analytical thinking, collaboration, leadership, and continuous learning.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-md bg-accent-clr text-white dark:text-primary-bg font-medium text-sm flex items-center gap-2 hover:bg-surface-secondary transition-all hover:translate-x-1 duration-200 shadow-sm"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/resume.pdf"
              download="Ushani_Perera_Resume.pdf"
              className="px-6 py-3 rounded-md border border-accent-clr/40 text-primary-txt font-medium text-sm flex items-center gap-2 hover:bg-surface/20 dark:hover:bg-surface-secondary/15 transition-all duration-200"
            >
              <Download className="h-4 w-4 text-accent-clr" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-md bg-surface/40 hover:bg-surface/70 dark:bg-surface-secondary/25 dark:hover:bg-surface-secondary/40 text-primary-txt font-medium text-sm transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-5 pt-6 text-muted-txt"
          >
            <a
              href="https://linkedin.com/in/ushani-perera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-clr transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ushaniperera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-clr transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:ushani.perera@example.com"
              className="hover:text-accent-clr transition-colors duration-200"
              aria-label="Email Address"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Profile / CLI Section */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* Toggle Tab Bar */}
          <div className="flex gap-2 mb-4 p-1 bg-surface-secondary/25 dark:bg-card-bg/35 rounded-lg border border-accent-clr/15 z-10 relative">
            <button
              onClick={() => setActiveTab("card")}
              className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded transition ${
                activeTab === "card"
                  ? "bg-accent-clr text-white dark:text-primary-bg shadow-sm font-semibold"
                  : "text-primary-txt/70 hover:text-primary-txt hover:bg-surface/20"
              }`}
            >
              Profile Card
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded transition ${
                activeTab === "terminal"
                  ? "bg-accent-clr text-white dark:text-primary-bg shadow-sm font-semibold"
                  : "text-primary-txt/70 hover:text-primary-txt hover:bg-surface/20"
              }`}
            >
              Developer CLI
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {activeTab === "card" ? (
              /* Original Profile Card Frame */
              <div className="absolute inset-0 rounded-2xl border border-accent-clr/20 glass overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full rounded-xl border border-accent-clr/10 bg-surface/10 dark:bg-card-bg/25 flex flex-col items-center justify-center text-center p-6 relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-secondary/20 dark:bg-surface-secondary/15 flex items-center justify-center mb-6 border border-accent-clr/20">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-accent-clr tracking-widest">
                      UP
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold tracking-wider text-primary-txt">
                    Ushani Perera
                  </h2>
                  <p className="text-xs text-accent-clr uppercase tracking-widest mt-1 font-sans">
                    CS Undergrad & Specialist
                  </p>
                  <div className="w-16 h-[1px] bg-accent-clr/30 my-4" />
                  <p className="text-xs text-muted-txt max-w-[200px] leading-relaxed italic">
                    "Translating business problems into clean, high-quality systems"
                  </p>

                  {/* Corner architectural details */}
                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent-clr/40" />
                  <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent-clr/40" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent-clr/40" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent-clr/40" />
                </div>
              </div>
            ) : (
              /* Developer CLI Interactive Terminal */
              <div
                onClick={focusInput}
                className="absolute inset-0 rounded-2xl border border-accent-clr/20 bg-black/85 backdrop-blur-md overflow-hidden flex flex-col p-4 font-mono text-[10px] sm:text-xs text-primary-txt/90 cursor-text shadow-xl"
              >
                {/* Header Window Bar */}
                <div className="flex items-center justify-between border-b border-accent-clr/15 pb-2 mb-3">
                  <div className="flex items-center gap-1.5 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-muted-txt/80 tracking-wide select-none">visitor@ushani-portfolio: ~</span>
                  <div className="w-10" />
                </div>

                {/* Output Screen */}
                <div className="flex-grow overflow-y-auto space-y-2 mb-2 pr-1 select-text scrollbar-thin">
                  <div className="text-muted-txt/90 leading-relaxed">
                    Welcome to Ushani's Portfolio CLI v1.0.0
                    <br />
                    Type <span className="text-accent-clr font-bold">help</span> to list available commands.
                  </div>

                  {history.map((line, idx) => (
                    <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                      {line.type === "input" ? (
                        <div className="flex items-start gap-1">
                          <span className="text-accent-clr font-bold">visitor@ushani-portfolio:~$</span>
                          <span className="text-white">{line.text}</span>
                        </div>
                      ) : (
                        <div className={line.type === "error" ? "text-red-400" : "text-neutral-300"}>
                          {line.text}
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Input Prompt */}
                <div className="flex items-center gap-1 border-t border-accent-clr/10 pt-2 shrink-0">
                  <span className="text-accent-clr font-bold select-none">visitor@ushani-portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow bg-transparent border-none outline-none text-white caret-accent-clr min-w-0"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
