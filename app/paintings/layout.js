import '../globals.scss';
import { Inter } from 'next/font/google';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next - paintings',
  description:
    'This is the descripton of the ecommerce project which eventually will show up in a search engine.',
};

export default function PaintingsLayout({ children }) {
  return (
    <>
      <div className={styles.introText}>
        <h1>general discription of the gallery and paintings.</h1>
        <br />
        <br />
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          semper mi. Mauris rhoncus eu magna in iaculis. Integer dictum nunc id
          commodo maximus. Integer in tristique sem. Cras non leo non mi
          ultrices accumsan. Duis dignissim, mi vel venenatis efficitur, nunc
          massa placerat orci, quis suscipit purus turpis sed dui. Nam
          vestibulum lorem nec ultricies aliquet. Aliquam erat volutpat.
          {children}
        </section>
      </div>
    </>
  );
}
