// edit TicketGenerator.js
import React from 'react';
import './ticket-generator.scss';

function TicketGenerator() {
  return (
    <div className="ticket-generator">
      <div className="ticket-card">
        <div className="ticket-price">Цена билета</div>
        <div className="company-logo">Логотип компании</div>
        <ul className="ticket-generator-results">
          <li className="destination">Место назначения</li>
          <li className="time-in-flight">В ПУТИ</li>
          <li className="flight-change">Пересадки</li>
        </ul>
        <ul className="ticket-generator-results">
          <li className="destination__departure-arrival-time">Время вылета и прибытия</li>
          <li className="time-in-flight__result">Длительность полета</li>
          <li className="flight-change__place">Место пересадки</li>
        </ul>
      </div>
    </div>
  );
}

export default TicketGenerator;

// // my draw TicketGenerator Component
// import React from 'react';
// import './ticket-generator.scss';

// function TicketGenerator() {
//   return (
//     <div className="ticket-generator">
//       <div className="ticket-card">
//         <div className="ticket-price">ticketPrice</div>
//         <div className="company-logo">companyLogo</div>
//         <ul className="ticket-generator-results">
//           <li className="destination">flightDestination</li>
//           <li className="destination__departure-arrival-time">departureArrivalTime</li>
//           <li className="time-in-flight">В ПУТИ</li>
//           <li className="time-in-flight__result">timeInFlight</li>
//           <li className="flight-change">flightChange</li>
//           <li className="flight-change__place">flightChangePlace</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TicketGenerator;
