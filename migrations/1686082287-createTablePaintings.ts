import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE paintings (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      painting_name varchar(200) NOT NULL,
      artist_name varchar(50) NOT NULL,
      scenery_name varchar(100),
      year_of_creation integer NOT NULL,
      price_in_euros integer NOT NULL,
      slug_name varchar(50)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE paintings
  `;
}
