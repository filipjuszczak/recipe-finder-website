import type { Metadata } from 'next';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { NunitoFont, Nunito_SansFont } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Healthy Recipe Finder',
    default: 'Healthy Recipe Finder'
  },
  description:
    'Healthy meals, zero fuss. Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${NunitoFont.variable} ${Nunito_SansFont.variable}`}
    >
      <body className="antialiased">
        <div className="max-w-360 mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
