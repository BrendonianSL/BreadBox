import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'breadbox-database',
    password: 'postgres',
    port: '5432',
});

export default pool;