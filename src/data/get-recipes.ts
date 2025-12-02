import { cacheTag } from 'next/cache';
import type { SearchParams } from 'next/dist/server/request/search-params';
import { filterRecipes } from '@/lib/utils';
import data from './data.json';

export async function getRecipes() {
  'use cache';
  cacheTag('recipes');

  return data;
}

export async function getRecipeSlugs() {
  return data.map((recipe) => recipe.slug);
}

export async function getFilteredRecipes(filters: SearchParams) {
  const recipes = await getRecipes();
  return filterRecipes(recipes, filters);
}

export async function getRecipeBySlug(slug: string) {
  'use cache';
  cacheTag(`recipes:${slug}`);

  const recipes = await getRecipes();
  return recipes.find((recipe) => recipe.slug === slug);
}
