'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(paintingId, quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const paintingQuantitiesCookie = getCookie('thePaintingQuantities');

  // 2. we parse the cookie
  const paintingQuantities = !paintingQuantitiesCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(paintingQuantitiesCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const paintingToUpdate = paintingQuantities?.find((paintingQuantity) => {
    return paintingQuantity.id === paintingId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (paintingToUpdate) {
    // we need to update the fruitComment
    paintingToUpdate.quantity += quantity;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!
    paintingQuantities.push({
      // we need insert the fruitCommnet
      id: paintingId,
      quantity,
    });
  }
  console.log(paintingQuantities);
  console.log(paintingToUpdate);
  console.log(paintingId);
  console.log(quantity);
  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set(
    'thePaintingQuantities',
    JSON.stringify([{ paintingQuantities, paintingId, quantity }]),
  );
}

export async function removePaintingfromCart(paintingId) {
  const paintingQuantitiesCookie = getCookie('thePaintingQuantities');

  const paintingQuantities = !paintingQuantitiesCookie
    ? []
    : parseJson(paintingQuantitiesCookie);

  const updatedQuantities = paintingQuantities.filter(
    (painting) => painting.id !== paintingId,
  );
  console.log(`Console.log from actions`, paintingQuantities);
  await cookies().set(
    'thePaintingQuantities',
    JSON.stringify(updatedQuantities),
  );
}
