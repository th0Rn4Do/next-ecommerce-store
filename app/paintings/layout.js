import '../globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next - Webshop',
  description:
    'This is the descripton of the ecommerce project which eventually will show up in a search engine.',
};

export default function WebshopLayout({ children }) {
  return (
    <>
      This is coming form the layout.js inside webshop folder and this page is
      the webshop page.
      {children}
    </>
  );
}
