import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MoodForm } from "./components/MoodForm";
import MoodRow from "./components/MoodRow";

function App() {
  const [moodData, setMoodData] = useState([
    {
      id: 1,
      mood: "🥰",
      content: "happy",
    },
    {
      id: 2,
      mood: "🥲",
      content: "sad",
    },
    {
      id: 3,
      mood: "😡",
      content: "mad",
    },
    {
      id: 4,
      mood: "😞",
      content: "gloomy",
    },
    {
      id: 5,
      mood: "😌",
      content: "peaceful",
    },
    {
      id: 6,
      mood: "😵‍💫",
      content: "confuse",
    },
    {
      id: 7,
      mood: "🤓",
      content: "concentrate",
    },
  ]);
  const [form, setForm] = useState(false);
  const [moodContent, setMoodContent] = useState();

  const viewMoodContent = (id) => {
    const moodValue = moodData.find((item) => item.id === id);
    setMoodContent(moodValue.content);
  };

  return (
    <MoodDiaryWrapper>
      <TopRow>
        <h2>🫥</h2>
        <h2>Mood Diary</h2>
        <div data-testid="moodDataLength">({moodData.length})</div>
      </TopRow>
      <BottomRow>
        {moodData.map((item) => (
          <MoodRow
            key={item.id}
            id={item.id}
            content={item.content}
            mood={item.mood}
            moodContent={moodContent}
            setMoodContent={setMoodContent}
            viewMoodContent={viewMoodContent}
            moodData={moodData}
            setMoodData={setMoodData}
          />
        ))}
        <OpenMoodForm onClick={() => setForm(!form)} data-testid="openMoodForm">
          ？
        </OpenMoodForm>
      </BottomRow>
      {form && <MoodForm setMoodData={setMoodData} setForm={setForm} />}
    </MoodDiaryWrapper>
  );
}

const MoodDiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 10px 0;
`;

const OpenMoodForm = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 8px 10px;
  background-color: lightgray;
  border-radius: 50%;
`;

export default App;
