export const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

export const todoDataLocalStorage = (newTodoData) => {
  localStorage.setItem("todoData", JSON.stringify(newTodoData));
};

export const initialMoodData = [
  {
    id: 1,
    moodValue: "Soso",
    moodEmoji: "🙂",
    checked: false,
  },
  {
    id: 2,
    moodValue: "Happy",
    moodEmoji: "🥰",
    checked: false,
  },
  {
    id: 3,
    moodValue: "Bad",
    moodEmoji: "😡",
    checked: false,
  },
  {
    id: 4,
    moodValue: "Confuse",
    moodEmoji: "😵‍💫",
    checked: false,
  },
  {
    id: 5,
    moodValue: "Sad",
    moodEmoji: "🥲",
    checked: false,
  },
  {
    id: 6,
    moodValue: "Peaceful",
    moodEmoji: "😌",
    checked: false,
  },
];