import type { Metadata } from 'next';
import { RecipesIntroSection } from './_components/sections/recipes-intro-section';
import { RecipesSection } from './_components/sections/recipes-section';

export const metadata: Metadata = {
  title: 'Recipes'
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-31">
        <RecipesIntroSection />
        <RecipesSection searchParams={searchParams} />
      </div>
    </main>
  );
}
