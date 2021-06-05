import React from "react";
import styled from "styled-components";
import CardEdit from "../card/card_edit";

const StyledPreview = styled.div`
  h1 {
    margin-left: 20px;
    color: ${(props) => props.theme.palette.blue};
    text-align: left;
    font-size: 2rem;
    font-family: "Song Myung", serif;
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
