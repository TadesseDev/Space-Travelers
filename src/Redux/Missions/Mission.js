// import getMissions from '../../components/MissionsApi';

const GET_MISSIONS = 'SpaceTravelers/Mission/GET_MISSION';

const initialState = [];

export const getMis = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
//   const booksList = Object.entries(data);
  dispatch({
    type: GET_MISSIONS,
    data,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_MISSIONS:
      return action.data;

    default:
      return state;
  }
};

export default missionsReducer;
