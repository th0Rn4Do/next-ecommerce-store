'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(paintingId, quantity) {
  const paintingQuantitiesCookie = getCookie('cart');

  const paintingQuantities = !paintingQuantitiesCookie
    ? []
    : parseJson(paintingQuantitiesCookie);

  const paintingToUpdate = paintingQuantities.find((paintingQuantity) => {
    return paintingQuantity.id === paintingId;
  });

  if (paintingToUpdate) {
    paintingToUpdate.quantity = quantity;
  } else {
    paintingQuantities.push({
      id: paintingId,
      quantity,
    });
  }
  await cookies().set('cart', JSON.stringify(paintingQuantities));
}

export async function removePaintingfromCart(paintingId) {
  const paintingQuantitiesCookie = getCookie('cart');

  const paintingQuantities = !paintingQuantitiesCookie
    ? []
    : parseJson(paintingQuantitiesCookie);

  const updatedQuantities = paintingQuantities.filter(
    (painting) => painting.id !== paintingId,
  );

  await cookies().set('cart', JSON.stringify(updatedQuantities));
}
