import { Route, Switch } from 'react-router-dom';
import { AppBar, Footer } from 'components';
import { MainView, NotFoundView } from 'views';
import { Wrapper } from './App.style';
import { ROUTE_PATHS } from 'utils/route-paths';

const App = () => {
  return (
    <Wrapper>
      <AppBar />

      <Switch>
        <Route path={ROUTE_PATHS._()} exact component={MainView} />
        <Route component={NotFoundView} />
      </Switch>

      <Footer />
    </Wrapper>
  );
};

export default App;
