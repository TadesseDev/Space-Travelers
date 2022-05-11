import { render, screen } from '@testing-library/react';
import Rocket from '../components/Rocket';
import { rocketData, STORE_ROCKETS } from '../__mocks__/MockRocketData.js';
// import { toggleReservedAction } from '../Redux/Rockets/Rocket'
import { Provider } from 'react-redux';
import Store from '../Redux/configureStore';
import * as RocketActions from '../Redux/Rockets/Rocket'

const mockRocketAPICall = jest.spyOn(RocketActions, 'addRockets')
  .mockImplementation(() => {
    console.log("diapatching action");
    return { type: STORE_ROCKETS, payload: rocketData };
  });
describe('Render the Rocket component and check for Proper Rocket component', () => {
  Store.dispatch(RocketActions.addRockets());
  render(
    <Provider store={Store}>
      {rocketData.map((rocket) =>
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />)}
    </Provider>
  );

  test('Assert store is updated with a mock data', () => {
    expect(Store.getState().Rockets.length).toBe(rocketData.length)
    // console.log(Store.getState().Rockets.length)
  })

});

afterEach(() => {
  jest.clearAllMocks();
});
