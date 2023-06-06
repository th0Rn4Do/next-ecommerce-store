import { cache } from 'react';
import { sql } from './connect';

// export const paintings = [
//   {
//     id: 1,
//     name: 'No. 1 - 2023',
//     artist: '"Dall-e Veronese"',
//     scenery: 'Brooklyn Bridge NY',
//     year: '2023',
//     price: 1739,
//     slug: 'No._1_-_2023',
//   },
//  {
//    id: 2,
//    name: 'No. 2 - 2023',
//    artist: '"Dall-e Veronese"',
//    scenery: 'Brooklyn Bridge NY',
//    year: '2023',
//    price: 1739,
//    slug: 'No._2_-_2023',
//  },
//  {
//    id: 3,
//    name: 'No. 3 - 2023',
//    artist: '"Dall-e Veronese"',
//    scenery: 'Brooklyn Bridge NY',
//    year: '2023',
//    price: 1739,
//    slug: 'No._3_-_2023',
//  },
//   {
//     id: 4,
//     name: 'No. 4 - 2023',
//     artist: '"Dall-e Veronese"',
//     scenery: 'Brooklyn Bridge NY',
//     year: '2023',
//     price: 1739,
//     slug: 'No._4_-_2023',
//   },
//   {
//     id: 5,
//     name: 'No. 5 - 2023',
//     artist: '"Dall-e Veronese"',
//     scenery: 'Brooklyn Bridge NY',
//     year: '2023',
//     price: 1739,
//     slug: 'No._5_-_2023',
//   },
// ];

// export function getPaintingById(id: number) {
//   return paintings.find((painting) => painting.id === id);
// }

type Painting = {
  id: number;
  name: string;
  artist: string;
  scenery: string | null;
  year: string;
  price: number;
  slug: string | null;
};

// export const getPaintingsSql = cache(async () => {
//   // const paintingsSql = await sql<Painting[]>`
//   const paintingsSql = await sql<Painting[]>`
//     SELECT * FROM paintings;
//   `;
//   // return paintingsSql;
//   return paintingsSql;
// });

export const getPaintingsSql = cache(async () => {
  // const paintingsSql = await sql<Painting[]>`
  const paintings = await sql<Painting[]>`
    SELECT * FROM paintings;
  `;
  // return paintingsSql;
  return paintings;
});

export const getPaintingByIdSql = cache(async (id: number) => {
  // const onePaintingSql = await sql<Painting[]>`
  const paintings = await sql<Painting[]>`
    SELECT
     *
    FROM
     paintings
    WHERE
      id = ${id}
  `;
  // return paintingsSql;
  return paintings[0];
});
