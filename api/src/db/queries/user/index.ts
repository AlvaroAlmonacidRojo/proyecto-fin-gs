
import { pool } from '../pool';
import { User, UserFormRequest } from '../../../../../types/src/users';

const findUserQueryById = (id: string) => ({
  name: 'get-user',
  text: `SELECT * FROM users WHERE user_id = '${id}'`,
}) 
export const findUserById = (id: string): Promise<User> => 
  pool.query(findUserQueryById(id)).then(r => r.rows[0]);
  
const findUserQueryByEmail = (email: string) => ({
    name: 'get-user',
    text: `SELECT * FROM users WHERE email = '${email}'`,
  }) 
export const findUserByEmail = (email: string): Promise<User> => 
    pool.query(findUserQueryByEmail(email)).then(r => r.rows[0]);

const findUsersQuery = () => ({
  name: 'get-users',
  text: `SELECT 
	        u.*,
	        COUNT (DISTINCT up.user_proyect_id) as total_proyects
        FROM 
	        users as u 
        LEFT JOIN 
	        user_proyects AS up 
        ON up.user_id = u.user_id
        GROUP BY u.user_id
        ORDER BY u.created_at DESC;`,
});

export const findUsers = (): Promise<User[]> =>
  pool.query(findUsersQuery()).then(r => r.rows);
  
const createUserQuery = ({
  email, 
  first_name, 
  last_name,
}: Pick<UserFormRequest['data'], 'email' | 'first_name' | 'last_name'>) => ({
  name: 'create-user',
  text: `INSERT INTO users (
    email,
    first_name,
    last_name,
    created_at,
    updated_at
  )
  VALUES (
    '${email}',
    '${first_name}',
    '${last_name}',
    '${new Date().toISOString()}',
    '${new Date().toISOString()}'
  )
  RETURNING *;`
})  
export const createUser = ({
  email, 
  first_name, 
  last_name, 
}: Pick<UserFormRequest['data'], 'email' | 'first_name' | 'last_name'>): Promise<User> => {
    return pool.query(createUserQuery({
      email, 
      first_name, 
      last_name,
    })).then(r => r.rows[0]);
  }
  

