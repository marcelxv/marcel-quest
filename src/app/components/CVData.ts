export const CVData = {
  personalInfo: {
    name: "Marcel Scognamiglio Senra Lourenco",
    title: "Senior Software Engineer | System Architect | AI & Automation Specialist",
    location: "São José dos Campos, SP, Brazil",
    email: "marcelx@protonmail.com",
    linkedin: "https://www.linkedin.com/in/marcel-lourenco/",
    portfolio: "https://marcelxv.github.io/portfolio/",
    blog: "https://separationofconcerns.substack.com/"
  },
  
  summary: `Results-driven Senior Software Engineer and System Architect with 10+ years leading the full development lifecycle of SaaS products, AI workflows, and automation systems. Technical lead for multiple projects, taking ownership from architectural design to deployment. Known for building production-ready systems using cutting-edge technologies like Node.js, Next.js, TypeScript, React, AWS, and event-driven architectures.

Proven ability to collaborate directly with cross-functional teams including designers, product managers, stakeholders, and engineers—turning business goals into scalable technical solutions. Strong soft skills: natural communicator, empathetic team mentor, and proactive problem solver. Thrive in dynamic environments where coordination and clear execution between engineering and business teams is critical.

Focused on delivering fast, scalable, and maintainable software that solves real business problems.`,

  experience: [
    {
      company: "FoodReady",
      position: "Senior Software Developer / Automation & AI Engineer",
      period: "Nov 2024 – Present",
      description: [
        "Designed and built AI automation features for food safety SaaS (Node.js, TypeScript, Next.js, React, AWS).",
        "Led orchestration workflows (Orkes/Conductor) and real-time notifications (Novu).",
        "Led team migration from time-based (cron) to event-driven systems using AWS Lambda, EventBridge, and PostgreSQL.",
        "Worked closely with cross-functional teams to deliver regulatory-compliant solutions."
      ]
    },
    {
      company: "Synthetic Systems",
      position: "DevLead (Consultant)",
      period: "Jan 2023 – Oct 2023",
      description: [
        "Full technical ownership of a monorepo-based full-stack platform (Next.js, React, GraphQL, MongoDB).",
        "Led front-end and back-end integration.",
        "Drove Agile execution: stand-ups, sprints, retrospectives.",
        "Collaborated daily with design (Figma), product, and engineering teams.",
        "Mentored developers and doubled team velocity."
      ]
    },
    {
      company: "Quero Educação",
      position: "Software Developer",
      period: "May 2022 – Nov 2023",
      description: [
        "Developed front-end features for a marketplace full-stack application using Vue, Nuxt.js, React, and TypeScript.",
        "Delivered SEO and performance improvements (Web Core Vitals).",
        "Implemented CI/CD pipelines (AWS, Docker, Kubernetes).",
        "Integrated back-end services (Node, Ruby on Rails, PostgreSQL)."
      ]
    }
  ],

  technicalSkills: {
    "Languages & Frameworks": [
      "JavaScript (Node.js, React, Next.js, Vue, TypeScript)",
      "Python",
      "PHP",
      "Rust (currently improving skills)"
    ],
    "Databases": [
      "PostgreSQL",
      "MongoDB", 
      "Firebase",
      "Supabase"
    ],
    "Cloud & DevOps": [
      "AWS (Lambda, EventBridge, CloudWatch, CodeBuild, CodePipeline)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Vercel",
      "Netlify"
    ],
    "AI & Automation": [
      "Orkes/Conductor",
      "Novu",
      "n8n",
      "AI workflow orchestration",
      "AI-powered data enrichment",
      "AI-driven notification systems",
      "OpenAI API",
      "AI task automation"
    ],
    "Architecture": [
      "Event-driven systems",
      "Microservices",
      "API-first design",
      "AI-embedded systems"
    ]
  },

  certifications: [
    {
      name: "Front-End Engineer",
      issuer: "Codecademy",
      date: "May 2023"
    },
    {
      name: "TypeScript",
      issuer: "Codecademy", 
      date: "Oct 2023"
    },
    {
      name: "Official ChatGPT Course",
      issuer: "Codecademy",
      date: "May 2023"
    }
  ],

  education: [
    {
      degree: "System Technologist – Information Technology",
      institution: "FIAP",
      period: "2021–2023"
    },
    {
      degree: "Bachelor in Journalism, Philosophy & Technology",
      institution: "FAPCOM", 
      period: "2009–2013"
    }
  ],

  languages: [
    "Portuguese (Native)",
    "English (Professional)",
    "Spanish (Limited Working)"
  ]
};

export const generateCVText = (): string => {
  const cv = CVData;
  
  return `
${cv.personalInfo.name}
${cv.personalInfo.title}
${cv.personalInfo.location}
${cv.personalInfo.email}
${cv.personalInfo.linkedin}

PROFESSIONAL SUMMARY
${cv.summary}

PROFESSIONAL EXPERIENCE

${cv.experience.map(exp => `
${exp.company} – ${exp.position}
${exp.period}
${exp.description.map(desc => `• ${desc}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS

${Object.entries(cv.technicalSkills).map(([category, skills]) => `
${category}:
${skills.map(skill => `• ${skill}`).join('\n')}
`).join('\n')}

CERTIFICATIONS

${cv.certifications.map(cert => `• ${cert.name} – ${cert.issuer} – ${cert.date}`).join('\n')}

EDUCATION

${cv.education.map(edu => `• ${edu.degree} – ${edu.institution} (${edu.period})`).join('\n')}

LANGUAGES

${cv.languages.map(lang => `• ${lang}`).join('\n')}

PORTFOLIO
${cv.personalInfo.portfolio}

TECHNICAL WRITING
${cv.personalInfo.blog}
  `.trim();
}; 