import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getFruitById } from '../../../database/fruits';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import FruitCommentForm from './FruitCommentForm';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

/* type Props = {
  params: { fruitId: number };
};

type Cookie = {
  id: number;
  quantity?: number;
};

*/

export default function FruitPaintingsPagePage(props /* : Props */) {
  /* const frPaintinguit = getFruitById(Number(props.params.fruitId)); */
  const frPaintinguit = getFruitById(Number(props.params.fruitId));

  if (!frPaintinguit) {
    notFound();
  }

  const fruitCommentsCookie = getCookie('fruitpaintingAmountsComments');
  const fruitComments /* : Cookie[] */ = !fruitCommentsCookie
    ? []
    : parseJson(fruitCommentsCookie);

  const fruitToUpdate = fruitComments.find((fruitComment) => {
    return fruitComment.id === frPaintinguit.id;
  });

  return (
    <>
      <main>
        <div>
          <div className={styles.singlePaintingPage}>
            <h1>{`${frPaintinguit.name}`}</h1>
            <div className={styles.paintingFrame}>
              {fruitToUpdate?.quantity}
              <Image
                src={`/images/${frPaintinguit.name}.png`}
                width={256}
                height={256}
                data-test-id="product-image"
                alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
              />
            </div>
            <br />
            This painting is named: {frPaintinguit.name}
            <br />
            artist: {frPaintinguit.artist}
            <br />
            year: {frPaintinguit.year}
            <br />
            <div data-test-id="product-price">
              Price in €: {frPaintinguit.price}
            </div>
            <div>
              <FruitCommentForm fruitId={frPaintinguit.id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
