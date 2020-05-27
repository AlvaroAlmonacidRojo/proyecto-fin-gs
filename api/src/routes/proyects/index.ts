import { Router } from 'express';

import proyectRouter from './proyect';
import get from './get';
import post from './proyect/post';

const proyectsRouter = Router({ mergeParams: true });

proyectsRouter.get('/', get);
proyectsRouter.post('/', post)
proyectsRouter.use('/:id', proyectRouter);

export default proyectsRouter;
