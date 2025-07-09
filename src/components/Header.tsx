import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
            MB
          </div>
          <span className="font-semibold text-lg">Mohammed Bosaid</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('nav.experience')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </button>
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

