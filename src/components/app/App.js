//working 17-11-2024 edited App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './app.scss';
import './Logo.svg';

import FlightTypeFilter from '../flight-type-filter';
import TicketSearchFilter from '../ticket-search-filter';

import { fetchSearchId, fetchTickets } from '../../actions';
import TicketList from '../ticket-list/ticket-list';

function App() {
  const dispatch = useDispatch();
  const { searchId } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [dispatch, searchId]);

  return (
    <div className="App">
      <p className="app-logo"> ✈ </p>
      <div className="app-components">
        <FlightTypeFilter className="app-type-filter app-components__sidebar" />
        <div className="app-components__mainbar">
          <TicketSearchFilter className="app-search-filter" />
          <TicketList className="app-ticket-list" />
        </div>
      </div>
    </div>
  );
}

export default App;

//my draw App Component
// import React from 'react';
// import './app.scss';
// import './Logo.svg';

// import FlightTypeFilter from '../flight-type-filter';
// import TicketSearchFilter from '../ticket-search-filter';
// import TicketGenerator from '../ticket-generator';

// function App() {
//   return (
//     <div className="App">
//       <span className="app-logo">✈</span>

//       <div className="app-components">
//         <FlightTypeFilter className="app-type-filter app-components__sidebar" />
//         <div className="app-components__mainbar">
//           <TicketSearchFilter className="app-search-filter" />
//           <TicketGenerator className="app-gemerator" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
