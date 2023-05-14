import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MoodForm } from "./components/MoodForm";

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
  const [edited, setEdited] = useState(false);
  const [moodContent, setMoodContent] = useState();

  const viewMoodContent = (id) => {
    const moodValue = moodData.find((item) => item.id === id);
    setMoodContent(moodValue.content);
  };
  
  return (
    <MoodDiaryWrapper>
      <TopRow>
        <h2>😶</h2>
        <h2>Mood Diary</h2>
        <div data-testid="moodDataLength">({moodData.length})</div>
      </TopRow>
      <BottomRow>
        {moodData.map((item) => (
          <MoodRow key={item.id}>
            <MoodEmoji
              data-testid={`${item.content}`}
              key={item.id}
              onClick={() => viewMoodContent(item.id)}
            >
              {item.mood}
            </MoodEmoji>
            {moodContent === item.content && (
              <MoodValue data-testid="moodValue">{item.content}</MoodValue>
            )}
          </MoodRow>
        ))}
        <OpenMoodForm
          onClick={() => setEdited(!edited)}
          data-testid="openMoodForm"
        >
          ？
        </OpenMoodForm>
      </BottomRow>
      {edited && <MoodForm setMoodData={setMoodData} setEdited={setEdited} />}
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

const MoodRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MoodEmoji = styled.div`
  font-size: 30px;
`;

const MoodValue = styled.div`
  font-size: 8px;
  position: fixed;
  background-color: white;
  opacity: 70%;
  transform: translateY(100%);
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
