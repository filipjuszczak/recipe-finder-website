import { Nunito, Nunito_Sans } from 'next/font/google';

export const NunitoFont = Nunito({
  display: 'swap',
  subsets: ['latin'],
  weight: ['800', '700', '600'],
  variable: '--font-nunito'
});

export const Nunito_SansFont = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['700', '500'],
  variable: '--font-nunito-sans'
});
