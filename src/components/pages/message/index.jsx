import { useState } from "react";
import UserList from "./userList";
import MessageForm from "./messageForm";
import MessageView from "./messageView";
import { BiEnvelope } from "react-icons/bi";

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    messages: [
      {
        id: new Date().getTime(),
        timestamp: new Date(),
        body: "Hello!",
      },
      {
        id: new Date().getTime(),
        admin: true,
        timestamp: new Date(),
        body: "How are you doing?",
      },
      {
        id: new Date().getTime(),
        timestamp: new Date(),
        body: "I'm doing fine thank you.",
      },
      {
        id: new Date().getTime(),
        admin: true,
        timestamp: new Date(),
        body: "I called you earlier",
      },
    ],
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Jane",
    messages: [
      {
        id: new Date().getTime(),
        timestamp: new Date(),
        body: "Mr. Abdullahi 😊",
      },
      {
        id: new Date().getTime(),
        admin: true,
        timestamp: new Date(),
        body: "Have you gotten your package?",
      },
      {
        id: new Date().getTime(),
        timestamp: new Date(),
        body: "Yeap. thanks",
      },
      {
        id: new Date().getTime(),
        admin: true,
        timestamp: new Date(),
        body: "Alright, Cheers!",
      },
    ],
  },
];

const Message = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    // Here you can handle sending the message to the selected user
    setMessages([...messages, message]);
  };

  return (
    <div className="bg-primary-50 pb-10">
      <div
        className="rounded-md overflow-hidden mx-auto w-[90%] grid pb-10 h-[25rem] bg-white"
        style={{ gridTemplateColumns: "15rem 1fr" }}
      >
        <UserList
          users={users}
          selectedUser={selectedUser}
          onSelectUser={handleSelectUser}
        />
        <div>
          {!selectedUser && (
            <div className="h-full text-gray-600 flex flex-col items-center justify-center text-center gap-2">
              <BiEnvelope fontSize="30" />
              <h1 className="text-xl font-bold">Select a User.</h1>
              <p className="w-[50ch] text-sm">
                Select a user to send a message and see previous messages.
              </p>
            </div>
          )}
          {selectedUser && (
            <div
              className="grid h-full "
              style={{ gridTemplateRows: "max-content max-content" }}
            >
              <MessageView messages={selectedUser.messages} />
              <MessageForm onSubmit={handleSendMessage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
