import { axios4tech } from './config';

export const user = {
    register: async (userLogin, userName, userPassword) => {
        return await axios4tech.post('user', {
            userLogin,
            userName,
            userPassword
        })
    }
};