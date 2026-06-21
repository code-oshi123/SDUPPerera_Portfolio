"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertTriangle, Linkedin, Github } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [simulation, setSimulation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // EmailJS credentials from environment variables
    const serviceId = service_w2bun0e;
    const templateId = template_r6yanpg;
    const publicKey = IejGs_yJAZkOkb-CJ;

    if (!serviceId || !templateId || !publicKey) {
      // Simulation mode fallback
      setTimeout(() => {
        setStatus("success");
        setSimulation(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
      return;
    }

    try {
      // Dynamic import to avoid loading EmailJS script for users who don't visit contact form immediately
      const emailjs = (await import("@emailjs/browser")).default;
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus("success");
        setSimulation(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-accent-clr/10 bg-card-bg/20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-accent-clr uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary-txt">
            Contact
          </h2>
          <div className="w-12 h-[2px] bg-accent-clr mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 rounded-2xl border border-accent-clr/15 bg-card-bg p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary-txt">
                Contact Information
              </h3>
              <p className="text-xs text-muted-txt leading-relaxed">
                Thank you for visiting my professional workspace. I am seeking graduate trainee opportunities, business analysis internships, junior project coordinator roles, and software testing/QA engineering internships. 
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-txt">
                  <div className="p-2.5 rounded bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-primary-txt">Email</span>
                    <a href="mailto:ushani.perera@example.com" className="hover:text-accent-clr">
                      ushani.perera@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-txt">
                  <div className="p-2.5 rounded bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr">
                    <Linkedin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-primary-txt">LinkedIn</span>
                    <a
                      href="https://linkedin.com/in/ushani-perera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-clr"
                    >
                      linkedin.com/in/ushani-perera
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-txt">
                  <div className="p-2.5 rounded bg-surface/20 dark:bg-surface-secondary/20 text-accent-clr">
                    <Github className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-primary-txt">GitHub</span>
                    <a
                      href="https://github.com/code-oshi123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-clr"
                    >
                      https://github.com/code-oshi123
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-accent-clr/10 text-[10px] text-muted-txt leading-relaxed">
              * Active response within 24 business hours. Fully available for geographic relocation and corporate onboarding.
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-accent-clr/15 glass p-8 flex flex-col justify-center text-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Simulated Mode Indicator */}
              <div className="text-[9px] font-mono text-muted-txt/80 border-b border-accent-clr/10 pb-2 mb-1 select-none leading-relaxed">
                * SYSTEM NOTICE: Form runs in SIMULATED mode. Connect EmailJS env keys to enable direct mail routing.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-wider uppercase text-primary-txt">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr"
                    placeholder="E.g. John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-wider uppercase text-primary-txt">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr"
                    placeholder="E.g. john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-bold tracking-wider uppercase text-primary-txt">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr"
                  placeholder="Opportunity for Graduate/Junior Role"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-bold tracking-wider uppercase text-primary-txt">
                  Message Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded border border-accent-clr/20 bg-primary-bg text-primary-txt focus:outline-none focus:border-accent-clr resize-none"
                  placeholder="Write your email body here..."
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  {simulation && (
                    <span className="text-[10px] opacity-80">
                      * simulated mode. Add EmailJS env keys to enable direct mail routing.
                    </span>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded bg-rose-500/10 border border-rose-500/25 text-rose-500 text-xs flex items-center gap-1.5 font-bold">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Failed to send. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-2.5 rounded bg-accent-clr text-white dark:text-primary-bg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-surface-secondary duration-200 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
