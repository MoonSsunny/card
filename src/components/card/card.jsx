import React from "react";
import styled from "styled-components";

const DEFAULT_IMG = "/img/default.png";

const StyledCardList = styled.li`
  width: 500px;
  height: 300px;
  background-color: yellow;
  margin: 0 10px 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Card = ({ card }) => {
  const { title, date, content, imgName, imgUrl } = card;
  const url = imgUrl || DEFAULT_IMG;
  return (
    <StyledCardList>
      <img src={url} alt="cardPhoto" />
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{content}</p>
      </div>
    </StyledCardList>
  );
};

export default Card;
