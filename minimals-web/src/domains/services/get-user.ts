import { isUser, User } from '../models/user';
import userList from '../../data/users';

const getUser = async (userId: number): Promise<User> => {
  const findUser = (id: number) => userList.find((u) => u.id === id);

  const response = (id: number) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(findUser(id)), 1000);
    });

  const user = await response(userId);

  if (!isUser(user)) {
    throw Error('API type error!');
  }

  return user;
};

export default getUser;
