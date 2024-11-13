//TicketGenerator Component
import React from 'react';
import './ticket-generator.scss';

function TicketGenerator() {
  return (
    <div className="ticket-generator">
      <div className="ticket-card">
        <div className="ticket-price">Ticket Price</div>
        <div className="company-logo">Company Logo</div>
        <ul className="ticket-generator-results">
          <li className="destination">Flight Destination</li>
          <li className="destination__departure-arrival-time">Departure & Arrival Time</li>
          <li className="time-in-flight">В ПУТИ</li>
          <li className="time-in-flight__result">Time in Flight</li>
          <li className="flight-change">Flight Change</li>
          <li className="flight-change__place">Flight Change Place</li>
        </ul>
      </div>
    </div>
  );
}

export default TicketGenerator;

// import React from 'react';
// import './ticket-generator.scss';

// function TicketGenerator() {
//   return (
//     <div className="ticket-generator">
//       <div className="ticket-card">
//         <div className="ticket-price">{ticketPrice}</div>
//         <div className="company-logo">{companyLogo}</div>
//         <ul className="ticket-generator-results">
//           <li className="destination">{flightDestination}</li>
//           <li className="destination__departure-arrival-time">{departureArrivalTime}</li>
//           <li className="time-in-flight">В ПУТИ</li>
//           <li className="time-in-flight__result">{timeInFlight}</li>
//           <li className="flight-change">{flightChange}</li>
//           <li className="flight-change__place">{flightChangePlace}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TicketGenerator;
