import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../common/button";
import { BiEdit, BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Medications = ({ list, onEdit, onDelete, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(list);
  }, [list]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredItems = list
      .reverse()
      .filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );

    setFilteredItems(filteredItems);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-tl overflow-hidden ">
      <div className="flex items-center gap-5 p-5 search-filter">
        <input
          type="text"
          placeholder="Filter Inventory"
          value={searchTerm}
          className="w-full border border-gray-100 focus:border-primary-50 rounded-xl px-5 py-4 outline-none"
          onChange={handleSearch}
        />

        <button
          type="submit"
          className="mx-[-70px] p-3 rounded-full text-primary"
        >
          <AiOutlineSearch />
        </button>
      </div>
      {isLoading && (
        <div className="flex h-[10rem] flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Loading</h1>
          <p>Trying to retrieve medications from database</p>
        </div>
      )}

      {!isLoading && !Boolean(filteredItems.length) && (
        <div className="flex h-[10rem] flex-col items-center justify-center px-5 text-center">
          <h1 className="font-bold text-xl">Nothing to show</h1>
          <p>
            Database returned an empty list. add a medication or refresh page
          </p>
        </div>
      )}

      {filteredItems.slice(0, 5).map((item) => (
        <div
          key={item.id}
          className="flex gap-5 p-5 px-5 border my-1 cursor-pointer rounded-xl mx-5"
        >
          {item.image_url && (
            <figure className="flex overflow-hidden items-center justify-center text-3xl w-[8rem] h-full bg-gray-100 rounded-lg">
              <img
                src={URL.createObjectURL(item.image_url)}
                alt="Uploaded"
                className="mt-2"
              />
            </figure>
          )}
          <div className="flex flex-col items-start justify-center">
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-md capitalize font-bold">{item.name}</h1>
              <h1 className="text-md capitalize font-bold">
                ₦{Number(item.price).toLocaleString()}
              </h1>
            </div>

            <div className="flex gap-5">
              <div className="flex gap-1">
                <span className="text-gray-400">Quantity:</span>
                <span>{item.quantity}</span>
              </div>

              {/* <div className="flex gap-1">
                <span className="text-gray-400">Type:</span>
                <span className="capitalize">{item.}</span>
              </div> */}
            </div>

            <div className="flex gap-2 mt-5">
              {/* <Button
                variant="filled"
                colorScheme="success"
                size="sm"
                icon={<BiEdit />}
                onClick={() => onEdit(item)}
              >
                Edit
              </Button> */}
              {/* <Button
                variant="filled"
                icon={<BiTrash />}
                colorScheme="danger"
                size="sm"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </Button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Medications;

Medications.propTypes = {
  list: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
