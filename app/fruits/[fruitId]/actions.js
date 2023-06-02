'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(fruitPaintingIdId, comAmountment) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const fruitPaintingAmountsCookieCommentsCookie = getCookie(
    'fruitpaintingAmountsComments',
  );
  // 2. we parse the cookie
  const fruitpaintingAmountsComments = !fruitPaintingAmountsCookieCommentsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(fruitPaintingAmountsCookieCommentsCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const fruitPaintingToUpdateToUpdate = fruitpaintingAmountsComments.find(
    (fruitPaintingAmountComment) => {
      return fruitPaintingAmountComment.id === fruitPaintingIdId;
    },
  );

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comAmountment:"abc"}]
  if (fruitPaintingToUpdateToUpdate) {
    // we need to update the fruitPaintingAmountComment
    fruitPaintingToUpdateToUpdate.comAmountment += comAmountment;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comAmountment:"abc"}]
    fruitpaintingAmountsComments.push({
      // we need insert the fruitCommnet
      id: fruitPaintingIdId,
      comAmountment,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set(
    'fruitpaintingAmountsComments',
    JSON.stringify(fruitpaintingAmountsComments),
  );
}
