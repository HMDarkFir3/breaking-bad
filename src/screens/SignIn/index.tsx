import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";

import {
  Container,
  LogoWrapper,
  Logo,
  Content,
  Title,
  ButtonWrapper,
} from "./styles";
import LogoGoogleSvg from "../../assets/logo_google.svg";

export const SignIn: FC = () => {
  const { isLoading, signInWithGoogle } = useAuth();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <Container>
      <StatusBar style="light" translucent={true} />

      <LogoWrapper>
        <Logo source={require("../../assets/logo.png")} />
      </LogoWrapper>

      <Content>
        <Title>Do social login to enter the app</Title>

        <ButtonWrapper>
          <Button
            icon={LogoGoogleSvg}
            title={isLoading ? "Entering..." : "Sign in with Google"}
            onPress={handleSignInWithGoogle}
            disabled={isLoading}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};
