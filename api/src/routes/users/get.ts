import route from '../route';
import { findUsers } from '../../db/queries/user';
import { User } from '../../../../types/src/users';

const getUsers = route<{}, User[]>(
    async () => {
        const findUsersResult = findUsers();
        return findUsersResult;
    }
);

export default getUsers;