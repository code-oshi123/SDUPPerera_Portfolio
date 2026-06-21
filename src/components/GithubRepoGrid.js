"use client";

import { useEffect, useState } from "react";
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";

const fallbackRepos = [
  {
    name: "delivery-management-system",
    description: "Enterprise courier distribution portal with route calculations, dynamic updates, and SMS notifications.",
    html_url: "https://github.com/code-oshi123/Smart_Distribution_and_Delivery_Management_Syatem.git",
    stargazers_count: 5,
    forks_count: 2,
    language: "JavaScript"
  },
  {
    name: "ticket-management-system",
    description: "Internal IT helpdesk support platform built in C# with automated priority assignments.",
    html_url: "https://github.com/code-oshi123/Ticket_Management-System.git",
    stargazers_count: 3,
    forks_count: 1,
    language: "C#"
  },
  {
    name: "flower-shop-ecommerce",
    description: "Retail e-commerce frontend custom checkout calendars and order tracking triggers.",
    html_url: "https://github.com/code-oshi123/Stemoras.git",
    stargazers_count: 4,
    forks_count: 0,
    language: "JavaScript"
  }
];

export default function GithubRepoGrid() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/code-oshi123/repos?sort=updated&per_page=6"
        );
        if (!res.ok) {
          throw new Error("GitHub API limit exceeded or user not found");
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setIsFallback(false);
        } else {
          throw new Error("No public repositories found");
        }
      } catch (err) {
        console.warn("Using fallback GitHub repository list: ", err.message);
        setRepos(fallbackRepos);
        setIsFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="h-40 rounded-xl border border-accent-clr/15 bg-card-bg/40 animate-pulse flex items-center justify-center text-xs text-muted-txt"
          >
            Retrieving GitHub Repositories...
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-bold text-primary-txt flex items-center gap-2">
          <Github className="h-5 w-5 text-accent-clr" />
          <span>Active Code Repositories</span>
        </h3>
        {isFallback && (
          <span className="text-[10px] text-accent-clr bg-surface/30 px-2 py-0.5 rounded font-medium">
            Demo Sandbox View
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.name || repo.id}
            className="p-5 rounded-xl border border-accent-clr/15 bg-card-bg/60 flex flex-col justify-between space-y-4 premium-border hover:bg-card-bg transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-primary-txt truncate max-w-[80%]">
                  {repo.name}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-secondary/20 text-[9px] font-semibold text-primary-txt">
                  {repo.language || "Config"}
                </span>
              </div>
              <p className="text-[11px] text-muted-txt leading-relaxed line-clamp-3">
                {repo.description || "Project source files and execution documents."}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-accent-clr/10 pt-3 text-[10px] text-muted-txt">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-accent-clr" />
                  <span>{repo.stargazers_count || 0}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5 text-accent-clr" />
                  <span>{repo.forks_count || 0}</span>
                </span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-clr flex items-center gap-1 hover:underline"
              >
                <span>Browse Code</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
