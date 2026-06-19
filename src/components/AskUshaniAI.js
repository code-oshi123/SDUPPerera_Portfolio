"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const qaAnswers = {
  projects: `Ushani has led and developed several key projects:
1. **Delivery Management System (2025 - Team Lead & QA Lead)**: An agile logistics coordinator managing route allocation and real-time status alerts.
2. **Ticket Management System (2024 - Requirements Analyst & Developer)**: An internal helpdesk platform managing bug lifecycles and SLA resolution rules.
3. **E-Commerce Flower Shop (2024 - Client-Facing Developer)**: A retail shop calendar ordering portal built through direct client elicitation.`,

  qa: `Ushani has strong Quality Assurance competencies:
- **Automation Frameworks**: Implementing E2E verification models using Playwright (Page Object Model).
- **API Testing**: Expert in Postman collections assertions, mock servers, and REST validation.
- **Manual Practices**: Authored 40+ granular functional test cases, defect reports, and boundary threshold verification matrices.
- **Academic SQA**: Studied formal Software QA models, metrics checks, and verification pipelines in her Computer Science degree.`,

  certifications: `Ushani holds several professional credentials:
- **Postman Student Expert**: Accredited for API testing, environment variables, and collections scripts.
- **Playwright Automation Testing**: Deployed UI checks via APIIT SQA workshops.
- **LinkedIn Learning Foundations**: Completed certified courses in *Agile Project Management*, *Business Analysis*, and *Software QA Testing*.
- **Academic Honors**: consistent high performance in Staffordshire BSc coursework.`,

  technologies: `Ushani is competent in a variety of modern languages and tools:
- **Languages**: JavaScript (React / Node.js), C# (ASP.NET Core), SQL.
- **Databases**: PostgreSQL, SQL Server, MySQL.
- **Tools & Testing**: Playwright, Postman, Jira, Git, Draw.io, MS Excel.
- **Frameworks & Styling**: Bootstrap, Tailwind CSS, Next.js.`,

  ba: `Ushani has solid Business Analysis experience:
- **Requirements Elicitation**: Managed client interviews to construct Business Requirements Documents (BRD) and Functional Spec Sheets.
- **Agile backlog mapping**: Drafting INVEST-compliant User Stories and clear acceptance parameters.
- **Process Modeling**: Mapping As-Is and To-Be workflows using swimlane and UML diagrams.
- **Scope control**: Utilizing MoSCoW prioritization to keep product iterations aligned.`
};

const predefinedQuestions = [
  { text: "What projects has she completed?", category: "projects" },
  { text: "What QA experience does she have?", category: "qa" },
  { text: "What BA experience does she have?", category: "ba" },
  { text: "What technologies does she use?", category: "technologies" },
  { text: "What certifications does she hold?", category: "certifications" }
];

export default function AskUshaniAI() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Ushani's Professional Career Assistant. Ask me anything about her projects, QA automation experience, business analysis, or technical stacks."
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const triggerBotResponse = (category) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyText = qaAnswers[category] || "I'm sorry, I couldn't find a specific detail matching your query. Try asking about her 'projects', 'QA', 'business analysis', or 'technologies'!";
      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
    }, 1000);
  };

  const handleSend = (textToSend) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInputVal("");

    // Simple keyword mapping matching logic
    const lower = trimmed.toLowerCase();
    let matchedCategory = null;

    if (lower.includes("project") || lower.includes("build") || lower.includes("completed")) {
      matchedCategory = "projects";
    } else if (lower.includes("qa") || lower.includes("test") || lower.includes("quality") || lower.includes("automation") || lower.includes("playwright")) {
      matchedCategory = "qa";
    } else if (lower.includes("ba") || lower.includes("business") || lower.includes("analysis") || lower.includes("requirements") || lower.includes("brd")) {
      matchedCategory = "ba";
    } else if (lower.includes("tech") || lower.includes("tool") || lower.includes("language") || lower.includes("code") || lower.includes("stack")) {
      matchedCategory = "technologies";
    } else if (lower.includes("cert") || lower.includes("credential") || lower.includes("badge") || lower.includes("linkedin")) {
      matchedCategory = "certifications";
    }

    triggerBotResponse(matchedCategory);
  };

  return (
    <section id="ask-ai" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-primary-bg text-left">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Recruitment Assistant
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Ask About Ushani
          </h2>
          <p className="text-xs text-muted-txt max-w-xl mx-auto leading-relaxed">
            Get instant, accurate information regarding Ushani's project experience, technical capabilities, and workflow strategies from her digital assistant.
          </p>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        {/* Chat Widget Container */}
        <div className="rounded-2xl border border-accent-clr/20 glass overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12 max-w-3xl mx-auto h-[500px]">
          
          {/* Left panel: Quick Chips */}
          <div className="md:col-span-4 border-r border-accent-clr/15 p-5 bg-card-bg/20 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-muted-txt uppercase tracking-wider block">
                Quick Questions
              </span>
              <div className="flex flex-wrap md:flex-col gap-2">
                {predefinedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages((prev) => [...prev, { sender: "user", text: q.text }]);
                      triggerBotResponse(q.category);
                    }}
                    className="px-3 py-2 text-[10px] font-semibold text-primary-txt/80 border border-accent-clr/15 rounded-lg bg-primary-bg hover:border-accent-clr hover:bg-card-bg transition text-left cursor-pointer"
                  >
                    {q.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[9px] text-muted-txt font-mono">
              <Bot className="h-4 w-4 text-accent-clr" />
              <span>AGENT_GUIDE_ACTIVE</span>
            </div>
          </div>

          {/* Right panel: Chat Screen */}
          <div className="md:col-span-8 flex flex-col h-full bg-black/5 dark:bg-black/20">
            
            {/* Screen Messages */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-thin">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      isBot ? "mr-auto" : "ml-auto flex-row-reverse"
                    }`}
                  >
                    <div className={`p-2 rounded-full border ${
                      isBot
                        ? "bg-accent-clr text-white border-accent-clr"
                        : "bg-surface text-primary-txt border-accent-clr/20"
                    }`}>
                      {isBot ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    </div>

                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                      isBot
                        ? "bg-card-bg border border-accent-clr/10 text-primary-txt shadow-sm rounded-tl-none"
                        : "bg-accent-clr text-white rounded-tr-none shadow-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 mr-auto">
                  <div className="p-2 rounded-full border bg-accent-clr text-white border-accent-clr">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-card-bg border border-accent-clr/10 text-xs text-muted-txt rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-clr animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-clr animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-clr animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-4 border-t border-accent-clr/15 bg-card-bg/40 backdrop-blur-sm flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about her skills, projects, or background..."
                className="flex-grow px-3 py-2 text-xs rounded-lg border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr min-w-0"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-accent-clr text-white dark:text-primary-bg hover:bg-surface-secondary transition cursor-pointer"
                title="Send query"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
