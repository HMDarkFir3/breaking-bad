import React, { FC } from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

import { Container, WelcomeWrapper, UserPhoto, Welcome } from "./styles";

interface Props extends BottomTabHeaderProps {}

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <UserPhoto source={require("../../assets/logo.png")} />

        <Welcome>Breaking Bad</Welcome>
      </WelcomeWrapper>
    </Container>
  );
};
