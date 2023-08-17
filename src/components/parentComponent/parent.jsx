import { MainPage } from "../mainPage/mainPage";
import { Details } from "../details/details";
import { DetailsFilms } from "../detailsFilm/detailsFilm";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Booking from "../booking/booking";

export function ParentComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/detailsFilm" element={<DetailsFilms />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
