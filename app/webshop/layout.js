import '../globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
