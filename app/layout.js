import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from './CookieBanner';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Next - Upleveled - Ecommerce project',
    template: '%S | NEXT',
  },
  description:
    'This is the descripton of the ecommerce project which eventually will show up in a search engine.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navigator}>
          <div className={styles.hyperlinks}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.hyperlinks}>
            <Link href="/about">about</Link>
          </div>
          <div className={styles.hyperlinks}>
            <Link href="/paintings" data-test-id="products-link">
              paintings
            </Link>
          </div>
          <div className={styles.hyperlinks}>
            <Link href="/cart">cart</Link>
          </div>
        </nav>
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
