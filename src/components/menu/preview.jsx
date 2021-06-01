import React from "react";
import styled from "styled-components";

const StyledPreview = styled.div`
  flex-basis: 50%;
  background-color: red;
  h1 {
    font-family: "Song Myung", serif;
    margin-left: 20px;
  }
`;

const Preview = () => {
  return (
    <StyledPreview>
      <h1>기록중...</h1>
    </StyledPreview>
  );
};

export default Preview;
