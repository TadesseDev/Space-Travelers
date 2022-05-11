import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../components/Rocket';
import { rocketData, STORE_ROCKETS } from '../__mocks__/MockRocketData.js';
import { toggleReservedAction } from '../Redux/Rockets/Rocket';
import Store from '../Redux/configureStore';
import * as RocketActions from '../Redux/Rockets/Rocket';

const mockRocketAPICall = jest.spyOn(RocketActions, 'addRockets')
  .mockImplementation(() => ({ type: STORE_ROCKETS, payload: rocketData }));
Store.dispatch(RocketActions.addRockets());
const storeDataRocket = Store.getState().Rockets;
describe('Render the Rocket component and check for Proper Rocket component', () => {
  render(
    <Provider store={Store}>
      {storeDataRocket.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </Provider>,
  );

  test('Assert store is updated with a mock data', () => {
    expect(Store.getState().Rockets.length).toBe(rocketData.length);
    // console.log(Store.getState().Rockets.length)
  });
  const rockets = screen.queryAllByTestId('rocket');
  test('Test contents of the DOM for Rockets', () => {
    expect(rockets.length).toBe(storeDataRocket.length);
    // assert we have
    // console.log(rockets.length);
  });
});

describe('Test for toggle states', () => {
  const storeDataRocket = Store.getState().Rockets;
  test('Assert no rocket is reserved initially', () => {
    const initialReservedRockets = storeDataRocket
      .filter((rocket) => rocket.reserved);
    expect(initialReservedRockets.length).toBe(0);
  });

  test('Assert dispatching toggleAction for reserved', () => {
    const storeState = Store.getState().Rockets;
    let toggledRocket = storeState
      .filter((rocket) => rocket.id === 1)[0];
    expect(toggledRocket.reserved).toBeFalsy();

    Store.dispatch(toggleReservedAction(toggledRocket.id, true));
    const newState = Store.getState().Rockets;
    toggledRocket = newState
      .filter((rocket) => rocket.id === 1)[0];
    expect(toggledRocket.reserved).toBeTruthy();
  });

  test('Assert dispatching toggleAction for reserved', () => {
    const storeState = Store.getState().Rockets;
    let toggledRocket = storeState
      .filter((rocket) => rocket.id === 1)[0];
    expect(toggledRocket.reserved).toBeTruthy();

    Store.dispatch(toggleReservedAction(toggledRocket.id, false));
    const newState = Store.getState().Rockets;
    toggledRocket = newState
      .filter((rocket) => rocket.id === 1)[0];
    expect(toggledRocket.reserved).toBeFalsy();
  });
});

describe('Snap shot tests for Rocket', () => {
  const RocketList = renderer.create(
    <Provider store={Store}>
      {storeDataRocket.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </Provider>,
  );
  test('Test snapshot match', () => {
    expect(RocketList).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
