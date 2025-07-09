import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center mb-8">
              {t('about.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed text-center whitespace-pre-line">
              {t('about.description')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

