'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import style from './PaintingQuantityForm.module.scss';

// {id: number, quantity: string}[]]

export default function PaintingQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function deductQuantity() {
    if (quantity < 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  // Use this when changing to typescript
  /* function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setComment(event.currentTarget.value);
  */

  return (
    <>
      {/* WARNING: in order to use Server Action you need to update the next.js config with serverActions: true, */}
      {/* when using Server Actions we don't need prevent the default of the form */}
      {/*   <form>
      <textarea
        className={style.textArea}
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />  */}
      {/* Instead of using onClick we use formAction */}
      {/*     <br />
      <button
        className={style.button}
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.paintingId, quantity);
        }}
      >
        Change Quantity
      </button>
    </form>
      */}

      <label>
        <input
          data-test-id="product-quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
        />
        <button className={style.button} onClick={deductQuantity}>
          -
        </button>
        <button className={style.button} onClick={addQuantity}>
          +
        </button>
      </label>

      <form>
        <button
          data-test-id="product-add-to-cart"
          formAction={async () => {
            router.refresh();
            await createOrUpdateQuantity(props.productId, quantity);

            /* This console.log shows me what I want
            console.log(`Console.log from PaintingQuantityF..`, props);
            */
          }}
        >
          Add to cart
        </button>
      </form>
    </>
  );
}
