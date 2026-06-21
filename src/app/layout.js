import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Ushani Perera | Portfolio - Business Analyst, QA Engineer & Project Coordinator",
  description: "Professional portfolio of Ushani Perera, a Computer Science undergraduate specializing in Business Analysis, QA Automation, and Project Coordination. Discover structured case studies, technical documentation, QA artifacts, and Agile project milestones.",
  keywords: [
    "Ushani Perera", "Business Analyst", "QA Engineer", "QA Automation Engineer",
    "Project Coordinator", "Project Management", "Computer Science Undergraduate",
    "Software Testing", "Agile", "Scrum", "Requirements Gathering", "Playwright",
    "Postman", "Stakeholder Management", "Test Automation", "Associate Product Manager"
  ],
  authors: [{ name: "Ushani Perera" }],
  creator: "Ushani Perera",
  openGraph: {
    title: "Ushani Perera | Portfolio",
    description: "Bridging business needs, software quality, and technology solutions. Explore my projects, detailed business analysis, and automated QA case studies.",
    url: "https://ushanipersera.com", // Fallback URL
    siteName: "Ushani Perera Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ushani Perera Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ushani Perera | Portfolio",
    description: "Bridging business needs, software quality, and technology solutions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // Structured data for SEO (JSON-LD Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ushani Perera",
    "jobTitle": "Business Analyst / QA Engineer / Project Coordinator",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Staffordshire (APIIT Sri Lanka)"
    },
    "description": "Bridging business needs, software quality, and technology solutions through analytical thinking, collaboration, leadership, and continuous learning.",
    "knowsAbout": ["Business Analysis", "Quality Assurance", "Project Coordination", "Software Engineering", "Agile Product Management"],
    "sameAs": [
      "https://github.com/code-oshi123", // Fallback github
      "https://www.linkedin.com/in/ushani-perera-36a95433a" // Fallback linkedin
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flicker theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary-bg text-primary-txt">
        {children}
      </body>
    </html>
  );
}
