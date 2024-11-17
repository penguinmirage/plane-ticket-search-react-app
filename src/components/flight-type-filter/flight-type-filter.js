// edited FlightTypeFilter.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleAll, toggleNoChange, toggleOneChange, toggleTwoChanges, toggleThreeChanges } from '../../actions';
import './flight-type-filter.scss';

const FlightTypeFilter = ({
  filters,
  toggleAll,
  toggleNoChange,
  toggleOneChange,
  toggleTwoChanges,
  toggleThreeChanges,
}) => {
  const handleLabelClick = (filterKey, currentState) => {
    switch (filterKey) {
      case 'all':
        toggleAll(!currentState);
        break;
      case 'noChange':
        toggleNoChange(!currentState);
        break;
      case 'oneChange':
        toggleOneChange(!currentState);
        break;
      case 'twoChanges':
        toggleTwoChanges(!currentState);
        break;
      case 'threeChanges':
        toggleThreeChanges(!currentState);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flight-type-filter">
      <ul className="filter__list">
        <li className="filter-item filter-btn">
          <input
            type="checkbox"
            className="filter-checkbox"
            id="all"
            checked={filters.all}
            onChange={(e) => toggleAll(e.target.checked)}
          />
          <label htmlFor="all" className="filter-label" onClick={() => handleLabelClick('all', filters.all)}>
            ВСЕ
          </label>
        </li>
        <li className="filter-item filter-btn">
          <input
            type="checkbox"
            className="filter-checkbox"
            id="no-change"
            checked={filters.noChange}
            onChange={(e) => toggleNoChange(e.target.checked)}
          />
          <label
            htmlFor="no-change"
            className="filter-label"
            onClick={() => handleLabelClick('noChange', filters.noChange)}
          >
            БЕЗ ПЕРЕСАДОК
          </label>
        </li>
        <li className="filter-item filter-btn">
          <input
            type="checkbox"
            className="filter-checkbox"
            id="one-change"
            checked={filters.oneChange}
            onChange={(e) => toggleOneChange(e.target.checked)}
          />
          <label
            htmlFor="one-change"
            className="filter-label"
            onClick={() => handleLabelClick('oneChange', filters.oneChange)}
          >
            1 ПЕРЕСАДКА
          </label>
        </li>
        <li className="filter-item filter-btn">
          <input
            type="checkbox"
            className="filter-checkbox"
            id="two-changes"
            checked={filters.twoChanges}
            onChange={(e) => toggleTwoChanges(e.target.checked)}
          />
          <label
            htmlFor="two-changes"
            className="filter-label"
            onClick={() => handleLabelClick('twoChanges', filters.twoChanges)}
          >
            2 ПЕРЕСАДКИ
          </label>
        </li>
        <li className="filter-item filter-btn">
          <input
            type="checkbox"
            className="filter-checkbox"
            id="three-changes"
            checked={filters.threeChanges}
            onChange={(e) => toggleThreeChanges(e.target.checked)}
          />
          <label
            htmlFor="three-changes"
            className="filter-label"
            onClick={() => handleLabelClick('threeChanges', filters.threeChanges)}
          >
            3 ПЕРЕСАДКИ
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = {
  toggleAll,
  toggleNoChange,
  toggleOneChange,
  toggleTwoChanges,
  toggleThreeChanges,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightTypeFilter);

// // my draw FlightTypeFilter Component

// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { all, noChange, oneChange, twoChanges, threeChanges } from '../../actions';

// import './flight-type-filter.scss';

// const FlightTypeFilter = ({ all, noChange, oneChange, twoChanges, threeChanges }) => {
//   return (
//     <div className="flight-type-filter">
//       <ul className="filter__list">
//         <li className="filter-item filter-btn">
//           <input type="checkbox" className="filter-checkbox" id="all" />
//           <label htmlFor="all" onClick={all} className="filter-label">
//             ВСЕ
//           </label>
//         </li>
//         <li className="filter-item filter-btn">
//           <input type="checkbox" className="filter-checkbox" id="no-change" />
//           <label htmlFor="no-change" onClick={noChange} className="filter-label">
//             БЕЗ ПЕРЕСАДОК
//           </label>
//         </li>
//         <li className="filter-item filter-btn">
//           <input type="checkbox" className="filter-checkbox" id="one-change" />
//           <label htmlFor="one-change" onClick={oneChange} className="filter-label">
//             1 ПЕРЕСАДКА
//           </label>
//         </li>
//         <li className="filter-item filter-btn">
//           <input type="checkbox" className="filter-checkbox" id="two-changes" />
//           <label htmlFor="two-changes" onClick={twoChanges} className="filter-label">
//             2 ПЕРЕСАДКИ
//           </label>
//         </li>
//         <li className="filter-item filter-btn">
//           <input type="checkbox" className="filter-checkbox" id="three-changes" />
//           <label htmlFor="three-changes" onClick={threeChanges} className="filter-label">
//             3 ПЕРЕСАДКИ
//           </label>
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
//   const { all, noChange, oneChange, twoChanges, threeChanges } = bindActionCreators(actions, dispatch);
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FlightTypeFilter);
