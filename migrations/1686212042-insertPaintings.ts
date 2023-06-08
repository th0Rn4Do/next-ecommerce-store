import { Sql } from 'postgres';

export const paintings = [
  {
    id: 1,
    name: 'No. 1 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
    year: '2023',
    price: 1739,
    slug: 'No._1_-_2023',
  },
  {
    id: 2,
    name: 'No. 2 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
    year: '2023',
    price: 1739,
    slug: 'No._2_-_2023',
  },
  {
    id: 3,
    name: 'No. 3 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
    year: '2023',
    price: 1739,
    slug: 'No._3_-_2023',
  },
  {
    id: 4,
    name: 'No. 4 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
    year: '2023',
    price: 1739,
    slug: 'No._4_-_2023',
  },
  {
    id: 5,
    name: 'No. 5 - 2023',
    artist: '"Dall-e Veronese"',
    scenery: 'Brooklyn Bridge NY',
    year: '2023',
    price: 1739,
    slug: 'No._5_-_2023',
  },
];

export async function up(sql: Sql) {
  for (const painting of paintings) {
    await sql`
      INSERT INTO paintings
        (painting_name, artist_name, scenery_name, year_of_creation, price_in_euros, slug_name)
      VALUES
        (${painting.name}, ${painting.artist}, ${painting.scenery}, ${painting.year}, ${painting.price}, ${painting.slug})
    `;
  }
}

export async function down(sql: Sql) {
  for (const painting of paintings) {
    await sql`
      DELETE FROM paintings WHERE id = ${painting.id}

    `;
  }
}
