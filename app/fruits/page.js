import Image from 'next/image';
import Link from 'next/link';
import { fruits } from '../../database/fruits';
import { paintings } from '../../database/paintings';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from '../paintings/layout.module.scss';

export default function FruitsPage() {
  // This is what we want when using cookies
  const fruitCommentsCookie = getCookie('fruitComments');

  const fruitComments = !fruitCommentsCookie
    ? []
    : parseJson(fruitCommentsCookie);

  const fruitsWithComments = fruits.map((fruit) => {
    const matchingFruitFromCookie = fruitComments.find(
      (fruitObject) => fruit.id === fruitObject.id,
    );

    return { ...fruit, comment: matchingFruitFromCookie?.comment };
  });

  return (
    <>
      <main>
        <div className={styles.paintingsArrangement}>
          currently available paintings:
          {fruitsWithComments.map((fruit) => (
            <div key={`fruit-div-${fruit.id}`}>
              <Link href={`/fruits/${fruit.id}`}></Link>
              <br />
              <div className={styles.paintingFrame}>
                <Link
                  href={`/fruits/${fruit.id}`}
                  data-test-id="product-<product id>"
                >
                  {fruit.name} by {fruit.artist}{' '}
                </Link>
                <Image
                  src={`/images/${fruit.name}.png`}
                  width={256}
                  height={256}
                  data-test-id="product-image"
                  alt='Remake of the Wedding at Cana - by "Dall-e Veronese" - scenery: Brooklyn Bridge'
                />
              </div>
              {fruit.comment}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
