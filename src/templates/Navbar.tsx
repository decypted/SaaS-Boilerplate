'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section
      className={`px-3 py-4 transition-all duration-300 ${
        isSticky
          ? 'animate-navbar-sticky fixed left-0 top-0 z-50 w-full bg-background/90 shadow-sm backdrop-blur-md'
          : ''
      }`}
    >
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <div className="flex items-center gap-3 text-sm">
            <ThemeToggle />
            <LocaleSwitcher />
            <Link className={buttonVariants()} href="/sign-up">
              {t('sign_up')}
            </Link>
          </div>
        )}
      >
        <li>
          <Link href="/sign-up">{t('product')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('docs')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('blog')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('community')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
