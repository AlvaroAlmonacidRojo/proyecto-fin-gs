import { Pool } from 'pg';
import { log } from 'console';

export const pool = new Pool({
    user: 'proyecto_fin_gs_user',
    host: 'localhost',
    database: 'proyecto-fin-gs-db',
    password: 'Testtest1',
    port: 5432,
  })

export const stats = () => {
  const { totalCount, idleCount, waitingCount } = pool;
  return { totalCount, idleCount, waitingCount };
};

const logPoolEvent = (name: string, error?: Error) =>
  log(`db.pool.${name}`, {
    error,
    db: stats(),
  });

pool.on('error', (error: Error) => logPoolEvent('error', error));

if (process.env.PG_LOG_EVENTS === '1') {
  pool.on('connect', () => logPoolEvent('connect'));
  pool.on('acquire', () => logPoolEvent('acquire'));
  pool.on('remove', () => logPoolEvent('remove'));
}
