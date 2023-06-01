export async function removePaintingfromCart(paintingId) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const paintingQuantitiesCookie = getCookie('paintingQuantities');
  // 2. we parse the cookie
  const paintingQuantities = !paintingQuantitiesCookie
  ? // case A: cookie is undefined
  // undefined
  // we need to create the new array with the fruitCommnet inside
    ? []
    : parseJson(paintingQuantitiesCookie);
// 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const quantityToUpdate = paintingQuantities?.filter(
    (paintingQuantity) => paintingQuantity.id !== paintingId,
  );

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  console.log(`Console.log from actions`, paintingQuantities);
  await cookies().set('cart', JSON.stringify(quantityToUpdate));
}
