import { render, screen } from '@testing-library/react';
import App from '../App'
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import * as RocketCall from '../Redux/Rockets/Rocket'
import { rocketData, STORE_ROCKETS } from '../__mocks__/MockRocketData'
const addRocketsMock = jest.spyOn(RocketCall, 'addRockets')
  .mockImplementation(() => ({ type: STORE_ROCKETS, payload: rocketData }));


describe('Render the APP component and check for initial Rocket state', () => {
  // we need to render the App component because 
  // Rockets are being loaded from APP component
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  //Assert fetch data is called once
  expect(addRocketsMock).toBeCalledTimes(1)

  //Assert the same number of rocket is displayed
  const storeState = store.getState();
  const rockets = screen.queryAllByTestId('rocket');
  expect(rockets.length).toBe(storeState.Rockets.length);


  test('Assert Rockets component is loaded', () => {
    const rocketsComponent = screen.queryAllByTestId('list-of-rockets')
    expect(rocketsComponent.length).toBe(1);
  });
})

describe('Test Rocket with mock API call', () => {
  //assert addRocket mock is working
  test('Assert store is updated with Rockets data', () => {
    const storeState = store.getState();
    expect(storeState.Rockets.length).toBe(4);
  });

})

afterEach(() => {
  jest.clearAllMocks();
});
