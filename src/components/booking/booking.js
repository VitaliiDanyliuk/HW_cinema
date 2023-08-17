import styles from './booking.module.css';
import Calendar from '../../images/calendar-btn.png';
import Screen from '../../images/screen.png';
import { Room } from '../room/room';
import { InfoBlock } from '../infoblock/infoblock';
import { createContext, useState } from 'react';
import { useCinema } from '../../hooks/useCinema';
import { useNavigate } from 'react-router-dom';

export const BookingContext = createContext();

function App() {
  const [tickets, setTickets] = useState([]);
  const value = { tickets, setTickets };
  const {state, selectedFilm, setState} = useCinema();
  const navigate = useNavigate();

  const saveTickets = (e) => {
    if (tickets.length === 0) {
      alert("No place is selected!");
    } else {
      let ticketInfo = "";
      setState((prev) => {
        const newTickets = prev.ticketsBought;
        ticketInfo = `${selectedFilm?.original_title} at ${selectedFilm?.selectedSession} ${tickets}`
        newTickets.push(ticketInfo);

        return {
          ...prev,
          ticketsBought: newTickets,
          wholePrice: prev.wholePrice + tickets.length * 100
        }
      });
      alert(`You have bought tickets for ${ticketInfo}!`);
      navigate(-1);
    }
  }

  return (<BookingContext.Provider value={value}>
    <div className={styles.divmain}>
      <div className={styles.content_wrap}>
        <header className={styles.header}>
          <div></div>
          <div>Оберіть місця</div>
          <img src={Calendar}/>
        </header>
        <img src={Screen} />
        <Room/>
        <div className={styles.legend}>
          <div>Вільно</div>
          <div>Зайнято</div>
          <div>Обрано</div>
        </div>
      </div>
      <footer className={styles.info_block}>
        <div className={styles.btn_buy} 
          onClick={saveTickets}>
            Купити
          </div>
        <InfoBlock />
      </footer>
    </div>
    </BookingContext.Provider>
  );
}

export default App;
