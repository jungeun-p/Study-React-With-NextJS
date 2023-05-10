import { useState } from "react";
import styled from "styled-components";
import "./App.css";

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
  
  return (
    <MoodDiaryWrapper>
      <TopRow>
        <h3>😶</h3>
        <h3>Mood Diary</h3>
        <div data-testid="moodDataLength">({moodData.length})</div>
      </TopRow>
      <BottomRow>
        {moodData.map((item) => (
          <div key={item.id}>{item.mood}</div>
        ))}
        <div className="createMood" data-testid="createMood">？</div>
      </BottomRow>
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
  row-gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 10px 0;
`;

export default App;
