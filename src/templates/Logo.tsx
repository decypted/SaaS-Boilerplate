'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle initial client-side render
  useEffect(() => {
    setMounted(true);
  }, []);

  // When not mounted yet, use a logo that works on both backgrounds
  if (!mounted) {
    return (
      <div className="flex items-center text-xl font-semibold">
        <Image
          src="/deligate-black.svg"
          height={120}
          width={120}
          alt="Deligate Agency Logo"
        />
      </div>
    );
  }

  const logoSrc = resolvedTheme === 'dark' ? '/deligate-white.svg' : '/deligate-black.svg';

  return (
    <div className="flex items-center text-xl font-semibold">
      <Image
        src={logoSrc}
        height={120}
        width={120}
        alt="Deligate Agency Logo"
        className="transition-opacity duration-200"
      />
    </div>
  );
};
