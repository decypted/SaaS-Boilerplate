'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

// Define CalendlyEmbed component before using it
const CalendlyEmbed = () => {
  useEffect(() => {
    // Add Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add custom CSS to style the Calendly iframe when it loads
    const style = document.createElement('style');
    style.innerHTML = `
      .calendly-inline-widget iframe {
        border-radius: 0.75rem !important;
        background-color: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup script and style when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      /* eslint-disable-next-line tailwindcss/no-custom-classname */
      className="calendly-inline-widget mt-10 overflow-hidden rounded-xl border border-border bg-transparent"
      data-url="https://calendly.com/andy-andytang/30min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section className="py-16">
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <a
            className={buttonVariants({ size: 'lg' })}
            href="https://github.com/ixartz/SaaS-Boilerplate"
          >
            <GitHubLogoIcon className="mr-2 size-5" />
            {t('button')}
          </a>
        )}
      />

      <div id="calendly-container">
        <CalendlyEmbed />
      </div>
    </Section>
  );
};
