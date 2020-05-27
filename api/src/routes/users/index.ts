import { Router } from 'express';

import userRouter from './user';
import get from './get';
import post from './user/post';

const usersRouter = Router({ mergeParams: true });

usersRouter.get('/', get);
usersRouter.post('/', post)
usersRouter.use('/:id', userRouter);

export default usersRouter;
