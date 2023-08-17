import { useCinema } from "../../hooks/useCinema";
import "./session.css";

export function Session({ film }) {
  const { state, setState } = useCinema();

  return (
    <>
      <div className="session_time">
        <form>
          {film?.sessions?.map((s) => (
            <div key={film?.id + Math.random() * 10}>
              <input
                type="radio"
                id={s}
                name={s}
                value={s}
                checked={film?.selectedSession === s}
                onChange={() => {
                  const newFilms = state.films.map((f) => {
                    if (f.id === film?.id) {
                      f.selectedSession = s;
                    }
                    return f;
                  });

                  setState((prev) => ({
                    ...prev,
                    films: newFilms,
                  }));
                }}
              />
              <label htmlFor={s}>{s}</label>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
