import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.palette.blue};
  color: ${(props) => props.theme.palette.white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 50px;
    text-align: center;
    font-family: "Song Myung", serif;
    height: 100px;
    line-height: 2;
  }
`;
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.white};
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-left: 40px;
  position: absolute;
  top: 15px;
  right: 2rem;
  display: block;
`;
const Header = ({ onLogout }) => {
  return (
    <StyledHeader>
      <p>하루 기록</p>
      {onLogout && <StyledButton onClick={onLogout}>Logout</StyledButton>}
    </StyledHeader>
  );
};

export default Header;
