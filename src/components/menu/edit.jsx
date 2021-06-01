import React from "react";
import styled from "styled-components";

const StyledEdit = styled.div`
  flex-basis: 50%;
  h1 {
    margin-left: 20px;
    color: ${(props) => props.theme.palette.blue};
    text-align: left;
    font-size: 2rem;
    font-family: "Song Myung", serif;
  }
`;

const Edit = () => {
  return (
    <StyledEdit>
      <h1>오늘의 일기를 기록하세요</h1>
    </StyledEdit>
  );
};

export default Edit;
