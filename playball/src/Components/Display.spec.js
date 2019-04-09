import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "../Components/Display";

describe("<Display />", () => {
  const pitchCount = {
    balls: 1,
    strikes: 2
  };

  it("renders strikes", () => {
    const { getByTestId } = render(<Display pitchCount={pitchCount} />);
    const strikes = getByTestId("strikes");
    expect(strikes).toHaveTextContent("Strikes: 2");
  });

  it("renders balls", () => {
    const { getByTestId } = render(<Display pitchCount={pitchCount} />);
    const balls = getByTestId("balls");
    expect(balls).toHaveTextContent("Balls: 1");
  });
});
