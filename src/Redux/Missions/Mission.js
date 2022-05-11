const STORE_MISSIONS = 'SpaceTravelers/Mission/STORE_MISSIONS';
const RESERVATION = 'SpaceTravelers/Mission/RESERVATION';
const initialState = [];

export const reserveMission = (id, status) => (
  {
    type: RESERVATION,
    mission: {
      id,
      status: Boolean(Number(status)),
    },
  }
);

export const getMissions = () => async (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((data) => data.json())
    .then((data) => {
      dispatch({ type: STORE_MISSIONS, data });
    })
    .catch((error) => console.log(error));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_MISSIONS:
      return action.data;

    case RESERVATION:
      return [...state.map((mission) => {
        if (mission.mission_id === action.mission.id) {
          return { ...mission, reserved: action.mission.status };
        }
        return mission;
      })];

    default:
      return state;
  }
};

export default missionsReducer;
