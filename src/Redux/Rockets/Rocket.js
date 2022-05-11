const STORE_ROCKETS = 'src/pages/rockets/ADD_ROCKETS';
const TOGGLE_RESERVATION = 'src/pages/rockets/TOGGLE_RESERVATION';
export const toggleReservedAction = (id, status) => (
  {
    type: TOGGLE_RESERVATION,
    payload: {
      id: Number(id),
      status: Number(status),
    },
  }
);
export const addRockets = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then((data) => data.json())
    .then((data) => {
      dispatch({ type: STORE_ROCKETS, payload: data });
    })
    .catch((error) => console.log(error));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case STORE_ROCKETS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return [...state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return { ...rocket, reserved: Boolean(action.payload.status) };
        }
        return rocket;
      })];
    default:
      return state;
  }
};

export default rocketReducer;
