import LastVisitedHomes from '../../components/LastVisted';
import MostViewedHomes from '../../components/MostViewed';
import Searchbox from '../../components/Searchbox';
import { Container, List } from './styles'

const Home: React.FC = () => {

  return (
    <Container>
      <Searchbox title="Please inform either neighborhood, city or ZIP code to search" />

      <List>
        <MostViewedHomes title={'Most Visited'} />
      </List>

      <List>
        <LastVisitedHomes title={'Last Visited'} />
      </List>
    </Container>
  )
}

export default Home;