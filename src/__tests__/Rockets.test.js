import { render, screen } from '@testing-library/react';
import App from '../App'
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import * as RocketCall from '../Redux/Rockets/Rocket'
import { rocketData, STORE_ROCKETS, TOGGLE_RESERVATION } from '../__mocks__/MockRocketData'
const addRockets = jest.spyOn(RocketCall, 'addRockets')
  .mockImplementation(() => ({ type: STORE_ROCKETS, payload: rocketData }));
// const addRockets = jest.fn(() => ({ type: STORE_ROCKETS, payload: rocketData }));
describe('Render the APP component and check for initial Rocket state', () => {
  // we need to render the App component because 
  // Rockets are being loaded from APP component
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //assert addRocket mock is working
  expect(addRockets).toBeCalled()
  test('Assert initial rocket list is empty', () => {
    const rocketsComponent = screen.queryAllByTestId('list-of-rockets')
    expect(rocketsComponent.length).toBe(1);
  });
})

describe('Test rocket with mock API call', () => {
  const storeState = store.getState();
  expect(storeState.Rockets.length).toBe(4);
  console.log(storeState);
})



afterEach(() => {
  jest.clearAllMocks();
});