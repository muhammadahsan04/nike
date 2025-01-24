const Button = ({
  label,
  className,
  iconUrl,
  imgAlt,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  return (
    <div
      className={`${className} ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red rounded-full text-white border-coral-red"
      } rounded-full cursor-pointer ${fullWidth && 'w-full'}`}
    >
      {label} {iconUrl && <img src={iconUrl} alt={imgAlt} />}
    </div>
  );
};

export default Button;
