import React from "react";
import styled from "styled-components";

const StyledWrite = styled.div`
  margin: 10px;
  padding: 20px;
  width: 500px;
  height: 300px;
  background-color: skyblue;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: blue;
  p {
    margin-left: 20px;
    border: 1px solid #000;
  }
  h1 {
    border: 1px solid #000;
  }
  span {
    font-size: 18px;
    border: 1px solid #000;
  }
`;

const StyledContent = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  overflow: auto;
`;

const CardEdit = ({ card }) => {
  const { title, date, content } = card;

  return (
    <StyledWrite>
      <StyledTitle>
        <span>Title</span>
        <h1>{title}</h1>
      </StyledTitle>
      <StyledTitle>
        <span>Date</span>
        <p>{date}</p>
      </StyledTitle>
      <div>
        <p>내용</p>
        <StyledContent
          name="content"
          placeholder="오늘의 하루를 기록해 보세요 "
        >
          {content}
        </StyledContent>
      </div>
    </StyledWrite>
  );
};

export default CardEdit;
