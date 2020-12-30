import { isUser, User } from '../models/user';
import { firebaseStore } from '../../firebase';

const getUser = async (userId: string): Promise<User> => {
  const docRef = firebaseStore.collection('users').doc(userId);

  const user = await docRef.get().then((doc) => {
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    }

    return undefined;
  });

  if (!isUser(user)) {
    throw Error('API type error!');
  }

  return user;
};

export default getUser;
