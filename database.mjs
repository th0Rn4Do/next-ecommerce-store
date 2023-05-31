import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  await sql`
    SELECT * FROM paintings;
  `,
);

// this line below is for used for testing only. It closes the database again and we can immediately continue typing in the terminal.
await sql.end();
