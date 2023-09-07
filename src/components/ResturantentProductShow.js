
import { useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE } from "../utils/contant";
import { addItems } from "../Context/cartSlice";

// Component to display restaurant products
const ResturantentProductShow = ({ setShowIndex, ...props }) => {
  const handleClick = () => {
    setShowIndex();
  };

  const dispatch = useDispatch();

  const handleItemClick = (items) => {
    // Dispatch Action
    dispatch(addItems(items));
  };

  return (
    <>
      {/* Main container for each product */}
      <div
        key={props.key}
        onClick={handleClick}
        className="m-auto w-6/12 text-center my-5 bg-white-200 p-3 text-black rounded-lg shadow-xl"
      >
        {/* Header section with product title and dropdown arrow */}
        <div className="flex justify-between items-center cursor-pointer ">
          <h1 className="text-2xl">
            {props?.data?.title} ({props?.data?.itemCards.length})
          </h1>
          <h1>⬇</h1>
        </div>

        {/* List of item cards */}
        <div className="text-left my-3">
          {props.showItems &&
            props?.data?.itemCards.map((items) => {
              // Display each item card with details
              return (
                <div className="my-5 box-border flex justify-between border-b-2 border-indigo-500 py-3">
                  {/* Item details section */}
                  <div className="w-8/12 cursor-pointer">
                    <h2> {items?.card?.info?.name}</h2>
                    <span className="my-5">
                      ₹
                      {items?.card?.info?.finalPrice / 100 ||
                        items?.card?.info?.price / 100 ||
                        items?.card?.info?.defaultPrice / 100}
                    </span>
                    <p className="text-sm my-5">
                      {items?.card?.info?.description}
                    </p>
                  </div>

                  {/* Image section */}
                  <div className="3/12  box-border relative">
                    <img
                      className="rounded-xl"
                      src={MENU_ITEM_IMAGE + items?.card?.info?.imageId}
                    />
                    <button
                      onClick={() => handleItemClick(items)}
                      className="py-3 px-4 bottom-0 left-0 right-0  bg-black text-white absolute rounded-lg  hover:bg-white hover:text-black"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ResturantentProductShow;
