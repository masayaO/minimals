import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';
import { UserItem } from '../../domains/models/user-item';

const ItemList: FC<{ items: UserItem[] }> = ({ items = [] }) => (
  <>
    <Card.Group>
      {items.map((item) => (
        <Card
          key={item.itemId}
          image={item.imageUrl}
          header={item.itemName}
          description={item.description}
        />
      ))}
    </Card.Group>
  </>
);

export default ItemList;
