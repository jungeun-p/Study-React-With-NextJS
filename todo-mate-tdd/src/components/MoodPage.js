import React from "react";
import styled from "styled-components";

const MoodPage = () => {
  return <MoodDetailPage data-testid="moodDetailPage">MoodPage</MoodDetailPage>;
};

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

export default MoodPage;
