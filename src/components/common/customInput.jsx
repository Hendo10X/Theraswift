import { BiError } from "react-icons/bi";

const CustomInput = ({
  title,
  type,
  icon,
  iconAlt,
  register,
  italic,
  errorMessge,
  minLen,
  ...otherProps
}) => {
  return (
    <div className="h-[2.8em] sm:h-[3.1em] w-[90%] max-w-[23em]">
      <span
        className={`${italic} font-[500] text-[.7em] sm:text-[.8em] font-poppins`}
      >
        {title}
      </span>
      <div
        className={`flex h-[100%] w-[100%] mx-auto border-[1px] 2xl:rounded-[20px] rounded-[10px] ${
          errorMessge ? "border-[#f00]" : "border-black"
        } `}
      >
        <div className="flex justify-center items-center w-[13%] h-[100%] border-none">
          {icon ? (
            <img
              className="w-[1.5em] h-[1.5em] opacity-50"
              src={icon}
              alt={iconAlt}
            />
          ) : null}
        </div>
        <input
          {...register}
          type={type}
          max={type === "date" ? "2021-12-31" : null}
          required
          className="disabled:opacity-50 disabled:cursor-not-allowed shrink-0 w-[87%] h-[100%] px-3 font-[500] text-[1em] focus:outline-none font-poppins 2xl:rounded-r-[20px] md:rounded-r-[10px]"
          {...otherProps}
        />
      </div>
      {errorMessge && (
        <p className="flex items-center text-[#f00] text-[.8em]">
          <BiError className="text-[1.2em]" />
          {errorMessge}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
