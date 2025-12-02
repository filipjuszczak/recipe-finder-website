'use client';

import { Fragment } from 'react/jsx-runtime';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').slice(1);
  const segments: string[] = [];

  return (
    <nav className="flex gap-1.5 mb-4 text-preset-7" aria-label="Breadcrumb">
      {paths.map((path, i) => {
        segments.push(path);
        const content = path
          .split('-')
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <Fragment key={path}>
            <Link
              href={`/${segments.join('/')}`}
              className={cn(
                'opacity-60 hover:underline transition-colors',
                i === paths.length - 1 && 'opacity-100'
              )}
            >
              {content}
            </Link>
            {i < paths.length - 1 && <span className="opacity-60">/</span>}
          </Fragment>
        );
      })}
    </nav>
  );
}
