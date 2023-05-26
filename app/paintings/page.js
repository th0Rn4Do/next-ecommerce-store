import Image from 'next/image';
import Link from 'next/link';
import { paintings } from '../../database/paintings';

export const metadata = {
  title: 'Paintings page',
  description: 'Available paintings',
};

export default function PaintingsPage() {
  return (
    <main>
      paintings
      {paintings.map((painting) => {
        return (
          <div key={`painting-div-${painting.id}`}>
            <Link href={`/paintings/${painting.id}`}>
              {painting.name} by {painting.artist}{' '}
            </Link>
            <br />
            <Image
              src={`/images/${painting.name}.png`}
              width={256}
              height={256}
            />
          </div>
        );
      })}
    </main>
  );
}
