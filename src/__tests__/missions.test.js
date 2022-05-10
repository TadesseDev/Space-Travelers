import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Missions from '../pages/Missions';

it('Check if Missions page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});