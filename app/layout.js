import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next - Upleveled - Ecommerce project',
  description:
    'This is the descripton of the ecommerce project which eventually will show up in a search engine.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> <Link href="/about">About</Link>{' '}
          <Link href="/webshop">Webshop</Link>
        </nav>
        This is coming form the layout.js inside the app folder and this page is
        the "home" page (aka rootlayout).
        {children}
      </body>
    </html>
  );
}
