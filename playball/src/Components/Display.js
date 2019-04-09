import React from "react";

const Display = props => {
  const { strikes, balls } = props.pitchCount;
  return (
    <>
      <p data-testid="strikes">Strikes: {strikes}</p>
      <p data-testid="balls">Balls: {balls}</p>
    </>
  );
};

export default Display;
