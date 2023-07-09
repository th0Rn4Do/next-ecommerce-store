import Image from 'next/image';
import Link from 'next/link';
import { getPaintingsSql } from '../../database/paintings';
// import { paintings } from '../../database/paintings';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export default async function CartPage() {
  const paintings = await getPaintingsSql();
  console.log('paintings: ', paintings);
  //   --- ich hol hier die cookies ---
  const paintingAmountCookie = getCookie('cart');
  const paintingAmounts = !paintingAmountCookie
    ? []
    : parseJson(paintingAmountCookie);
  // ---- ich schau welche produkte im cookie sind ---
  const paintingsWithCookies = paintings.map((painting) => {
    const matchingPaintingFromCookie = paintingAmounts.find(
      (paintingObject) => painting.id === paintingObject.id,
    );
    return { ...painting, quantity: matchingPaintingFromCookie?.quantity };
  });

  //   --- ich erstelle ein neues Array mit allen Produkten die eine quantity haben ---
  const productsInCart = paintingsWithCookies.filter((item) => item.quantity);

  //   --- ich berechne den gesamtpreis mit reduce, 0 ist initialValue---
  const totalPrice = productsInCart.reduce(
    (accumulator, item) => accumulator + item.priceInEuros * item.quantity,
    0,
  );

  return (
    <main>
      <div className={styles.itemsincartdiv}>
        <h1>Your cart</h1>
        <br />
        <br />
        <div>
          {productsInCart.map((product) => {
            return (
              <div key={product.id}>
                <section className={styles.itemframe}>
                  <div>
                    <h2>{product.paintingName}</h2>
                    <Image
                      src={`/images/${product.paintingName}.png`}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.priceandquantitydiv}>
                    <p>Price: {product.priceInEuros}$</p>
                    <br />
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
        <h2>Total Price: {totalPrice}$</h2>
        <div className={styles.shoppingcartbuttonsorientation}>
        <div className={styles.shoppingcartbuttons}>
          <Link href="/paintings" data-test-id="products-link">
            Shop more
          </Link>
        </div>
        <div className={styles.shoppingcartbuttons}>
          <Link href="cart/checkout" data-test-id="products-link">
            Checkout
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}
