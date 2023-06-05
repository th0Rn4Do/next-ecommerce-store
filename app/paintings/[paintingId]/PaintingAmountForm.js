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

  return (
    <>
      <label>
        <input
          data-test-id="product-amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.currentTarget.value);
          }}
        />

        <button className={styles.button} onClick={deductAmount}>
          -
        </button>
        <button className={styles.button} onClick={addAmount}>
          +
        </button>
      </label>

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
