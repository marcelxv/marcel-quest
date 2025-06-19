import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Uncial_Antiqua } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from './components/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-uncial-antiqua",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Marcel Quest: The Developer's Journey",
  description: "An interactive RPG-style developer portfolio showcasing Marcel Scognamiglio Senra Lourenco's 10+ year technical journey as Senior Software Engineer, System Architect, and AI & Automation Specialist. Explore his expertise in SaaS products, AI workflows, and event-driven architectures through immersive dialogue.",
  keywords: ["Marcel Scognamiglio", "Senior Software Engineer", "System Architect", "AI Automation", "developer portfolio", "interactive resume", "RPG", "software engineer", "FoodReady", "Synthetic Systems", "Quero Educação", "event-driven architecture", "AI workflows", "São José dos Campos"],
  authors: [{ name: "Marcel Scognamiglio Senra Lourenco" }],
  openGraph: {
    title: "Marcel Quest: The Developer's Journey",
    description: "Interactive RPG-style portfolio of Marcel Scognamiglio - Senior Software Engineer & AI Automation Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${uncialAntiqua.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
