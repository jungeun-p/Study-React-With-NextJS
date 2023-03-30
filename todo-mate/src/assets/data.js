export const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

export const initialMoodData = localStorage.getItem("moodData")
  ? JSON.parse(localStorage.getItem("moodData"))
  : [
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

export const dataLocalStorage = (storageName, newData) => {
  localStorage.setItem(`${storageName}`, JSON.stringify(newData));
}