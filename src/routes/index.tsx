import { Route, Switch } from 'react-router-dom'
import Details from '../pages/Details';
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import Notfound from '../pages/Notfound';
import UnderConstruction from '../pages/UnderConstruction';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/listing' component={Listing} />
      <Route path='/details/:id' component={Details} />
      <Route path='/underconstruction' component={UnderConstruction} />
      <Route path='/not-found' component={Notfound} />
    </Switch>
  )
}

export default Routes;