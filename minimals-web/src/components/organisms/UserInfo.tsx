import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { User } from '../../domains';

const UserInfo: FC<{ user: User | null }> = ({ user = null }) =>
  user ? (
    <>
      <Header.Content>
        <Link to={`/register/${user.id}`}>Minimalist {user.name}</Link>
      </Header.Content>
    </>
  ) : (
    <div />
  );

export default UserInfo;
