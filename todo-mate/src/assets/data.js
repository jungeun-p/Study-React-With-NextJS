const todoDataBase = [
  {
    id: 1,
    date: "23-01-11",
    title: "First",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: true,
    mood: "Soso",
  },
  {
    id: 2,
    date: "23-01-11",
    title: "Second",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Confuse",
  },
  {
    id: 3,
    date: "23-01-11",
    title: "Third",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Bad",
  },
  {
    id: 4,
    date: "23-01-11",
    title: "Fourth",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: true,
    mood: "Sad",
  },
  {
    id: 5,
    date: "23-01-11",
    title: "Fifth",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Sad",
  },
  {
    id: 6,
    date: "23-01-11",
    title: "Sixth",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Happy",
  },
  {
    id: 7,
    date: "23-01-11",
    title: "seventh",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Peaceful",
  },
  {
    id: 8,
    date: "23-01-31",
    title: "eighth",
    contents: `There's nothing like threatening to go live with a bunch of Bill Murray pictures on a website to 'encourage' your clients to send you their content faster.`,
    completed: false,
    mood: "Confuse",
  },
];

export const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

export const todoDataLocalStorage = (newTodoData) => {
  localStorage.setItem("todoData", JSON.stringify(newTodoData));
};
