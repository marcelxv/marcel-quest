'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface DialogueBoxProps {
  message: string;
  isTyping: boolean;
  onTypingComplete?: () => void;
}

export default function DialogueBox({ message, isTyping, onTypingComplete }: DialogueBoxProps) {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedMessage(message);
      setCurrentIndex(message.length);
      return;
    }

    setDisplayedMessage('');
    setCurrentIndex(0);
  }, [message, isTyping]);

  useEffect(() => {
    if (!isTyping || currentIndex >= message.length) {
      if (currentIndex >= message.length && onTypingComplete) {
        onTypingComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedMessage(prev => prev + message[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 10); // 40% faster than previous 30ms

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, message, onTypingComplete]);

  return (
    <div className="dialogue-box p-6 m-4 rounded-lg max-w-4xl mx-auto">
      <div className="flex items-start gap-4">
        <div className="quest-master-avatar flex-shrink-0 w-16 h-16 border-2 rounded-lg flex items-center justify-center"
             style={{ 
               backgroundColor: 'var(--theme-box-bg)',
               borderColor: 'var(--theme-border)' 
             }}>
          <span className="text-2xl">🧙‍♂️</span>
        </div>
        <div className="flex-grow">
          <div className="font-bold text-lg mb-2" style={{ color: 'var(--theme-accent)' }}>
            Quest Master
          </div>
          <div className="leading-relaxed prose prose-invert max-w-none" style={{ color: 'var(--theme-secondary)' }}>
            <ReactMarkdown
              components={{
                strong: ({ children }) => (
                  <strong style={{ color: 'var(--theme-accent)', fontWeight: 'bold' }}>
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em style={{ color: 'var(--theme-foreground)', fontStyle: 'italic' }}>
                    {children}
                  </em>
                ),
                p: ({ children }) => (
                  <p className="mb-2" style={{ color: 'var(--theme-secondary)' }}>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 pl-4" style={{ color: 'var(--theme-secondary)' }}>
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="mb-1" style={{ color: 'var(--theme-secondary)' }}>
                    • {children}
                  </li>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--theme-accent)', 
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {displayedMessage}
            </ReactMarkdown>
            {isTyping && currentIndex < message.length && (
              <span className="animate-pulse w-2 h-5 inline-block ml-1" 
                    style={{ backgroundColor: 'var(--theme-accent)' }}></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 