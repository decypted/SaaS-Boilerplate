'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { buttonVariants } from '@/components/ui/buttonVariants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const [isSticky, setIsSticky] = useState(false);

  // Define nav menu as JSON object
  const navMenu = [
    {
      label: 'product',
      dropdown: [
        { label: 'Overview', href: '/product/overview' },
        { label: 'Features', href: '/product/features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      label: 'docs',
      dropdown: [
        { label: 'API Reference', href: '/docs/api' },
        { label: 'Guides', href: '/docs/guides' },
        { label: 'FAQ', href: '/docs/faq' },
      ],
    },
    {
      label: 'blog',
      dropdown: [
        { label: 'Latest Posts', href: '/blog' },
        { label: 'Categories', href: '/blog/categories' },
      ],
    },
    {
      label: 'community',
      dropdown: [
        { label: 'Forum', href: '/community/forum' },
        { label: 'Events', href: '/community/events' },
      ],
    },
    {
      label: 'company',
      dropdown: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Contact', href: '/company/contact' },
      ],
    },
  ];

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
        {navMenu.map(item => (
          <li key={item.label}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer border-none bg-transparent text-inherit outline-none">
                  {t(item.label)}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.dropdown.map(drop => (
                  <DropdownMenuItem asChild key={drop.href}>
                    <Link href={drop.href}>{drop.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ))}
      </CenteredMenu>
    </Section>
  );
};
