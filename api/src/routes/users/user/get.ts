import route from '../../route';
import { findUserById } from '../../../db/queries/user';
import { User } from '../../../../../types/src/users';

const getUser = route<{ id: string }, User>(
    async ({ id }) => {
        const findUserResult = await findUserById(id);
        return findUserResult;
    }
);

export default getUser;