import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import heroSectionImg from '@/../public/img/image-home-hero-large.webp';

export function HeroSection() {
  return (
    <section aria-labelledby="hero-section-heading">
      <div className="flex flex-col items-start xl:items-center xl:text-center mb-10 xl:mb-20">
        <h1
          id="hero-section-heading"
          className="text-preset-1 text-neutral-900 mb-4"
        >
          <span className="main-heading-highlight relative">Healthy</span>{' '}
          meals, zero fuss
        </h1>
        <p className="text-preset-6 mb-8 xl:max-w-1/2">
          Discover eight quick, whole-food recipes that you can cook
          tonight&mdash;no processed junk, no guesswork.
        </p>
        <Button asChild className="px-8 py-4 rounded-[0.625rem]">
          <Link href="/recipes" prefetch={false} className="text-neutral-0">
            Start exploring
          </Link>
        </Button>
      </div>
      <div>
        <Image
          src={heroSectionImg}
          alt="A young woman preparing fresh vegetables in a bright, modern kitchen"
          preload={true}
          sizes="(max-width: 1024px) 90vw, 80vw"
          className="min-h-50 md:min-h-87.5 object-cover rounded-lg shadow-[0_0_0_4px_#ffffff] md:shadow-[0_0_0_7px_#ffffff] xl:shadow-[0_0_0_12px_#ffffff]"
        />
      </div>
    </section>
  );
}
