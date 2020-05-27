import { Router } from "express";
import get from './get';

const fingerprintRouter = Router({ mergeParams: true});

fingerprintRouter.get('/:id', get);

export default fingerprintRouter;