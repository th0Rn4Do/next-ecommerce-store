/* 'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const allPaintingQuantitiesCookie = getCookie('thePaintingQuantities');

  // 2. we parse the cookie
  const allPaintingQuantities = !allPaintingQuantitiesCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(allPaintingQuantitiesCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const oldSinglePaintingToUpdate = allPaintingQuantities?.find((paintingQuantity) => {
    return paintingQuantity.id === oldPaintingId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, quantity:"abc"}]
  if (oldSinglePaintingToUpdate) {
    // we need to update the singlePaintingQuantity
    oldSinglePaintingToUpdate.quantity += quantity;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, quantity:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!
    allPaintingQuantities.push({
      // we need insert the fruitCommnet
      id: oldPaintingId,
      quantity,
    });
  }
  console.log(allPaintingQuantities);
  console.log(oldSinglePaintingToUpdate);
  console.log(oldPaintingId);
  console.log(quantity);
  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set(
    'thePaintingQuantities',
    JSON.stringify([{ id: oldPaintingId, quantity: quantity }]),
  );
}

export async function removePaintingfromCart(oldPaintingId) {
  const allPaintingQuantitiesCookie = getCookie('thePaintingQuantities');

  const allPaintingQuantities = !allPaintingQuantitiesCookie
    ? []
    : parseJson(allPaintingQuantitiesCookie);

  const updatedQuantities = allPaintingQuantities.filter(
    (painting) => painting.id !== oldPaintingId,
  );
  console.log(`Console.log from actions`, allPaintingQuantities);
  await cookies().set(
    'thePaintingQuantities',
    JSON.stringify(updatedQuantities),
  );
}
*/

/*
'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(oldPaintingId, quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const allPaintingQuantitiesCookie = getCookie('allPaintingQuantities');
  // 2. we parse the cookie
  const allPaintingQuantities = !allPaintingQuantitiesCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(allPaintingQuantitiesCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const oldSinglePaintingToUpdate = allPaintingQuantities?.find(
    (singlePaintingQuantity) => {
      return singlePaintingQuantity.id === oldPaintingId;
    },
  );

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, quantity:"abc"}]
  if (oldSinglePaintingToUpdate) {
    // we need to update the singlePaintingQuantity
    oldSinglePaintingToUpdate.quantity += quantity;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, quantity:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!

    /* removed ! from allPaintingQuantities!.push */

/*  allPaintingQuantities.push({
      // we need insert the fruitCommnet
      id: JSON.stringify(oldPaintingId),
      quantity,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set(
    'allPaintingQuantities',
    JSON.stringify(allPaintingQuantities),
  );
}

*/

'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateAmount(paintingIdent, amount) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const paintingAmountsCookie = getCookie('paintingAmounts');
  // 2. we parse the cookie
  const paintingAmounts = !paintingAmountsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(paintingAmountsCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const paintingToUpdate = paintingAmounts.find((paintingAmount) => {
    return paintingAmount.id === paintingIdent;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, amount:"abc"}]
  if (paintingToUpdate) {
    // we need to update the paintingAmount
    paintingToUpdate.amount += amount;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, amount:"abc"}]
    paintingAmounts.push({
      // we need insert the fruitCommnet
      id: paintingIdent,
      amount,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('paintingAmounts', JSON.stringify(paintingAmounts));
}
