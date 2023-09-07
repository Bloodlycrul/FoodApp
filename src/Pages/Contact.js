import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <div className="m-4">
        <form action="">
        {/*    Name Input      */}
        <div className="flex items-center my-4">
        <label className="ms-8 mx-1">Your Name : </label>
        <input className="border border-black-300 p-1 rounded-lg" type="text" placeholder="Enter Your Name" />
        </div>

        {/*    email  Input      */}
        <div className="flex items-center my-4">
        <label className="ms-8 mx-1">Your Email : </label>
        <input className="border border-black-300 p-1 rounded-lg" type="email" placeholder="Enter Your Email" />
        </div>

         {/*    email  Input      */}
         <div className="flex items-center my-4">
        <label className="ms-8 mx-1">Your Number : </label>
        <input className="border border-black-300 p-1 rounded-lg" type="number" placeholder="Enter Your Number" />
        </div>

        </form>
      </div>
    </>
  );
};

export default Contact;
