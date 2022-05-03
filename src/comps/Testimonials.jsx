import React from "react";
import Carousel from "./Carousel";
import CompHeader from "./CompHeader";

const Testimonials = () => {
  return (
    <div className="container-fluid skills p-60">
      <div className="container mt-5 ">
        <CompHeader
          text="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
          title="Testimonials"
        />
        <div className="row ">
          <div className="col-12 testimonials">
            <Carousel />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
