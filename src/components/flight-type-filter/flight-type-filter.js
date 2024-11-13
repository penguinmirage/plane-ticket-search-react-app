// FlightTypeFilter Component
import React from 'react';
import './flight-type-filter.scss';

function FlightTypeFilter() {
  return (
    <div className="flight-type-filter">
      <ul className="filter__list">
        <li className="filter-item">
          <input type="checkbox" className="filter-checkbox" id="all" />
          <label htmlFor="all" className="filter-label">
            ВСЕ
          </label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="filter-checkbox" id="no-change" />
          <label htmlFor="no-change" className="filter-label">
            БЕЗ ПЕРЕСАДОК
          </label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="filter-checkbox" id="one-change" />
          <label htmlFor="one-change" className="filter-label">
            1 ПЕРЕСАДКА
          </label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="filter-checkbox" id="two-changes" />
          <label htmlFor="two-changes" className="filter-label">
            2 ПЕРЕСАДКИ
          </label>
        </li>
        <li className="filter-item">
          <input type="checkbox" className="filter-checkbox" id="three-changes" />
          <label htmlFor="three-changes" className="filter-label">
            3 ПЕРЕСАДКИ
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FlightTypeFilter;
