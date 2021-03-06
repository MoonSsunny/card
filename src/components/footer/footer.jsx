import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.palette.blue};
  color: ${(props) => props.theme.palette.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Song Myung", serif;
    font-size: 20px;
    height: 100px;
    line-height: 5;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>당신의 오늘 하루 어땠나요?</p>
    </StyledFooter>
  );
};

export default Footer;
