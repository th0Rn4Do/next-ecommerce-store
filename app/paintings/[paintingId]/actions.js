import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(paintingId, quantity) {
  const paintingQuantityCookie = getCookie('cart');

  const paintingQuantities = !paintingQuantityCookie
    ? []
    : parseJson(paintingQuantityCookie);

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
