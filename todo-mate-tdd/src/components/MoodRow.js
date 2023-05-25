import React, { useState } from "react";
import styled from "styled-components";
import { MoodForm } from "./MoodForm";

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
  const [newMoodItem, setNewMoodItem] = useState({
    id,
    mood,
    content,
  });
  
  const deleteMood = (id) => {
    let newMoodData = moodData.filter((item) => item.id !== id);
    setMoodData(newMoodData);
  };

  const updateMood = (e) => {
    e.preventDefault();
    let newMoodData = moodData.map((item) => {
      if (item.id === id) {
        item.mood = newMoodItem.mood;
        item.content = newMoodItem.content;
      }
      return item;
    });
    setMoodData(newMoodData);
    setEdited(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMoodItem({ ...newMoodItem, [name]: value });
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
            <form data-testid="moodForm" onSubmit={updateMood}>
              <div>updateform</div>
              <div onClick={() => setEdited(!edited)}>back</div>
              <input
                type="text"
                name="mood"
                value={newMoodItem.mood}
                onChange={handleChange}
              />
              <input
                type="text"
                name="content"
                value={newMoodItem.content}
                onChange={handleChange}
              />
              <button data-testid="updateButton" type="submit">
                Update
              </button>
            </form>
          ) : (
            <>
              <div>{content}</div>
              <div data-testid="deleteButton" onClick={() => deleteMood(id)}>
                Delete
              </div>
              <div
                data-testid="openFormButton"
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

const MoodDetailPage = styled.div`
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
