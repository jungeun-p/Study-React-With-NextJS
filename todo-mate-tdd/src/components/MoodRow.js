import React, { useState } from "react";
import styled from "styled-components";
import { MoodForm } from "./MoodForm";
// import MoodPage from "./MoodPage";

const MoodRow = ({
  id,
  content,
  mood,
  moodContent,
  setMoodContent,
  viewMoodContent,
  moodData,
  setMoodData,
}) => {
  const [moodDetail, setMoodDetail] = useState(false);
  const [edited, setEdited] = useState(false);

  const deleteMood = (id) => {
    let newMoodData = moodData.filter((item) => item.id !== id);
    setMoodData(newMoodData);
  };

  return (
    <>
      <MoodElement
        data-testid="moodRow"
        onClick={() => setMoodDetail(!moodDetail)}
      >
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
      {/* {moodDetail && (
        <MoodPage id={id} content={content} deleteMood={deleteMood} />
      )} */}
      {moodDetail && (
        <MoodDetailPage data-testid="moodDetailPage">
          {edited ? (
            <div data-testid="moodForm">
              <div>updateform</div>
              <div onClick={() => setEdited(!edited)}>🔙</div>
              <input
                type="text"
                name="mood"
                value={mood || ""}
                onChange={() => {}}
              />
              <input
                type="text"
                name="content"
                value={content || ""}
                onChange={() => {}}
              />
              <button>Update</button>
            </div>
          ) : (
            <>
              <div>{content}</div>
              <div data-testid="deleteButton" onClick={() => deleteMood(id)}>
                Delete
              </div>
              <div
                data-testid="updateButton"
                onClick={() => setEdited(!edited)}
              >
                Update
              </div>
            </>
          )}
        </MoodDetailPage>
      )}
    </>
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

const MoodDetailPage = styled.form`
  background-color: lightgray;
  position: fixed;
  bottom: 0;
  height: 40vh;
  width: 100vw;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default React.memo(MoodRow);
