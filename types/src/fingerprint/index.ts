import { DataResponse } from '../response';

export interface Fingerprint {
  user_id: string; //UUID
  last_fingerprint: string;
  first_fingerprint: string;
  telework: boolean;
}


export type GetFingerPrintResponse = DataResponse<Fingerprint>;