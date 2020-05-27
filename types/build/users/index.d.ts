import { DataResponse } from '../response';
import { Proyect } from '..';
export interface User {
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string | null;
    total_proyects: string;
}
export interface UserFormRequest {
    data: {
        user_id: User['user_id'];
        email: User['email'];
        first_name: User['first_name'];
        last_name: User['last_name'];
        created_at: User['created_at'];
        updated_at: User['updated_at'];
        proyect_ids: Proyect['proyect_id'][];
    };
}
export declare type GetUsersResponse = DataResponse<User[]>;
