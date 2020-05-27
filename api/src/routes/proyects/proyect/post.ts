import route from "../../route";
import { Proyect, ProyectFormRequest } from "../../../../../types/build/proyects";
import { createProyect, findProyectByName, createUserProyects } from "../../../db/queries/proyect";

export const postProyect = route<ProyectFormRequest, Proyect | null>(
    async ({ data }) => {
        const { name, description, user_ids } = data;
        const proyect: Required<Proyect> | undefined = await findProyectByName(name);
        if(!proyect) {
            const newProyect: Proyect = await createProyect({
                name, 
                description, 
              });

            if(user_ids && user_ids.length > 0) {
                user_ids.map(user_id => {
                    createUserProyects({
                        user_id,
                        proyect_id: newProyect.proyect_id,
                    })
                })
            }

            return newProyect;
        } else {
            throw new Error('Proyecto ya registrado');
            return null;
        }
        
    });

export default postProyect;