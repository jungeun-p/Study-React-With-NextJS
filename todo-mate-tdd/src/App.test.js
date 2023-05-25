import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import MoodRow from "./components/MoodRow";

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

// if mouse oever happy MoodRow, show up mood value text
test("if mouse over happy MoodRow, show up mood value text", () => {
  render(<App />);
  const happyRowElement = screen.getByTestId("happy");
  fireEvent.mouseOver(happyRowElement);
  const value = screen.getByTestId("moodValue");
  expect(value).toHaveTextContent("happy")
});

// if push MoodRow element, show up detailForm
test("if push MoodRow element, show up detailPage", () => {
  render(<MoodRow />);
  const rowElement = screen.getByTestId("moodRow");
  fireEvent.click(rowElement);
  const page = screen.getByTestId("moodDetailPage");
  expect(page).toBeEnabled();
})

// // if push delete button, moodData length is 7 to 6
// test("if push delete button, moodData length is 7 to 6", () => {
//   render(<App />);
//   const button = screen.getByTestId("deleteButton");
//   fireEvent.click(button);
//   const totalLength = screen.getByTestId("moodDataLength");
//   expect(totalLength).toHaveTextContent("6");
// })

// if push update button, open the moodForm
test("if push update button, open the moodForm", () => {
  render(<MoodRow />);
  const rowElement = screen.getByTestId("moodRow");
  fireEvent.click(rowElement);
  const button = screen.getByTestId("openFormButton");
  fireEvent.click(button);
  const form = screen.getByTestId("moodForm");
  expect(form).toBeEnabled();
})

test("it can change 'happy' mood conent to 'shine' from moodForm", () => {
  render(<MoodRow />);
  const rowElement = screen.getByTestId("moodRow");
  fireEvent.click(rowElement);
  const button = screen.getByTestId("openFormButton");
  fireEvent.click(button);
  const form = screen.getByTestId("moodForm");
  expect(form).toBeEnabled();
  const updateButton = screen.getByTestId("updateButton");
  fireEvent.click(updateButton);
  // render(<App />);
  // const shineRowElement = screen.getByTestId("shine");
  // expect(shineRowElement).toBe();
})