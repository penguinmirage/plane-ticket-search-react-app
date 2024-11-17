//edited App.js
// import React from 'react';
// import FlightTypeFilter from '../flight-type-filter';
// import TicketSearchFilter from '../ticket-search-filter';
// import TicketGenerator from '../ticket-generator';

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Aviasales</h1>
//       <FlightTypeFilter />
//       <TicketSearchFilter />
//       <TicketGenerator />
//     </div>
//   );
// };

// export default App;

//my draw App Component
import React from 'react';
import './app.scss';
import './Logo.svg';

import FlightTypeFilter from '../flight-type-filter';
import TicketSearchFilter from '../ticket-search-filter';
import TicketGenerator from '../ticket-generator';

function App() {
  return (
    <div className="App">
      <span className="app-logo">✈</span>
      {/* <img src="./Logo.svg" alt="logo" className="app-logo" /> */}
      <div className="app-components">
        <FlightTypeFilter className="app-type-filter app-components__sidebar" />
        <div className="app-components__mainbar">
          <TicketSearchFilter className="app-search-filter" />
          <TicketGenerator className="app-gemerator" />
        </div>
      </div>
    </div>
  );
}

export default App;
