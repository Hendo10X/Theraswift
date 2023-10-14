const Button = ({
  type,
  children,
  colorScheme,
  variant,
  size,
  onClick,
  isSubmitting,
  isLoading,
  icon,
}) => {
  const getBgColor = () => {
    if (variant === "filled") {
      if (colorScheme === "primary")
        return "bg-primary-50 text-white hover:bg-primary-100 active:bg-primary-200";
      if (colorScheme === "secondary")
        return "bg-green-500 text-white hover:bg-green-600 active:bg-green-700";
      if (colorScheme === "danger")
        return "bg-red-500 text-white hover:bg-red-600 active:bg-red-700";
      if (colorScheme === "success")
        return "bg-green-500 text-white hover:bg-green-600 active:bg-green-700";
      if (colorScheme === "dark")
        return "bg-black text-white hover:bg-gray-900 active:bg-gray-800";
      if (colorScheme === "light")
        return "bg-white text-black hover:bg-gray-200 active:bg-gray-300";
    }

    if (variant === "outlined") {
      if (colorScheme === "primary") return "border ";
      if (colorScheme === "danger") return "border ";
      if (colorScheme === "success")
        return "border border-green-500 hover:bg-green-500 hover:text-white";
      if (colorScheme === "dark")
        return "border border-black hover:bg-black hover:text-white";
      if (colorScheme === "light")
        return "border border-white text-white hover:bg-white hover:text-black";
    }
  };

  const getSize = () => {
    if (size === "sm") return "px-3 py-1.5 text-sm";
    if (size === "md") return "px-5 py-2 text-md";
    if (size === "lg") return "px-7 py-2 text-lg";
    if (size === "xl") return "px-9 py-3 text-lg";
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md ${getBgColor()} ${getSize()}`}
    >
      {isSubmitting && (
        <div className="flex items-center justify-center gap-2">
          <p>processing</p>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white-900"></div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center gap-2">
          <p>Loading</p>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-inherit"></div>
          </div>
        </div>
      )}

      {!isSubmitting && !isLoading && (
        <div className="flex items-center justify-center gap-2">
          <span>{children}</span>
          {icon && <span>{icon}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
