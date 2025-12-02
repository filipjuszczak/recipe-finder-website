import Image from 'next/image';
import { ServingsIcon } from './icons/ServingsIcon';
import { PrepTimeIcon } from './icons/PrepTimeIcon';
import { CookTimeIcon } from './icons/CookTimeIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function RecipeCard({
  title,
  slug,
  image,
  overview,
  servings,
  prepMinutes,
  cookMinutes
}: {
  title: string;
  slug: string;
  image: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}) {
  return (
    <article className="min-h-137.5 flex flex-col gap-4 p-2 bg-neutral-0 border border-neutral-300 rounded-lg shadow-[0_8px_16px_-9px_rgba(22,58,52,0.16)]">
      <div className="relative grow">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="px-2">
        <h3
          className="text-preset-5 text-neutral-900 mb-2.5 md:truncate"
          title={title}
        >
          {title}
        </h3>
        <p className="text-preset-9 line-clamp-2" title={overview}>
          {overview}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-preset-9 text-neutral-900 px-2">
        <Servings servings={servings} />
        <PrepTime prepTime={prepMinutes} />
        <CookTime cookTime={cookMinutes} />
      </div>
      <Button asChild className="text-preset-8 w-full transition-colors">
        <Link href={`/recipes/${slug}`} className="text-neutral-0">
          View Recipe
        </Link>
      </Button>
    </article>
  );
}

export function Servings({ servings }: { servings: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <ServingsIcon />
      <span>Servings: {servings}</span>
    </div>
  );
}

export function PrepTime({ prepTime }: { prepTime: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <PrepTimeIcon />
      <span>Prep: {prepTime} mins</span>
    </div>
  );
}

export function CookTime({ cookTime }: { cookTime: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <CookTimeIcon />
      <span>Cook: {cookTime} mins</span>
    </div>
  );
}
