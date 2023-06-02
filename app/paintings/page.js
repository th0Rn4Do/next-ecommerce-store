/*
import Image from 'next/image';
import Link from 'next/link';
import { paintings } from '../../database/paintings';
import { paintings } from '../../database/paintings';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
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
/* changed painting.id to painting.slug, so that instead of "id" the "title" will be shown in the URL  */ /* } */
/*              <div className={styles.paintingFrame}>
                <Link
                  href={`/paintings/${painting.id}`}
                  data-test-id="product-<product id>"
                >
                  {painting.name} by {painting.artist}{' '}
                </Link>
                <br />
                <Image
                  src={`/images/${painting.name}.png`}
                  width={256}
                  height={256}
                  data-test-id="product-image"
                  alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

*/

import Image from 'next/image';
import Link from 'next/link';
import { paintings } from '../../database/paintings';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from '../paintings/layout.module.scss';

// export const dynamic = 'force-dynamic';

export default function PaintingsPage() {
  // This is what we want when using cookies
  const paintingAmountsCookie = getCookie('paintingAmounts');

  const paintingAmounts = !paintingAmountsCookie
    ? []
    : parseJson(paintingAmountsCookie);

  const paintingsWithAmounts = paintings.map((painting) => {
    const matchingPaintingFromCookie = paintingAmounts.find(
      (paintingObject) => painting.id === paintingObject.id,
    );

    return { ...painting, amount: matchingPaintingFromCookie?.amount };
  });

  return (
    <>
      <main>
        <div className={styles.paintingsArrangement}>
          currently available paintings:
          {paintingsWithAmounts.map((painting) => (
            <div key={`painting-div-${painting.id}`}>
              <Link href={`/paintings/${painting.id}`}></Link>
              <br />
              <div className={styles.paintingFrame}>
                <Link
                  href={`/paintings/${painting.id}`}
                  data-test-id="product-<product id>"
                >
                  {painting.name} by {painting.artist}{' '}
                </Link>
                <Image
                  src={`/images/${painting.name}.png`}
                  width={256}
                  height={256}
                  data-test-id="product-image"
                  alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
                />
              </div>
              {painting.amount}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
