import React, { useContext } from "react";
import Header from "../components/Header";
import { ABOUT_IMG } from "../utils/contant";
import UserClass from "../components/UserClass";
import Team from "../components/Team";
import UserContext from "../Context/UserContext";

const About = () => {


  const userName = useContext(UserContext)
  console.log(userName);


  return (
    <>
      <div className="about-container">
        About
        <h1>{userName.loggedInUser}</h1>
        <img src={ABOUT_IMG} />
        <UserClass
          name={"Gaurav Rana"}
          location={"New Delhi"}
          jd={"Software Engineer"}
        />
        <Team name={"Saurav Rana"} location={"New Delhi"} jd={"Accountant"} />
      </div>
    </>
  );
};

export default About;
