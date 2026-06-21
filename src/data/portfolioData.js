export const projectsData = [
  {
    id: "delivery-management",
    title: "Delivery Management System",
    role: "Team Lead",
    period: "2025",
    type: "Existing",
    category: "Software Development / PM",
    summary: "An enterprise-grade logistics coordinator platform managing dispatcher routes, real-time status updates, and client alerts.",
    overview: "This project aimed to streamline complex courier distribution workflows. As the Team Lead, I was responsible for coordinate execution, sprint planning, tracking velocity metrics, and managing communications between engineering and testing team members.",
    problem: "Inefficient dispatcher allocation, paper-reliant status logs, and poor real-time coordination led to 15% delayed packages and a high volume of customer complaint tickets.",
    objective: "To design a digital allocation and tracking hub that reduces package dispatch lag by 25% and automates delivery notifications.",
    responsibilities: "Agile Scrum planning, resource estimation, risk registers, backlog grooming, functional test case design, and daily checkpoint facilitation.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Git"],
    features: [
      "Dynamic courier route allocation based on package volume.",
      "Real-time status updates (Dispatched, Out for Delivery, Completed).",
      "Interactive analytics dashboard showing driver speed and task completion metrics."
    ],
    challenges: "Handling concurrent status updates from multiple dispatchers caused database transaction locks during peak hours.",
    lessons: "Implication of row-locking mechanisms and rate-limiting API endpoints optimized server durability under heavy transaction load.",
    github: "https://github.com/code-oshi123/Smart_Distribution_and_Delivery_Management_Syatem.git",
    demo: "#",
    documentation: "/docs/delivery-system-spec.pdf"
  },
  {
    id: "ticket-management",
    title: "Ticket Management System",
    role: "Developer & Requirements Analyst",
    period: "2024",
    type: "Existing",
    category: "QA / Systems Analysis",
    summary: "Internal helpdesk platform to raise, categorize, assign, and resolve customer support and system bugs.",
    overview: "I served a dual role: first, conducting requirements elicitation sessions to construct the BRD, and second, developing core modules and executing manual API/functional test cases.",
    problem: "Support teams lacked central categorization, resulting in duplicate bug logs, lost client requests, and slow SLA responses.",
    objective: "Create a central ticketing hub with automatic assignment rules to reduce ticket resolution SLA from 48 hours to less than 12 hours.",
    responsibilities: "Requirements elicitation, writing User Stories and INVEST-compliant acceptance criteria, manual endpoint validation, test scenarios formulation.",
    tech: ["C#", "ASP.NET Core", "SQL Server", "HTML5", "CSS3", "Postman"],
    features: [
      "Priority-based automated assignment rules.",
      "Categorized backlog grouping (Bugs, Enhancements, General Queries).",
      "Detailed QA audit logs tracking status transitions."
    ],
    challenges: "Balancing client request requirements with tight development timelines required strict scope-creep prevention.",
    lessons: "Using a MoSCoW prioritization model is key to keeping sprints aligned and delivering core functions without delay.",
    github: "https://github.com/code-oshi123/Ticket_Management-System.git",
    demo: "#",
    documentation: "/docs/ticket-system-brd.pdf"
  },
  {
    id: "flower-shop",
    title: "E-Commerce Flower Shop",
    role: "Client-Facing Developer",
    period: "2024",
    type: "Existing",
    category: "Web Development",
    summary: "B2C e-commerce system featuring an interactive catalog, customized floral bouquet ordering, and order verification.",
    overview: "Engaged directly with the client to capture visual styles, pricing parameters, and delivery workflows, translating them into responsive layouts.",
    problem: "The client operated exclusively via social channels, causing manual order overflow, pricing errors, and missed booking deadlines.",
    objective: "Deploy a clean, responsive retail channel to automate booking, inventory adjustment, and credit-card payments.",
    responsibilities: "Direct client elicitation, frontend development, user checkout path validation, manual system testing.",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"],
    features: [
      "Visual flower category explorer.",
      "Dynamic order calendar with holiday reservation management.",
      "Automated confirmation email triggers."
    ],
    challenges: "Client changed checkout criteria mid-development, threatening the original launch schedule.",
    lessons: "Frequent sprint demonstrations and signed-off wireframes are vital to maintaining scope transparency.",
    github: "https://github.com/code-oshi123/Stemoras.git",
    demo: "#",
    documentation: "/docs/flower-shop-specs.pdf"
  },
  {
    id: "global-tapestry",
    title: "Global Tapestry Cultural Platform",
    role: "Developer",
    period: "2024",
    type: "Existing",
    category: "Web Development",
    summary: "An interactive educational platform showcasing global heritages, custom articles, and user engagement boards.",
    overview: "Developed UI modules, optimized load speeds, and integrated feedback portals to encourage cultural research and community collaboration.",
    problem: "Existing online repositories were text-heavy, resulting in low average user engagement duration (under 40 seconds).",
    objective: "Design a visually rich portal targeting a 300% increase in dwell time through interactive maps and modular articles.",
    responsibilities: "UI/UX implementation, page performance optimization, contact form wiring, manual responsiveness testing.",
    tech: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive SVG world map mapping cultural hubs.",
      "Lazy-loaded dynamic content cards for articles.",
      "Moderated community message boards."
    ],
    challenges: "Rendering complex SVGs on mobile devices initially caused frame drops and interface sluggishness.",
    lessons: "Optimizing DOM structures and offloading calculation tasks via debounced triggers restored 60fps scrolling on budget phones.",
    github: "https://ushaniprarthana593.wixsite.com/aglobaltapestry",
    demo: "#",
    documentation: "/docs/global-tapestry-plan.pdf"
  },
  {
    id: "flood-management",
    title: "Flood Management Analysis System",
    role: "Systems Analyst",
    period: "2024",
    type: "Existing",
    category: "Systems & BA Analysis",
    summary: "Conceptual feasibility study and analytical model evaluating municipal flood warning infrastructures.",
    overview: "Conducted stakeholder analysis, process mapping, and gap evaluations, comparing municipal alert systems and presenting an improved model.",
    problem: "Disjointed monitoring tools across government sectors delayed warning triggers during flash floods, endangering lives.",
    objective: "Formulate a unified municipal alert architectural proposal targeting warnings under 5 minutes from threshold detection.",
    responsibilities: "Gap analysis, stakeholder matrix mapping, As-Is and To-Be swimlane flowcharts, cost-benefit analysis.",
    tech: ["Draw.io", "Jira", "MS Word", "Excel"],
    features: [
      "Consolidated sensor data integration flowcharts.",
      "Automated priority-tiered alert matrices (SMS, Sirens, Radio broadcast).",
      "Comprehensive stakeholder impact analysis diagrams."
    ],
    challenges: "Conflicting priorities among government department stakeholders during requirement modeling.",
    lessons: "Employing RACI (Responsible, Accountable, Consulted, Informed) matrices clarifies stakeholder roles and drives consensus.",
    github: "https://github.com/ushaniperera/flood-management",
    demo: "#",
    documentation: "/docs/flood-management-analysis.pdf"
  },
  {
    id: "qa-suite",
    title: "QA Automation Testing Suite",
    role: "QA Automation Engineer",
    period: "Future",
    type: "Future",
    category: "Quality Assurance",
    summary: "A robust Playwright and Postman testing suite validating backend APIs and frontend web portals.",
    overview: "Planned to showcase high-end automated checking capabilities, covering UI validations, API response times, regression suites, and CI/CD pipelines.",
    problem: "Manual testing cycles take too long (days), stalling rapid deployments.",
    objective: "Build an automated testing pipeline reducing verification cycles to under 15 minutes.",
    responsibilities: "Test script design, API assertion script creation, testing framework design.",
    tech: ["Playwright", "Postman", "JavaScript", "GitHub Actions"],
    features: [
      "Cross-browser testing (Chromium, Firefox, WebKit).",
      "Automated daily execution triggers with visual report generations.",
      "Comprehensive API response-assertions library."
    ],
    challenges: "Handling highly dynamic token authentications without hardcoding secrets in scripts.",
    lessons: "Integrating environment state-file handshakes securely is vital in pipeline architectures.",
    github: "https://github.com/ushaniperera/qa-automation-suite",
    demo: "#",
    documentation: "/docs/qa-suite-architecture.pdf"
  },
  {
    id: "hospital-appointment",
    title: "Hospital Appointment System",
    role: "Requirements Analyst / Developer",
    period: "Future",
    type: "Future",
    category: "Software Development / BA",
    summary: "An online patient scheduling and clinic manager portal to optimize specialist queues.",
    overview: "Planned to display requirements gathering (BRDs, Use Cases) alongside C# backend logic, demonstrating core BA processes and OO system design.",
    problem: "Long hospital waiting queues and phone-reliant schedule models result in scheduling conflicts and high client anxiety.",
    objective: "Introduce a self-service patient platform ensuring booking under 2 minutes and zero booking conflicts.",
    responsibilities: "Creating system flowcharts, database modeling, appointment routing coding.",
    tech: ["C#", "ASP.NET Core", "SQL", "Tailwind CSS"],
    features: [
      "Doctor schedule calendars with automatic conflict checking.",
      "Patient email and SMS reminder dispatch systems.",
      "Clinic queue tracker showing real-time queue states."
    ],
    challenges: "Designing intuitive booking interfaces catering to elder users who may not be tech-savvy.",
    lessons: "Conducting simple user persona evaluations is critical to design highly accessible and clean interfaces.",
    github: "https://github.com/ushaniperera/hospital-system",
    demo: "#",
    documentation: "/docs/hospital-brd.pdf"
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    role: "Project Coordinator & Developer",
    period: "Future",
    type: "Future",
    category: "Software Development / PM",
    summary: "A web platform facilitating ticketing, event planning, vendor tracking, and client registrations.",
    overview: "Fuses Agile coordination structures (product backlog, Gantt charts) with web development elements to show system coordination and launch efficiency.",
    problem: "Disorganized vendor communications, manual ticketing systems, and lack of budgeting panels increase planning stress and lead to financial leaks.",
    objective: "Build a single coordinate dashboard tracking vendors, budgets, and attendees in real time.",
    responsibilities: "Work Breakdown Structure (WBS) design, Gantt chart scheduling, frontend view development.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Interactive Gantt chart showing vendor tasks.",
      "QR code ticketing and attendee scanning system.",
      "Live budget ledger with automatically updated balance cards."
    ],
    challenges: "Coordinating multi-threaded vendor notifications and deadline tracking modules.",
    lessons: "Employing standard task-state machines in JavaScript simplifies state tracking and reduces bugs.",
    github: "https://github.com/ushaniperera/event-platform",
    demo: "#",
    documentation: "/docs/event-platform-plan.pdf"
  },
  {
    id: "api-testing-framework",
    title: "API Testing Framework",
    role: "QA Engineer",
    period: "Future",
    type: "Future",
    category: "Quality Assurance",
    summary: "Automated API schema and load testing engine using Postman collections and K6 scripts.",
    overview: "Focuses on validating API contracts, response payloads, rate-limits, and response times under high-concurrency conditions.",
    problem: "API response regression errors occur silently between deployments.",
    objective: "Establish automated schema validation and contract checks for all REST routes.",
    responsibilities: "Authoring Postman test scripts, configuring K6 load matrices.",
    tech: ["Postman", "K6", "JavaScript", "GitHub Actions"],
    features: [
      "JSON Schema validation for all endpoints.",
      "Automated environment variables management.",
      "Performance threshold checks (SLA alerts if response > 200ms)."
    ],
    challenges: "Simulating diverse payload parameters securely without storing real customer information.",
    lessons: "Designing mock parameters templates maintains testing safety and guarantees test repeatability.",
    github: "https://github.com/ushaniperera/api-framework",
    demo: "#",
    documentation: "/docs/api-framework-strategy.pdf"
  },
  {
    id: "student-guidance",
    title: "Student Career Guidance Platform",
    role: "Requirements Analyst",
    period: "Future",
    type: "Future",
    category: "Systems & BA Analysis",
    summary: "Undergraduate guidance portal mapping skill assessments to relevant career streams.",
    overview: "Planned to showcase complete BA deliverables: User Personas, As-Is vs To-Be flows, Wireframes, and detailed Acceptance Criteria.",
    problem: "Students lack clarity on industry requirements, selecting modules that do not align with their career goals.",
    objective: "Propose an evaluation portal mapping academic performance to career paths (BA, QA, PM, Dev).",
    responsibilities: "User elicitation modeling, process mapping, wireframe design, specification assembly.",
    tech: ["Figma", "Draw.io", "Jira", "MS Excel"],
    features: [
      "Interactive assessment questionnaires.",
      "Dynamic career path mapping engine.",
      "Curriculum alignment recommendations module."
    ],
    challenges: "Defining standard career metrics that align with fluid global hiring requirements.",
    lessons: "Interviews with industry recruiters are critical to design relevant career parameters.",
    github: "https://github.com/ushaniperera/student-guidance",
    demo: "#",
    documentation: "/docs/student-guidance-brd.pdf"
  },
  {
    id: "student-analytics",
    title: "Student Analytics Dashboard",
    role: "Developer",
    period: "Future",
    type: "Future",
    category: "Software Development",
    summary: "Data visualization dashboard mapping student attendance, grades, and progression trends.",
    overview: "Focuses on clean layout design, database optimization, and graphing modules to translate data tables into actionable insights.",
    problem: "Academic coordinators manually cross-reference files, delaying early interventions for struggling students.",
    objective: "Design an analytics platform notifying coordinators when student indicators fall below limits.",
    responsibilities: "Database query optimization, data graphing script implementation, alert trigger coding.",
    tech: ["JavaScript", "Chart.js", "Express", "MySQL", "Tailwind CSS"],
    features: [
      "Grade distribution graphs (Bar, Line, Radar charts).",
      "Automated warning flags for attendance dropouts.",
      "Downloadable academic performance summary sheets."
    ],
    challenges: "Performing complex data aggregation queries efficiently on large tables.",
    lessons: "Creating database indexes and optimizing SQL queries prevents dashboard lag.",
    github: "https://github.com/ushaniperera/student-dashboard",
    demo: "#",
    documentation: "/docs/student-dashboard-specs.pdf"
  }
];

export const caseStudiesData = [
  {
    id: "delivery-management",
    title: "Delivery Management System",
    role: "Agile Project Team Lead",
    problem: "A local logistics startup suffered from manual courier dispatcher processes, resulting in route confusion, lost delivery sheets, and poor customer transparency. 15% of daily packages were delayed, causing high support ticket volumes.",
    objective: "To automate courier dispatch paths, digitalize driver tracking sheets, and decrease overall shipment latency by 20% within a 12-week development lifecycle.",
    process: "Conducted stakeholder interviews with drivers, dispatch operators, and customer care. Applied Agile SCRUM framework with 2-week sprints. Designed the Product Backlog, facilitated grooming sessions, created a comprehensive Risk Register, and monitored velocity rates.",
    solution: "Proposed a web dashboard mapping active orders to available drivers based on weight capacity. Integrated dynamic SMS alerts for users. Devised a QA verification plan covering regression checks and UI validation tests.",
    deliverables: {
      ba: [
        "Business Requirements Document (BRD)",
        "Functional Requirements (System Actor definitions)",
        "INVEST-compliant User Stories with Given-When-Then Acceptance Criteria",
        "As-Is and To-Be Process swimlanes"
      ],
      qa: [
        "Test Strategy Document",
        "Test Cases Matrix (covering driver allocation paths)",
        "Manual Execution Summary"
      ],
      pm: [
        "Project Charter & Scope Statement",
        "Active Risk Register & RAID Log",
        "Sprint Burndown Chart",
        "Retrospective Summary Logs"
      ]
    },
    results: "Delivered the system on-time within 6 sprints. Reduced delivery lag by 24%, lowered customer complaint tickets by 45%, and increased dispatcher throughput by 30%.",
    lessons: "Clear team roles (clarified via RACI) and early integration checks prevent late sprint blockages and ensure smooth releases."
  },
  {
    id: "flood-management",
    title: "Flood Management Analysis System",
    role: "Lead Systems Analyst",
    problem: "Municipal authorities faced delayed emergency communication during flash floods due to isolated monitoring tools. Sensor triggers took over 30 minutes to translate into community alert broadcasts, risking lives.",
    objective: "Formulate a unified municipal alert architectural proposal targeting warnings under 5 minutes from threshold detection, detailing stakeholders, flows, and software integrations.",
    process: "Conducted interviews with meteorologists, city officials, and rescue coordinators. Drafted interest matrices, performed gap analysis on current sensors, and designed unified system flowcharts.",
    solution: "Designed an automated messaging pipeline. When sensor data exceeds limits, a central system automatically sends alerts to SMS gateways, outdoor sirens, and local broadcasters. Outlined detailed non-functional metrics (uptime, latency, fail-safes).",
    deliverables: {
      ba: [
        "Business Analysis Report",
        "Stakeholder Interest Matrix",
        "Use Case Diagrams (Citizen, Sensor, Operator)",
        "To-Be Integration Flowcharts",
        "Gap Analysis Report"
      ],
      qa: [
        "Test Strategy for real-time trigger pipelines",
        "Boundary Value Test Cases for sensor thresholds"
      ],
      pm: [
        "WBS (Work Breakdown Structure)",
        "Scope Limitation Document",
        "Project Gantt Chart Timeline"
      ]
    },
    results: "Presented the proposal to city coordinators. Received approval for conceptual safety design, verifying a target warning dispatch time under 3.5 minutes (88% reduction in latency).",
    lessons: "Engaging diverse stakeholders early ensures non-functional requirements (like system fail-safes) are addressed during initial modeling."
  },
  {
    id: "hospital-appointment",
    title: "Hospital Appointment Scheduling",
    role: "Requirements Analyst & Systems Designer",
    problem: "A community health clinic relied on phone-in bookings, creating double-bookings, long patient queues, and dispatcher burnout. 20% of appointments resulted in no-shows, wasting doctor hours.",
    objective: "Design a self-service online clinic portal to automate patient booking, resolve doctor schedule conflicts, and reduce appointment no-shows by 50%.",
    process: "Documented user personas (Elderly Patients, Doctors, Admin). Created flowcharts tracking clinic actions. Authored detailed functional specs (FSD) and mapped acceptance parameters.",
    solution: "Proposed a Web scheduler platform with automatic SMS/email reminders. Built a doctor schedule coordinator that validates doctor availability. Formulated UI test scenarios to ensure booking flow accessibility.",
    deliverables: {
      ba: [
        "Functional Specification Document (FSD)",
        "User Personas & Use Case scenarios",
        "Acceptance Criteria (MoSCoW model)",
        "Wireframe mockups of checkout path"
      ],
      qa: [
        "Master Test Plan",
        "QA Execution Checklist",
        "Defect Report Template"
      ],
      pm: [
        "Product Backlog & Epics definition",
        "Sprint Backlog allocations",
        "RAID Log"
      ]
    },
    results: "System model showed a simulated booking time under 1.5 minutes, resolved scheduling conflicts by 100%, and modeled an estimated 65% reduction in appointment no-shows.",
    lessons: "User persona evaluations (such as adding high-contrast text options for elder users) improve accessibility and ensure successful community adoption."
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    role: "Project Coordinator & Developer",
    problem: "A university association struggled to plan its annual festival due to decentralized spreadsheets, manual check-in paths, and uncoordinated vendor milestones, causing budget slips.",
    objective: "Create a coordinate planning dashboard tracking vendor deliverables, ticketing check-ins, and budget balances in real-time.",
    process: "Coordinated tasks across a 4-member development team using Trello boards. Authored project timelines, scheduled status check loops, and wrote integration code for attendee trackers.",
    solution: "Implemented a central planning hub. Integrated QR code scanner tools for check-in paths. Designed a budgeting widget showing real-time balances. Created manual user test paths to verify scanner speeds.",
    deliverables: {
      ba: [
        "Process Map (Attendee path)",
        "Functional spec (QR ticketing)",
        "Wireframes"
      ],
      qa: [
        "Test Scenarios (Offline scan paths)",
        "UAT (User Acceptance Test) scripts"
      ],
      pm: [
        "Work Breakdown Structure (WBS)",
        "Trello Scrum Board backlog mapping",
        "Project Gantt Chart"
      ]
    },
    results: "Coordinated team to launch the platform 1 week before the event. Scanned 450+ attendees with average entry time under 2 seconds. Maintained a 100% accurate budget balance.",
    lessons: "Tracking critical path dependencies in Gantt charts prevents task blockages and ensures prompt project deliveries."
  },
  {
    id: "qa-suite",
    title: "QA Automation Testing Suite",
    role: "Lead QA Automation Engineer",
    problem: "A growing web platform faced regression bugs on core user paths (signup, payments) between releases. Manual regression checks took 6 hours per release, slowing down deployment velocity.",
    objective: "Implement a robust, automated end-to-end regression testing framework reducing release validation time to under 15 minutes, with comprehensive API and UI checks.",
    process: "Analyzed manual test scripts, prioritizing high-risk routes. Formulated a Master Test Strategy. Developed automated scripts verifying UI rendering, dynamic payments, and core REST routes.",
    solution: "Created a test suite using Playwright and Postman. Programmed automated collections runs verifying API responses, status codes, and JSON schemas. Configured a mock pipeline executing tests on code pushes.",
    deliverables: {
      ba: [
        "Test Scenario Maps",
        "Acceptance Criteria mappings"
      ],
      qa: [
        "Master Test Strategy & Automation Plan",
        "Playwright Test scripts (Page Object Model)",
        "Postman collection assertions JSON",
        "Defect Logging template & execution report summary"
      ],
      pm: [
        "QA Task backlog estimation",
        "RAID log tracking flaky test scripts"
      ]
    },
    results: "Automated 85% of critical regression tests. Reduced release validation time from 6 hours to 11 minutes. Detected 12 critical bugs prior to production releases.",
    lessons: "Using the Page Object Model (POM) makes automation scripts clean, modular, and easy to maintain when UI changes occur."
  }
];
