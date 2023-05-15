import React from "react";
import styled from "styled-components";

const MoodRow = ({
  id,
  content,
  mood,
  moodContent,
  setMoodContent,
  viewMoodContent,
}) => {
  return (
    <MoodElement>
      <MoodEmoji
        data-testid={`${content}`}
        key={id}
        onMouseOver={() => viewMoodContent(id)}
        onMouseLeave={() => setMoodContent("")}
      >
        {mood}
      </MoodEmoji>
      {moodContent === content && (
        <MoodValue data-testid="moodValue">{content}</MoodValue>
      )}
    </MoodElement>
  );
};

const MoodElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

export default React.memo(MoodRow);
