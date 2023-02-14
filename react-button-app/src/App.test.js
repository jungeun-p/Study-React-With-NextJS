import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when push + button, the counter changes to 1", () => {
  render(<App />);
  // + button
  const buttonElement = screen.getByTestId("plus-button");
  // push '+' button
  fireEvent.click(buttonElement);
  // counter
  const counterElement = screen.getByTestId("counter");
  // counter changes to "1";
  expect(counterElement).toHaveTextContent(1);
});

test("on/off button has blue color", () => {
  render(<App />);
  // on/off button
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  // has blue color
});

test("Prevent the plus-minus button from being preseed when the on-off button is clicked", () => {
  render(<App />);
  // on/off push button
  const buttonElement = screen.getByTestId("on/off-button");
  // click
  fireEvent.click(buttonElement);
  // plus button
  const plusButtonElement = screen.getByTestId("plus-button");
  // to be disabled
  expect(plusButtonElement).toBeDisabled();
});
