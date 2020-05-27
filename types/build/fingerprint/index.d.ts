import { DataResponse } from '../response';
export interface Fingerprint {
    user_id: string;
    last_fingerprint: string
    first_fingerprint: string;
    telework: boolean;
}
export declare type GetFingerprintResponse = DataResponse<Fingerprint>;
