import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPaintingsById } from '../../../database/paintings';

export const dynamic = 'force-dynamic';

export default function SinglePaintingsPage({ params }) {
  const singlePainting = getPaintingsById(Number(params.paintingId));

  console.log(singlePainting);

  if (!singlePainting) {
    notFound();
  }

  return (
    <main>
      <h1>{singlePainting.name}</h1>
      <Image
        src={`/images/${singlePainting.name}.png`}
        width={256}
        height={256}
      />
      This painting is named {singlePainting.name} by {singlePainting.artist}.
    </main>
  );
}
