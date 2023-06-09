'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addToCart(productId, quantity) {
  console.log(productId, quantity);

  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);


  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });


  if (productToUpdate) {

    productToUpdate.quantity =
      Number(productToUpdate.quantity) + Number(quantity);
  } else {

    productQuantities.push({
      id: productId,
      quantity: Number(quantity),
    });
  }


  await cookies().set('cart', JSON.stringify(productQuantities));
}
