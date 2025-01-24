import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
function SpecialOffer() {
  return (
    <div className="flex max-container gap-10 justify-wrap items-center max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          className="object-contain w-full"
          width={773}
          height={687}
          alt="offer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-3 font-montserrat">
          <Button
            label="Shop now"
            iconUrl={arrowRight}
            className="px-7 flex justify-center items-center text-white bg-coral-red w-48 text-center py-4 rounded-full text-lg gap-3"
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            className="px-7 flex justify-center items-center border w-48 text-center py-4 rounded-full text-lg gap-3"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
