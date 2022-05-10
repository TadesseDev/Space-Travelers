const STORE_ROCKETS = 'src/pages/rockets/ADD_ROCKETS';
const TOGGLE_RESERVATION = 'src/pages/rockets/TOGGLE_RESERVATION';
export const toggleReservedAction = (id, status) => ({ type: STORE_ROCKETS, payload: { status, id } });
export const addRockets = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch({ type: STORE_ROCKETS, payload: data });
    })
    .catch(error => console.log(error));
};

const reduceBook = (state = [], action) => {
  switch (action.type) {
    case STORE_ROCKETS:
      return action.payload;

    default:
      return state;
  }
}


export default reduceBook;

