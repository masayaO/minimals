export type User = {
  id: string;
  name: string;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return typeof u?.id === 'string' && typeof u?.name === 'string';
};

export { isUser };
