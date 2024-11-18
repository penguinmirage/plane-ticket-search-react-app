//TicketList
import React from 'react';
import './ticket-list.scss';
import TicketGenerator from '../ticket-generator';
import { useSelector } from 'react-redux';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets);

  return (
    <ul className="ticket-list">
      {tickets.map((ticket, index) => (
        <li key={index} className="list-group-item">
          <TicketGenerator {...ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketList;

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
