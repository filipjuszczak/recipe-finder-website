import { Skeleton } from '@/components/ui/skeleton';
import { RecipeCard } from './recipe-card';
import { getFilteredRecipes } from '@/data/get-recipes';

export async function Recipes({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const filters = await searchParams;
  const filteredRecipes = await getFilteredRecipes(filters);

  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {filteredRecipes.length > 0
          ? `Found ${filteredRecipes.length} recipe${
              filteredRecipes.length === 1 ? '' : 's'
            }`
          : 'No recipes found'}
      </div>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        aria-live="polite"
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image.large}
              title={recipe.title}
              overview={recipe.overview}
              servings={recipe.servings}
              prepMinutes={recipe.prepMinutes}
              cookMinutes={recipe.cookMinutes}
              slug={recipe.slug}
            />
          ))
        ) : (
          <p className="text-preset-4">No results...</p>
        )}
      </div>
    </>
  );
}

export function RecipesSkeleton() {
  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Loading recipes...
      </div>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        aria-busy="true"
        aria-label="Loading recipes"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="min-h-137.5 flex flex-col gap-4 p-2 bg-neutral-0 rounded-lg border border-neutral-300 shadow-[0_8px_16px_-9px_rgba(22,58,52,0.16)]"
          >
            <div className="relative grow">
              <Skeleton className="absolute inset-0 rounded-md" />
            </div>
            <div className="px-2">
              <Skeleton className="w-3/4 h-[28px] mb-2.5" />
              <Skeleton className="w-2/3 h-12" />
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 px-2">
              <Skeleton className="w-[100px] h-6" />
              <Skeleton className="w-[110px] h-6" />
              <Skeleton className="w-[120px] h-6" />
            </div>
            <Skeleton className="h-12" />
          </div>
        ))}
      </div>
    </>
  );
}
