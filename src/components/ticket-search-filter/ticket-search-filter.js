//edited TicketSearchFilter.js
import React from 'react';
import { connect } from 'react-redux';
import { cheapest, fastest, optimal } from '../../actions';

import './ticket-search-filter.scss';

const TicketSearchFilter = ({ cheapest, fastest, optimal }) => {
  return (
    <div className="ticket-search-filter">
      <ul className="filter__list">
        <li onClick={cheapest} className="btn filter-btn filter-btn__cheapest">
          САМЫЙ ДЕШЕВЫЙ
        </li>
        <li onClick={fastest} className="btn filter-btn filter-btn__fastest">
          САМЫЙ БЫСТРЫЙ
        </li>
        <li onClick={optimal} className="btn filter-btn filter-btn__optimal">
          ОПТИМАЛЬНЫЙ
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  cheapest,
  fastest,
  optimal,
};

export default connect(null, mapDispatchToProps)(TicketSearchFilter);

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
