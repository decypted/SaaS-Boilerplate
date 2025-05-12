'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  const scrollToCalendly = () => {
    const calendlyContainer = document.getElementById('calendly-container');
    if (calendlyContainer) {
      // Calculate position with offset
      const yOffset = -100; // Add 100px offset from the top
      const y = calendlyContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section className="py-36 ">
      <CenteredHero
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <div className="flex space-x-5">
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              {t('primary_button')}
            </a>

            <button
              type="button"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              onClick={scrollToCalendly}
            >
              <CalendarIcon className="mr-2 size-5" />
              {t('secondary_button')}
            </button>
          </div>
        )}
      />
    </Section>
  );
};
