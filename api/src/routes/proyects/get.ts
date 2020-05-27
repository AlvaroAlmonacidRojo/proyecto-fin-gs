import route from '../route';
import { findProyects } from '../../db/queries/proyect';
import { Proyect } from '../../../../types/src/proyects';

const getProyect = route<{}, Proyect[]>(
    async () => {
        const findProyectsResult = findProyects();
        return findProyectsResult;
    }
);

export default getProyect;