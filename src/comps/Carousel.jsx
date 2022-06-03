import React from "react";
import Slider from "react-slick";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-4">
      {" "}
      <Slider {...settings}>
        <div>
          <h3>
            <Card />
          </h3>
        </div>
      </Slider>
    </div>
  );
};
const Card = () => {
  return (
    <div className="testimonial-item">
      <p>
        <em>
          <ImQuotesLeft
            style={{ color: "#c3e8fa", fontSize: "20px", marginRight: "6px" }}
          />{" "}
          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam
          tempor noster veniam enim culpa labore duis sunt culpa nulla illum
          cillum fugiat legam esse veniam culpa fore nisi cillum quid.{" "}
          <ImQuotesRight
            style={{ color: "#c3e8fa", fontSize: "20px", marginLeft: "6px" }}
          />
        </em>
      </p>
      <img src="Images/profile-img.jpg" className="testimonial-img" alt="" />
      <h3>Saul Goodman</h3>
      <h4>Store Owner</h4>
    </div>
  );
};

export default Carousel;
