import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  background-color: #1d2088;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Song Myung", serif;
    font-size: 20px;
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
