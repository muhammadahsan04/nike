import React from "react";
import { services } from "../constants";
import SerivceCard from "../components/SerivceCard";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <SerivceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
