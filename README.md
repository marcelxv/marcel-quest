# 🎮 Marcel Quest: The Developer's Journey

An interactive, retro-style, RPG-themed developer portfolio where visitors engage in a text-based conversation with an AI "Quest Master" to discover Marcel's professional journey, technical skills, and engineering philosophy.

## ✨ Features

### 🧙‍♂️ Interactive Quest Master
- AI guide through Marcel's professional chronicles
- Dialogue system inspired by classic JRPGs (Final Fantasy, Pokémon)
- Context-aware responses with branching conversation paths
- Professional tone - clever and informative, never silly

### 🎨 Retro Terminal Aesthetic  
- Monospace fonts and terminal-inspired design
- Green-on-black color scheme with scan line effects
- Glitch animations and retro button styling
- Responsive design for desktop and mobile

### 🗣️ Dynamic Dialogue System
- Real-time typing animations for incoming messages
- Keyboard navigation (number keys 1-9, ESC for main menu)
- Clickable dialogue options
- Conversation history tracking

### 🥚 Hidden Easter Eggs
Special keywords unlock bonus content:
- `orkes` - Behind-the-scenes stories from Marcel's current role
- `boss fight` - Epic tales of major technical challenges conquered
- `coffee` - Marcel's coding fuel preferences and productivity rituals
- `konami` - Secret developer stats and achievements

### 📊 Content Areas
- **Experience**: 8+ years across diverse technical roles
- **Tech Stack**: Comprehensive overview of languages, frameworks, and tools
- **Leadership**: Team management and mentorship experience
- **Philosophy**: Engineering principles and best practices
- **Writing**: Technical blog and thought leadership
- **Contact**: Professional networking information

## 🛠️ Technical Architecture

### Stack
- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4 with custom RPG theming
- **TypeScript**: Full type safety throughout
- **Deployment**: Optimized for Vercel

### Key Components
- `Quest.tsx` - Main state management and orchestration
- `DialogueBox.tsx` - Message display with typing animations
- `DialogueOptions.tsx` - Interactive choice selection
- `QuestMaster.ts` - Content data structure and branching logic

### Performance Features
- Static site generation for fast loading
- Optimized animations and interactions
- Mobile-responsive design
- Accessible keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd marcel-quest

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Run development server with Turbopack
npm run dev

# Lint code
npm run lint

# Build and preview production
npm run build && npm run start
```

## 🎯 User Experience Design

### Navigation Patterns
- **Keyboard First**: Number keys for quick selection
- **Mouse Friendly**: Click any option to select
- **Mobile Optimized**: Touch-friendly interface
- **Accessibility**: Screen reader compatible text

### Conversation Flow
1. **Introduction**: Quest Master welcomes visitors
2. **Main Menu**: Core topic branches (Experience, Tech Stack, Philosophy, etc.)
3. **Deep Dives**: Detailed responses with follow-up options
4. **Easter Eggs**: Hidden content via keyword detection
5. **History**: Previous conversation tracking

### Content Strategy
- **Professional Focus**: Technical expertise and business value
- **Storytelling**: Narrative approach to career highlights
- **Authenticity**: Real experiences and lessons learned
- **Engagement**: Interactive elements maintain interest

## 📈 Success Metrics

### Engagement Goals
- Longer session duration vs. static portfolios
- High interaction rate with dialogue options
- Easter egg discovery rate
- Mobile vs. desktop usage patterns

### Communication Objectives
- Clear technical competency demonstration
- Leadership and collaboration skills visibility
- Cultural fit and personality representation
- Contact conversion for opportunities

## 🔧 Customization Guide

### Content Updates
Edit `src/app/components/QuestMaster.ts` to update:
- Professional experience details
- Technical skills and current tech exploration
- Project highlights and achievements
- Contact information and links

### Styling Modifications
Customize appearance in `src/app/globals.css`:
- Color schemes and terminal effects
- Typography and spacing
- Animation timings and effects
- Responsive breakpoints

### Feature Extensions
Potential enhancements:
- Sound effects with mute toggle
- WebGL animations for character sprites
- LLM integration for free-text chat
- Analytics and visitor engagement tracking

## 🎨 Design Philosophy

This portfolio represents the intersection of technical skill and creative storytelling. It demonstrates:

- **Technical Competency**: Modern web development practices
- **User Experience Design**: Thoughtful interaction patterns
- **Creative Problem Solving**: Innovative approach to professional presentation
- **Attention to Detail**: Polished animations and responsive design

The retro RPG theme serves as both an engagement mechanism and a reflection of Marcel's personality - someone who appreciates both cutting-edge technology and timeless design patterns.

## 📞 Contact & Links

- **Email**: marcel.scognamiglio@gmail.com
- **LinkedIn**: [linkedin.com/in/marcelscognamiglio](https://linkedin.com/in/marcelscognamiglio)
- **Portfolio**: [marcelxv.github.io/portfolio](https://marcelxv.github.io/portfolio)
- **Blog**: [separationofconcerns.substack.com](https://separationofconcerns.substack.com)
- **GitHub**: [github.com/marcelxv](https://github.com/marcelxv)

---

**Marcel Quest** - Where professional portfolio meets interactive storytelling. Built with ❤️ and ☕ by Marcel Scognamiglio.
