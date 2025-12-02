import { List } from '../list';

export function WhyWeExistSection() {
  return (
    <section
      className="flex flex-col xl:flex-row gap-10 xl:gap-16"
      aria-labelledby="why-we-exist-section-heading"
    >
      <div className="min-w-1/3">
        <h2
          id="why-we-exist-section-heading"
          className="text-preset-2 text-neutral-900"
        >
          Why we exist
        </h2>
      </div>
      <div>
        <List
          items={[
            {
              heading: 'Cut through the noise.',
              body: 'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'
            },
            {
              heading: 'Empower home kitchens.',
              body: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.'
            },
            {
              heading: 'Make healthy look good.',
              body: 'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'
            }
          ]}
        />
      </div>
    </section>
  );
}
