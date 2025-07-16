// const Button = ({
//   label,
//   className,
//   iconUrl,
//   imgAlt,
//   backgroundColor,
//   textColor,
//   borderColor,
//   fullWidth
// }) => {
//   return (
//     <div
//       className={`${className} ${
//         backgroundColor
//           ? `${backgroundColor} ${textColor} ${borderColor}`
//           : "bg-coral-red rounded-full text-white border-coral-red"
//       } rounded-full cursor-pointer ${fullWidth && 'w-full'}`}
//     >
//       {label} {iconUrl && <img src={iconUrl} alt={imgAlt} />}
//     </div>
//   );
// };

// export default Button;

import React from 'react';

const Button = ({
  label,
  iconUrl,
  imgAlt,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full transition-all duration-200 hover:scale-105 ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-coral-red/90"
        } ${fullWidth && "w-full"} ${className}`}
      {...props}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt={imgAlt || "icon"}
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
