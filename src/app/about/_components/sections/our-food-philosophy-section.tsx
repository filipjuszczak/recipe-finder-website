import { List } from '../list';

export function OurFoodPhilosophySection() {
  return (
    <section
      className="flex flex-col xl:flex-row gap-10 xl:gap-16"
      aria-labelledby="our-food-philosophy-section-heading"
    >
      <div className="min-w-1/3">
        <h2
          id="our-food-philosophy-section-heading"
          className="text-preset-2 text-neutral-900"
        >
          Our food philosophy
        </h2>
      </div>
      <div>
        <List
          items={[
            {
              heading: 'Whole ingredients first.',
              body: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.'
            },
            {
              heading: 'Flavor without compromise.',
              body: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.'
            },
            {
              heading: 'Respect for time.',
              body: 'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.'
            },
            {
              heading: 'Sustainable choices.',
              body: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.'
            }
          ]}
        />
      </div>
    </section>
  );
}
