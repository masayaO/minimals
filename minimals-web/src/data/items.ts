import { UserItem } from '../domains/models/user-item';

const itemList: UserItem[] = [
  {
    itemId: 1,
    itemName: 'Wexley',
    userId: 1,
    count: 1,
    category: 'Fashion',
    description: 'My backpack.',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0330/0645/2780/products/UB101-main_2048x2048.jpg?v=1582595262',
  },
  {
    itemId: 2,
    itemName: 'Lamy',
    userId: 1,
    count: 1,
    category: 'Stationery',
    description: 'My fountain pen.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71HP7AFTdcL._AC_SX425_.jpg',
  },
];

export default itemList;
