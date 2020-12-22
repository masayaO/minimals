import React, { FC } from 'react';
import { User } from '../../domains';
import Home from '../../components/pages/Home';

const EnhancedHome: FC = () => {
  const user = {
    id: 1,
    name: 'Masaya',
  } as User;

  return <Home user={user} />;
};

export default EnhancedHome;
