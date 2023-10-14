import PropTypes from "prop-types";

const MessageView = ({ messages }) => {
  return (
    <div className="h-[19.8rem] overflow-y-auto p-5 px-20">
      <ul className={`flex flex-col gap-2`}>
        {messages?.map((message, index) => (
          <li
            key={index}
            className={`px-3 py-2 rounded-xl 
             ${
               message.admin
                 ? "self-end bg-green-500 text-white"
                 : "self-start bg-gray-50"
             }`}
          >
            {message.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageView;

MessageView.propTypes = {
  messages: PropTypes.array,
};
