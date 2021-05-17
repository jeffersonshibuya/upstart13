
import { Link } from 'react-router-dom';
import { HomeMostViewedProps } from '../../../types/index';

import { Container, Image, Description } from './styles';

export default function MostViewedHomesItem(props: HomeMostViewedProps) {
  return (
    <Container>
      <Link to={`/details/${props.id}`}>
        <Image> <img src={props.picture} alt='home' /> </Image>
        <Description>
          <p>$ {new Intl.NumberFormat('en-US').format(+props.price)}</p>
          <p>Total views: {new Intl.NumberFormat('en-US').format(+props.views)}</p>
        </Description>
      </Link>
    </Container>
  )
}