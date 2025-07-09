import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: Mail,
      label: t('contact.emailLabel'),
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
    },
    {
      icon: Phone,
      label: t('contact.phoneLabel'),
      value: t('contact.phone'),
      href: `tel:${t('contact.phone')}`,
    },
    {
      icon: Github,
      label: t('contact.githubLabel'),
      value: t('contact.githubValue'),
      href: t('contact.githubUrl'),
    },
    {
      icon: Linkedin,
      label: t('contact.linkedinLabel'),
      value: t('contact.linkedinValue'),
      href: t('contact.linkedinUrl'),
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('contact.title')}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">{t('contact.subtitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 justify-start"
                      asChild
                    >
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-3"
                      >
                        <Icon className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

