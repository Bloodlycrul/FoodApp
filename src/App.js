import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./Context/UserContext";
import appStore from './Context/appStore';
import { Provider } from "react-redux";

function App() {

  // Define Variable

  const [userInfo, setUserInfo] = useState();

  // Auth 

  useEffect(()=>{
    const data = {
      name : 'Gaurav Rana'
    }
    setUserInfo(data.name)
  },[])




  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userInfo, setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
