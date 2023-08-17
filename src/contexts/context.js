import { createContext, useCallback, useEffect, useState } from "react";
import { getFilmsConfig, getPersonsConfig } from "../config/api";
import { sessionsVariants } from "../config/sessionInputs";

export const CinemaContext = createContext();

export const CinemaContextProvider = ({ children }) => {
  const [state, setState] = useState({
    persons: [],
    films: [], //in this array we store session info for all sessions and selected session
    ticketsBought: [], //tickets that were bought earlier
    wholePrice: 0, //whole price of tickets were bought earlier
    wholePrice: 0, //whole price of tickets were bought earlier
  });

  const [selectedPerson, setSelectedPerson] = useState(() => {
    const savedData = localStorage.getItem("myDataP");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [selectedFilm, setSelectedFilm] = useState(() => {
    const savedData = localStorage.getItem("myDataF");
    return savedData ? JSON.parse(savedData) : null;
  });

  const getPersons = useCallback(async () => {
    await fetch("https://api.themoviedb.org/3/person/popular", getPersonsConfig)
      .then((response) => response.json())
      .then((response) => {
        setState((prev) => ({ ...prev, persons: response.results }));
      })
      .catch((err) => console.error(err));
  }, []);

  const getFilms = useCallback(async () => {
    await fetch("https://api.themoviedb.org/3/discover/movie", getFilmsConfig)
      .then((response) => response.json())
      .then((response) => {
        const films = response.results;
        //Here the random sessions are added to each film
        addSessions(films);
        setState((prev) => ({ ...prev, films: films }));
      })
      .catch((err) => console.error(err));
  }, []);
  const selectPerson = (person) => {
    localStorage.setItem("myDataP", JSON.stringify(person));
    setSelectedPerson(person);
  };
  const selectFilm = (film) => {
    localStorage.setItem("myDataF", JSON.stringify(film));
    setSelectedFilm(film);
  };

  useEffect(() => {
    getPersons();
    getFilms();
  }, []);

  return (
    <CinemaContext.Provider
      value={{
        state,
        setState,
        getFilms,
        getPersons,
        selectedFilm,
        selectFilm,
        selectPerson,
        selectedPerson,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

//Add random session to each film
function addSessions(films) {
  films.map((f) => {
    f.sessions = getRandomSession();
    f.selectedSession = f.sessions[0];
  });
}
//Generate array of random sessions
function getRandomSession() {
  let i = 0;
  return sessionsVariants.filter((s) => {
    const res = Math.floor(Math.random() * 2) === 1;
    if (res) i++;
    return res && i <= 4;
  });
}
