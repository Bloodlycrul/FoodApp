import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="my-4 text-center font-bold text-2xl">This is the contact Us Page</h1>
      <div className=" m-auto flex items-center mt-4">
        <form action="">
          {/*    Name Input      */}
          <div className="flex items-center my-4">
            <label className="ms-8 mx-1">Your Name : </label>
            <input
              className="border border-black-300 p-1 rounded-lg"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>

          {/*    email  Input      */}
          <div className="flex items-center my-4">
            <label className="ms-8 mx-1">Your Email : </label>
            <input
              className="border border-black-300 p-1 rounded-lg"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          {/*    email  Input      */}
          <div className="flex items-center my-4">
            <label className="ms-8 mx-1">Your Number : </label>
            <input
              className="border border-black-300 p-1 rounded-lg"
              type="number"
              placeholder="Enter Your Number"
            />
          </div>
        </form>
      </div>
      <button className="mx-5 bg-black text-white rounded-xl p-2">Submit Button</button>
    </>
  );
};

export default Contact;
