import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// moodlist에 7개의 todoitme이 존재한다.
test("moodData array lentgh is seven", () => {
  render(<App />);
  const length = screen.getByTestId("moodDataLength");
  expect(length).toHaveTextContent("7");
});

// createMood button has "?" content
test('moodCreate button has "?" content', () => {
  render(<App />);
  const question = screen.getByTestId("openMoodForm");
  expect(question).toHaveTextContent("？");
});

// if push openMoodForm button, open the createMoodForm
test("if push openMoodForm button, open the createMoodForm", () => {
  render(<App />);
  const button = screen.getByTestId("openMoodForm");
  fireEvent.click(button);
  const form = screen.getByTestId("createMood");
  expect(form).toBeEnabled();
});

// if push openMoodForm and createMoodbutton, moodData length is 8
test("if push Add button, moodData change to 8", () => {
  render(<App />);
  const formButton = screen.getByTestId("openMoodForm");
  fireEvent.click(formButton);
  const createButton = screen.getByTestId("createMoodButton");
  fireEvent.click(createButton);
  const length = screen.getByTestId("moodDataLength");
  expect(length).toHaveTextContent("8");
});

// if Click happy MoodRow, open the mood value
test("if click happy MoodRow, open the moodValue", () => {
  render(<App />);
  const rowElement = screen.getByTestId("happy");
  fireEvent.click(rowElement);
  const value = screen.getByTestId("moodValue");
  expect(value).toHaveTextContent("happy")
});