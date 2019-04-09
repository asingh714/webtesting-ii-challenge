import React from "react";

const Display = props => {
  const { strikes, balls} = props;
  return (
    <>
      <p>Strikes: {strikes}</p>
      <p>Ball: {balls}</p>
    </>
  );
};

export default Display;
