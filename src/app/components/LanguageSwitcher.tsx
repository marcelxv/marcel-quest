'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentLanguage = () => {
    const currentLocale = pathname.split('/')[1];
    return languages.find(lang => lang.code === currentLocale) || languages[0];
  };

  const handleLanguageChange = (langCode: string) => {
    const currentLocale = pathname.split('/')[1];
    const newPathname = pathname.replace(`/${currentLocale}`, `/${langCode}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  const currentLang = getCurrentLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher-btn px-3 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2"
        style={{
          backgroundColor: 'var(--theme-box-bg)',
          borderColor: 'var(--theme-border)',
          color: 'var(--theme-foreground)'
        }}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm">{currentLang.name}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 right-0 language-dropdown rounded-lg border-2 overflow-hidden z-50"
          style={{
            backgroundColor: 'var(--theme-box-bg)',
            borderColor: 'var(--theme-border)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-2 flex items-center gap-2 hover:bg-opacity-80 transition-all"
              style={{
                color: 'var(--theme-foreground)',
                backgroundColor: currentLang.code === lang.code ? 'var(--theme-hover)' : 'transparent'
              }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 