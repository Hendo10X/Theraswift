import PropTypes from "prop-types";

const list = [
  {
    id: 1,
    label: "Prescription",
    path: "prescription",
  },
  {
    id: 2,
    label: "Non-prescription/essentials",
    path: "essential",
  },
];

const Navigation = ({ tab, setTab }) => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-2 bg-primary-100 justify-between mb-10 rounded-full overflow-hidden">
      {list.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <button
          key={item.id}
          type="button"
          onClick={() => setTab(item.path)}
          className={`text-white text-sm font-semibold p-3 px-8 cursor-pointer hover:text-white ${
            tab === item.path && "bg-green-500"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
Navigation.propTypes = {
  tab: PropTypes.string,
  setTab: PropTypes.func,
};
