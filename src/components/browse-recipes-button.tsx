import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function BrowseRecipesButton({
  className,
  onClick
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      onClick={onClick}
      className={cn('hidden lg:inline-flex transition-colors', className)}
    >
      <Link href="/recipes" prefetch={false} className="text-neutral-0">
        Browse recipes
      </Link>
    </Button>
  );
}
