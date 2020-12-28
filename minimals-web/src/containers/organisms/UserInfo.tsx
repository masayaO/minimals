import React, { FC } from 'react';
import { useQuery } from 'react-query';
import UserInfo from '../../components/organisms/UserInfo';
import { getUser } from '../../domains';

const EnhancedUserInfo: FC<{ userId: number }> = ({ userId }) => {
  const { data: user = null } = useQuery([userId, 'user'], () =>
    getUser(userId),
  );

  return <UserInfo user={user} />;
};

export default EnhancedUserInfo;
