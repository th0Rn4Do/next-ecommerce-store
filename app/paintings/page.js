import Image from 'next/image';
import Link from 'next/link';
import { paintings } from '../../database/paintings';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Paintings page',
  description: 'Available paintings',
};

export default function PaintingsPage() {
  return (
    <main>
      <div className={styles.paintingsArrangement}>
        currently available paintings:
        {paintings.map((painting) => {
          return (
            <div key={`painting-div-${painting.id}`}>
              {/* <Link href={`/paintings/${painting.id}`}> */
              /* changed painting.id to painting.slug, so that instead of "id" the "title" will be shown in the URL  */}
              <div className={styles.paintingFrame}>
                <Link href={`/paintings/${painting.id}`}>
                  {painting.name} by {painting.artist}{' '}
                </Link>
                <br />
                <Image
                  src={`/images/${painting.name}.png`}
                  width={256}
                  height={256}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
