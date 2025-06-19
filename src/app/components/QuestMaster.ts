export interface DialogueOption {
  id: string;
  text: string;
  response: string;
  nextOptions?: DialogueOption[];
  isEasterEgg?: boolean;
}

export interface QuestState {
  currentMessage: string;
  currentOptions: DialogueOption[];
  isTyping: boolean;
  conversationHistory: string[];
}

export const questMasterData = {
  introduction: `Welcome, brave soul, to Marcel Quest: The Developer's Journey.

I am the Quest Master, keeper of Marcel Scognamiglio Senra Lourenco's professional chronicles and guide through his technical odyssey.

Through 10+ years of code, leadership, and innovation, Marcel has forged a path from curious developer to Senior Software Engineer and System Architect. His story spans the realms of SaaS products, AI workflows, automation systems, and event-driven architectures - from São José dos Campos, Brazil to the global software engineering community.

What aspect of his journey calls to you?`,

  mainOptions: [
    {
      id: 'experience',
      text: '⚔️ Tell me about his professional experience',
      response: `Marcel's journey spans 10+ years across diverse technological realms:

**FoodReady – Senior Software Developer / Automation & AI Engineer** (Nov 2024 – Present)
Leading the charge in AI automation for food safety SaaS. Designs and builds cutting-edge features using Node.js, TypeScript, Next.js, React, and AWS. Orchestrates complex workflows with Orkes/Conductor and real-time notifications with Novu. Recently led team migration from time-based (cron) to event-driven systems using AWS Lambda, EventBridge, and PostgreSQL.

**Synthetic Systems – DevLead (Consultant)** (Jan 2023 – Oct 2023)
Full technical ownership of a monorepo-based full-stack platform built with Next.js, React, GraphQL, and MongoDB. Led both front-end and back-end integration while driving Agile execution. Collaborated daily with design (Figma), product, and engineering teams. Mentored developers and doubled team velocity through strategic leadership.

**Quero Educação – Software Developer** (May 2022 – Nov 2023)
Developed front-end features for a marketplace full-stack application using Vue, Nuxt.js, React, and TypeScript. Delivered significant SEO and performance improvements focusing on Web Core Vitals. Implemented robust CI/CD pipelines using AWS, Docker, and Kubernetes while integrating back-end services with Node, Ruby on Rails, and PostgreSQL.

His expertise encompasses the full development lifecycle from architectural design to deployment, always focusing on scalable, maintainable solutions that solve real business problems.`,

      nextOptions: [
        {
          id: 'leadership',
          text: '👑 What about his leadership experience?',
          response: `Marcel has proven himself as both a technical expert and natural leader:

**Cross-Functional Team Leadership**: Successfully collaborated with designers, product managers, stakeholders, and engineers at multiple companies, turning business goals into scalable technical solutions.

**Technical Mentorship**: Natural communicator and empathetic team mentor. At Synthetic Systems, his mentoring approach doubled team velocity while maintaining code quality standards.

**Agile Process Management**: Led stand-ups, sprints, and retrospectives. Drove process innovations that improved team coordination and delivery predictability.

**Strategic Decision Making**: Takes ownership from architectural design to deployment, making critical technical decisions that balance performance, maintainability, and business needs.

**Problem-Solving Leadership**: Proactive problem solver who thrives in dynamic environments where coordination between engineering and business teams is critical.

Marcel's leadership style combines deep technical expertise with strong soft skills, making him equally effective with technical teams and business stakeholders.`,
        },
        {
          id: 'ai-automation',
          text: '🤖 Tell me about his AI & Automation expertise',
          response: `Marcel is at the forefront of AI integration and automation systems:

**AI Workflow Orchestration**: Expertise with Orkes/Conductor for complex workflow management and orchestration in production environments.

**AI-Powered Features**: Designs and implements AI automation features for regulatory-compliant solutions in the food safety industry.

**Event-Driven Architecture**: Led migration from time-based systems to sophisticated event-driven architectures using AWS Lambda, EventBridge, and real-time processing.

**AI Integration Tools**: Experience with OpenAI API, prompt engineering for LLM-based features, AI-driven notification systems, and AI-powered data enrichment workflows.

**Automation Platforms**: Proficient with n8n, AI task automation, and MCP (Model Context Protocol) for internal tool development.

**Real-Time Systems**: Built real-time notification systems using Novu and other modern communication platforms.

Marcel combines traditional software engineering excellence with cutting-edge AI capabilities, creating systems that are both innovative and production-ready.`,
        }
      ]
    },
    {
      id: 'tech-stack',
      text: '🛠️ What technologies does he master?',
      response: `Marcel's technical arsenal spans the full modern development stack:

**Core Languages & Frameworks**:
• JavaScript (Node.js, React, Next.js, Vue, TypeScript) - Production expertise
• Python - AI/ML workflows, automation, data processing
• PHP - Web development and API integration
• Rust - Currently advancing skills for systems programming

**Frontend Mastery**:
• React, Next.js, Vue, Nuxt.js - Modern web applications
• TypeScript - Type-safe development
• Advanced SEO and Web Core Vitals optimization

**Backend & Databases**:
• Node.js - Scalable server-side applications
• PostgreSQL, MongoDB, Firebase, Supabase - Data persistence solutions

**Cloud & DevOps Excellence**:
• AWS (Lambda, EventBridge, CloudWatch, CodeBuild, CodePipeline)
• Docker, Kubernetes - Containerization and orchestration
• CI/CD pipelines, Vercel, Netlify - Deployment automation

**AI & Automation Specialization**:
• Orkes/Conductor, Novu, n8n - Workflow orchestration
• OpenAI API, prompt engineering - AI integration
• Event-driven systems, Microservices, API-first design`,

      nextOptions: [
        {
          id: 'architecture',
          text: '🏗️ Tell me about his architectural expertise',
          response: `Marcel excels in designing and implementing complex system architectures:

**Event-Driven Systems**: Expert in migrating from traditional time-based systems to sophisticated event-driven architectures using AWS services and real-time processing.

**AI-Embedded Systems**: Designs systems that seamlessly integrate AI workflows into production applications, ensuring reliability and scalability.

**Microservices Architecture**: Builds API-first designs that promote modularity and scalability across distributed systems.

**Full-Stack Integration**: Specializes in monorepo-based platforms that unify front-end and back-end development with consistent deployment strategies.

**Regulatory Compliance**: Understands the unique challenges of building software for regulated industries, particularly food safety and compliance systems.

**Performance Optimization**: Proven track record of delivering SEO improvements and Core Web Vitals optimizations that directly impact business metrics.

Marcel's architectural decisions always balance technical innovation with business practicality, ensuring solutions are both cutting-edge and maintainable.`,
        }
      ]
    },
    {
      id: 'philosophy',
      text: '🧙‍♂️ What is his engineering philosophy?',
      response: `Marcel's engineering wisdom centers on delivering real business value:

**"Solve Real Business Problems"**: Technology should serve clear business objectives. Every line of code should contribute to user value or operational efficiency.

**"Fast, Scalable, and Maintainable"**: The holy trinity of software development. Systems must perform well today and adapt to tomorrow's requirements.

**"Event-Driven Thinking"**: Modern systems should respond to events, not arbitrary schedules. This leads to more resilient and responsive applications.

**"AI as an Enabler"**: Artificial intelligence should augment human capabilities and automate repetitive tasks, not replace thoughtful engineering decisions.

**"Cross-Functional Collaboration"**: The best software emerges from close collaboration between engineering, design, product, and business teams.

**"Continuous Learning and Sharing"**: Stay current with technology trends while sharing knowledge through writing and mentoring.

Marcel embodies the principle that great engineers build bridges - between technical complexity and business value, between team members, and between current capabilities and future possibilities.`,

      nextOptions: [
        {
          id: 'writing',
          text: '📚 Tell me about his writing and community involvement',
          response: `Marcel is passionate about education and knowledge sharing:

**"Separation of Concerns" Substack**: Writes weekly about software development, AI integration, engineering best practices, and technical challenges faced by junior developers.
https://separationofconcerns.substack.com/

**Community Focus**: Shares insights on:
• AI integration in real-world applications
• Event-driven architecture patterns
• Engineering leadership and team collaboration
• Career guidance for developers at all levels

**Educational Mission**: Believes in helping other developers navigate the rapidly evolving tech landscape, particularly around AI tools and modern development practices.

**Knowledge Sharing**: Regularly contributes to the developer community through detailed technical writing that bridges theory and practical implementation.

His writing reflects his engineering philosophy: clear, practical, and focused on delivering value to fellow developers.`,
          isEasterEgg: true
        }
      ]
    },
    {
      id: 'why-hire',
      text: '💼 Why should teams work with Marcel?',
      response: `Marcel brings a unique combination of technical excellence and business acumen:

**Proven Technical Leadership**: 10+ years leading full development lifecycles of SaaS products, AI workflows, and automation systems. Takes ownership from architectural design to deployment.

**Cross-Functional Collaboration**: Natural ability to work directly with designers, product managers, stakeholders, and engineers. Excellent communicator who translates between technical and business domains.

**AI & Automation Expertise**: Cutting-edge experience with modern AI integration, workflow orchestration, and event-driven systems that represent the future of software development.

**Results-Driven Approach**: Focuses on fast, scalable, maintainable software that solves real business problems. Proven track record of doubling team velocity and delivering performance improvements.

**Strong Soft Skills**: Empathetic team mentor, proactive problem solver, and natural communicator who thrives in dynamic environments.

**Continuous Innovation**: Stays current with emerging technologies while maintaining production-quality standards. Balances innovation with pragmatic business decisions.

Marcel doesn't just write code - he builds solutions, mentors teams, and drives business outcomes through technical excellence.`,

      nextOptions: [
        {
          id: 'contact',
          text: '📧 How can I connect with Marcel?',
          response: `Ready to discuss opportunities or technical challenges? Here's how to reach Marcel:

**Email**: marcelx@protonmail.com
**LinkedIn**: https://www.linkedin.com/in/marcel-lourenco/
**Portfolio**: https://marcelxv.github.io/portfolio/
**Technical Writing**: https://separationofconcerns.substack.com/

**Location**: São José dos Campos, SP, Brazil

Marcel is always interested in discussing:
• Complex technical architecture challenges
• AI integration and automation opportunities  
• Team leadership and development practices
• Emerging technologies and their practical applications

For opportunities involving AI workflows, event-driven systems, or technical leadership roles, don't hesitate to reach out. He responds promptly to thoughtful technical discussions and collaboration proposals.`,
        }
      ]
    },
    {
      id: 'certifications',
      text: '🏆 What are his certifications and education?',
      response: `Marcel combines formal education with continuous professional development:

**Recent Professional Certifications (2023)**:
• Front-End Engineer – Codecademy
• TypeScript Specialist – Codecademy  
• Official ChatGPT Course – Codecademy

**Formal Education**:
• System Technologist – Information Technology – FIAP (2021–2023)
• Bachelor in Journalism, Philosophy & Technology – FAPCOM (2009–2013)

**Languages**:
• Portuguese (Native)
• English (Professional)
• Spanish (Limited Working)

**Continuous Learning**: Marcel maintains current certifications and stays updated with emerging technologies. His diverse educational background in technology, journalism, and philosophy provides a unique perspective on communication and problem-solving in technical environments.

For a complete list of certifications and professional development: 
https://www.linkedin.com/in/marcel-lourenco/details/certifications/`,

      isEasterEgg: true
    }
  ],

  easterEggs: {
    'foodready': `🍽️ The FoodReady Chronicles:

At FoodReady, Marcel discovered that food safety AI is like being a digital health inspector with superpowers. His AI automation systems help ensure food safety compliance while making the process seamless for restaurant operators.

The real challenge? Building AI workflows that understand the nuances of regulatory compliance while remaining user-friendly. Marcel's event-driven architecture using AWS Lambda and EventBridge has transformed how food safety data flows through the system.

Favorite debugging moment: An AI notification system that was perfectly accurate but sent alerts at 3 AM. The solution involved not just technical fixes but understanding the human workflow of restaurant operations. Sometimes the best code considers when people are actually awake to receive notifications!`,

    'orkes': `🎭 The Orkes & Conductor Chronicles:

Marcel's expertise with Orkes/Conductor workflow orchestration represents the cutting edge of distributed system design. He's mastered the art of choreographing complex business processes across multiple services and systems.

Behind the scenes: Workflow orchestration is like conducting a symphony where every musician is a microservice, some are on different continents, and occasionally one decides to take an unscheduled coffee break. Marcel's systems gracefully handle these real-world distributed system challenges.

His secret weapon? Deep understanding of event-driven patterns combined with practical experience in production environments. When workflows fail, Marcel can trace the issue through complex orchestration chains faster than most people can explain what went wrong.`,

    'ai automation': `🤖 The AI Automation Mastery:

Marcel's AI integration work goes beyond simple API calls. He builds production-ready AI workflows that handle real business processes with reliability and scale.

His approach: AI should feel magical to users but be completely predictable to engineers. This means robust error handling, graceful degradation, and careful prompt engineering that works consistently in production.

Current fascination: The intersection of workflow orchestration and AI agents. Marcel is exploring how AI can make intelligent decisions within automated business processes, creating systems that are both smart and reliable.

The future he's building: AI-embedded applications where machine learning enhances user experiences without adding complexity to the developer experience.`,

    'event-driven': `⚡ The Event-Driven Revolution:

Marcel led the transformation from cron-based systems to sophisticated event-driven architectures - a migration that represents the future of responsive software systems.

The challenge: Moving from "things happen on schedule" to "things happen when they should happen." This required rethinking data flow, error handling, and system monitoring from the ground up.

His AWS expertise shines here: Lambda functions, EventBridge, and real-time processing create systems that respond to user actions and business events immediately rather than waiting for the next scheduled run.

Result: Applications that feel more responsive, use resources more efficiently, and scale naturally with business demand. Marcel's event-driven systems don't just run better - they think better.`,

    'substack': `📝 The Separation of Concerns Chronicles:

Marcel's technical writing at "Separation of Concerns" reflects his philosophy that great software engineering requires clear thinking and clear communication.

Weekly topics explore the intersection of practical software development with emerging technologies, particularly AI integration and modern architectural patterns.

Writing style: Like his code, Marcel's writing is clear, practical, and focused on real-world value. No theoretical complexity without practical application.

Hidden insight: His journalism background provides a unique perspective on technical communication. Marcel understands that the best technical explanations tell a story that both beginners and experts can follow.

The blog has become essential reading for developers navigating the rapidly evolving landscape of AI-integrated software development.`
  }
};

export default questMasterData; 