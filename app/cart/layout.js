import '../globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next - Cart',
  description:
    'This is the descripton of the ecommerce project which eventually will show up in a search engine.',
};

export default function CartLayout({ children }) {
  return (
    <>
      This is coming form the layout.js inside about folder and this page is the
      cart page.
      {children}
    </>
  );
}