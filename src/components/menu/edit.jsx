import React from "react";
import styled from "styled-components";

import CardEdit from "./card_edit";

const StyledPreview = styled.div`
  h1 {
    font-family: "Song Myung", serif;
    margin-left: 20px;
  }
`;

const Edit = ({ cards }) => {
  return (
    <StyledPreview>
      <h1>기록중...</h1>
      {cards.map((card) => (
        <CardEdit card={card} key={card.id} />
      ))}
    </StyledPreview>
  );
};

export default Edit;
