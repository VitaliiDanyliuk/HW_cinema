import { Header } from "../header/header";
import "./detailsFilm.css";
import { Session } from "../session/session";
import { useCinema } from "../../hooks/useCinema";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function DetailsFilms() {
  const { state, getFilms, getPersons, selectedFilm } = useCinema();

  return (
    <>
      <Header />
      <div className="container_films">
        <div
          className="contents"
          key={selectedFilm?.id}
          style={{
            backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${selectedFilm?.backdrop_path})`,
          }}
        >
          <div className="top_inf">
            <div className="poster_img">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${selectedFilm?.poster_path}`}
                alt=""
              />
            </div>
            <div className="fon_text">
              <div className="title_films">{selectedFilm?.original_title}</div>
              <div className="to_book">
                <div className="rating">⭐ {selectedFilm?.vote_average}</div>
                <Link
                  to={"/booking"}
                  state={{
                    time: selectedFilm?.selectedSession,
                    movie: selectedFilm?.original_title,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <button>to book</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom_inf">
            <div className="text">
              <div className="overview"> Overview:</div>
              <div> {selectedFilm?.overview}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sessions">
        <div className="block_time">
          <div className="time_book">Сеанси:</div>
          <div className="time">
            <Session film={selectedFilm} />
            <div className="btn_register">
              <Link
                to={"/booking"}
                state={{
                  time: selectedFilm?.selectedSession,
                  movie: selectedFilm?.original_title,
                }}
                style={{ textDecoration: "none" }}
              >
                <button>to book</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
