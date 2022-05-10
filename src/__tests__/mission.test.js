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
    Missions: [
      {
        mission_name: 'lkjhg',
        mission_id: '12s34',
        description: 'khjjkggk',
      },
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

  test('Fetch and display Missions table', () => {
    render(<Missions />);
    expect(screen.getByTestId('mission-test')).toBeInTheDocument();
  });
  
  test('Create a Mission component inside Missions table', () => {
    const missionData = useSelectorMock(
      (mockStore) => mockStore.Missions[0],
    );
    render(
      <Mission
        key={missionData.mission_id}
        id={missionData.mission_id}
        reserved={missionData.reserved}
        mission={missionData}
      />,
    );
    expect(screen.getByTestId('mission-item')).toBeInTheDocument();
  });
});

