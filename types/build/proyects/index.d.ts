import { DataResponse } from '../response';
import { User } from '../users';
export interface Proyect {
    proyect_id: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string | null;
    total_users: string;
}
export interface ProyectFormRequest {
    data: {
        proyect_id: Proyect['proyect_id'];
        name: Proyect['name'];
        description: Proyect['description'];
        created_at: Proyect['created_at'];
        updated_at: Proyect['updated_at'];
        user_ids: User['user_id'][];
    };
}
export declare type GetProyectsResponse = DataResponse<Proyect[]>;
