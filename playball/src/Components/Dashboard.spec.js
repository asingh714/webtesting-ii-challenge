import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  describe("strike button", () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const strikeButton = getByText("Strike");
    const strikes = getByTestId("strikes");

    it("should change strikes from 0 -> 1", () => {
      fireEvent.click(strikeButton);
      expect(strikes).toHaveTextContent("Strikes: 1");
    });

    it("should change strikes from 1 -> 2", () => {
      fireEvent.click(strikeButton);
      expect(strikes).toHaveTextContent("Strikes: 2");
    });

    it("should change strikes from 2 -> 0", () => {
      fireEvent.click(strikeButton);
      expect(strikes).toHaveTextContent("Strikes: 0");
    });
  });

  describe("ball button", () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const ballButton = getByText("Ball");
    const balls = getByTestId("balls");

    it("should change balls from 0 -> 1", () => {
      fireEvent.click(ballButton);
      expect(balls).toHaveTextContent("Balls: 1");
    });

    it("should change balls from 1 -> 2", () => {
      fireEvent.click(ballButton);
      expect(balls).toHaveTextContent("Balls: 2");
    });

    it("should change balls from 2 -> 3", () => {
      fireEvent.click(ballButton);
      expect(balls).toHaveTextContent("Balls: 3");
    });

    it("should change balls from 3 -> 0", () => {
      fireEvent.click(ballButton);
      expect(balls).toHaveTextContent("Balls: 0");
    });
  });

  describe("hit button", () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const hitButton = getByText("Hit");
    const strikes = getByTestId("strikes");
    const balls = getByTestId("balls");

    it("should change change strikes and balls to 0", () => {
      fireEvent.click(hitButton);
      expect(balls).toHaveTextContent("Balls: 0");
      expect(strikes).toHaveTextContent("Strikes: 0");
    });
  });

  describe("foul button", () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const foulButton = getByText("Foul");
    const balls = getByTestId("balls");

    it("should change balls from 0 -> 1", () => {
      fireEvent.click(foulButton);
      expect(balls).toHaveTextContent("Balls: 1");
    });

    it("should change balls from 1 -> 2", () => {
      fireEvent.click(foulButton);
      expect(balls).toHaveTextContent("Balls: 2");
    });

    it("should change balls from 2 -> 3", () => {
      fireEvent.click(foulButton);
      expect(balls).toHaveTextContent("Balls: 3");
    });

    it("should not change ball count", () => {
      fireEvent.click(foulButton);
      expect(balls).toHaveTextContent("Balls: 3");
    });
  });
});
