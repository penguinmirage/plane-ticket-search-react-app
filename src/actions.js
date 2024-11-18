//edited actions.js
export const toggleAll = (checked) => ({
  type: 'ALL',
  payload: checked,
});

export const toggleNoChange = (checked) => ({
  type: 'NOCHANGE',
  payload: checked,
});

export const toggleOneChange = (checked) => ({
  type: 'ONECHANGE',
  payload: checked,
});

export const toggleTwoChanges = (checked) => ({
  type: 'TWOCHANGES',
  payload: checked,
});

export const toggleThreeChanges = (checked) => ({
  type: 'THREECHANGES',
  payload: checked,
});

export const cheapest = () => ({
  type: 'CHEAPEST',
});

export const fastest = () => ({
  type: 'FASTEST',
});

export const optimal = () => ({
  type: 'OPTIMAL',
});

//added API settings
export const FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR';
export const FETCH_TICKETS_LOADING = 'FETCH_TICKETS_LOADING';

export const fetchSearchIdSuccess = (searchId) => ({
  type: FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
});

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsError = (error) => ({
  type: FETCH_TICKETS_ERROR,
  payload: error,
});

export const fetchTicketsLoading = (isLoading) => ({
  type: FETCH_TICKETS_LOADING,
  payload: isLoading,
});

// GET searchId (thunk)
export const fetchSearchId = () => async (dispatch) => {
  try {
    const response = await fetch(' https://aviasales-test-api.kata.academy/search');
    const data = await response.json();
    dispatch(fetchSearchIdSuccess(data.searchId));
  } catch (error) {
    console.error('Error fetching searchId:', error);
    dispatch(fetchTicketsError('Failed to fetch searchId.'));
  }
};

//thunking tickets with searchId
export const fetchTickets = (searchId) => async (dispatch) => {
  dispatch(fetchTicketsLoading(true));
  let stop = false;

  try {
    while (!stop) {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const data = await response.json();
      dispatch(fetchTicketsSuccess(data.tickets));
      stop = data.stop;
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
    dispatch(fetchTicketsError('Failed to fetch tickets.'));
  } finally {
    dispatch(fetchTicketsLoading(false));
  }
};

//my first draw of actions.js
// //flight type filter checkboxes
// export const all = () => {
//   return {
//     type: 'ALL',
//     payload: null,
//   };
// };
// export const noChange = () => {
//   return {
//     type: 'NOCHANGE',
//     payload: null,
//   };
// };
// export const oneChange = () => {
//   return {
//     type: 'ONECHANGE',
//     payload: null,
//   };
// };
// export const twoChanges = () => {
//   return {
//     type: 'TWOCHANGES',
//     payload: null,
//   };
// };
// export const threeChanges = () => {
//   return {
//     type: 'THREECHANGES',
//     payload: null,
//   };
// };

// // //ticket search filter cheapest-fastest-optimal
// export const cheapest = () => {
//   return {
//     type: 'CHEAPEST',
//     payload: null,
//   };
// };
// export const fastest = () => {
//   return {
//     type: 'FASTEST',
//     payload: null,
//   };
// };
// export const optimal = () => {
//   return {
//     type: 'OPTIMAL',
//     payload: null,
//   };
// };
