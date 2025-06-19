'use client';

import { CVData } from './CVData';
import { useLanguage } from './LanguageContext';

export default function CVDownload() {
  const { t } = useLanguage();
  
  const downloadCV = async () => {
    // Dynamically import jsPDF to avoid SSR issues
    const { default: jsPDF } = await import('jspdf');
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const lineHeight = 7;
    let yPosition = 30;

    // Helper function to add text with word wrapping
    const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
      doc.setFontSize(fontSize);
      if (isBold) {
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setFont('helvetica', 'normal');
      }
      
      const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
      lines.forEach((line: string) => {
        if (yPosition > doc.internal.pageSize.getHeight() - 30) {
          doc.addPage();
          yPosition = 30;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 3; // Extra spacing after sections
    };

    // Header
    addText(CVData.personalInfo.name, 16, true);
    addText(CVData.personalInfo.title, 12, true);
    addText(`${CVData.personalInfo.location} | ${CVData.personalInfo.email}`, 10);
    addText(CVData.personalInfo.linkedin, 10);
    yPosition += 5;

    // Professional Summary
    addText('PROFESSIONAL SUMMARY', 14, true);
    addText(CVData.summary, 10);
    yPosition += 5;

    // Professional Experience
    addText('PROFESSIONAL EXPERIENCE', 14, true);
    CVData.experience.forEach(exp => {
      addText(`${exp.company} – ${exp.position}`, 12, true);
      addText(exp.period, 10, true);
      exp.description.forEach(desc => {
        addText(`• ${desc}`, 10);
      });
      yPosition += 3;
    });

    // Technical Skills
    addText('TECHNICAL SKILLS', 14, true);
    Object.entries(CVData.technicalSkills).forEach(([category, skills]) => {
      addText(`${category}:`, 11, true);
      skills.forEach(skill => {
        addText(`• ${skill}`, 10);
      });
      yPosition += 2;
    });

    // Certifications
    addText('CERTIFICATIONS', 14, true);
    CVData.certifications.forEach(cert => {
      addText(`• ${cert.name} – ${cert.issuer} (${cert.date})`, 10);
    });
    yPosition += 3;

    // Education
    addText('EDUCATION', 14, true);
    CVData.education.forEach(edu => {
      addText(`• ${edu.degree} – ${edu.institution} (${edu.period})`, 10);
    });
    yPosition += 3;

    // Languages
    addText('LANGUAGES', 14, true);
    CVData.languages.forEach(lang => {
      addText(`• ${lang}`, 10);
    });
    yPosition += 3;

    // Links
    addText('PORTFOLIO & LINKS', 14, true);
    addText(`Portfolio: ${CVData.personalInfo.portfolio}`, 10);
    addText(`Technical Writing: ${CVData.personalInfo.blog}`, 10);

    // Save the PDF
    doc.save('Marcel_Scognamiglio_CV.pdf');
  };

  return (
    <button
      onClick={downloadCV}
      className="cv-download-btn px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2"
      style={{
        backgroundColor: 'var(--theme-box-bg)',
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-foreground)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <span className="text-lg">📄</span>
      <span>{t('buttons.downloadCV')}</span>
    </button>
  );
} 