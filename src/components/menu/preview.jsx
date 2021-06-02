import React from "react";
import styled from "styled-components";
import Card from "./card";

const StyledEdit = styled.div`
  flex-basis: 50%;
  overflow: auto;
  h1 {
    margin-left: 20px;
    color: ${(props) => props.theme.palette.blue};
    text-align: left;
    font-size: 2rem;
    font-family: "Song Myung", serif;
  }
`;

const StyledCard = styled.ul`
  text-align: center;
  margin: 0;
`;

const Preview = ({ cards }) => {
  return (
    <StyledEdit>
      <h1>오늘의 일기를 기록하세요</h1>
      <StyledCard>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </StyledCard>
    </StyledEdit>
  );
};

export default Preview;
