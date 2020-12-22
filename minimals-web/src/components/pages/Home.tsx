import React, { FC } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { User } from '../../domains';

const Home: FC<{ user: User }> = ({ user }) => (
  <>
    <Header as="h2">
      <Icon name="user circle outline" />
      <Header.Content>Minimalist {user.name}</Header.Content>
    </Header>
  </>
);

export default Home;
