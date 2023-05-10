import { render, screen } from "@testing-library/react";
import App from "./App";

// moodlist에 7개의 todoitme이 존재한다.
test("moodData array lentgh is seven", () => {
  render(<App />);
  const length = screen.getByTestId("moodDataLength");
  expect(length).toHaveTextContent("7");
});

// moodCreate button has "?" content
test('moodCreate button has "?" content', () => {
  render(<App />);
  const question = screen.getByTestId("createMood");
  expect(question).toHaveTextContent("？");
});
