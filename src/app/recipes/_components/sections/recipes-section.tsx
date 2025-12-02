import { Suspense } from 'react';
import { Filters } from '../filters/filters';
import { Recipes, RecipesSkeleton } from '../recipes';

export function RecipesSection({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <section aria-labelledby="recipes-section-heading">
      <h2 id="recipes-section-heading" className="sr-only">
        Recipes collection
      </h2>
      <Filters />
      <Suspense fallback={<RecipesSkeleton />}>
        <Recipes searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
