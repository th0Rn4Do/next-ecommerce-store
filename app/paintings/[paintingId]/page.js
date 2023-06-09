import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPaintingByIdSql } from '../../../database/paintings';
// import { getPaintingById } from '../../../database/paintings';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import styles from './layout.module.scss';
import PaintingAmountForm from './PaintingAmountForm';

/*
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPaintingsById } from '../../../database/paintings';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import styles from './layout.module.scss';
import PaintingQuantityForm from './PaintingQuantityForm';

// getCookie;
// parseJson;

export const dynamic = 'force-dynamic';

// export default function SinglePaintingsPage({ params }) {
//  const singlePainting = getPaintingsById(Number(params.oldPaintingId));

export default function SinglePaintingsPage({ params }) {
  const singlePainting = getPaintingsById(Number(params.oldPaintingId));

  // console.log(singlePainting);

  if (!singlePainting) {
    notFound();
  }

  const allPaintingQuantitiesCookie = getCookie('allPaintingQuantities');
  const allPaintingQuantities = !allPaintingQuantitiesCookie
    ? []
    : parseJson(allPaintingQuantitiesCookie);

  const singlePaintingToUpdate = allPaintingQuantities?.find(
    (singlePaintingQuantity) => {
      return singlePaintingQuantity.id === singlePainting.id;
    },
  );

  /* if (singlePaintingToUpdate) {

    singlePaintingToUpdate.quantity = quantity;
  } else {

    allPaintingQuantities.push({

      id: oldPaintingId,
      quantity,
    });
  }
  await cookies().set(
    'allPaintingQuantities',
    JSON.stringify(allPaintingQuantities),
  );
}

*/
/*
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
              data-test-id="product-image"
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
          <div data-test-id="product-price">
            Price in €: {singlePainting.price}
          </div>
          <div>
            <PaintingQuantityForm oldPaintingId={singlePainting.id} />
          </div>
        </div>
      </div>
    </main>
  );
}

*/

export const dynamic = 'force-dynamic';

/* type Props = {
  params: { paintingId: number };
};

type Cookie = {
  id: number;
  quantity?: number;
};

*/

export default async function PaintingsPage(props /* : Props */) {
  //  const paintingsSql = await getPaintingsSql();
  const singlePainting = await getPaintingByIdSql(
    Number(props.params.paintingId),
  );
  console.log('single: ', singlePainting);

  /* const frPaintinguit5645 = getFruitById(Number(props.params.paintingId)); */
  // const singlePainting = getPaintingById(Number(props.params.paintingId));

  if (!singlePainting) {
    notFound();
  }

  const paintingAmountCookie = getCookie('cart');
  const paintingAmounts /* : Cookie[] */ = !paintingAmountCookie
    ? []
    : parseJson(paintingAmountCookie);

  const paintingToUpdate = paintingAmounts.find((paintingAmount) => {
    return paintingAmount.id === singlePainting.id;
  });

  return (
    <>
      <main>
        <div>
          <div className={styles.singlePaintingPage}>
            <h1>{`${singlePainting.paintingName}`}</h1>
            <div className={styles.paintingFrame}>
              {/* {paintingToUpdate?.quantity} */}
              <Image
                src={`/images/${singlePainting.paintingName}.png`}
                width={256}
                height={256}
                data-test-id="product-image"
                alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
              />
            </div>
            <br />
            This painting is named: {singlePainting.paintingName}
            <br />
            artist: {singlePainting.artistName}
            <br />
            year: {singlePainting.yearOfCreation}
            <br />
            <div data-test-id="product-price">
              Price in €: {singlePainting.priceInEuros}
            </div>
            <div>
              <PaintingAmountForm paintingId={singlePainting.id} />
            </div>
            <div>
              Number of copies of this item in your cart:{' '}
              {paintingToUpdate?.quantity}{' '}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
