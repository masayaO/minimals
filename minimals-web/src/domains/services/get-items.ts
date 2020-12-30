import { isUserItems, UserItem } from '../models/user-item';
import { firebaseStore } from '../../firebase';

const getItems = async (userId: string): Promise<UserItem[]> => {
  const docRef = firebaseStore.collection('items');

  const items = await docRef
    .where('userId', '==', userId)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        return { itemId: doc.id, ...doc.data() };
      });
    });

  if (!isUserItems(items)) {
    throw Error('Api Error');
  }

  return items;
};

export default getItems;
