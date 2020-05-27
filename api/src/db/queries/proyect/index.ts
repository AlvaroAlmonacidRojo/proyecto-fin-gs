
import { pool } from '../pool';
import { Proyect, ProyectFormRequest } from '../../../../../types/src/proyects';
import { User } from '../../../../../types/build/users';

const findProyectQueryById = (id: string) => ({
  name: 'get-proyect-by-id',
  text: `SELECT * FROM proyects WHERE proyect_id = '${id}'`,
})
export const findProyectById = (id: string): Promise<Proyect> =>
  pool.query(findProyectQueryById(id)).then(r => r.rows[0]);

const findProyectQueryByName = (name: string) => ({
  name: 'get-proyect-by-name',
  text: `SELECT * FROM proyects WHERE name = '${name}'`,
})
export const findProyectByName = (name: string): Promise<Proyect> =>
  pool.query(findProyectQueryByName(name)).then(r => r.rows[0]);

const findProyectsQuery = () => ({
  name: 'get-proyects',
  text: `SELECT 
	        p.*,
	        COUNT (DISTINCT up.user_proyect_id) as total_users
        FROM 
	        proyects as p 
        LEFT JOIN 
	        user_proyects AS up 
        ON up.proyect_id = p.proyect_id
        GROUP BY p.proyect_id
        ORDER BY p.created_at DESC;`,
});

// SELECT p.*, up.user_proyect_id FROM proyects as p LEFT JOIN user_proyects AS up ON up.proyect_id = p.proyect_id;

// SELECT p.*, (SELECT COUNT(*) FROM user_proyects AS up WHERE up.proyect_id = p.proyect_id AS TOT) FROM proyects as p

export const findProyects = (): Promise<Proyect[]> =>
  pool.query(findProyectsQuery()).then(r => r.rows);

const createProyectQuery = ({
  name,
  description,
}: Pick<ProyectFormRequest['data'], 'name' | 'description'>) => ({
  name: 'create-proyect',
  text: `INSERT INTO proyects (
    name,
    description,
    created_at,
    updated_at
  )
  VALUES (
    '${name}',
    '${description}',
    '${new Date().toISOString()}',
    '${new Date().toISOString()}'
  )
  RETURNING *;`
})

export const createProyect = ({
  name,
  description,
}: Pick<ProyectFormRequest['data'], 'name' | 'description'>): Promise<Proyect> => {
  return pool.query(createProyectQuery({
    name,
    description,
  })).then(r => r.rows[0]);
}

const createUserProyectsQuery = ({
  user_id,
  proyect_id,
}: Pick<Proyect, 'proyect_id'> & Pick<User,'user_id'>) => ({
  name: 'create-users-proyects',
  text: `INSERT INTO user_proyects (
    user_id,
    proyect_id
  )
  VALUES (
    '${user_id}',
    '${proyect_id}'
  )
  RETURNING *;`
})

export const createUserProyects = ({
  user_id,
  proyect_id,
}: Pick<Proyect, 'proyect_id'> & Pick<User,'user_id'>): Promise<Proyect> => {
  return pool.query(createUserProyectsQuery({
    user_id,
    proyect_id,
  })).then(r => r.rows[0]);
}