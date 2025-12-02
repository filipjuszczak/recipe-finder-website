import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CookTime, PrepTime, Servings } from '../../_components/recipe-card';
import { getRecipeBySlug } from '@/data/get-recipes';
import { Skeleton } from '@/components/ui/skeleton';

export async function RecipeDetails({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  if (recipe == null) notFound();

  return (
    <article className="grid lg:grid-cols-2 gap-10 pb-12 xl:pb-16 border-b border-neutral-300">
      <div>
        <Image
          src={recipe.image.large}
          alt={recipe.title}
          width={340}
          height={340}
          preload={true}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="w-full rounded-[0.625rem]"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-preset-2 text-neutral-900">{recipe.title}</h1>
        <p className="text-preset-6">{recipe.overview}</p>
        <div className="flex flex-wrap gap-4 text-preset-7">
          <Servings servings={recipe.servings} />
          <PrepTime prepTime={recipe.prepMinutes} />
          <CookTime cookTime={recipe.cookMinutes} />
        </div>
        <IngredientList ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
      </div>
    </article>
  );
}

function IngredientList({ ingredients }: { ingredients: string[] }) {
  return (
    <div>
      <h2 className="text-preset-4 text-neutral-900 mb-4">Ingredients:</h2>
      <ul className="ingredient-list space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-preset-6 flex gap-x-2">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Instructions({ instructions }: { instructions: string[] }) {
  return (
    <div>
      <h2 className="text-preset-4 text-neutral-900 mb-4">Instructions:</h2>
      <ol className="instructions space-y-2" aria-label="Cooking instructions">
        {instructions.map((instruction, index) => (
          <li key={index} className="text-preset-6 flex gap-x-2">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RecipeDetailsSkeleton() {
  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Loading recipe details...
      </div>
      <div
        className="grid lg:grid-cols-2 items-start gap-10 pb-12 xl:pb-16 border-b border-neutral-300"
        aria-busy="true"
        aria-label="Loading recipe details"
      >
        <Skeleton className="min-h-[340px] md:min-h-[600px] rounded-[10px]" />
        <div className="space-y-5">
          <Skeleton className="h-[115px]" />
          <Skeleton className="h-[60px]" />
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Skeleton className="w-[100px] h-6" />
            <Skeleton className="w-[110px] h-6" />
            <Skeleton className="w-[120px] h-6" />
          </div>
          <div>
            <Skeleton className="w-[150px] h-[32px] mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <Skeleton
                    key={`ingredients-${index}`}
                    className="md:w-[250px] h-[30px]"
                  />
                );
              })}
            </div>
          </div>
          <div>
            <Skeleton className="w-[150px] h-[32px] mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={`instructions-${index}`}
                  className="md:w-[450px] h-[30px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
