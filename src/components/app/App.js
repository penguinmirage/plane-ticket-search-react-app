//App Component
import React from 'react';
import './app.scss';
import './Logo.svg';

import FlightTypeFilter from '../flight-type-filter';
import TicketSearchFilter from '../ticket-search-filter';
import TicketGenerator from '../ticket-generator';

function App() {
  return (
    <div className="App">
      <span>Aviasales App</span>
      <img src="./Logo.svg" alt="logo" href="#" className="app-logo" />
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
