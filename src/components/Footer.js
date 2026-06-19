import Link from "next/link";
import { Linkedin, Github, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/30 dark:bg-surface-secondary/10 border-t border-accent-clr/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Headline */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-bold tracking-wider text-primary-txt">
              USHANI PERERA
            </h3>
            <p className="text-sm text-muted-txt max-w-sm">
              Computer Science Undergraduate specializing in bridging business needs, software quality, and technology solutions through analytical thinking and coordination.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/ushani-perera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-txt hover:text-accent-clr transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ushaniperera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-txt hover:text-accent-clr transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:ushani.perera@example.com" // Placeholder email
                className="text-muted-txt hover:text-accent-clr transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-primary-txt uppercase tracking-wider mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-muted-txt hover:text-accent-clr transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-sm text-muted-txt hover:text-accent-clr transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-txt hover:text-accent-clr transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-muted-txt hover:text-accent-clr transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-sm text-muted-txt hover:text-accent-clr transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Recruiter Focus */}
          <div>
            <h4 className="text-xs font-semibold text-primary-txt uppercase tracking-wider mb-4">
              Target Roles
            </h4>
            <ul className="space-y-2 text-sm text-muted-txt">
              <li>Business Analyst</li>
              <li>QA / QA Automation Engineer</li>
              <li>Project Coordinator</li>
              <li>Associate Product Manager</li>
              <li>Graduate Trainee</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-clr/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted-txt gap-4">
          <p>&copy; {currentYear} Ushani Perera. All rights reserved.</p>
          <p className="flex items-center gap-1 font-serif italic text-accent-clr">
            Designed and Developed by Ushani Perera
          </p>
        </div>
      </div>
    </footer>
  );
}
