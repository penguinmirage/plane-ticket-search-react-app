//TicketSearchFilter Component
import React from 'react';
import './ticket-search-filter.scss';

function TicketSearchFilter() {
  return (
    <div className="ticket-search-filter">
      <ul className="filter__list">
        <li className="btn filter-btn filter-btn__cheapest">САМЫЙ ДЕШЕВЫЙ</li>
        <li className="btn filter-btn filter-btn__fastest">САМЫЙ БЫСТРЫЙ</li>
        <li className="btn filter-btn filter-btn__optimal">ОПТИМАЛЬНЫЙ</li>
      </ul>
    </div>
  );
}

export default TicketSearchFilter;
