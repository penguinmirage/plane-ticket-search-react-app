//edited TicketSearchFilter.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cheapest, fastest, optimal } from '../../actions';
import './ticket-search-filter.scss';

const TicketSearchFilter = ({ searchFilter, cheapest, fastest, optimal }) => {
  return (
    <div className="ticket-search-filter">
      <ul className="filter__list">
        <li
          onClick={cheapest}
          className={`btn filter-btn filter-btn__cheapest ${searchFilter === 'CHEAPEST' ? 'filter-btn__active' : ''}`}
        >
          САМЫЙ ДЕШЕВЫЙ
        </li>
        <li
          onClick={fastest}
          className={`btn filter-btn filter-btn__fastest ${searchFilter === 'FASTEST' ? 'filter-btn__active' : ''}`}
        >
          САМЫЙ БЫСТРЫЙ
        </li>
        <li
          onClick={optimal}
          className={`btn filter-btn filter-btn__optimal ${searchFilter === 'OPTIMAL' ? 'filter-btn__active' : ''}`}
        >
          ОПТИМАЛЬНЫЙ
        </li>
      </ul>
    </div>
  );
};

TicketSearchFilter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  cheapest: PropTypes.func.isRequired,
  fastest: PropTypes.func.isRequired,
  optimal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchFilter: state.searchFilter,
});

const mapDispatchToProps = {
  cheapest,
  fastest,
  optimal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketSearchFilter);
// // my draw TicketSearchFilter Component
// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { cheapest, fastest, optimal } from '../../actions';

// import './ticket-search-filter.scss';

// const TicketSearchFilter = ({ cheapest, fastest, optimal }) => {
//   return (
//     <div className="ticket-search-filter">
//       <ul className="filter__list">
//         <li onClick={cheapest} className="btn filter-btn filter-btn__cheapest">
//           САМЫЙ ДЕШЕВЫЙ
//         </li>
//         <li onClick={fastest} className="btn filter-btn filter-btn__fastest">
//           САМЫЙ БЫСТРЫЙ
//         </li>
//         <li onClick={optimal} className="btn filter-btn filter-btn__optimal">
//           ОПТИМАЛЬНЫЙ
//         </li>
//       </ul>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     FlightTypeFilter: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   const { cheapest, fastest, optimal } = bindActionCreators(actions, dispatch);
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TicketSearchFilter);
