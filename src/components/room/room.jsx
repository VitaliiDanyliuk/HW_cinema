import { createContext, useEffect, useState } from 'react';
import { EmptySeat } from '../emptyseat/emptyseat';
import { Seat, seatStates } from '../seat/seat';
import styles from './room.module.css';

export const OccupiedSeatContext = createContext();

export function Room() {
    const [oSeats, setOSeats] = useState([]);
    let id = 0;

    useEffect(() => {
        setOSeats(generateOccupiedSeats(id));
    }, []);

    return (<OccupiedSeatContext.Provider value={oSeats}>
        <div className={styles.main}>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <EmptySeat/>
            <EmptySeat/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <EmptySeat/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
        <EmptySeat/>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
        <div className={styles.row}>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
            <Seat id={++id}/>
        </div>
    </div>
    </OccupiedSeatContext.Provider>
    );
}

function generateOccupiedSeats(count) {
    const oSeats = [];
    const length = Math.floor(count * 0.3);
    for (let index = 0; index < length; index++) {
        oSeats.push(Math.floor(Math.random() * count));        
    }
    return oSeats;
}