//updated reducer with API thunk settings
const initialState = {
  filters: {
    all: false,
    noChange: false,
    oneChange: false,
    twoChanges: false,
    threeChanges: false,
  },
  searchFilter: 'OPTIMAL', // Default search filter
  searchId: null, // Store searchId here
  tickets: [], // Store fetched tickets
  loading: false, // Loading state
  error: null, // Error state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        filters: {
          all: action.payload,
          noChange: action.payload,
          oneChange: action.payload,
          twoChanges: action.payload,
          threeChanges: action.payload,
        },
      };

    case 'NOCHANGE':
    case 'ONECHANGE':
    case 'TWOCHANGES':
    case 'THREECHANGES': {
      const filterKeyMap = {
        NOCHANGE: 'noChange',
        ONECHANGE: 'oneChange',
        TWOCHANGES: 'twoChanges',
        THREECHANGES: 'threeChanges',
      };

      const updatedFilters = {
        ...state.filters,
        [filterKeyMap[action.type]]: action.payload,
      };

      const allChecked =
        updatedFilters.noChange && updatedFilters.oneChange && updatedFilters.twoChanges && updatedFilters.threeChanges;

      return {
        ...state,
        filters: {
          ...updatedFilters,
          all: allChecked,
        },
      };
    }

    case 'CHEAPEST':
    case 'FASTEST':
    case 'OPTIMAL':
      return {
        ...state,
        searchFilter: action.type,
      };

    case 'FETCH_SEARCH_ID_SUCCESS':
      return {
        ...state,
        searchId: action.payload,
      };

    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };

    case 'FETCH_TICKETS_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'FETCH_TICKETS_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

//edited reducer 17-11-2024
// const initialState = {
//   filters: {
//     all: false,
//     noChange: false,
//     oneChange: false,
//     twoChanges: false,
//     threeChanges: false,
//   },
//   searchFilter: 'OPTIMAL', // Default search filter
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ALL':
//       return {
//         ...state,
//         filters: {
//           all: action.payload,
//           noChange: action.payload,
//           oneChange: action.payload,
//           twoChanges: action.payload,
//           threeChanges: action.payload,
//         },
//       };

//     case 'NOCHANGE':
//     case 'ONECHANGE':
//     case 'TWOCHANGES':
//     case 'THREECHANGES': {
//       // Map action type to the corresponding filter key
//       const filterKeyMap = {
//         NOCHANGE: 'noChange',
//         ONECHANGE: 'oneChange',
//         TWOCHANGES: 'twoChanges',
//         THREECHANGES: 'threeChanges',
//       };

//       const updatedFilters = {
//         ...state.filters,
//         [filterKeyMap[action.type]]: action.payload,
//       };

//       // If all individual checkboxes are checked
//       const allChecked =
//         updatedFilters.noChange && updatedFilters.oneChange && updatedFilters.twoChanges && updatedFilters.threeChanges;

//       return {
//         ...state,
//         filters: {
//           ...updatedFilters,
//           all: allChecked, // Update "ALL" based on individual checkboxes
//         },
//       };
//     }

//     case 'CHEAPEST':
//     case 'FASTEST':
//     case 'OPTIMAL':
//       return {
//         ...state,
//         searchFilter: action.type,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;

// // my first draw reducer 12-11-2024
// const reducer = (state, action) => {
//   switch (action.type) {
//     //     //state *checkboxes* flight-type-filter
//     case 'ALL':
//       return state + action.payload;
//     case 'NOCHANGE':
//       return state + action.payload;
//     case 'ONECHANGE':
//       return state + action.payload;
//     case 'TWOCHANGES':
//       return state + action.payload;
//     case 'THREECHANGES':
//       return state + action.payload;
//     //     //state ticket-search-filter
//     case 'CHEAPEST':
//       return state + action.payload;
//     case 'FASTEST':
//       return state + action.payload;
//     case 'OPTIMAL':
//       return state + action.payload;

//     default:
//       return state;
//   }
//   // return 0
// };
// export default reducer;
