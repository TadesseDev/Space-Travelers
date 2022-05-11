import { render, screen } from '@testing-library/react';
import Rocket from '../components/Rocket';
import { rocketData } from '../__mocks__/MockRocketData.js';
import { Provider } from 'react-redux';
import Store from '../Redux/configureStore';
describe('Render the Rocket component and check for Proper Rocket component', () => {
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

})