import { useEffect, useState } from "react";
import Price from "./Price";
import PropertyType from "./PropertyType";
import Delivery from "./Delivery";
import PropertyDetails from "./PropertyDetails";

const SearchBar = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const selectList = ["Price", "Property type", "Delivery", "Property details"];

  const onSelectHanler = (index) => {
    setActiveItemIndex(index);
  };
  const filterClickHandler=()=>{
    setShowAll(true)
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowFilter(true);
    }
  }, []);

  return (
    <div
      className={`grid items-center ${
        showFilter ? "grid-cols-[8fr,2fr] gap-0" : "gap-4"
      }  grid-flow-col w-full px-4 gap-4`}
    >
      <div
        className={`grid grid-cols-[1fr,8fr] border border-gray-300 text-gray-300 rounded-sm overflow-hidden items-center pl-2 lg:pl-4 h-full`}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent w-full lg:px-6 outline-none h-full"
          placeholder="Area, Compound, Developer"
        />
      </div>
      {selectList.map((item, index) => {
        return !showFilter ? (
          <div
            className={`${
              activeItemIndex === index
                ? "text-[#212020] bg-gray-300"
                : "text-gray-300"
            } flex items-center justify-between  border border-gray-300 rounded-sm py-2 px-2 m xl:px-4 cursor-pointer h-full`}
            onClick={() => onSelectHanler(index)}
            key={index}
          >
            <span className="text-xxs lg:text-sm xl:text-base 2xl:text-2xl font-semibold">
              {item}
            </span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        ) : null;
      })}
      {showFilter && (
        <button className="text-lg font-semibold py-1 px-4 text-center w-full text-[#ff3a3a] cursor-pointer"
        onClick={()=>filterClickHandler()}
        >
          Filter
        </button>
      )}
      {(activeItemIndex === 2 || showAll) && (
        <Delivery changeActiveItemIndex={setActiveItemIndex} />
      )}
      {(activeItemIndex === 0 || showAll) && (
        <Price changeActiveItemIndex={setActiveItemIndex} />
      )}
      {(activeItemIndex === 1 || showAll) && (
        <PropertyType changeActiveItemIndex={setActiveItemIndex} />
      )}
      {(activeItemIndex === 3 || showAll) && (
        <PropertyDetails changeActiveItemIndex={setActiveItemIndex} />
      )}
    </div>
  );
};
export default SearchBar;
