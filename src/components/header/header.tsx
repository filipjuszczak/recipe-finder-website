'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { BrowseRecipesButton } from '../browse-recipes-button';
import { MobileMenuButton } from './mobile-menu-button';

export function Header() {
  return (
    <header className="relative flex items-center justify-between px-4 py-5 md:p-8 xl:px-15 xl:py-6.5 border-b border-neutral-300">
      <Link href="/" aria-label="Go to homepage">
        <Logo />
      </Link>
      <Suspense>
        <Navigation />
      </Suspense>
      <BrowseRecipesButton />
      <MobileMenuButton />
    </header>
  );
}
