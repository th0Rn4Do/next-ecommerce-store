import Link from 'next/link';
import { getPaintingsSql } from '../../../database/paintings';
// import { paintings } from '../../database/paintings';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import CheckOutForm from './CheckOutForm';

export const dynamic = 'force-dynamic';

/*
const paintings = await getPaintingsSql();
const paintingAmountCookie = getCookie('cart');
const paintingAmounts = !paintingAmountCookie
  ? []
  : parseJson(paintingAmountCookie);
*/

export default function CheckOutPage() {
  return (
    <main>
      Check out
      <div>
        <CheckOutForm />
      </div>
      <Link href="cart/checkout/thankyou" data-test-id="products-link">
        Commit to Buy
      </Link>
    </main>
  );
}
