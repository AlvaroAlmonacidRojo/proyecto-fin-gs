import { Router } from "express";
import get from './get';
import post from './post';

const userRouter = Router({ mergeParams: true});

userRouter.get('/', get);
userRouter.post('/', post);

export default userRouter;