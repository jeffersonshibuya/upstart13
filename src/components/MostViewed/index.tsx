import React, { useEffect, useState } from 'react';
import MostViewedHomesItem from './Item';

import { Container, Items } from './styles';
import api from '../../services/api';
import { HomeProps, HomeMostViewedProps } from '../../types/index';



interface ListItemProps {
  title: string;
}

const MostViewedHomes: React.FC<ListItemProps> = ({ title }) => {
  const [mostVisitedHomes, setMostVisitedHomes] = useState<HomeMostViewedProps[]>([]);

  useEffect(() => {
    api.get('?_limit=5&_sort=visits[total]&_order=desc').then(response => {
      setMostVisitedHomes(response?.data.map((item: HomeProps) => {
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
        {mostVisitedHomes.map((data: HomeMostViewedProps, index: number) =>
          <MostViewedHomesItem {...data} key={index} />
        )}
      </Items>
    </Container>
  )
}

export default MostViewedHomes;