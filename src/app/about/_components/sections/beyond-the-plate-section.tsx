import Image from 'next/image';
import beyondThePlateSectionImage from '@/../public/img/image-about-beyond-the-plate-large.webp';

export function BeyondThePlateSection() {
  return (
    <section
      className="flex flex-col items-center xl:flex-row gap-8 xl:gap-16 text-preset-6"
      aria-labelledby="beyond-the-plate-section-heading"
    >
      <div className="min-w-1/3">
        <h2
          id="beyond-the-plate-section-heading"
          className="text-preset-2 text-neutral-900 mb-5"
        >
          Beyond the plate
        </h2>
        <p className="mb-3">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>
        <ul className="list-disc ml-8">
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ul>
      </div>
      <div>
        <Image
          src={beyondThePlateSectionImage}
          alt=""
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="rounded-[0.625rem] md:rounded-[1.25rem] md:min-h-100 object-cover"
        />
      </div>
    </section>
  );
}
