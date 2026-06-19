"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Lightbulb,
  BarChart2,
  Clock,
  Shuffle,
  Handshake,
  Eye,
} from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Leadership",
    desc: "Guided cross-functional teams through academic sprints, coordinating tasks and running retrospectives.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Adept at client interviews, status updates, and writing clean, understandable project specifications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Identifies system bottlenecks and functional gaps, recommending efficient and robust solutions.",
  },
  {
    icon: BarChart2,
    title: "Analytical Thinking",
    desc: "Translates complex user feedback into structured user stories, wireframes, and workflows.",
  },
  {
    icon: Clock,
    title: "Time Management",
    desc: "Handles project coordination tasks while maintaining high academic performance across concurrent modules.",
  },
  {
    icon: Shuffle,
    title: "Adaptability",
    desc: "Seamlessly switches roles between Business Analysis elicitation, QA testing, and software development.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "Works in synergy with developers, testing teams, and external users to align product expectations.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "Performs meticulous manual API checks, writes granular test plans, and designs precise test cases.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Strengths() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-primary-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Professional Strengths
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Strengths Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strengths.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-xl bg-card-bg border border-accent-clr/15 premium-border flex flex-col items-start gap-4 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr group-hover:bg-accent-clr group-hover:text-white dark:group-hover:text-primary-bg transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-primary-txt group-hover:text-accent-clr transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-txt leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
