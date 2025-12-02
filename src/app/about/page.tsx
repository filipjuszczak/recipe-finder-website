import type { Metadata } from 'next';
import { OurMissionSection } from './_components/sections/our-mission-section';
import { WhyWeExistSection } from './_components/sections/why-we-exist-section';
import { OurFoodPhilosophySection } from './_components/sections/our-food-philosophy-section';
import { BeyondThePlateSection } from './_components/sections/beyond-the-plate-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'About Us'
};

export default function Page() {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-31 pt-12 md:pt-16 xl:pt-20 pb-16 md:pb-20 xl:pb-24">
        <OurMissionSection />
      </div>
      <SectionDivider />
      <div className="px-4 md:px-8 xl:px-31 py-12 md:py-20 xl:py-24">
        <WhyWeExistSection />
      </div>
      <SectionDivider />
      <div className="px-4 md:px-8 xl:px-31 py-12 md:py-20 xl:py-24">
        <OurFoodPhilosophySection />
      </div>
      <SectionDivider />
      <div className="px-4 md:px-8 xl:px-31 pt-12 md:pt-20 xl:pt-24 space-y-20">
        <BeyondThePlateSection />
        <CTASection />
      </div>
    </main>
  );
}

function SectionDivider() {
  return <div className="h-px bg-neutral-300"></div>;
}
