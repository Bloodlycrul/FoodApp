import { useState } from "react";

const User = ({ name, location, jd }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <p>{jd}</p>
      </div>
    </>
  );
};

export default User;
