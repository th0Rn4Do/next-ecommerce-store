'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addToCart } from './actions';
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
            await addToCart(props.paintingId, amount);
          }}
        >
          Add to cart
        </button>
      </form>
    </>
  );
}
