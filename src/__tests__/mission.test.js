import { render, screen } from '@testing-library/react';
import Missions from '../pages/Missions';
import * as reactRedux from 'react-redux';
import Mission from '../components/Mission';
import '@testing-library/jest-dom';

// CREATE FAKE useSelector and useDispatch using jest.fn() to create stubs.
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test Mission component', () => {
  // Assing mocked functions to useSelectoorMock ans useDispatchMock consts.
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  // Create fake store with missions array.
  const mockStore = {
    Missions: [
      {
        mission_name: 'lkjhg',
        mission_id: '12s34',
        description: 'khjjkggk',
      },
      {
        mission_name: 'knkjbbj',
        mission_id: '56878huhu',
        description: 'lkjhugftftu',
      },
    ],
  };
  // Before each test Initialize functions used as a implementation of the mock.
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation((state) => state(mockStore));
  });
  // After each test clear the useSelectorMock.
  afterEach(() => {
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


  test('Check if join mission button shows leave mission when change the reserved status', () => {
    mockStore.Missions = [
      { ...mockStore.Missions[0], reserved: true },
    ];
    render(<Missions />);
    const reserve = screen.getByText('Leave Mission');
    expect(reserve).toBeInTheDocument();
  })

  test('Check if Leave mission button shows join missionn when change the reserved status', () => {
    mockStore.Missions = [
      { ...mockStore.Missions[0], reserved: false },
    ];
    render(<Missions />);
    const reserve = screen.getByText('Join Mission');
    expect(reserve).toBeInTheDocument();
  })

  test('Check if status is active member when the reserved status is true', () => {
    mockStore.Missions = [
      { ...mockStore.Missions[0], reserved: true },
    ];
    render(<Missions />);
    const reserve = screen.getByText('Active Member');
    expect(reserve).toBeInTheDocument();
  })

  test('Check if status is not a member when the reserved status is false', () => {
    mockStore.Missions = [
      { ...mockStore.Missions[0], reserved: false },
    ];
    render(<Missions />);
    const reserve = screen.getByText('NOT A MEMBER');
    expect(reserve).toBeInTheDocument();
  })
});

afterEach(() => {
  jest.clearAllMocks();
});
