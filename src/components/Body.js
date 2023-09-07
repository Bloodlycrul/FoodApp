// Importing necessary modules and components
import React, { useContext } from "react";
import ResturantentCard, {
  PromotedResturantentCard,
} from "./ResturantenetCard";
import { useEffect, useState } from "react";
import { IMG_LINK } from "../utils/contant";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../Context/UserContext";

// Body component
function Body() {
  // State for the list of restaurants
  const [restaurantList, setRestaurantList] = useState([]);
  // State for filtered data
  const [filterData, setFilterData] = useState([]);
  // State for search input
  const [searchItem, setSearchItem] = useState("");
  // Custom hook to check user's online status
  const userStatus = useUserStatus();
  // Higher order component for promoted restaurants
  const PromotedCard = PromotedResturantentCard(ResturantentCard);
  // Context for user information
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  // Function to fetch restaurant data
  const data = async () => {
    try {
      let api = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let json = await api.json();
      setRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect to call the data function on component mount
  useEffect(() => {
    data();
  }, []);

  // Return offline message if user is offline
  if (userStatus === false) return <h1>Looks like you are offline</h1>;

  // Return shimmer effect if restaurant list is not loaded
  return !restaurantList || !restaurantList.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        {/* Search bar */}
        <div className="search-bar text-center">
          <input
            type="search"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            placeholder="Search Your Fav Resturantent Here"
          />
          <button className="mx-4 bg-black p-2 text-white rounded-lg"
            onClick={() => {
              const filter = filterData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase());
              });
              setRestaurantList(filter);
            }}
          >
            Search
          </button>
        </div>

        {/* Live Name change input */}
        <div>
          <input
            className="border border-black m-3"
            placeholder="User Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div>
        {/* Displaying list of restaurants */}
        <div className="card-container">
          {restaurantList.map((res) => {
            return (
              <div className="resturant" key={res.info.id}>
                <Link to={"/resturent/" + res.info.id}>
                  {res.info.avgRating > 4 ? (
                    <PromotedCard
                      name={res.info.name}
                      image={`${IMG_LINK}${res.info.cloudinaryImageId}`}
                      cusine={res.info.cuisines.join(", ")}
                      costForTwo={res.info.costForTwo}
                      rating={res.info.avgRatingString}
                      delivery={res.info.sla.slaString}
                    />
                  ) : (
                    <ResturantentCard
                      name={res.info.name}
                      image={`${IMG_LINK}${res.info.cloudinaryImageId}`}
                      cusine={res.info.cuisines.join(", ")}
                      costForTwo={res.info.costForTwo}
                      rating={res.info.avgRatingString}
                      delivery={res.info.sla.slaString}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Exporting the Body component
export default Body;
