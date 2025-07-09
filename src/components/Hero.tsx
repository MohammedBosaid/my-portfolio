import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className={`max-w-lg ${isRTL ? 'text-right' : 'text-left'} space-y-4`}
            initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t('hero.greeting')}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
              {t('hero.title')}
            </h2>
            <h3 className="text-lg md:text-xl text-primary font-semibold mb-6">
              {t('hero.subtitle')}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-300 whitespace-pre-line">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

