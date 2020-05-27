import route from '../route';
import { findFingerprintByUserIdAndDate } from '../../db/queries/fingerprint';
import { Fingerprint } from '../../../../types/build/fingerprint';

const getFingerprint = route<{ id: string, date: string }, Fingerprint | null>(
    async ({ id, date }) => {
        const findFingerPrint = await findFingerprintByUserIdAndDate(id, date);
        if(findFingerPrint) {
            return findFingerPrint;
        }

        return null;
        
    }
);

export default getFingerprint;