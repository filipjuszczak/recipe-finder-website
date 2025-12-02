import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section
      className="cta-section px-4 md:px-0 py-12 md:py-20 xl:py-24 bg-neutral-200 rounded-2xl"
      aria-labelledby="cta-section-heading"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2
          id="cta-section-heading"
          className="text-preset-2 text-neutral-900 mb-3"
        >
          Ready to cook smarter?
        </h2>
        <p className="text-preset-6 mb-8 md:mb-10">
          Hit the button, pick a recipe, and get dinner on the table&mdash;fast.
        </p>
        <Button
          asChild
          className="px-6 py-4 rounded-[0.625rem] transition-colors"
        >
          <Link href="/recipes" prefetch={false} className="text-neutral-0">
            Browse recipes
          </Link>
        </Button>
      </div>
    </section>
  );
}
