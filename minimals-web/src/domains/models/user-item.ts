export type UserItem = {
  itemId: number;
  itemName: string;
  userId: number;
  count: number;
  description?: string;
  category?: string;
  imageUrl?: string;
};

const isUserItem = (arg: unknown): arg is UserItem => {
  const ui = arg as UserItem;

  return (
    typeof ui?.itemId === 'number' &&
    typeof ui?.itemName === 'string' &&
    typeof ui?.userId === 'number' &&
    typeof ui?.count === 'number'
  );
};

const isUserItems = (args: unknown[]): args is UserItem[] =>
  !args.some((arg) => !isUserItem(arg));

export { isUserItem, isUserItems };
