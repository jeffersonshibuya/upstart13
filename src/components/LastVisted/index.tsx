import React, { useEffect, useState } from 'react';
import LastVisitedHomeItem from './Item';

import { Container, Items } from './styles';
import api from '../../services/api';
import { HomeProps, HomeLastVisitedProps } from '../../types/index';



interface ListItemProps {
  title: string;
}

const LastVisitedHomes: React.FC<ListItemProps> = ({ title }) => {
  const [lastVisitedHomes, setLastVisitedHomes] = useState<HomeLastVisitedProps[]>([]);

  useEffect(() => {
    api.get('?_limit=5&sort=visits[lastVisited]&_order=desc').then(response => {
      setLastVisitedHomes(response.data.map((item: HomeProps) => {
        return {
          id: item.id,
          picture: item.homeImage,
          price: item.overview.price,
          views: item.visits.total
        }
      }))
    })
  }, []);

  return (
    <Container>
      <h2>{title}</h2>

      <Items>
        {lastVisitedHomes.map((data: HomeLastVisitedProps, index: number) =>
          <LastVisitedHomeItem {...data} key={index} />
        )}
      </Items>
    </Container>
  )
}

export default LastVisitedHomes;