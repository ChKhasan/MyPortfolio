import React from "react";
import { dataService } from "../dataObj/dataService";
import CompHeader from "./CompHeader";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="container mt-5 about" id="service">
      <div className="container-fluid  p-60 ">
        <CompHeader title="Services" />
        <div className="row services">
          {dataService.map((item,index) => (
            <ServiceCard {...item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
