import { BiXCircle, BiCheckCircle, BiInfoCircle } from "react-icons/bi";

const Toast = ({ type, message }) => {
  let icon = null;
  let bgColor = "";

  switch (type) {
    case "success":
      icon = <BiCheckCircle className="text-green-500 w-6 h-6" />;
      bgColor = "bg-green-100";
      break;
    case "error":
      icon = <BiXCircle className="text-red-500 w-6 h-6" />;
      bgColor = "bg-red-100";
      break;
    case "info":
      icon = <BiInfoCircle className="text-blue-500 w-6 h-6" />;
      bgColor = "bg-blue-100";
      break;
    default:
      break;
  }

  if (message)
    return (
      <div
        className={`fixed bottom-10 right-10 p-4 rounded-lg shadow-lg ${bgColor}`}
      >
        <div className="flex items-start">
          <div className="mr-2">{icon}</div>
          <div className="flex-1">
            <p className="font-medium">{message}</p>
          </div>
        </div>
      </div>
    );

  return "";
};

export default Toast;
