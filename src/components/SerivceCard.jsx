import React from "react";

const SerivceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-[350px] w-full justify-center items-start flex-col px-10 py-16 border shadow-3xl rounded-[20px]">
      <div className="flex justify-center items-center bg-coral-red rounded-full h-[40px] w-[40px]">
        <img src={imgURL} width={24} height={24} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default SerivceCard;
