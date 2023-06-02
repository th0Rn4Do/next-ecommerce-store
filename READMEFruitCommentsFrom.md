'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';
import styles from './FruitCommentForm';

// {id: number, comment: string}[]]

export default function FruitCommentForm(props) {
const [quaAmountntity, setQuaAmountntity] = useState(1);
const router = useRouter();

function addAddAmountQuantity() {
setQuaAmountntity(quaAmountntity + 1);
}

function deductDeductAmountQuantity() {
if (quaAmountntity < 1) {
return;
}
setQuaAmountntity(quaAmountntity - 1);
}

// function handleChange(event: ChangeEvent<HTMLInputElement>) {
// setQuaAmountntity(JSON.parse(event.currentTarget.value));
// }

return (
// WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
// when using Server Actions we don't need prevent the default of the form
<>
<label>
<input
data-test-id="product-quaAmountntity"
value={quaAmountntity}
onChange={(event) => {
setQuaAmountntity(event.currentTarget.value);
}}
/>
{/_ Instead of using onClick we use formAction _/}
<button onClick={deductDeductAmountQuantity}>-</button>
<button onClick={addAddAmountQuantity}>+</button>
</label>
{/_ Instead of using onClick we use formAction _/}
<br />
<form>
<button
formAction={async () => {
router.refresh();
await createOrUpdateComment(props.fruitId, quaAmountntity);
}} >
Add to cart
</button>
</form>
</>
);
}
