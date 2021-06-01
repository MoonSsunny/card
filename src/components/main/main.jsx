import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styled from "styled-components";
import Edit from "../menu/edit";
import Preview from "../menu/preview";

const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  @media screen and (max-width: 80rem) {
    flex-direction: column;
  }
`;

const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <StyledSection>
      <Header onLogout={onLogout} />
      <StyledContainer>
        <Edit />
        <Preview />
      </StyledContainer>
      <Footer />
    </StyledSection>
  );
};

export default Main;
