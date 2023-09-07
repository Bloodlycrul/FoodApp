import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useResturantentMenu";
import ResturantentProductShow from "./ResturantentProductShow";
import { useState } from "react";

const ResturantentMenu = () => {
  // Calling Hooks Here
  const { resId } = useParams();
  const menuItem = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  // Shimmer Ui If there Is no Data
  if (menuItem === null) return <Shimmer />;

  // Destructure All the Object Values Here
  const { name, cuisines, areaName, city, id } =
    menuItem?.data?.cards[0]?.card?.card?.info;

  const catagorites =
    menuItem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <>
      <div className="text-center p-3" key={id}>
        <h1 className=" font-bold text-2xl">{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>
          {areaName}, {city}
        </p>
      </div>

      <div key={menuItem.sid} className="flex flex-wrap gap-3">
        {catagorites.map((item, index) => {
          return (
            <ResturantentProductShow
              key={item.card.card.title}
              data={item.card.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={()=> setShowIndex(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ResturantentMenu;

// "fef2620930104907b395735477b25389"
