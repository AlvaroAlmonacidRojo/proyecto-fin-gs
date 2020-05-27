import { DataResponse } from '../response';

export interface Proyect {
  proyect_id: string; //UUID
  name: string;
  description: string;
  created_at: string;
  updated_at: string | null;
}

export interface ProyectFormRequest {
  data: {
    proyect_id: Proyect['proyect_id'];
    name: Proyect['name'];
    description: Proyect['description'];
    created_at: Proyect['created_at'];
    updated_at: Proyect['updated_at'];
  };
}

export type GetProyectsResponse = DataResponse<Proyect[]>;