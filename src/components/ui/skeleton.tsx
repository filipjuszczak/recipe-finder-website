import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-neutral-900/10 animate-pulse rounded-[0.625rem]',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
