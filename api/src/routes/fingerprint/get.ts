import route from '../route';
import { findFingerprintByUserIdAndDate } from '../../db/queries/fingerprint';
import { Fingerprint } from '../../../../types/build/fingerprint';

const getFingerprint = route<{ id: string, date: string }, Fingerprint | null>(
    async ({ id, date }) => {
        console.log('ID', id, date);
        const findFingerPrint = await findFingerprintByUserIdAndDate(id, date);
        if(findFingerPrint) {
            const first = new Date(findFingerPrint.first_fingerprint);
            console.log('--------FIRST------')
            console.log('++++', first.getHours());
            const last = new Date(findFingerPrint.last_fingerprint);
            console.log('--------LAST------')
            console.log('++++', last.getTime());
            const time = last.getTime() - first.getTime();
            
            const secDiff = Math.floor(time / 1000); //in s
            const minDiff = Math.floor(time / 60 / 1000); //in minutes
            const hDiff = Math.floor(time / 3600 / 1000);
            return { 
                ...findFingerPrint, 
                time: `${hDiff}:${minDiff}:${secDiff}`,
                first_fingerprint: new Date(findFingerPrint.first_fingerprint).getHours().toString(),
            };
        }

        return null;
        
    }
);

export default getFingerprint;