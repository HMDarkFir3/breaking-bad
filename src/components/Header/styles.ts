import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight()}px;
  padding: 12px 20px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WelcomeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: -10px;
`;

export const UserPhoto = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 30px;
`;

export const Welcome = styled.Text`
  font-size: 18px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.secondary_text};
  `}
`;
