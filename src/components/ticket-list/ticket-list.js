import React from 'react';
import './ticket-list.scss';
import TicketGenerator from '../ticket-generator';
import { useSelector } from 'react-redux';
import LoaderAntd from '../loader-antd';

const TicketList = () => {
  const { tickets, filters, searchFilter, loading } = useSelector((state) => ({
    tickets: state.tickets,
    filters: state.filters,
    searchFilter: state.searchFilter,
    loading: state.loading,
  }));

  // Apply filters to tickets
  const filteredTickets = tickets.filter((ticket) => {
    const stopsCount = ticket.segments[0]?.stops.length + ticket.segments[1]?.stops.length;

    if (filters.all) return true; // If "All" is selected, include all tickets
    if (filters.noChange && stopsCount === 0) return true;
    if (filters.oneChange && stopsCount === 1) return true;
    if (filters.twoChanges && stopsCount === 2) return true;
    if (filters.threeChanges && stopsCount === 3) return true;

    return false;
  });

  // Sort tickets based on the selected search filter
  const sortedTickets = [...filteredTickets].sort((a, b) => {
    switch (searchFilter) {
      case 'CHEAPEST':
        return a.price - b.price; // Sort by price (ascending)
      case 'FASTEST':
        return a.segments[0]?.duration + a.segments[1]?.duration - (b.segments[0]?.duration + b.segments[1]?.duration); // Sort by duration (ascending)
      case 'OPTIMAL':
        // Example of custom sorting logic (adjust as needed)
        return a.price * 0.5 + a.segments[0]?.duration * 0.5 - (b.price * 0.5 + b.segments[0]?.duration * 0.5);
      default:
        return 0;
    }
  });

  if (loading) {
    return <LoaderAntd />;
  }

  if (sortedTickets.length === 0) {
    return <div>No tickets match the selected filters.</div>;
  }

  return (
    <ul className="ticket-list">
      {sortedTickets.map((ticket, index) => (
        <li key={index} className="list-group-item">
          <TicketGenerator {...ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketList;

// working 19-11-2024 TicketList
// import React from 'react';
// import './ticket-list.scss';
// import TicketGenerator from '../ticket-generator';
// import { useSelector } from 'react-redux';
// import LoaderAntd from '../loader-antd';

// const TicketList = () => {
//   const tickets = useSelector((state) => state.tickets);

//   if (!tickets || tickets.length === 0) {
//     return <LoaderAntd />;
//   }

//   return (
//     <ul className="ticket-list">
//       {tickets.map((ticket, index) => (
//         <li key={index} className="list-group-item">
//           <TicketGenerator {...ticket} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TicketList;

//my first draw 18-11-2024 TiketList array
// import React from "react";
// import './ticket-list.scss';
// import TicketGenerator from "../ticket-generator";

// const TicketList = () => {

//   const elements = ticketData.map((item) => {
//     const { id, ...itemProps } = item;
//     return (
//       <li key={id} className="list-group-item">
//         <TicketGenerator {...itemProps} />
//       </li>
//     )
//   };

//   return <ul className="ticket-list">{elements}</ul>

// };

// export default TicketList;
