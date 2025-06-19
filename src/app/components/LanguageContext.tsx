'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt' | 'es';

interface Translations {
  header: {
    title: string;
    subtitle: string;
    instructions: string;
  };
  footer: {
    poweredBy: string;
    createdBy: string;
  };
  buttons: {
    downloadCV: string;
    backToMain: string;
  };
  questMaster: {
    introduction: string;
    mainOptions: {
      experience: string;
      techStack: string;
      philosophy: string;
      whyHire: string;
      certifications: string;
      leadership: string;
      aiAutomation: string;
      architecture: string;
      writing: string;
      contact: string;
    };
    responses: {
      experience: string;
      techStack: string;
      philosophy: string;
      whyHire: string;
      certifications: string;
      leadership: string;
      aiAutomation: string;
      architecture: string;
      writing: string;
      contact: string;
    };
    easterEggs: {
      foodready: string;
      orkes: string;
      aiAutomation: string;
      eventDriven: string;
      substack: string;
    };
  };
  conversationHistory: {
    viewHistory: string;
    entries: string;
  };
  easterEggPlaceholder: string;
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: "MARCEL QUEST",
      subtitle: "The Developer's Journey",
      instructions: "Use number keys [1-{count}] or click to select options • [ESC] for main menu"
    },
    footer: {
      poweredBy: "Quest Master powered by React & TypeScript • Deployed on Vercel",
      createdBy: "Created by Marcel Scognamiglio Senra Lourenco • A technical storytelling experiment"
    },
    buttons: {
      downloadCV: "Download CV (PDF)",
      backToMain: "Back to Main Menu"
    },
    questMaster: {
      introduction: `Welcome, brave soul, to Marcel Quest: The Developer's Journey.

I am the Quest Master, keeper of Marcel Scognamiglio Senra Lourenco's professional chronicles and guide through his technical odyssey.

Through **10+ years of code, leadership, and innovation**, Marcel has forged a path from curious developer to **Senior Software Engineer and System Architect**. His journey spans the realms of **AI & Automation**, **event-driven architectures**, and **scalable SaaS solutions**.

What aspect of Marcel's professional quest would you like to explore?`,
      mainOptions: {
        experience: "⚔️ Tell me about his professional experience",
        techStack: "🛠️ What technologies does he master?",
        philosophy: "🧙‍♂️ What is his engineering philosophy?",
        whyHire: "💼 Why should teams work with Marcel?",
        certifications: "🏆 What are his certifications and education?",
        leadership: "👑 What about his leadership experience?",
        aiAutomation: "🤖 Tell me about his AI & Automation expertise",
        architecture: "🏗️ Tell me about his architectural expertise",
        writing: "📚 Tell me about his writing and community involvement",
        contact: "📧 How can I connect with Marcel?"
      },
      responses: {
        experience: `Marcel's journey spans 10+ years across diverse technological realms:

**FoodReady – Senior Software Developer / Automation & AI Engineer** (Nov 2024 – Present)
Leading the charge in AI automation for food safety SaaS. Designs and builds cutting-edge features using Node.js, TypeScript, Next.js, React, and AWS. Orchestrates complex workflows with Orkes/Conductor and real-time notifications with Novu. Recently led team migration from time-based (cron) to event-driven systems using AWS Lambda, EventBridge, and PostgreSQL.

**Synthetic Systems – DevLead (Consultant)** (Jan 2023 – Oct 2023)
Full technical ownership of a monorepo-based full-stack platform built with Next.js, React, GraphQL, and MongoDB. Led both front-end and back-end integration while driving Agile execution. Collaborated daily with design (Figma), product, and engineering teams. Mentored developers and doubled team velocity through strategic leadership.

**Quero Educação – Software Developer** (May 2022 – Nov 2023)
Developed front-end features for a marketplace full-stack application using Vue, Nuxt.js, React, and TypeScript. Delivered significant SEO and performance improvements focusing on Web Core Vitals. Implemented robust CI/CD pipelines using AWS, Docker, and Kubernetes while integrating back-end services with Node, Ruby on Rails, and PostgreSQL.

His expertise encompasses the full development lifecycle from architectural design to deployment, always focusing on scalable, maintainable solutions that solve real business problems.`,
        techStack: "🛠️ What technologies does he master?",
        philosophy: "🧙‍♂️ What is his engineering philosophy?",
        whyHire: "💼 Why should teams work with Marcel?",
        certifications: "🏆 What are his certifications and education?",
        leadership: "👑 What about his leadership experience?",
        aiAutomation: "🤖 Tell me about his AI & Automation expertise",
        architecture: "🏗️ Tell me about his architectural expertise",
        writing: "📚 Tell me about his writing and community involvement",
        contact: "📧 How can I connect with Marcel?"
      },
      easterEggs: {
        foodready: `🍽️ The FoodReady Chronicles:

At FoodReady, Marcel discovered that food safety AI is like being a digital health inspector with superpowers. His AI automation systems help ensure food safety compliance while making the process seamless for restaurant operators.

The real challenge? Building AI workflows that understand the nuances of regulatory compliance while remaining user-friendly. Marcel's event-driven architecture using AWS Lambda and EventBridge has transformed how food safety data flows through the system.

Favorite debugging moment: An AI notification system that was perfectly accurate but sent alerts at 3 AM. The solution involved not just technical fixes but understanding the human workflow of restaurant operations. Sometimes the best code considers when people are actually awake to receive notifications!`,
        orkes: "Orkes",
        aiAutomation: "AI Automation",
        eventDriven: "Event-Driven",
        substack: "Substack"
      }
    },
    conversationHistory: {
      viewHistory: "View Conversation History",
      entries: "entries"
    },
    easterEggPlaceholder: "Type keywords for hidden knowledge... (Try: 'foodready', 'ai automation', 'event-driven', 'substack', 'orkes')"
  },
  pt: {
    header: {
      title: "MARCEL QUEST",
      subtitle: "A Jornada do Desenvolvedor",
      instructions: "Use as teclas numéricas [1-{count}] ou clique para selecionar opções • [ESC] para menu principal"
    },
    footer: {
      poweredBy: "Quest Master desenvolvido com React & TypeScript • Hospedado na Vercel",
      createdBy: "Criado por Marcel Scognamiglio Senra Lourenco • Um experimento de narrativa técnica"
    },
    buttons: {
      downloadCV: "Baixar CV (PDF)",
      backToMain: "Voltar ao Menu Principal"
    },
    questMaster: {
      introduction: `Bem-vindo, alma corajosa, ao Marcel Quest: A Jornada do Desenvolvedor.

Sou o Mestre da Quest, guardião das crônicas profissionais de Marcel Scognamiglio Senra Lourenco e guia através de sua odisseia técnica.

Através de **mais de 10 anos de código, liderança e inovação**, Marcel forjou um caminho de desenvolvedor curioso a **Engenheiro de Software Sênior e Arquiteto de Sistemas**. Sua jornada abrange os reinos de **IA & Automação**, **arquiteturas orientadas a eventos**, e **soluções SaaS escaláveis**.

Que aspecto da quest profissional de Marcel você gostaria de explorar?`,
      mainOptions: {
        experience: "⚔️ Conte-me sobre sua experiência profissional",
        techStack: "🛠️ Quais tecnologias ele domina?",
        philosophy: "🧙‍♂️ Qual é sua filosofia de engenharia?",
        whyHire: "💼 Por que equipes deveriam trabalhar com Marcel?",
        certifications: "🏆 Quais são suas certificações e educação?",
        leadership: "👑 E sobre sua experiência de liderança?",
        aiAutomation: "🤖 Conte-me sobre sua expertise em IA & Automação",
        architecture: "🏗️ Conte-me sobre sua expertise em arquitetura",
        writing: "📚 Conte-me sobre sua escrita e envolvimento com a comunidade",
        contact: "📧 Como posso me conectar com Marcel?"
      },
      responses: {
        experience: `A jornada de Marcel abrange mais de 10 anos em diversos reinos tecnológicos:

**FoodReady – Desenvolvedor Sênior / Engenheiro de IA & Automação** (Nov 2024 – Presente)
Liderando a inovação em automação com IA para SaaS de segurança alimentar. Projeta e constrói recursos de ponta usando Node.js, TypeScript, Next.js, React e AWS. Orquestra fluxos de trabalho complexos com Orkes/Conductor e notificações em tempo real com Novu. Recentemente liderou a migração da equipe de sistemas baseados em tempo (cron) para sistemas orientados a eventos usando AWS Lambda, EventBridge e PostgreSQL.

**Synthetic Systems – DevLead (Consultor)** (Jan 2023 – Out 2023)
Responsabilidade técnica completa por uma plataforma full-stack baseada em monorepo construída com Next.js, React, GraphQL e MongoDB. Liderou a integração front-end e back-end enquanto conduzia a execução Agile. Colaborou diariamente com equipes de design (Figma), produto e engenharia. Mentorou desenvolvedores e dobrou a velocidade da equipe através de liderança estratégica.

**Quero Educação – Desenvolvedor de Software** (Mai 2022 – Nov 2023)
Desenvolveu recursos front-end para uma aplicação full-stack de marketplace usando Vue, Nuxt.js, React e TypeScript. Entregou melhorias significativas de SEO e performance focando em Web Core Vitals. Implementou pipelines robustos de CI/CD usando AWS, Docker e Kubernetes enquanto integrava serviços back-end com Node, Ruby on Rails e PostgreSQL.

Sua expertise abrange todo o ciclo de vida do desenvolvimento, do design arquitetural ao deploy, sempre focando em soluções escaláveis e mantíveis que resolvem problemas reais de negócio.`,
        techStack: "🛠️ Quais tecnologias ele domina?",
        philosophy: "🧙‍♂️ Qual é sua filosofia de engenharia?",
        whyHire: "💼 Por que equipes deveriam trabalhar com Marcel?",
        certifications: "🏆 Quais são suas certificações e educação?",
        leadership: "👑 E sobre sua experiência de liderança?",
        aiAutomation: "🤖 Conte-me sobre sua expertise em IA & Automação",
        architecture: "🏗️ Conte-me sobre sua expertise em arquitetura",
        writing: "📚 Conte-me sobre sua escrita e envolvimento com a comunidade",
        contact: "📧 Como posso me conectar com Marcel?"
      },
      easterEggs: {
        foodready: `🍽️ As Crônicas do FoodReady:

No FoodReady, Marcel descobriu que a IA de segurança alimentar é como ser um inspetor de saúde digital com superpoderes. Seus sistemas de automação com IA ajudam a garantir a conformidade com a segurança alimentar enquanto tornam o processo transparente para os operadores de restaurantes.

O verdadeiro desafio? Construir fluxos de trabalho de IA que entendam as nuances da conformidade regulatória enquanto permanecem amigáveis ao usuário. A arquitetura orientada a eventos de Marcel usando AWS Lambda e EventBridge transformou como os dados de segurança alimentar fluem pelo sistema.

Momento favorito de debugging: Um sistema de notificação de IA que era perfeitamente preciso mas enviava alertas às 3h da manhã. A solução envolveu não apenas correções técnicas, mas entender o fluxo de trabalho humano das operações do restaurante. Às vezes o melhor código considera quando as pessoas estão realmente acordadas para receber notificações!`,
        orkes: "Orkes",
        aiAutomation: "AI Automation",
        eventDriven: "Event-Driven",
        substack: "Substack"
      }
    },
    conversationHistory: {
      viewHistory: "Ver Histórico de Conversa",
      entries: "entradas"
    },
    easterEggPlaceholder: "Digite palavras-chave para conhecimento oculto... (Tente: 'foodready', 'ai automation', 'event-driven', 'substack', 'orkes')"
  },
  es: {
    header: {
      title: "MARCEL QUEST",
      subtitle: "El Viaje del Desarrollador",
      instructions: "Usa las teclas numéricas [1-{count}] o haz clic para seleccionar opciones • [ESC] para menú principal"
    },
    footer: {
      poweredBy: "Quest Master desarrollado con React & TypeScript • Desplegado en Vercel",
      createdBy: "Creado por Marcel Scognamiglio Senra Lourenco • Un experimento de narrativa técnica"
    },
    buttons: {
      downloadCV: "Descargar CV (PDF)",
      backToMain: "Volver al Menú Principal"
    },
    questMaster: {
      introduction: `Bienvenido, alma valiente, a Marcel Quest: El Viaje del Desarrollador.

Soy el Maestro de la Quest, guardián de las crónicas profesionales de Marcel Scognamiglio Senra Lourenco y guía a través de su odisea técnica.

A través de **más de 10 años de código, liderazgo e innovación**, Marcel ha forjado un camino de desarrollador curioso a **Ingeniero de Software Senior y Arquitecto de Sistemas**. Su viaje abarca los reinos de **IA & Automatización**, **arquitecturas orientadas a eventos**, y **soluciones SaaS escalables**.

¿Qué aspecto de la quest profesional de Marcel te gustaría explorar?`,
      mainOptions: {
        experience: "⚔️ Cuéntame sobre su experiencia profesional",
        techStack: "🛠️ ¿Qué tecnologías domina?",
        philosophy: "🧙‍♂️ ¿Cuál es su filosofía de ingeniería?",
        whyHire: "💼 ¿Por qué los equipos deberían trabajar con Marcel?",
        certifications: "🏆 ¿Cuáles son sus certificaciones y educación?",
        leadership: "👑 ¿Qué hay de su experiencia de liderazgo?",
        aiAutomation: "🤖 Cuéntame sobre su experiencia en IA & Automatización",
        architecture: "🏗️ Cuéntame sobre su experiencia en arquitectura",
        writing: "📚 Cuéntame sobre su escritura e involucramiento con la comunidad",
        contact: "📧 ¿Cómo puedo conectarme con Marcel?"
      },
      responses: {
        experience: `El viaje de Marcel abarca más de 10 años en diversos reinos tecnológicos:

**FoodReady – Desarrollador Senior / Ingeniero de IA & Automatización** (Nov 2024 – Presente)
Liderando la innovación en automatización con IA para SaaS de seguridad alimentaria. Diseña y construye características de vanguardia usando Node.js, TypeScript, Next.js, React y AWS. Orquesta flujos de trabajo complejos con Orkes/Conductor y notificaciones en tiempo real con Novu. Recientemente lideró la migración del equipo de sistemas basados en tiempo (cron) a sistemas orientados a eventos usando AWS Lambda, EventBridge y PostgreSQL.

**Synthetic Systems – DevLead (Consultor)** (Ene 2023 – Oct 2023)
Responsabilidad técnica completa de una plataforma full-stack basada en monorepo construida con Next.js, React, GraphQL y MongoDB. Lideró la integración front-end y back-end mientras conducía la ejecución Agile. Colaboró diariamente con equipos de diseño (Figma), producto e ingeniería. Mentoreó desarrolladores y duplicó la velocidad del equipo a través de liderazgo estratégico.

**Quero Educação – Desarrollador de Software** (May 2022 – Nov 2023)
Desarrolló características front-end para una aplicación full-stack de marketplace usando Vue, Nuxt.js, React y TypeScript. Entregó mejoras significativas de SEO y rendimiento enfocándose en Web Core Vitals. Implementó pipelines robustos de CI/CD usando AWS, Docker y Kubernetes mientras integraba servicios back-end con Node, Ruby on Rails y PostgreSQL.

Su experiencia abarca todo el ciclo de vida del desarrollo, desde el diseño arquitectónico hasta el despliegue, siempre enfocándose en soluciones escalables y mantenibles que resuelven problemas reales de negocio.`,
        techStack: "🛠️ ¿Qué tecnologías domina?",
        philosophy: "🧙‍♂️ ¿Cuál es su filosofía de ingeniería?",
        whyHire: "💼 ¿Por qué los equipos deberían trabajar con Marcel?",
        certifications: "🏆 ¿Cuáles son sus certificaciones y educación?",
        leadership: "👑 ¿Qué hay de su experiencia de liderazgo?",
        aiAutomation: "🤖 Cuéntame sobre su experiencia en IA & Automatización",
        architecture: "🏗️ Cuéntame sobre su experiencia en arquitectura",
        writing: "📚 Cuéntame sobre su escritura e involucramiento con la comunidad",
        contact: "📧 ¿Cómo puedo conectarme con Marcel?"
      },
      easterEggs: {
        foodready: `🍽️ Las Crónicas de FoodReady:

En FoodReady, Marcel descubrió que la IA de seguridad alimentaria es como ser un inspector de salud digital con superpoderes. Sus sistemas de automatización con IA ayudan a asegurar el cumplimiento de la seguridad alimentaria mientras hacen el proceso transparente para los operadores de restaurantes.

¿El verdadero desafío? Construir flujos de trabajo de IA que entiendan los matices del cumplimiento regulatorio mientras permanecen amigables para el usuario. La arquitectura orientada a eventos de Marcel usando AWS Lambda y EventBridge ha transformado cómo fluyen los datos de seguridad alimentaria a través del sistema.

Momento favorito de depuración: Un sistema de notificación de IA que era perfectamente preciso pero enviaba alertas a las 3 AM. La solución involucró no solo correcciones técnicas, sino entender el flujo de trabajo humano de las operaciones del restaurante. A veces el mejor código considera cuándo las personas están realmente despiertas para recibir notificaciones!`,
        orkes: "Orkes",
        aiAutomation: "AI Automation",
        eventDriven: "Event-Driven",
        substack: "Substack"
      }
    },
    conversationHistory: {
      viewHistory: "Ver Historial de Conversación",
      entries: "entradas"
    },
    easterEggPlaceholder: "Escribe palabras clave para conocimiento oculto... (Prueba: 'foodready', 'ai automation', 'event-driven', 'substack', 'orkes')"
  }
};

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('marcel-quest-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('marcel-quest-language', language);
  }, [language]);

  // Translation helper function
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
    
    // Replace parameters in translation
    if (params) {
      return Object.entries(params).reduce((str, [param, val]) => {
        return str.replace(`{${param}}`, String(val));
      }, value);
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      translations: translations[language], 
      setLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 