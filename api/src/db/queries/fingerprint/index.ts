
import { pool } from '../pool';
import { Fingerprint } from '../../../../../types/build/fingerprint';

const findFingerprintQueryByUserIdAndDate = (userId: string, date: string) => ({
  name: `get-fingerprint-${date}`,
  text: `SELECT 
            newest.user_id, 
            newest.created_at as last_fingerprint, 
            oldest.created_at as first_fingerprint, 
            newest.telework 
        FROM 
            (SELECT 
                user_id, 
                created_at, 
                telework 
            FROM 
                fingerprint 
            WHERE 
                created_at::text like '${date}%' AND 
                user_id = '${userId}' 
            ORDER BY 
                created_at desc limit 1) as newest,
            (SELECT 
                created_at 
            FROM 
                fingerprint 
            WHERE 
                created_at::text like '${date}%' AND 
                user_id = '${userId}' 
            ORDER BY created_at asc limit 1) as oldest;`,
}) 
export const findFingerprintByUserIdAndDate = (userId: string, date: string): Promise<Fingerprint> => 
  pool.query(findFingerprintQueryByUserIdAndDate(userId, date)).then(r => r.rows[0]);
