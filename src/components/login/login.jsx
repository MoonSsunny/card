import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styled from "styled-components";
import { FaGoogle, FaGithub } from "react-icons/fa";

const StyledSection = styled.section`
  width: 500px;
  border: 1px solid #1d2088;
  border-radius: 4px;
`;
const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    display: inline-block;
    width: 18rem;
    text-align: center;
    margin: 20px;
  }
`;
const StyledContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  padding: 10px;
`;

const StyledButton = styled.button`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #1d2088;
  margin: 10px 0;
`;

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <StyledSection>
      <Header />
      <StyledContainer>
        <StyledImg>
          <img src="/img/logo.png" alt="logo" />
        </StyledImg>
        <ul>
          <li>
            <p>Login</p>
          </li>
          <li>
            <StyledButton onClick={onLogin}>
              <FaGoogle style={{ fontSize: "25px", margin: "0 10px" }} />
              Google
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={onLogin}>
              <FaGithub style={{ fontSize: "25px", margin: "0 10px" }} />
              Github
            </StyledButton>
          </li>
        </ul>
      </StyledContainer>
      <Footer />
    </StyledSection>
  );
};

export default Login;
