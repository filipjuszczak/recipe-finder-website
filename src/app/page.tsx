import { HeroSection } from '@/app/_components/sections/hero-section';
import { BenefitsSection } from '@/app/_components/sections/benefits-section';
import { RealLifeSection } from '@/app/_components/sections/real-life-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Page() {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-31 pt-12 xl:pt-20 space-y-16 md:space-y-20 xl:space-y-24">
        <HeroSection />
        <BenefitsSection />
        <RealLifeSection />
        <CTASection />
      </div>
    </main>
  );
}
