import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import instagramIcon from '@/../public/img/icon-instagram.svg';
import blueSkyIcon from '@/../public/img/icon-bluesky.svg';
import tiktokIcon from '@/../public/img/icon-tiktok.svg';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row-reverse md:justify-between gap-6 px-4 md:px-8 xl:px-31 pt-8 pb-5 md:py-10">
      <FooterSocialMediaLinks />
      <p className="text-preset-9 text-neutral-900 text-center">
        Made with ❤️ and 🥑
      </p>
    </footer>
  );
}

type SocialMediaLink = {
  platform: string;
  icon: StaticImport;
  href: string;
};

function FooterSocialMediaLinks() {
  const links: SocialMediaLink[] = [
    {
      platform: 'Instagram',
      icon: instagramIcon,
      href: 'https://instagram.com'
    },
    {
      platform: 'Bluesky',
      icon: blueSkyIcon,
      href: 'https://bsky.app'
    },
    {
      platform: 'TikTok',
      icon: tiktokIcon,
      href: 'https://tiktok.com'
    }
  ];

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <FooterSocialMediaLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterSocialMediaLink({ platform, icon, href }: SocialMediaLink) {
  return (
    <Link
      href={href}
      className="transition-opacity hover:opacity-70 focus-visible:outline-neutral-900 focus-visible:outline-offset-2"
      aria-label={`Link to our ${platform} profile`}
    >
      <Image src={icon} alt="" />
    </Link>
  );
}
