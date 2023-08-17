import { Header } from "../header/header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./mainPage.css";
import { Session } from "../session/session";
import { useCinema } from "../../hooks/useCinema";
import ControlledCarousel from "../carousels/carousels";

export function MainPage() {
  const { state, setState, selectFilm, selectPerson, selectedPerson } =
    useCinema();

  return (
    <div className="main">
      <Header />
      <ControlledCarousel />
      {/* <div className="screen">
        <div className="front">
          <h1>CINEMA REACT</h1>
          <div>
            In the year 2092, space is full of dangerous floating garbage like
            discarded satellites and deserted spaceships. The crew of a space
            junk collector ship called The Victory discovers a humanoid robot
            that’s known to be a weapon of mass destruction. They get involved
            in a risky business deal and travel through space looking for
            garbage they can make money off of while also competing with rival
            junk collectors.
          </div>
        </div>
      </div> */}
      <div className="container_person">
        <div className="content_prsn">
          {state.persons?.length > 0 &&
            state.persons.map((el) => (
              <div key={el.id} className="card_prs">
                <img
                  src={`https://www.themoviedb.org/t/p/w470_and_h470_face${el.profile_path}`}
                  alt=""
                />
                <div className="name">{el.name}</div>
                <Link to={{ pathname: "/details" }}>
                  <button
                    onClick={() => {
                      selectPerson(el);
                    }}
                  >
                    Details
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="container_movie">
        <div className="content_flm">
          {state.films?.length > 0 &&
            state.films.map((el) => (
              <div key={el.id} className="card_flm">
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                  alt=""
                />
                <div className="part_card">
                  <div className="name_film_card">
                    <div className="original_title">{el.original_title}</div>
                    <div className="original_title">{el.release_date}</div>
                  </div>
                  <Session film={el} />
                  <Link to={{ pathname: "/detailsFilm" }}>
                    <button
                      onClick={() => {
                        selectFilm(el);
                      }}
                    >
                      Forward
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
