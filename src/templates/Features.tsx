'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Lightbulb,
  MessageCircle,
  Search,
  Target,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

const FeatureCard = ({
  icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
      className="relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 shadow-sm transition-all dark:bg-card/80 dark:backdrop-blur-md"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </motion.div>
  );
};

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <FeatureCard
            delay={0.1}
            icon={<BarChart3 className="size-6 text-primary" />}
            title={t('feature1_title')}
          >
            {t('feature1_description')}
          </FeatureCard>

          <FeatureCard
            delay={0.2}
            icon={<MessageCircle className="size-6 text-primary" />}
            title={t('feature2_title')}
          >
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard
            delay={0.3}
            icon={<Target className="size-6 text-primary" />}
            title={t('feature3_title')}
          >
            {t('feature3_description')}
          </FeatureCard>

          <FeatureCard
            delay={0.4}
            icon={<Search className="size-6 text-primary" />}
            title={t('feature4_title')}
          >
            {t('feature4_description')}
          </FeatureCard>

          <FeatureCard
            delay={0.5}
            icon={<Lightbulb className="size-6 text-primary" />}
            title={t('feature5_title')}
          >
            {t('feature5_description')}
          </FeatureCard>

          <FeatureCard
            delay={0.6}
            icon={<Users className="size-6 text-primary" />}
            title={t('feature6_title')}
          >
            {t('feature6_description')}
          </FeatureCard>
        </motion.div>
      </Section>
    </Background>
  );
};
