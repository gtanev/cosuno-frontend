import App from '../components/App';
import { render, unmountComponentAtNode } from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App/>, div);
  unmountComponentAtNode(div);
});
