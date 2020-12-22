export type User = {
  id: number;
  name: string;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return typeof u?.id === 'number' && typeof u?.name === 'string';
};

export { isUser };
