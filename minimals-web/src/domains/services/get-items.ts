import { isUserItems, UserItem } from '../models/user-item';
import itemList from '../../data/items';

const getItems = async (userId: number): Promise<UserItem[]> => {
  const filterItems = (id: number) => itemList.filter((i) => i.userId === id);

  const response = (id: number) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(filterItems(id)), 1000);
    });

  const items = (await response(userId)) as unknown[];

  if (!isUserItems(items)) {
    throw Error('API type error!');
  }

  return items;
};

export default getItems;
