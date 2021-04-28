import AppHeader from './AppHeader';
import AppContent from './AppContent';
import { StateProvider } from '../state/provider';
import { Container } from 'reactstrap';

const AppContainer = () => (
  <Container fluid>
    <AppHeader/>
    <AppContent/>
  </Container>
);

const App = () => (
  <StateProvider>
    <AppContainer/>
  </StateProvider>
);

export default App;
