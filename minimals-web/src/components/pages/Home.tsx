import React, { FC, Suspense } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import UserInfo from '../../containers/organisms/UserInfo';
import ErrorBoundary from '../../ErrorBoundary';
import ItemList from '../../containers/organisms/ItemList';
import './Home.css';
import Spinner from '../molecules/Spinner';

const Home: FC<{ userId: number }> = ({ userId }) => (
  <>
    <Header as="h2">
      <Icon name="user circle outline" />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <UserInfo userId={userId} />
          <div className="item-container">
            <ItemList userId={userId} />
          </div>
        </Suspense>
      </ErrorBoundary>
    </Header>
  </>
);

export default Home;
