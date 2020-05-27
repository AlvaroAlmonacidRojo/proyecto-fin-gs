import { Router } from "express";
import get from './get';
import post from './post';

const proyectRouter = Router({ mergeParams: true});

proyectRouter.get('/', get);
proyectRouter.post('/', post);

export default proyectRouter;