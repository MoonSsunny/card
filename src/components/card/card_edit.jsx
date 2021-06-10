import React from "react";
import styled from "styled-components";
const StyledCardList = styled.li`
  width: 500px;
  height: 300px;
  background-color: ${(props) => props.theme.palette.boxColor};
  margin: 0 10px 30px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 10px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  margin-left: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.palette.black};
  p {
    margin-left: 20px;
  }
  h1 {
    color: ${(props) => props.theme.palette.black};
  }
  span {
    font-size: 18px;
  }
`;

const StyledContent = styled.textarea`
  resize: none;
  width: 480px;
  margin: 10px;
  height: 150px;
  border: 1px solid #000;
  overflow: auto;
  border: 1px solid #fff;
`;

const CardEdit = ({ card }) => {
  const { title, date, content } = card;

  return (
    <StyledCardList>
      <StyledTitle>
        <span>Title</span>
        <h1>{title}</h1>
      </StyledTitle>
      <StyledTitle>
        <span>Date</span>
        <p>{date}</p>
      </StyledTitle>
      <div>
        <StyledContent
          name="content"
          placeholder="오늘의 하루를 기록해 보세요 "
        >
          {content}
        </StyledContent>
      </div>
    </StyledCardList>
  );
};

export default CardEdit;
