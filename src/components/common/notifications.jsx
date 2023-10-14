import { useState } from "react";
import { FaEnvelope, FaBell, FaReceipt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const list = [
    {
      id: 1,
      date: new Date(),
      category: "order",
      user: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 2,
      date: new Date(),
      category: "message",
      user: {
        id: 1,
        name: "John Doe",
      },
    },
  ];

  const getMessage = (item) => {
    if (item.category === "order") return `A new order from ${item.user.name}`;
    if (item.category === "message")
      return `You've got a new message from ${item.user.name}`;
  };

  const getCategoryColor = (category) => {
    if (category === "message") return "bg-blue-400";
    if (category === "order") return "bg-red-400";
  };

  const handleClickNotification = (category) => {
    if (category === "message") navigate(`/message/${""}`);
    if (category === "order") navigate(`/dispense/${""}`);
  };

  return (
    <div className="flex items-center justify-center relative cursor-pointer">
      <button
        className="z-10"
        onClick={() => {
          if (show) return setShow(false);
          return setShow(true);
        }}
      >
        <FaBell />
        {Boolean(list.length) && (
          <span className="absolute bg-red-500 px-1 rounded-full text-sm top-[-5px] right-[-10px] font-bold">
            {list.length}
          </span>
        )}
      </button>

      {show && (
        <aside className="absolute top-[-5px] z-0 right-0 py-8">
          <div className="bg-white text-black h-[30rem] w-[25rem] shadow-xl rounded-lg overflow-y-auto">
            {list.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickNotification(item.category)}
                className="flex flex-col gap-2 p-5 items-start hover:bg-gray-50"
              >
                <span
                  className={`text-white rounded-lg py-[1px]  px-2 ${getCategoryColor(
                    item.category
                  )} capitalize flex gap-2 items-center`}
                >
                  {item.category}
                  {item.category === "message" ? (
                    <FaEnvelope size=".8rem" />
                  ) : (
                    <FaReceipt size=".8rem" />
                  )}
                </span>
                <p className="text-sm text-gray-500">{getMessage(item)}</p>
              </div>
            ))}

            {Boolean(!list.length) && (
              <div className="flex flex-col h-full w-full items-center text-gray-400 justify-center">
                <h1>No notifications yet.</h1>
              </div>
            )}
          </div>
        </aside>
      )}
    </div>
  );
};

export default Notifications;
