import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useCinema } from '../../hooks/useCinema';
import { BookingContext } from '../booking/booking';
import styles from './infoblock.module.css';

export function InfoBlock() {
    const context = useContext(BookingContext);
    const location = useLocation();
    const {state} = useCinema();

    return (<div className={styles.divmain}>
        <div>{location.state.time}</div>
        <div>{location.state.movie + ' \u2022 місце ' + context.tickets.join(", ")}</div>
        <div>{'Ціна ' + (parseInt(state.wholePrice) + context.tickets.length * 100) + ' грн.'}</div>
        {
            state.ticketsBought.length !== 0 ? 
            (
                <ul className={styles.divprevious}>
                    {state.ticketsBought.map((i) => {
                        return <li key={i[5]}>{i}</li>;
                    })}
                </ul>

            )
            :
            ("")
        }
    </div>);
}