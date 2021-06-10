import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styled from "styled-components";
import Edit from "../menu/preview";
import Preview from "../menu/edit";

const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  flex: 1;
  @media screen and (max-width: 80rem) {
    flex-direction: column;
  }
`;

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      title: "오늘하루",
      date: "2021-06-01",
      content: "오늘하루일기를 씁니다",
      imgName: "name.jpg",
      imgUrl: null,
    },
    {
      id: "2",
      title: "내일을 뭐할까",
      date: "2021-06-01",
      content: "오늘하루일기를 씁니다",
      imgName: "name.jpg",
      imgUrl: "",
    },
    {
      id: "3",
      title: "한줄기록",
      date: "2021-06-01",
      content: "오늘하루일기를 씁니다",
      imgName: "name.jpg",
      imgUrl: "",
    },
    {
      id: "4",
      title: "감사합니다요",
      date: "2021-06-01",
      content: "오늘하루일기를 씁니다",
      imgName: "name.jpg",
      imgUrl: null,
    },
  ]);
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
        <Edit cards={cards} />
        <Preview cards={cards} />
      </StyledContainer>
      <Footer />
    </StyledSection>
  );
};

export default Main;
