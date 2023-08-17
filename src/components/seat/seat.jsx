import { useContext, useEffect, useState } from 'react';
import styles from './seat.module.css';
import IconFree from '../../images/seat-free.png';
import IconOccupied from '../../images/seat-occupied.png';
import IconSelected from '../../images/seat-selected.png';
import { BookingContext } from '../booking/booking';
import { OccupiedSeatContext } from '../room/room';

export const seatStates = ['free', 'occ', 'sel'];

export function Seat (props) {
    const oSeats = useContext(OccupiedSeatContext);
    const ticketContext = useContext(BookingContext);
    const [state, setState] = useState(oSeats.includes(props.id) ? seatStates[1] : seatStates[0]);

    useEffect(() => {
        setState(ticketContext.tickets.includes(props.id) ? seatStates[2] :
            (oSeats.includes(props.id) ? seatStates[1] : seatStates[0] ));
    }, [ticketContext, oSeats]);

    const handleClick = (e) => {
        if (state === seatStates[1]) return;

        if (ticketContext.tickets.legnth === 0) {
            ticketContext.setTickets([props.id]);
        } else {
            const newTickets = ticketContext.tickets.map((e) => e);
            const i = ticketContext.tickets.indexOf(props.id);
            if (i === -1) {
                newTickets.push(props.id);
            } else {
                newTickets.splice(i, 1);
            }
            ticketContext.setTickets(newTickets);
        }
    }

    return (
        <img className={`${styles.oneseat} + ${getStyleByState(state)}`} 
            src={getIconByState(state)}
            onClick={handleClick}/>
    );
}

function getIconByState(state) {
    return (state === seatStates[0] ? IconFree : 
        (state === seatStates[1] ? IconOccupied : IconSelected));
}
function getStyleByState(state) {
    return (state === seatStates[1]) ? styles.occupied : styles.free;
}