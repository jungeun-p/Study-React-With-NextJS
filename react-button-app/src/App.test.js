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
  const buttonElement = screen.getByTestId("minus-button");
  // push + button
  // fireEvent.click(buttonElement);
  userEvent.click(buttonElement);
  // counter
  const counterElement = screen.getByTestId("counter");
  // counter changes to "1";
  expect(counterElement).toHaveTextContent(1);
});
