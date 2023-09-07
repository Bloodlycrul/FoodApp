import { MENU_API } from "./contant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [menuItem, setMenuItem] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);
        const json = await response.json();
        setMenuItem(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
      }
    };
    return menuItem;
  };

export default useRestaurantMenu;
