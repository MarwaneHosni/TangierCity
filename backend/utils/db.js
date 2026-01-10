import pg from 'pg';
import env from 'dotenv';

env.config();

const requiredEnvVars = [
  'PG_USER',
  'PG_PASSWORD',
  'PG_HOST',
  'PG_PORT',
  'PG_DATABASE',
];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Environment variable ${varName} is required but not set.`);
    process.exit(1);
  }
});

const db = new pg.Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
});

db.connect()
  .then(() => console.log('Connected to PostgreSQL database successfully.'))
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL database:', err);
    process.exit(1);
  });

db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
