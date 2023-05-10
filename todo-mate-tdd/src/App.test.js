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
  const question = screen.getByTestId("createMood");
  expect(question).toHaveTextContent("？");
});

// if push createMood button, open the createMoodForm

test('if push createMood button, open the createMoodform', () => {
  render(<App />);
  const button = screen.getByTestId("createMood");
  fireEvent.click(button);
  const form = screen.getByTestId("createForm");
  expect(form).toBeEnabled();
})