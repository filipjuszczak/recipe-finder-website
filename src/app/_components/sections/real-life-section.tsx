import Image from 'next/image';
import realLifeSectionImg from '@/../public/img/image-home-real-life-large.webp';

export function RealLifeSection() {
  return (
    <section
      className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12"
      aria-labelledby="real-life-section-heading"
    >
      <div className="space-y-5">
        <h2
          id="real-life-section-heading"
          className="text-preset-2 text-neutral-900"
        >
          Built for real life
        </h2>
        <p className="text-preset-6">
          Cooking shouldn&apos;t be complicated. These recipes come in under{' '}
          <strong className="real-life-section-highlight relative">
            30 minutes
          </strong>{' '}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="text-preset-6">
          Wheter you&apos;re new to the kitchen or just need fresh ideas,
          we&apos;ve got you covered.
        </p>
      </div>
      <div className="xl:min-w-[55%]">
        <Image
          src={realLifeSectionImg}
          alt=""
          sizes="(max-width: 1440px) 90vw, 40vw"
          className="rounded-[0.625rem]"
        />
      </div>
    </section>
  );
}
