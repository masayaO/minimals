import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';
import { User } from '../../domains';

const UserInfo: FC<{ user: User | null }> = ({ user = null }) =>
  user ? (
    <>
      <Header.Content>Minimalist {user.name}</Header.Content>
    </>
  ) : (
    <div />
  );

export default UserInfo;
