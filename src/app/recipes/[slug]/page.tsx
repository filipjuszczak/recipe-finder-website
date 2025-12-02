import { Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { Breadcrumbs } from './_components/breadcrumbs';
import {
  RecipeDetails,
  RecipeDetailsSkeleton
} from './_components/recipe-details';
import { RecipeCard } from '../_components/recipe-card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  getRecipeBySlug,
  getRecipes,
  getRecipeSlugs
} from '@/data/get-recipes';

export async function generateStaticParams() {
  const recipeSlugs = await getRecipeSlugs();
  return recipeSlugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata(
  {
    params
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  const parentMetadata = await parent;

  if (recipe == null) {
    return {
      title: parentMetadata.title,
      description: parentMetadata.description
    };
  }

  return {
    title: recipe?.title || parentMetadata.title,
    description: recipe?.overview || parentMetadata.description
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-31 pt-12">
        <Suspense>
          <Breadcrumbs />
        </Suspense>
        <Suspense fallback={<RecipeDetailsSkeleton />}>
          <RecipeDetails params={params} />
        </Suspense>
        <div className="py-12 xl:py-16 border-b border-neutral-300">
          <h3 className="text-preset-3 mb-6">More recipes</h3>
          <Suspense fallback={<MoreRecipesSkeleton />}>
            <MoreRecipes params={params} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

async function MoreRecipes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipes = (await getRecipes())
    .filter((recipe) => recipe.slug !== slug)
    .slice(0, 3);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
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
      ))}
    </div>
  );
}

function MoreRecipesSkeleton() {
  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Loading more recipes...
      </div>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        aria-busy="true"
        aria-label="Loading more recipes"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="min-h-137.5 flex flex-col gap-4 p-2 bg-neutral-0 border border-neutral-300 rounded-lg shadow-[0_8px_16px_-9px_rgba(22,58,52,0.16)]"
          >
            <div className="relative grow">
              <Skeleton className="absolute inset-0" />
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
