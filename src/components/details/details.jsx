import { Header } from "../header/header";
import "./details.css";
import { useCinema } from "../../hooks/useCinema";

export function Details() {
  const { state, setState, selectedPerson } = useCinema();

  return (
    <>
      <Header />
      <div key={selectedPerson?.id} className="content">
        <div>
          <div className="top_info">
            <div className="img_star">
              <img
                src={`https://www.themoviedb.org/t/p/w470_and_h470_face${selectedPerson?.profile_path}`}
                alt=""
              />
            </div>
            <div className="name_star">{selectedPerson?.name}</div>
          </div>
          <div className="bottom_info">
            {selectedPerson?.known_for.map((el) => (
              <div className="deskription">
                <div className="film_img">
                  {" "}
                  <img
                    src={`https://www.themoviedb.org/t/p/w470_and_h470_face${el.poster_path}`}
                    alt=""
                  />{" "}
                </div>
                <div className="deskription_text">
                  <div className="title">{el.title}</div>
                  <div>{el.overview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
