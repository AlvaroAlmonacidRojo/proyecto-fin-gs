import { Router } from "express";
import usersRouter from "./users";
import proyectsRouter from "./proyects";
import fingerprintRouter from "./fingerprint";

const routes = Router();

routes.use('/api/users', usersRouter)
routes.use('/api/proyects', proyectsRouter)
routes.use('/api/fingerprint', fingerprintRouter)

export default routes;