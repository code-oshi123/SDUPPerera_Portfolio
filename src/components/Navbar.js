"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Menu, X, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

const portfolioItems = [
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Certifications", href: "/certifications" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const router = useRouter();

  // Load theme on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleScroll = (e, href) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  const isPortfolioActive =
    pathname.startsWith("/projects") ||
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/certifications");

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 glass border-b border-accent-clr/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-xl font-bold tracking-wider text-primary-txt flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-accent-clr" />
              <span>USHANI PERERA</span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            {mainLinks.map((link) => {
              const isMatch = pathname === "/" && link.href === "/#home";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-clr text-primary-txt/80"
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Portfolio Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-clr focus:outline-none ${
                  isPortfolioActive ? "text-accent-clr font-semibold" : "text-primary-txt/80"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Portfolio</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-48 rounded-lg border border-accent-clr/15 bg-card-bg/95 backdrop-blur-md shadow-xl py-2 z-50"
                  >
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleScroll(e, item.href);
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-xs font-semibold text-primary-txt/90 hover:text-accent-clr hover:bg-surface/20 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-secondary/20 transition-colors duration-200 text-primary-txt"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-secondary/20 transition-colors duration-200 text-primary-txt"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-txt hover:bg-surface-secondary/20 focus:outline-none"
              aria-label="Main menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-accent-clr/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleScroll(e, link.href);
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-txt/90 hover:text-accent-clr hover:bg-surface-secondary/10 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Portfolio Mobile Expandable */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-primary-txt/90 hover:text-accent-clr hover:bg-surface-secondary/10 transition-colors focus:outline-none"
              >
                <span>Portfolio</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileDropdownOpen && (
                <div className="pl-6 space-y-1">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleScroll(e, item.href);
                        setIsOpen(false);
                      }}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-muted-txt hover:text-accent-clr hover:bg-surface-secondary/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
