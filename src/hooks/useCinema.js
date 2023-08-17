import { useContext, useEffect } from "react";
import { CinemaContext } from "../contexts/context";

export const useCinema = () => {
  const {
    state,
    setState,
    getFilms,
    getPersons,
    selectedFilm,
    selectFilm,
    selectPerson,
    selectedPerson,
  } = useContext(CinemaContext);

  return {
    state,
    setState,
    getFilms,
    getPersons,
    selectFilm,
    selectedFilm,
    selectPerson,
    selectedPerson,
  };
};
