import route from '../../route';
import { findProyectById } from '../../../db/queries/proyect';
import { Proyect } from '../../../../../types/src/proyects';

const getProyect = route<{ id: string }, Proyect>(
    async ({ id }) => {
        const findProyectResult = await findProyectById(id);
        return findProyectResult;
    }
);

export default getProyect;