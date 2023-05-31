import postgres from 'postgres';

const sql = postgres(
  'postgres://next_ecommerce_store:next_ecommerce_store@localhost:5432/database',
);

console.log(
  await sql`
    SELECT * FROM paintings;
  `,
);
