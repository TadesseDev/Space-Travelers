const STORE_MISSIONS = 'SpaceTravelers/Mission/STORE_MISSIONS';

const initialState = [];

export const getMissions = () => async (dispatch) => {
    fetch('https://api.spacexdata.com/v3/missions')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: STORE_MISSIONS, data });
    })
    .catch(error => console.log(error));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_MISSIONS: 
      return action.data;

    default:
      return state;
  }
};

export default missionsReducer;
