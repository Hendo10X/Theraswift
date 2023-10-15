import { Flex, Text, Spinner } from "@chakra-ui/react";

const Button = ({
  variant,
  isLoading,
  type,
  color,
  children,
  size,
  onClick,
}) => {
  let bgColor = "bg-white";
  let borderColor = "border-gray-300";
  let textColor = "text-gray-700";
  let hover = "";

  if (variant === "filled") {
    if (color === "danger") {
      bgColor = "bg-red-500";
      borderColor = "border-red-500";
      textColor = "text-white";
      hover = "hover:bg-red-600";
    } else if (color === "success") {
      bgColor = "bg-green-500";
      borderColor = "border-green-500";
      textColor = "text-white";
      hover = "hover:bg-green-600";
    } else if (color === "black") {
      bgColor = "bg-black";
      borderColor = "border-black";
      textColor = "text-white";
      hover = "hover:bg-gray-600";
    }
  } else if (variant === "outlined") {
    if (color === "danger") {
      borderColor = "border-red-500";
      textColor = "text-red-500";
      hover = "hover:bg-red-500";
    } else if (color === "success") {
      borderColor = "border-green-500";
      textColor = "text-green-500";
      hover = "hover:bg-green-500";
    } else if (color === "black") {
      borderColor = "border-black";
      textColor = "text-black";
      hover = "hover:bg-black hover:text-white";
    }
  }

  return (
    <button
      type={type}
      className={`inline-flex text-center items-center px-7 py-3 border ${borderColor} ${bgColor} ${textColor} ${hover} font-semibold text-sm capitalized tracking-wider focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors ease-in-out duration-200`}
      onClick={onClick}
    >
      {isLoading ? (
        <Flex gap="2">
          <Spinner w="1rem" h="1rem" />
          <Text>Submitting</Text>
        </Flex>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
