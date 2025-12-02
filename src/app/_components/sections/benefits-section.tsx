import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import wholeFoodIcon from '@/../public/img/icon-whole-food-recipes.svg';
import minimumFussIcon from '@/../public/img/icon-minimum-fuss.svg';
import searchInSecondsImg from '@/../public/img/icon-search-in-seconds.svg';

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-section-heading"
      className="xl:pb-24 xl:border-b xl:border-neutral-300"
    >
      <h2
        id="benefits-section-heading"
        className="text-preset-2 text-neutral-900 mb-8 xl:mb-12 xl:text-center"
      >
        What you&apos;ll get
      </h2>
      <Benefits />
    </section>
  );
}

type Benefit = {
  icon: StaticImport;
  title: string;
  body: string;
};

function Benefits() {
  const benefits: Benefit[] = [
    {
      icon: wholeFoodIcon,
      title: 'Whole-food recipes',
      body: 'Each dish uses everyday, unprocessed ingredients.'
    },
    {
      icon: minimumFussIcon,
      title: 'Minimum fuss',
      body: 'All recipes are designed to make eating healthy quick and easy.'
    },
    {
      icon: searchInSecondsImg,
      title: 'Search in seconds',
      body: 'Filter by name or ingredient and jump straight to the recipe you need.'
    }
  ];

  return (
    <ul className="grid xl:grid-cols-3 gap-6 md:gap-8">
      {benefits.map((benefit, index) => (
        <Benefit key={index} {...benefit} />
      ))}
    </ul>
  );
}

function Benefit({ icon, title, body }: Benefit) {
  return (
    <li>
      <div className="mb-5 md:mb-6">
        <BenefitIcon icon={icon} />
      </div>
      <h3 className="text-preset-3 text-neutral-900 mb-3">{title}</h3>
      <p className="text-preset-6">{body}</p>
    </li>
  );
}

function BenefitIcon({ icon }: { icon: StaticImport }) {
  return (
    <div className="flex items-center justify-center size-15 bg-neutral-0 rounded-xl border border-neutral-200 shadow-[0_1px_0_0_var(--color-neutral-200)]">
      <Image src={icon} alt="" />
    </div>
  );
}
