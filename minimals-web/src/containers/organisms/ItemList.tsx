import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getItems } from '../../domains';
import ItemList from '../../components/organisms/ItemList';

const EnhancedItemList: FC<{ userId: number }> = ({ userId }) => {
  const { data: items = [] } = useQuery([userId, 'items'], () =>
    getItems(userId),
  );

  return <ItemList items={items} />;
};

export default EnhancedItemList;
