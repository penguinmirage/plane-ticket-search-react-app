//edit with TicketList induction TicketGenerator component
import React from 'react';
import PropTypes from 'prop-types';
import './ticket-generator.scss';
import { add } from 'date-fns';

function TicketGenerator({ price, carrier, segments }) {
  const [outbound, inbound] = segments || [];

  const formatStops = (stops) => (stops.length === 0 ? 'Без пересадок' : `${stops.length} пересадка(и)`);
  const stopsAsString = (stops) => stops.join(', ');

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
  };

  const calculateArrivalTime = (departure, duration) => {
    const departureDate = new Date(departure);
    const arrivalDate = add(departureDate, { minutes: duration });
    return formatTime(arrivalDate);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
  };

  const formatDepartureArrival = (departure, duration) => {
    const departureTime = formatTime(departure);
    const arrivalTime = calculateArrivalTime(departure, duration);
    return `${departureTime} – ${arrivalTime}`;
  };

  return (
    <div className="ticket-generator">
      <div className="ticket-card">
        <div className="ticket-price">{price} р.</div>
        <div className="company-logo">
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>

        {outbound && (
          <>
            <ul className="ticket-generator-results">
              <li className="destination">
                {outbound.origin} → {outbound.destination}
              </li>
              <li className="time-in-flight">В ПУТИ</li>
              <li className="flight-change">{formatStops(outbound.stops)}</li>
            </ul>
            <ul className="ticket-generator-results">
              <li className="destination__departure-arrival-time">
                {formatDepartureArrival(outbound.date, outbound.duration)}
              </li>
              <li className="time-in-flight__result">{formatDuration(outbound.duration)}</li>
              <li className="flight-change__place">{stopsAsString(outbound.stops)}</li>
            </ul>
          </>
        )}

        {inbound && (
          <>
            <ul className="ticket-generator-results">
              <li className="destination">
                {inbound.origin} → {inbound.destination}
              </li>
              <li className="time-in-flight">В ПУТИ</li>
              <li className="flight-change">{formatStops(inbound.stops)}</li>
            </ul>
            <ul className="ticket-generator-results">
              <li className="destination__departure-arrival-time">
                {formatDepartureArrival(inbound.date, inbound.duration)}
              </li>
              <li className="time-in-flight__result">{formatDuration(inbound.duration)}</li>
              <li className="flight-change__place">{stopsAsString(inbound.stops)}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

TicketGenerator.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      stops: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

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
