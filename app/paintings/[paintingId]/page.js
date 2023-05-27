import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPaintingsById } from '../../../database/paintings';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

export default function SinglePaintingsPage({ params }) {
  const singlePainting = getPaintingsById(Number(params.paintingId));

  // console.log(singlePainting);

  if (!singlePainting) {
    notFound();
  }

  return (
    <main>
      <div>
        <div className={styles.singlePaintingPage}>
          <h1>{`${singlePainting.name}`}</h1>
          <div className={styles.paintingFrame}>
            <Image
              src={`/images/${singlePainting.name}.png`}
              width={256}
              height={256}
              alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
            />
          </div>
          <br />
          This painting is named: {singlePainting.name}
          <br />
          artist: {singlePainting.artist}
          <br />
          year: {singlePainting.year}
          <br />
          Price in €: {singlePainting.price}
        </div>
      </div>
    </main>
  );
}
