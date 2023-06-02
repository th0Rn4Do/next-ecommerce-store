/*
'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import styles from './PaintingQuantityForm.module.scss';

type Props = {
  fruitId: number;
};

export default function PaintingQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [quantity, setQuantity] = useState<1defined | string>();
  // const router = useRouter();

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function deductQuantity() {
    if (quantity < 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(JSON.parse(event.currentTarget.value));
  }

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form
    <>
      <label>
        <input
          data-test-id="product-quantity"
          value={quantity}
          onChange={handleChange}
        />
        {/* Instead of using onClick we use formAction */ /* } */
/*        <button className={styles.button} onClick={deductQuantity}>
          -
        </button>
        <button className={styles.button} onClick={addQuantity}>
          +
        </button>
      </label>
      <form>
        <button
          data-test-id="product-add-to-cart"
          formAction={async () => {
            router.refresh();
            await createOrUpdateQuantity(props.fruitId, quantity);

            /* This console.log shows me what I want
            console.log(`Console.log from PaintingQuantityF..`, props);
            */
/*          }}
        >
          Add to cart
        </button>
      </form>
    </>
  );
}

*/

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateAmount } from './actions';
import styles from './PaintingAmountForm.module.scss';

// {id: number, comment: string}[]]

export default function PaintingAmountForm(props) {
  const [amount, setAmount] = useState(1);
  const router = useRouter();

  function addAmount() {
    setAmount(amount + 1);
  }

  function deductAmount() {
    if (amount < 1) {
      return;
    }
    setAmount(amount - 1);
  }

  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   setAmount(JSON.parse(event.currentTarget.value));
  // }

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form
    <>
      <label>
        <input
          data-test-id="product-amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.currentTarget.value);
          }}
        />
        {/* Instead of using onClick we use formAction */}
        <button className={styles.button} onClick={deductAmount}>
          -
        </button>
        <button className={styles.button} onClick={addAmount}>
          +
        </button>
      </label>
      {/* Instead of using onClick we use formAction */}
      <br />
      <form>
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateAmount(props.fruitId, amount);
          }}
        >
          Add to cart
        </button>
      </form>
    </>
  );
}
