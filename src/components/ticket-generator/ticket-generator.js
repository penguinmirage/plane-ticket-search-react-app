//edit with TicketList induction TicketGenerator component
import React from 'react';
import './ticket-generator.scss';

function TicketGenerator({ price, carrier, segments }) {
  const [outbound, inbound] = segments || [];

  const formatStops = (stops) => (stops.length === 0 ? 'Без пересадок' : `${stops.length} пересадка(и)`);

  return (
    <div className="ticket-generator">
      <div className="ticket-card">
        <div className="ticket-price">{price} ₽</div>
        <div className="company-logo">{carrier}</div>

        {/* Outbound Flight */}
        {outbound && (
          <>
            <ul className="ticket-generator-results">
              <li className="destination">
                {outbound.origin} → {outbound.destination}
              </li>
              <li className="time-in-flight">{formatStops(outbound.stops)}</li>
              <li className="time-in-flight__result">{outbound.duration} мин.</li>
            </ul>
          </>
        )}

        {/* Inbound Flight */}
        {inbound && (
          <>
            <ul className="ticket-generator-results">
              <li className="destination">
                {inbound.origin} → {inbound.destination}
              </li>
              <li className="time-in-flight">{formatStops(inbound.stops)}</li>
              <li className="time-in-flight__result">{inbound.duration} мин.</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default TicketGenerator;

// working 17-11-2024 version, edit TicketGenerator.js
// import React from 'react';
// import './ticket-generator.scss';

// function TicketGenerator() {
//   return (
//     <div className="ticket-generator">
//       <div className="ticket-card">
//         <div className="ticket-price">Цена билета</div>
//         <div className="company-logo">Логотип компании</div>
//         <ul className="ticket-generator-results">
//           <li className="destination">ТУДА</li>
//           <li className="time-in-flight">ВРЕМЯ В ПУТИ</li>
//           <li className="flight-change">ПЕРЕСАДКИ</li>
//         </ul>
//         <ul className="ticket-generator-results">
//           <li className="destination__departure-arrival-time">Время вылета и прибытия</li>
//           <li className="time-in-flight__result">Длительность полета</li>
//           <li className="flight-change__place">Место пересадки</li>
//           <ul className="ticket-generator-results" style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <li className="destination">ОБРАТНО</li>
//             <li className="time-in-flight">ВРЕМЯ В ПУТИ</li>
//             <li className="flight-change">ПЕРЕСАДКИ</li>
//           </ul>
//           <ul className="ticket-generator-results" style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <li className="destination__departure-arrival-time">Время вылета и прибытия</li>
//             <li className="time-in-flight__result">Длительность полета</li>
//             <li className="flight-change__place">Место пересадки</li>
//           </ul>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TicketGenerator;

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
