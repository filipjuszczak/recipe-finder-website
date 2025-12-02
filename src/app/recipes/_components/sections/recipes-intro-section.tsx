export function RecipesIntroSection() {
  return (
    <section
      className="space-y-3 py-12 md:pt-16 xl:pt-20 xl:pb-16 xl:text-center"
      aria-labelledby="recipes-intro-section-heading"
    >
      <h1
        id="recipes-intro-section-heading"
        className="text-preset-2 text-neutral-900"
      >
        Explore our simple, healthy recipes
      </h1>
      <p className="text-preset-6 xl:max-w-[60%] xl:mx-auto">
        Discover eight quick, whole-food dishes that fit real-life schedules and
        taste amazing. Use the search bar to find a recipe by name or
        ingredient, or simply scroll the list and let something delicious catch
        your eye.
      </p>
    </section>
  );
}
