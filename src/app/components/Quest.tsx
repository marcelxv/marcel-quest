'use client';

import { useState, useEffect, useCallback } from 'react';
import DialogueBox from './DialogueBox';
import DialogueOptions from './DialogueOptions';
import ThemeToggle from './ThemeToggle';
import CVDownload from './CVDownload';
import LanguageToggle from './LanguageToggle';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { DialogueOption, QuestState } from './QuestMaster';

export default function Quest() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  
  const [questState, setQuestState] = useState<QuestState>({
    currentMessage: t('questMaster.introduction'),
    currentOptions: [
      { id: 'experience', text: t('questMaster.mainOptions.experience'), response: t('questMaster.responses.experience') },
      { id: 'tech-stack', text: t('questMaster.mainOptions.techStack'), response: t('questMaster.responses.techStack') },
      { id: 'philosophy', text: t('questMaster.mainOptions.philosophy'), response: t('questMaster.responses.philosophy') },
      { id: 'why-hire', text: t('questMaster.mainOptions.whyHire'), response: t('questMaster.responses.whyHire') },
      { id: 'certifications', text: t('questMaster.mainOptions.certifications'), response: t('questMaster.responses.certifications') },
      { id: 'leadership', text: t('questMaster.mainOptions.leadership'), response: t('questMaster.responses.leadership') },
      { id: 'ai-automation', text: t('questMaster.mainOptions.aiAutomation'), response: t('questMaster.responses.aiAutomation') },
      { id: 'architecture', text: t('questMaster.mainOptions.architecture'), response: t('questMaster.responses.architecture') },
      { id: 'writing', text: t('questMaster.mainOptions.writing'), response: t('questMaster.responses.writing') },
      { id: 'contact', text: t('questMaster.mainOptions.contact'), response: t('questMaster.responses.contact') }
    ],
    isTyping: true,
    conversationHistory: []
  });

  const [showOptions, setShowOptions] = useState(false);
  const [easterEggInput, setEasterEggInput] = useState('');

  // Handle typing completion
  const handleTypingComplete = useCallback(() => {
    setQuestState(prev => ({ ...prev, isTyping: false }));
    setShowOptions(true);
  }, []);

  // Handle Easter egg detection
  const handleEasterEggCheck = useCallback((input: string) => {
    const lowerInput = input.toLowerCase().trim();
    
    // Check for known easter eggs
    const easterEggKeys = ['foodready', 'orkes', 'ai automation', 'event-driven', 'substack'];
    for (const key of easterEggKeys) {
      if (lowerInput.includes(key)) {
        const translationKey = key.replace('-', '');
        const easterEggResponse = t(`questMaster.easterEggs.${translationKey}`);
        
        setQuestState(prev => ({
          ...prev,
          currentMessage: easterEggResponse,
          currentOptions: getMainOptions(), // Get fresh translated options
          isTyping: true,
          conversationHistory: [...prev.conversationHistory, prev.currentMessage, `> ${input}`]
        }));
        
        setShowOptions(false);
        setEasterEggInput('');
        return true;
      }
    }
    
    return false;
  }, [t]);

  // Helper function to get translated main options
  const getMainOptions = useCallback(() => {
    return [
      { id: 'experience', text: t('questMaster.mainOptions.experience'), response: t('questMaster.responses.experience') },
      { id: 'tech-stack', text: t('questMaster.mainOptions.techStack'), response: t('questMaster.responses.techStack') },
      { id: 'philosophy', text: t('questMaster.mainOptions.philosophy'), response: t('questMaster.responses.philosophy') },
      { id: 'why-hire', text: t('questMaster.mainOptions.whyHire'), response: t('questMaster.responses.whyHire') },
      { id: 'certifications', text: t('questMaster.mainOptions.certifications'), response: t('questMaster.responses.certifications') },
      { id: 'leadership', text: t('questMaster.mainOptions.leadership'), response: t('questMaster.responses.leadership') },
      { id: 'ai-automation', text: t('questMaster.mainOptions.aiAutomation'), response: t('questMaster.responses.aiAutomation') },
      { id: 'architecture', text: t('questMaster.mainOptions.architecture'), response: t('questMaster.responses.architecture') },
      { id: 'writing', text: t('questMaster.mainOptions.writing'), response: t('questMaster.responses.writing') },
      { id: 'contact', text: t('questMaster.mainOptions.contact'), response: t('questMaster.responses.contact') }
    ];
  }, [t]);

  // Handle option selection
  const handleOptionSelect = useCallback((option: DialogueOption) => {
    // Handle return to main menu
    if (option.id === 'main-menu') {
      setQuestState({
        currentMessage: t('questMaster.introduction'),
        currentOptions: getMainOptions(),
        isTyping: true,
        conversationHistory: [...questState.conversationHistory, questState.currentMessage]
      });
      setShowOptions(false);
      return;
    }

    // Update conversation history
    const newHistory = [
      ...questState.conversationHistory,
      questState.currentMessage,
      `> ${option.text}`
    ];

    setQuestState({
      currentMessage: option.response,
      currentOptions: getMainOptions(),
      isTyping: true,
      conversationHistory: newHistory
    });

    setShowOptions(false);
  }, [questState.conversationHistory, questState.currentMessage, t, getMainOptions]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showOptions) return;

      // Number key selection
      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= questState.currentOptions.length) {
        handleOptionSelect(questState.currentOptions[keyNum - 1]);
        return;
      }

      // ESC key for main menu
      if (e.key === 'Escape') {
        handleOptionSelect({ id: 'main-menu', text: 'Return to main menu', response: '' });
        return;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showOptions, questState.currentOptions, handleOptionSelect]);

  // Update when language changes
  useEffect(() => {
    setQuestState(prev => ({
      ...prev,
      currentMessage: t('questMaster.introduction'),
      currentOptions: getMainOptions(),
      isTyping: true
    }));
  }, [language, t, getMainOptions]);

  return (
    <div className="min-h-screen p-4" style={{ 
      background: 'var(--theme-background)', 
      color: 'var(--theme-foreground)' 
    }}>
      {/* Header Controls */}
      <div className="flex justify-between items-start mb-4">
        <CVDownload />
        <div className="flex gap-2 sm:gap-3 items-center">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      
      {/* Header */}
      <header className="text-center py-4 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4" 
            style={{ 
              color: 'var(--theme-accent)', 
              fontFamily: 'var(--theme-font-primary)',
              textShadow: 'var(--theme-text-shadow)'
            }}>
          {t('header.title')}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6" 
            style={{ 
              color: 'var(--theme-secondary)', 
              fontFamily: 'var(--theme-font-primary)' 
            }}>
          {t('header.subtitle')}
        </h2>
        <p className="text-xs sm:text-sm text-center max-w-2xl mx-auto px-4" 
           style={{ color: 'var(--theme-secondary)' }}>
          {t('header.instructions', { count: questState.currentOptions.length })}
        </p>
      </header>

      {/* Main dialogue area */}
      <main className="max-w-6xl mx-auto">
        <DialogueBox 
          message={questState.currentMessage}
          isTyping={questState.isTyping}
          onTypingComplete={handleTypingComplete}
        />
        
        <DialogueOptions
          options={questState.currentOptions}
          onOptionSelect={handleOptionSelect}
          isVisible={showOptions}
        />

        {/* Easter egg input */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="text-center">
            <input
              type="text"
              value={easterEggInput}
              onChange={(e) => setEasterEggInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && easterEggInput.trim()) {
                  if (!handleEasterEggCheck(easterEggInput)) {
                    // Show a hint for invalid easter eggs
                    setEasterEggInput('');
                  }
                }
              }}
              placeholder={t('easterEggPlaceholder')}
              className="w-full bg-transparent p-3 rounded focus:outline-none"
              style={{ 
                border: `1px solid var(--theme-border)`,
                color: 'var(--theme-foreground)',
                borderRadius: theme === 'medieval' ? '8px' : '4px'
              }}
            />
          </div>
        </div>

        {/* Conversation history toggle */}
        {questState.conversationHistory.length > 0 && (
          <details className="mt-8 max-w-4xl mx-auto">
            <summary className="cursor-pointer text-sm transition-colors hover:opacity-80"
                     style={{ color: 'var(--theme-secondary)' }}>
              📜 {t('conversationHistory.viewHistory')} ({questState.conversationHistory.length} {t('conversationHistory.entries')})
            </summary>
            <div className="mt-4 space-y-2 text-sm max-h-60 overflow-y-auto">
              {questState.conversationHistory.map((entry, index) => (
                <div key={index} 
                     style={{ 
                       color: entry.startsWith('>') ? 'var(--theme-accent)' : 'var(--theme-secondary)',
                       opacity: entry.startsWith('>') ? 0.9 : 0.7
                     }}>
                  {entry}
                </div>
              ))}
            </div>
          </details>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 sm:py-6 text-xs sm:text-sm" style={{ color: 'var(--theme-secondary)' }}>
        <div className="mb-1 sm:mb-2">
          {t('footer.poweredBy')}
        </div>
        <div>
          {t('footer.createdBy')}
        </div>
      </footer>
    </div>
  );
} 