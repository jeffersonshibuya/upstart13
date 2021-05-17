
import { Link } from 'react-router-dom';
import { HomeLastVisitedProps } from '../../../types/index';

import { Container, Image, Description } from './styles';

export default function LastVisitedHomeItem(props: HomeLastVisitedProps) {
  return (
    <Container>
      <Link to={`/details/${props.id}`}>
        <Image> <img src={props.picture} alt='home' /> </Image>
        <Description>
          <p>$ {new Intl.NumberFormat('en-US').format(+props.price)}</p>
        </Description>
      </Link>
    </Container>
  )
}