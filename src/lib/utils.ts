import type { SearchParams } from 'next/dist/server/request/search-params';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Recipe = {
  id: number;
  title: string;
  slug: string;
  image: {
    large: string;
    small: string;
  };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: Array<string>;
  instructions: Array<string>;
};

export function filterRecipes(recipes: Recipe[], filters: SearchParams) {
  const { query, prepTime, cookTime } = filters;
  return recipes.filter((recipe) => {
    const conditions = [
      ...(query
        ? [
            recipe.title
              .toLowerCase()
              .includes(
                (Array.isArray(query) ? query[0] : query).toLowerCase()
              ) ||
              recipe.ingredients.some((ingredient) =>
                ingredient
                  .toLowerCase()
                  .includes(
                    (Array.isArray(query) ? query[0] : query).toLowerCase()
                  )
              )
          ]
        : []),
      ...(prepTime
        ? [
            recipe.prepMinutes <=
              parseInt(Array.isArray(prepTime) ? prepTime[0] : prepTime)
          ]
        : []),
      ...(cookTime
        ? [
            recipe.cookMinutes <=
              parseInt(Array.isArray(cookTime) ? cookTime[0] : cookTime)
          ]
        : [])
    ];
    return conditions.every(Boolean);
  });
}
