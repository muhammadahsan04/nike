import React from "react";
import { star } from "../assets/icons";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center text-center flex-col">
        <h2 className="text-4xl font-semibold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="m-auto mt-4 max-w-lg text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      {/* <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        <div className="flex justify-center items-center flex-col">
          <img src="" alt="" />
          <p>
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className="flex">
            <img src={star} alt="" />
            <p className="text-slate-gray">(4.5)</p>
          </div>
          <h2>Morich Brown</h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src="" alt="" />
          <p>
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className="flex">
            <img src={star} alt="" />
            <p className="text-slate-gray">(4.5)</p>
          </div>
          <h2>Morich Brown</h2>
        </div>
      </div> */}

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
