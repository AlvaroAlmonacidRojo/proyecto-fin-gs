import route from "../../route";
import { User, UserFormRequest } from "../../../../../types/build/users";
import { createUser, findUserByEmail } from "../../../db/queries/user";
import { createUserProyects } from "../../../db/queries/proyect";

export const postUser = route<UserFormRequest, User | null>(
    async ({ data }) => {
        const { email, first_name, last_name, proyect_ids } = data;
        const user: Required<User> | undefined = await findUserByEmail(email);
        if(!user) {
            const newUser: User = await createUser({
                email, 
                first_name, 
                last_name,
              });
            
              if(proyect_ids && proyect_ids.length > 0) {
                proyect_ids.map(proyect_id => {
                    createUserProyects({
                        user_id: newUser.user_id,
                        proyect_id,
                    })
                })
            }
            return newUser;
        } else {
            throw new Error('Email ya registrado');
            return null;
        }
        
    });

export default postUser;