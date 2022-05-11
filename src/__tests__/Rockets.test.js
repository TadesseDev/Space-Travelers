import { render, screen } from '@testing-library/react';
import App from '../App'
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
describe('Render the APP component and check for initial Rocket state', () => {
  // we need to render the App component because 
  // Rockets are being loaded from APP component
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //assert addRocket mock is working
  // expect(addRockets).toBeCalled()
  test('Assert initial rocket list is empty', () => {
    const rocketsComponent = screen.queryAllByTestId('list-of-rockets')
    expect(rocketsComponent.length).toBe(1);
  });
})




afterEach(() => {
  jest.clearAllMocks();
});