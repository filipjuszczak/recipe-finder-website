import Image from 'next/image';
import ourMissionSection from '@/../public/img/image-about-our-mission-large.webp';

export function OurMissionSection() {
  return (
    <section
      className="flex flex-col xl:flex-row gap-10 xl:gap-16"
      aria-labelledby="our-mission-section-heading"
    >
      <div className="space-y-6">
        <span className="text-preset-5 text-neutral-900 inline-block px-1.5 py-0.5 bg-orange-500 rounded-md">
          Our mission
        </span>
        <h1
          id="our-mission-section-heading"
          className="text-preset-2 text-neutral-900"
        >
          Help more people cook nourishing meals, more often.
        </h1>
        <div className="space-y-4 text-preset-6">
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master&mdash;no
            fancy equipment, no ultra-processed shortcuts&mdash;just honest
            ingredeints and straightforward steps.
          </p>
        </div>
      </div>
      <div className="relative xl:min-w-[53%] after:hidden xl:after:block after:content-[url(../../public/img/pattern-squiggle-2.svg)] after:absolute after:bottom-1/5 after:-right-1/7">
        <Image
          src={ourMissionSection}
          alt=""
          preload={true}
          sizes="(max-width: 1024px): 90vw, 40vw"
          className="rounded-[0.625rem]"
        />
      </div>
    </section>
  );
}
