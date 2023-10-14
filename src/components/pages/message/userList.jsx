import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const UserList = ({ users, onSelectUser, selectedUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(users);
  }, [users]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredItems = users.filter((item) =>
      `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };

  return (
    <div className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[25rem] overflow-y-auto cursor-pointer border-r ">
      <input
        type="search"
        placeholder="Filter Inventory"
        value={searchTerm}
        className="px-3 py-3 outline-none border-b w-full focus:border-green-500"
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`flex items-center justify-start gap-3 py-3 px-5    ${
              selectedUser?.id === user.id && "bg-green-500 "
            } 
           
            `}
          >
            <div
              className={`flex items-center justify-center h-[2.5rem] w-[2.5rem] font-semibold rounded-full text-green-500 bg-gray-100 border ${
                selectedUser?.id === user.id &&
                "border-green-500 bg-green-400 text-white"
              } `}
            >
              {user.firstName[0]}
              {user.lastName[0]}
            </div>
            <h1
              className={`font-semibold text-sm ${
                selectedUser?.id === user.id && "text-white"
              }`}
            >
              {user.firstName} {user.lastName}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object,
  onSelectUser: PropTypes.func,
};
