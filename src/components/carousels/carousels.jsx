import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 80 + "vh" }}
          src="https://itc.ua/wp-content/uploads/2023/04/p23983959_v_h8_ac.jpg"
          alt="first_logo"
        ></img>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: 80 + "vh" }}
          src="https://www.myvue.com/-/media/images/film%20and%20events/july%202023/carousels/oppenheimer-herom-now.jpg?sc=.99"
          alt="second_logo"
        ></img>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 80 + "vh" }}
          src="https://itc.ua/wp-content/uploads/2023/03/scream-6-cast-jenna-ortega-courteney-cox.jpg"
          alt="third_logo"
        ></img>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
