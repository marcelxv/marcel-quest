'use client';

import { useLanguage, Language } from './LanguageContext';

interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
  fullName: string;
}

const languages: LanguageInfo[] = [
  { code: 'en', name: 'EN', flag: '🇺🇸', fullName: 'English' },
  { code: 'pt', name: 'PT', flag: '🇧🇷', fullName: 'Português' },
  { code: 'es', name: 'ES', flag: '🇪🇸', fullName: 'Español' }
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  const current = languages.find(lang => lang.code === language) || languages[0];
  const next = languages[(languages.findIndex(lang => lang.code === language) + 1) % languages.length];

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: 'var(--theme-box-bg)',
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-foreground)',
        backdropFilter: 'blur(10px)'
      }}
      title={`Switch to ${next.fullName}`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-base sm:text-lg">
          {current.flag}
        </span>
        <span className="hidden sm:inline text-xs sm:text-sm font-bold">
          {current.name}
        </span>
      </div>
    </button>
  );
} 