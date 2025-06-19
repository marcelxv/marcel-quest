# Marcel Quest: Interactive Developer Portfolio
## Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** January 2025  
**Product Owner:** Marcel Scognamiglio Senra Lourenco  
**Project Type:** Interactive Developer Portfolio / Technical Storytelling Platform

---

## Executive Summary

Marcel Quest is an innovative, RPG-style interactive portfolio that transforms the traditional static resume into an engaging, gamified experience. Built with modern web technologies, it showcases Marcel's 10+ years of software engineering expertise through immersive dialogue, multiple themes, and multilingual support.

### Key Value Propositions
- **Memorable Experience**: Stand out from traditional portfolios through interactive storytelling
- **Technical Demonstration**: Showcase advanced React/TypeScript skills through the portfolio itself
- **Accessibility**: Multi-language support (English, Portuguese, Spanish) reaching broader audiences
- **Professional Branding**: Unique approach that demonstrates creativity while maintaining professionalism

---

## Product Overview

### Vision Statement
"Transform how developers present their professional journey by creating an engaging, interactive experience that tells their story through immersive technology."

### Target Audience
- **Primary**: Hiring managers, technical recruiters, and engineering leaders
- **Secondary**: Fellow developers, potential collaborators, and tech community members
- **Tertiary**: Students and junior developers seeking portfolio inspiration

### Core User Journey
1. **Discovery**: User lands on portfolio through link/referral
2. **Engagement**: Chooses theme and language preferences
3. **Exploration**: Navigates through Marcel's professional story via dialogue options
4. **Action**: Downloads CV and/or connects via provided contact information

---

## Feature Specifications

### 🎮 Core Interactive System

#### Dialogue-Based Navigation
- **Quest Master NPC**: Guides users through Marcel's professional journey
- **Branching Conversations**: Multiple dialogue paths exploring different aspects
- **Typing Animation**: Realistic text rendering for immersive experience
- **Keyboard Navigation**: Number keys [1-9] for option selection, ESC for main menu

#### Content Categories
- ⚔️ Professional Experience (FoodReady, Synthetic Systems, Quero Educação)
- 🛠️ Technical Stack (Node.js, React, TypeScript, AI/Automation)
- 🧙‍♂️ Engineering Philosophy (Event-driven, scalable, business-focused)
- 💼 Value Proposition (Leadership, mentoring, cross-functional collaboration)
- 🏆 Certifications & Education (Codecademy, FIAP, FAPCOM)
- 👑 Leadership Experience (Team lead, DevLead, mentorship)
- 🤖 AI & Automation Expertise (Orkes/Conductor, Novu, workflow orchestration)
- 🏗️ Architectural Knowledge (Event-driven systems, microservices)
- 📚 Community Involvement (Technical writing, Substack publication)
- 📧 Contact Information (LinkedIn, email, portfolio links)

### 🎨 Theme System

#### Terminal Theme
- **Aesthetic**: Classic green-on-black terminal interface
- **Typography**: Monospace fonts (Courier New, Monaco, Menlo)
- **Effects**: Scan lines, subtle glitch effects, neon glow
- **Target Audience**: Developers, technical professionals

#### Medieval RPG Theme  
- **Aesthetic**: Dark fantasy with rich purples and gold accents
- **Typography**: Serif fonts (Cinzel, Times New Roman)
- **Effects**: Ornate borders, dramatic shadows, magical glow
- **Target Audience**: Creative professionals, gamers, broader audience

### 🌍 Internationalization

#### Language Support
- **English**: Primary language, tech industry standard
- **Portuguese**: Marcel's native language, local market access
- **Spanish**: Regional expansion, Latin American opportunities

#### Translation System
- **Context-based**: useLanguage hook with translation keys
- **Persistent Storage**: User preference saved in localStorage
- **Dynamic Content**: All UI elements and main content translated
- **Professional Quality**: Native-level translations for each language

### 📄 CV Generation & Export

#### PDF Generation
- **Technology**: jsPDF library for client-side generation
- **Format**: Professional, ATS-friendly layout
- **Content**: Complete professional information with proper formatting
- **Branding**: Consistent with portfolio aesthetic

#### Multi-format Support
- **Primary**: PDF download (professional standard)
- **Metadata**: Proper document properties for SEO/indexing

### 🔍 Easter Egg System

#### Hidden Content Discovery
- **Keyword Detection**: Special responses to company/technology mentions
- **Company-Specific**: FoodReady, Orkes, Substack, AI automation
- **Technology Focus**: Event-driven, automation, AI workflows
- **Engagement**: Rewards curiosity and detailed exploration

### 📱 Responsive Design

#### Mobile-First Approach
- **Breakpoints**: 768px (tablet), 480px (mobile)
- **Touch Optimization**: 44px minimum touch targets
- **Layout Adaptation**: Stacked layouts, compressed navigation
- **Performance**: Optimized for mobile networks

#### Cross-Device Compatibility
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Adapted layout with touch-friendly controls
- **Mobile**: Streamlined interface, essential features priority

---

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15.3.4 (React-based)
- **Language**: TypeScript (type safety, developer experience)
- **Styling**: CSS-in-JS with CSS custom properties
- **State Management**: React Context API (Theme, Language)
- **Build Tool**: Turbopack (Next.js native)

### Core Components
- **ThemeContext**: Global theme state management
- **LanguageContext**: Internationalization and translations
- **QuestMaster**: Dialogue content and navigation logic
- **DialogueBox**: Animated text rendering with markdown support
- **DialogueOptions**: Interactive option selection
- **CVDownload**: PDF generation and export

### Performance Considerations
- **Bundle Size**: Optimized imports, tree-shaking
- **Loading Speed**: Static generation, minimal JavaScript
- **SEO**: Server-side rendering, proper meta tags
- **Accessibility**: Keyboard navigation, screen reader support

### Deployment Infrastructure
- **Platform**: Vercel (optimal Next.js integration)
- **Domain**: Custom domain with SSL
- **CDN**: Global edge distribution
- **Analytics**: Built-in performance monitoring

---

## Success Metrics & KPIs

### User Engagement
- **Session Duration**: Target 3-5 minutes average
- **Interaction Rate**: >80% users click at least 3 dialogue options
- **Theme Usage**: Balanced adoption between Terminal/Medieval
- **Language Distribution**: Track geographic user preferences

### Professional Impact
- **CV Downloads**: Track download rate and timing
- **Contact Conversions**: LinkedIn connections, email inquiries
- **Referral Sources**: Track traffic sources and quality
- **Return Visits**: Measure portfolio shareability

### Technical Performance
- **Load Time**: <2 seconds First Contentful Paint
- **Core Web Vitals**: Green scores across all metrics
- **Mobile Performance**: >90 Lighthouse score
- **Accessibility**: WCAG 2.1 AA compliance

---

## Development Roadmap

### Phase 1: Core Features ✅ (Completed)
- [x] Basic dialogue system and navigation
- [x] Theme switching (Terminal/Medieval)
- [x] Multi-language support (EN/PT/ES)
- [x] PDF CV generation
- [x] Mobile responsiveness
- [x] Easter egg system

### Phase 2: Enhancement (In Progress)
- [ ] Enhanced medieval theme with custom fonts
- [ ] Improved color contrast and accessibility
- [ ] Animation and transition improvements
- [ ] Content expansion and refinement

### Phase 3: Advanced Features (Future)
- [ ] Analytics integration (Google Analytics 4)
- [ ] A/B testing for different themes/content
- [ ] Social sharing optimization
- [ ] Progressive Web App (PWA) capabilities
- [ ] Voice synthesis for accessibility

### Phase 4: Expansion (Future)
- [ ] Template system for other developers
- [ ] Content management system integration
- [ ] Advanced personalization based on user behavior
- [ ] Integration with professional networks

---

## Risk Assessment & Mitigation

### Technical Risks
- **Browser Compatibility**: Extensive testing across browsers/devices
- **Performance Degradation**: Regular performance audits and optimization
- **Accessibility Issues**: WCAG compliance testing and screen reader verification

### Business Risks
- **Overly Complex**: User testing to ensure clarity and usability
- **Technology Showcase vs. Usability**: Balance innovation with practical functionality
- **Maintenance Overhead**: Modular architecture for easy updates

### Content Risks
- **Translation Quality**: Native speaker review for all languages
- **Professional Tone**: Regular content review and refinement
- **Information Currency**: Quarterly updates to maintain accuracy

---

## Success Criteria

### Launch Criteria
- [x] All core features functional across devices
- [x] Multi-language support operational
- [x] Professional design quality
- [x] Fast loading performance (<3 seconds)
- [x] Accessibility compliance

### Growth Metrics (3-6 months)
- **Traffic**: 500+ unique visitors per month
- **Engagement**: 4+ minute average session duration
- **Conversions**: 15%+ CV download rate
- **Professional Inquiries**: 5+ quality leads per month

---

## Conclusion

Marcel Quest represents a innovative approach to developer portfolios, combining technical excellence with creative storytelling. The project demonstrates advanced frontend capabilities while serving as an effective professional marketing tool.

The interactive format differentiates Marcel from traditional candidates while providing measurable engagement metrics and clear conversion paths for potential employers or collaborators.

**Project Repository**: [GitHub Link]  
**Live Demo**: [Production URL]  
**Technical Blog**: https://marcelxv.substack.com/ 