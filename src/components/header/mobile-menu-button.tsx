'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { BrowseRecipesButton } from '../browse-recipes-button';
import { cn } from '@/lib/utils';

export function MobileMenuButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40 xl:hidden" />}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'flex flex-col items-center justify-center gap-y-1.25 size-10 rounded-sm bg-neutral-300 lg:hidden',
              className
            )}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            <HamburgerIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="xl:hidden min-w-screen p-2 bg-neutral-0 border-2 border-neutral-300 rounded-lg shadow-[0_12px_22px_-12px_rgba(57,88,82,0.16)] z-50">
          <MobileNav onLinkClick={() => setIsOpen(false)} />
          <BrowseRecipesButton
            onClick={() => setIsOpen(false)}
            className="block rounded-[0.625rem] text-center"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function HamburgerIcon() {
  return (
    <>
      <span className="w-4.5 h-0.5 bg-neutral-900 rounded-full"></span>
      <span className="w-4.5 h-0.5 bg-neutral-900 rounded-full"></span>
      <span className="w-4.5 h-0.5 bg-neutral-900 rounded-full"></span>
    </>
  );
}

const LINKS = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/recipes',
    label: 'Recipes'
  }
];

function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <nav className="mb-2.5">
      <ul>
        {LINKS.map((link) => (
          <MobileNavLink
            key={link.label}
            href={link.href}
            onLinkClick={onLinkClick}
          >
            {link.label}
          </MobileNavLink>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavLink({
  href,
  children,
  onLinkClick
}: {
  href: string;
  children: ReactNode;
  onLinkClick: () => void;
}) {
  return (
    <li className="text-preset-7">
      <Link
        href={href}
        className="block py-3 px-2 text-neutral-900"
        onClick={onLinkClick}
      >
        {children}
      </Link>
    </li>
  );
}
