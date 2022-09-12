import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 20px 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoWrapper = styled.View``;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Content = styled.View`
  width: 100%;

  margin-top: 100px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;

  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.primary_text};
    font-family: ${theme.fonts.bold};
  `}
`;

export const ButtonWrapper = styled.View`
  margin-top: 12px;
`;
