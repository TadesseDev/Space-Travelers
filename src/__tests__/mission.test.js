import { render, screen } from '@testing-library/react';
import Missions from '../pages/Missions';
import * as reactRedux from 'react-redux';
import Mission from '../components/Mission';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Test Mission component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
      missions: [
        {
          mission_name: 'lkjhg',
          mission_id: '12s34',
          description: 'khjjkggk',
        },
      ],
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Fetch and display Missions', () => {
    render(<Missions />);
    expect(screen.getByTestId('mission-list-test')).toBeInTheDocument();
  });
});

