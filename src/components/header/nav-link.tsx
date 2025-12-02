'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <li className="text-preset-7">
      <Link href={href} className={cn('main-nav-link', isActive && 'active')}>
        {children}
      </Link>
    </li>
  );
}
