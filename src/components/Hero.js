"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
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
              className="px-6 py-3 rounded-md bg-accent-clr text-white dark:text-primary-bg font-medium text-sm flex items-center gap-2 hover:bg-surface-secondary transition-all hover:translate-x-1 duration-200"
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

        {/* Profile Image Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-clr to-surface opacity-30 blur-2xl animate-pulse-slow pointer-events-none" />

            {/* Stylized Glass Photo Frame */}
            <div className="absolute inset-0 rounded-2xl border border-accent-clr/20 glass overflow-hidden flex items-center justify-center p-4">
              <div className="w-full h-full rounded-xl border border-accent-clr/10 bg-surface/10 dark:bg-card-bg/25 flex flex-col items-center justify-center text-center p-6 relative">
                {/* Minimalist Graphic Element */}
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

                {/* Corner details representing architecture mockup */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent-clr/40" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent-clr/40" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent-clr/40" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent-clr/40" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
