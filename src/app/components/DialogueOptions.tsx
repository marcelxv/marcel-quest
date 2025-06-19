'use client';

import { DialogueOption } from './QuestMaster';

interface DialogueOptionsProps {
  options: DialogueOption[];
  onOptionSelect: (option: DialogueOption) => void;
  isVisible: boolean;
}

export default function DialogueOptions({ options, onOptionSelect, isVisible }: DialogueOptionsProps) {
  if (!isVisible) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option)}
            className={`
              dialogue-option w-full text-left p-4 border-2 rounded-lg transition-all duration-200
              ${option.isEasterEgg ? 'easter-egg-option' : ''}
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono" style={{ color: 'var(--theme-accent)' }}>
                [{index + 1}]
              </span>
              <span className="flex-grow">{option.text}</span>
              {option.isEasterEgg && (
                <span className="text-yellow-400 text-sm">✨</span>
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Back to main menu option if not on main menu */}
      <div className="mt-6 text-center">
        <button
          onClick={() => onOptionSelect({ id: 'main-menu', text: 'Return to main menu', response: '' })}
          className="text-sm underline transition-colors hover:opacity-80"
          style={{ color: 'var(--theme-secondary)' }}
        >
          [ESC] Return to main menu
        </button>
      </div>
    </div>
  );
} 