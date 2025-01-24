import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> Quality</span>
          &nbsp;Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button
            label="View details"
            className="
font-montserrat px-7 text-white bg-coral-red w-44 text-center py-4 rounded-full text-lg"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} width={570} height={522} alt="shoe8" />
      </div>
    </div>
  );
};

export default SuperQuality;
